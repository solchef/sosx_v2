import { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { CurrencyAmount, JSBI, Token, Trade } from "@pancakeswap/sdk";
import {
  Text,
  Box,
  useModal,
  IconButton,
  useMatchBreakpoints,
} from "@pancakeswap/uikit";
import { useIsTransactionUnsupported } from "hooks/Trades";
import UnsupportedCurrencyFooter from "components/UnsupportedCurrencyFooter";
import { useRouter } from "next/router";
import { useTranslation } from "contexts/Localization";
import SwapWarningTokens from "config/constants/swapWarningTokens";
import useRefreshBlockNumberID from "./hooks/useRefreshBlockNumber";
import { GreyCard } from "../../components/Card";
import Column from "../../components/Layout/Column";
import ConfirmSwapModal from "./components/ConfirmSwapModal";
import CurrencyInputPanel from "../../components/CurrencyInputPanel";
import { AutoRow, RowBetween } from "../../components/Layout/Row";
import AdvancedSwapDetailsDropdown from "./components/AdvancedSwapDetailsDropdown";
import confirmPriceImpactWithoutFee from "./components/confirmPriceImpactWithoutFee";
import { SwapCallbackError } from "./components/styleds";
import TradePrice from "./components/TradePrice";
import ImportTokenWarningModal from "./components/ImportTokenWarningModal";
import ProgressSteps from "./components/ProgressSteps";
import ConnectWalletButton from "../../components/ConnectWalletButton";
import useActiveWeb3React from "../../hooks/useActiveWeb3React";
import { useCurrency, useAllTokens } from "../../hooks/Tokens";
import {
  ApprovalState,
  useApproveCallbackFromTrade,
} from "../../hooks/useApproveCallback";
import { useSwapCallback } from "../../hooks/useSwapCallback";
import useWrapCallback, { WrapType } from "../../hooks/useWrapCallback";
import { Field } from "../../state/swap/actions";
import {
  useDefaultsFromURLSearch,
  useDerivedSwapInfo,
  useSwapActionHandlers,
  useSwapState,
} from "../../state/swap/hooks";
import {
  useExpertModeManager,
  useUserSlippageTolerance,
  useUserSingleHopOnly,
  useExchangeChartManager,
} from "../../state/user/hooks";
import { maxAmountSpend } from "../../utils/maxAmountSpend";
import {
  computeTradePriceBreakdown,
  warningSeverity,
} from "../../utils/prices";
import CircleLoader from "../../components/Loader/CircleLoader";
import SwapWarningModal from "./components/SwapWarningModal";
import CurrencyInputHeader from "./components/CurrencyInputHeader";
// import { ItemImage } from 'views/Nft/market/components/Filters/ListFilter/styles'
import { useMediaPredicate } from "react-media-hook";

const Label = styled(Text)`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`;

const SwitchIconButton = styled(IconButton)`
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);
  .icon-up-down {
    display: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    .icon-down {
      display: none;
      fill: white;
    }
    .icon-up-down {
      display: block;
      fill: white;
    }
  }
`;

export default function Swap() {
  const { account } = useActiveWeb3React();
  const router = useRouter();
  const loadedUrlParams = useDefaultsFromURLSearch();
  const { t } = useTranslation();
  const { isMobile } = useMatchBreakpoints();
  const [userChartPreference, setUserChartPreference] =
    useExchangeChartManager(isMobile);
  const [isChartDisplayed, setIsChartDisplayed] = useState(false);
  const { refreshBlockNumber, isLoading } = useRefreshBlockNumberID();
  const [userSlippageTolerance, setUserSlippageTolerance] =
    useUserSlippageTolerance();
  const [referrerAddress, setReferrerAddress] = useState("");
  const [collapse, showCollapse] = useState(false);

  let referedby = null;

  useEffect(() => {
    setUserChartPreference(isChartDisplayed);
    let param = new URLSearchParams(window.location.search);
    if (param) {
      setReferrerAddress(param.get("ref"));

      referedby = param.get("ref");
      //  @ts-ignore
      localStorage.setItem("referral", param.get("ref"));
      if (referedby != null) {
        getaccountDetails();
      }
    }

    setUserSlippageTolerance(3700);
  }, [isChartDisplayed, setUserChartPreference]);

  // token warning stuff
  const [loadedInputCurrency, loadedOutputCurrency] = [
    useCurrency(loadedUrlParams?.inputCurrencyId),
    useCurrency(loadedUrlParams?.outputCurrencyId),
  ];
  const urlLoadedTokens: Token[] = useMemo(
    () =>
      [loadedInputCurrency, loadedOutputCurrency]?.filter(
        (c): c is Token => c instanceof Token
      ) ?? [],
    [loadedInputCurrency, loadedOutputCurrency]
  );
  // dismiss warning if all imported tokens are in active lists
  const defaultTokens = useAllTokens();
  const importTokensNotInDefault =
    urlLoadedTokens &&
    urlLoadedTokens.filter((token: Token) => {
      return !(token.address in defaultTokens);
    });

  const getaccountDetails = async () => {
    if (account) {
      let post = {
        gotrefered: account,
        referedby,
        createdAt: new Date().toDateString(),
      };
      // save the post
      let response = await fetch("/api/social_mining", {
        method: "POST",
        body: JSON.stringify(post),
      });

      // get the data
      let data = await response.json();
    }
  };

  // for expert mode
  const [isExpertMode] = useExpertModeManager();

  // get custom setting values for user
  const [allowedSlippage] = useUserSlippageTolerance();

  // swap state & price data
  const {
    independentField,
    typedValue,
    recipient,
    [Field.INPUT]: { currencyId: inputCurrencyId },
    [Field.OUTPUT]: { currencyId: outputCurrencyId },
  } = useSwapState();
  const inputCurrency = useCurrency(inputCurrencyId);
  const outputCurrency = useCurrency(outputCurrencyId);
  const {
    v2Trade,
    currencyBalances,
    parsedAmount,
    currencies,
    inputError: swapInputError,
  } = useDerivedSwapInfo(
    independentField,
    typedValue,
    inputCurrencyId,
    inputCurrency,
    outputCurrencyId,
    outputCurrency,
    recipient
  );

  const {
    wrapType,
    execute: onWrap,
    inputError: wrapInputError,
  } = useWrapCallback(
    currencies[Field.INPUT],
    currencies[Field.OUTPUT],
    typedValue
  );
  const showWrap: boolean = wrapType !== WrapType.NOT_APPLICABLE;
  const trade = showWrap ? undefined : v2Trade;

  const parsedAmounts = showWrap
    ? {
        [Field.INPUT]: parsedAmount,
        [Field.OUTPUT]: parsedAmount,
      }
    : {
        [Field.INPUT]:
          independentField === Field.INPUT ? parsedAmount : trade?.inputAmount,
        [Field.OUTPUT]:
          independentField === Field.OUTPUT
            ? parsedAmount
            : trade?.outputAmount,
      };

  const {
    onSwitchTokens,
    onCurrencySelection,
    onUserInput,
    onChangeRecipient,
  } = useSwapActionHandlers();
  const isValid = !swapInputError;
  const dependentField: Field =
    independentField === Field.INPUT ? Field.OUTPUT : Field.INPUT;

  const handleTypeInput = useCallback(
    (value: string) => {
      onUserInput(Field.INPUT, value);
    },
    [onUserInput]
  );
  const handleTypeOutput = useCallback(
    (value: string) => {
      onUserInput(Field.OUTPUT, value);
    },
    [onUserInput]
  );

  // modal and loading
  const [
    { tradeToConfirm, swapErrorMessage, attemptingTxn, txHash },
    setSwapState,
  ] = useState<{
    tradeToConfirm: Trade | undefined;
    attemptingTxn: boolean;
    swapErrorMessage: string | undefined;
    txHash: string | undefined;
  }>({
    tradeToConfirm: undefined,
    attemptingTxn: false,
    swapErrorMessage: undefined,
    txHash: undefined,
  });

  const formattedAmounts = {
    [independentField]: typedValue,
    [dependentField]: showWrap
      ? parsedAmounts[independentField]?.toExact() ?? ""
      : parsedAmounts[dependentField]?.toSignificant(6) ?? "",
  };

  const route = trade?.route;
  const userHasSpecifiedInputOutput = Boolean(
    currencies[Field.INPUT] &&
      currencies[Field.OUTPUT] &&
      parsedAmounts[independentField]?.greaterThan(JSBI.BigInt(0))
  );
  const noRoute = !route;

  // check whether the user has approved the router on the input token
  const [approval, approveCallback] = useApproveCallbackFromTrade(
    trade,
    allowedSlippage
  );

  // check if user has gone through approval process, used to show two step buttons, reset on token change
  const [approvalSubmitted, setApprovalSubmitted] = useState<boolean>(false);

  // mark when a user has submitted an approval, reset onTokenSelection for input field
  useEffect(() => {
    if (approval === ApprovalState.PENDING) {
      setApprovalSubmitted(true);
    }
  }, [approval, approvalSubmitted]);

  const maxAmountInput: CurrencyAmount | undefined = maxAmountSpend(
    currencyBalances[Field.INPUT]
  );
  const atMaxAmountInput = Boolean(
    maxAmountInput && parsedAmounts[Field.INPUT]?.equalTo(maxAmountInput)
  );

  // the callback to execute the swap
  const { callback: swapCallback, error: swapCallbackError } = useSwapCallback(
    trade,
    allowedSlippage,
    recipient
  );

  const { priceImpactWithoutFee } = computeTradePriceBreakdown(trade);

  const [singleHopOnly] = useUserSingleHopOnly();

  const handleSwap = useCallback(() => {
    if (
      priceImpactWithoutFee &&
      !confirmPriceImpactWithoutFee(priceImpactWithoutFee, t)
    ) {
      return;
    }
    if (!swapCallback) {
      return;
    }
    setSwapState({
      attemptingTxn: true,
      tradeToConfirm,
      swapErrorMessage: undefined,
      txHash: undefined,
    });
    swapCallback()
      .then((hash) => {
        setSwapState({
          attemptingTxn: false,
          tradeToConfirm,
          swapErrorMessage: undefined,
          txHash: hash,
        });
      })
      .catch((error) => {
        setSwapState({
          attemptingTxn: false,
          tradeToConfirm,
          swapErrorMessage: error.message,
          txHash: undefined,
        });
      });
  }, [priceImpactWithoutFee, swapCallback, tradeToConfirm, t]);

  // errors
  const [showInverted, setShowInverted] = useState<boolean>(false);

  // warnings on slippage
  const priceImpactSeverity = warningSeverity(priceImpactWithoutFee);

  // show approve flow when: no error on inputs, not approved or pending, or approved in current session
  // never show if price impact is above threshold in non expert mode
  const showApproveFlow =
    !swapInputError &&
    (approval === ApprovalState.NOT_APPROVED ||
      approval === ApprovalState.PENDING ||
      (approvalSubmitted && approval === ApprovalState.APPROVED)) &&
    !(priceImpactSeverity > 3 && !isExpertMode);

  const handleConfirmDismiss = useCallback(() => {
    setSwapState({ tradeToConfirm, attemptingTxn, swapErrorMessage, txHash });
    // if there was a tx hash, we want to clear the input
    if (txHash) {
      onUserInput(Field.INPUT, "");
    }
  }, [attemptingTxn, onUserInput, swapErrorMessage, tradeToConfirm, txHash]);

  const handleAcceptChanges = useCallback(() => {
    setSwapState({
      tradeToConfirm: trade,
      swapErrorMessage,
      txHash,
      attemptingTxn,
    });
  }, [attemptingTxn, swapErrorMessage, trade, txHash]);

  // swap warning state
  const [swapWarningCurrency, setSwapWarningCurrency] = useState(null);
  const [onPresentSwapWarningModal] = useModal(
    <SwapWarningModal swapCurrency={swapWarningCurrency} />
  );

  const shouldShowSwapWarning = (swapCurrency) => {
    const isWarningToken = Object.entries(SwapWarningTokens).find(
      (warningTokenConfig) => {
        const warningTokenData = warningTokenConfig[1];
        return swapCurrency.address === warningTokenData.address;
      }
    );
    return Boolean(isWarningToken);
  };

  useEffect(() => {
    if (swapWarningCurrency) {
      onPresentSwapWarningModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swapWarningCurrency]);

  const handleInputSelect = useCallback(
    (currencyInput) => {
      setApprovalSubmitted(false); // reset 2 step UI for approvals
      onCurrencySelection(Field.INPUT, currencyInput);
      const showSwapWarning = shouldShowSwapWarning(currencyInput);
      if (showSwapWarning) {
        setSwapWarningCurrency(currencyInput);
      } else {
        setSwapWarningCurrency(null);
      }
    },
    [onCurrencySelection]
  );

  const handleMaxInput = useCallback(() => {
    if (maxAmountInput) {
      onUserInput(Field.INPUT, maxAmountInput.toExact());
    }
  }, [maxAmountInput, onUserInput]);

  const handleOutputSelect = useCallback(
    (currencyOutput) => {
      onCurrencySelection(Field.OUTPUT, currencyOutput);
      const showSwapWarning = shouldShowSwapWarning(currencyOutput);
      if (showSwapWarning) {
        setSwapWarningCurrency(currencyOutput);
      } else {
        setSwapWarningCurrency(null);
      }
    },

    [onCurrencySelection]
  );

  const swapIsUnsupported = useIsTransactionUnsupported(
    currencies?.INPUT,
    currencies?.OUTPUT
  );

  const [onPresentImportTokenWarningModal] = useModal(
    <ImportTokenWarningModal
      tokens={importTokensNotInDefault}
      onCancel={() => router.push("/swap")}
    />
  );

  useEffect(() => {
    if (importTokensNotInDefault.length > 0) {
      onPresentImportTokenWarningModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [importTokensNotInDefault.length]);

  const [onPresentConfirmModal] = useModal(
    <ConfirmSwapModal
      trade={trade}
      originalTrade={tradeToConfirm}
      onAcceptChanges={handleAcceptChanges}
      attemptingTxn={attemptingTxn}
      txHash={txHash}
      recipient={recipient}
      allowedSlippage={allowedSlippage}
      onConfirm={handleSwap}
      swapErrorMessage={swapErrorMessage}
      customOnDismiss={handleConfirmDismiss}
    />,
    true,
    true,
    "confirmSwapModal"
  );

  const hasAmount = Boolean(parsedAmount);

  const onRefreshPrice = useCallback(() => {
    if (hasAmount) {
      refreshBlockNumber();
    }
  }, [hasAmount, refreshBlockNumber]);

  const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
  const biggest1400 = useMediaPredicate("(max-width: 1400px)");

  return (
    <div
      className={`${biggerThan1400 && "container p-0"} ${
        biggest1400 && "p-0 container-fluid"
      }`}
    >
      <div className="row m-auto justify-content-center mt-5 pt-5">
        <div className="col-xl-5">
          <div className="card">
            <div className="card-header border-0 pb-0 justify-content-between">
              {/* <span className="fs-26 main-color-1">Ditto</span> */}
              <h4 className="fs-14">{t("Swap")}</h4>
              <a href="#" className="pull-right" data-toggle="modal">
                <CurrencyInputHeader
                  title={""}
                  subtitle={""}
                  setIsChartDisplayed={setIsChartDisplayed}
                  isChartDisplayed={isChartDisplayed}
                  hasAmount={hasAmount}
                  onRefreshPrice={onRefreshPrice}
                />
              </a>
            </div>
            <div className="card-body">
              <CurrencyInputPanel
                label={
                  independentField === Field.OUTPUT && !showWrap && trade
                    ? t("From (estimated)")
                    : t("From")
                }
                value={formattedAmounts[Field.INPUT]}
                showMaxButton={!atMaxAmountInput}
                currency={currencies[Field.INPUT]}
                onUserInput={handleTypeInput}
                onMax={handleMaxInput}
                onCurrencySelect={handleInputSelect}
                otherCurrency={currencies[Field.OUTPUT]}
                id="swap-currency-input"
              />
              <div className="d-inline-flex justify-content-center text-center w-100 m-auto">
                <i
                  className="switch fa-solid fa-repeat"
                  onClick={() => {
                    setApprovalSubmitted(false);
                    onSwitchTokens();
                  }}
                  aria-hidden="true"
                />
              </div>
              <CurrencyInputPanel
                value={formattedAmounts[Field.OUTPUT]}
                onUserInput={handleTypeOutput}
                label={
                  independentField === Field.INPUT && !showWrap && trade
                    ? t("To (estimated)")
                    : t("To")
                }
                showMaxButton={false}
                currency={currencies[Field.OUTPUT]}
                onCurrencySelect={handleOutputSelect}
                otherCurrency={currencies[Field.INPUT]}
                id="swap-currency-output"
              />

              <div className="pt-3">
                <div className="small"></div>
                <div className="bg-dark p-3 rounded ">
                  <div className="small">
                    <div id="accordion">
                      {showWrap ? null : (
                        <div
                          className={`text-white fs-14 ${
                            collapse ? "collapsed" : ""
                          }`}
                          onClick={() => showCollapse(!collapse)}
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          <div className="d-flex justify-content-between">
                            {Boolean(trade) ? (
                              <>
                                {isLoading ? (
                                  <span style={{ color: "6c757d" }}>
                                    ($0.00){" "}
                                  </span>
                                ) : (
                                  <TradePrice
                                    price={trade?.executionPrice}
                                    showInverted={showInverted}
                                    setShowInverted={setShowInverted}
                                  />
                                )}
                              </>
                            ) : (
                              <>$0.00</>
                            )}

                            <span className="float-right dropdown-toggle small"></span>
                          </div>
                        </div>
                      )}
                      <div className="small">
                        <div
                          id="collapseOne"
                          className={`accordion-collapse collapse ${
                            collapse ? "show" : ""
                          }`}
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          {!swapIsUnsupported ? (
                            trade && (
                              <AdvancedSwapDetailsDropdown trade={trade} />
                            )
                          ) : (
                            <UnsupportedCurrencyFooter
                              currencies={[currencies.INPUT, currencies.OUTPUT]}
                            />
                          )}

                          {/* <hr className="hr-custom" />
                          <div className="small"> */}
                          {/* <div className="d-flex small justify-content-between">
                              <div className=" mr-1">
                                Minimum Received After Slippage ({" "}
                                {allowedSlippage / 100}%){" "}
                              </div>
                              <div className="text-white">{trade?.minimumAmountOut} </div>
                            </div> */}

                          {/* </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Box mt="0.25rem">
                {swapIsUnsupported ? (
                  <button
                    className="btn btn-primary btn-lg w-100 mt-4"
                    disabled
                  >
                    {t("Unsupported Asset")}
                  </button>
                ) : !account ? (
                  <ConnectWalletButton className="btn btn-primary btn-lg w-100 mt-4" />
                ) : showWrap ? (
                  <button
                    className="btn btn-primary btn-lg w-100 mt-4"
                    disabled={Boolean(wrapInputError)}
                    onClick={onWrap}
                  >
                    {wrapInputError ??
                      (wrapType === WrapType.WRAP
                        ? "Wrap"
                        : wrapType === WrapType.UNWRAP
                        ? "Unwrap"
                        : null)}
                  </button>
                ) : noRoute && userHasSpecifiedInputOutput ? (
                  <GreyCard style={{ textAlign: "center", padding: "0.75rem" }}>
                    <Text color="textSubtle">
                      {t("Insufficient liquidity for this trade.")}
                    </Text>
                    {singleHopOnly && (
                      <Text color="textSubtle">
                        {t("Try enabling multi-hop trades.")}
                      </Text>
                    )}
                  </GreyCard>
                ) : showApproveFlow ? (
                  <RowBetween>
                    <button
                      className="btn btn-primary btn-lg w-100 mt-4"
                      // variant={approval === ApprovalState.APPROVED ? 'success' : 'primary'}
                      onClick={approveCallback}
                      disabled={
                        approval !== ApprovalState.NOT_APPROVED ||
                        approvalSubmitted
                      }
                      // width="48%"
                    >
                      {approval === ApprovalState.PENDING ? (
                        <AutoRow gap="6px" justify="center">
                          {t("Enabling")} <CircleLoader stroke="white" />
                        </AutoRow>
                      ) : approvalSubmitted &&
                        approval === ApprovalState.APPROVED ? (
                        t("Enabled")
                      ) : (
                        t("Enable %asset%", {
                          asset: currencies[Field.INPUT]?.symbol ?? "",
                        })
                      )}
                    </button>
                    <button
                      className="btn btn-primary btn-lg w-100 mt-4"
                      // variant={isValid && priceImpactSeverity > 2 ? 'danger' : 'primary'}
                      onClick={() => {
                        if (isExpertMode) {
                          handleSwap();
                        } else {
                          setSwapState({
                            tradeToConfirm: trade,
                            attemptingTxn: false,
                            swapErrorMessage: undefined,
                            txHash: undefined,
                          });
                          onPresentConfirmModal();
                        }
                      }}
                      // width="48%"
                      id="swap-button"
                      disabled={
                        !isValid ||
                        approval !== ApprovalState.APPROVED ||
                        (priceImpactSeverity > 3 && !isExpertMode)
                      }
                    >
                      {priceImpactSeverity > 3 && !isExpertMode
                        ? t("Price Impact High")
                        : priceImpactSeverity > 2
                        ? t("Swap Anyway")
                        : t("Swap")}
                    </button>
                  </RowBetween>
                ) : (
                  <button
                    className="btn btn-primary btn-lg w-100 mt-4"
                    // variant={isValid && priceImpactSeverity > 2 && !swapCallbackError ? 'danger' : 'primary'}
                    onClick={() => {
                      if (isExpertMode) {
                        handleSwap();
                      } else {
                        setSwapState({
                          tradeToConfirm: trade,
                          attemptingTxn: false,
                          swapErrorMessage: undefined,
                          txHash: undefined,
                        });
                        onPresentConfirmModal();
                      }
                    }}
                    id="swap-button"
                    // width="100%"
                    disabled={
                      !isValid ||
                      (priceImpactSeverity > 3 && !isExpertMode) ||
                      !!swapCallbackError
                    }
                  >
                    {swapInputError ||
                      (priceImpactSeverity > 3 && !isExpertMode
                        ? t("Price Impact Too High")
                        : priceImpactSeverity > 2
                        ? t("Swap Anyway")
                        : t("Swap"))}
                  </button>
                )}
                {showApproveFlow && (
                  <Column style={{ marginTop: "1rem" }}>
                    <ProgressSteps
                      steps={[approval === ApprovalState.APPROVED]}
                    />
                  </Column>
                )}
                {isExpertMode && swapErrorMessage ? (
                  <SwapCallbackError error={swapErrorMessage} />
                ) : null}
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
