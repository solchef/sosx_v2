import { Trade, TradeType } from "@pancakeswap/sdk";
import { Text } from "@pancakeswap/uikit";
import { Field } from "state/swap/actions";
import { useTranslation } from "contexts/Localization";
import { useUserSlippageTolerance } from "state/user/hooks";
import {
  computeSlippageAdjustedAmounts,
  computeTradePriceBreakdown,
} from "utils/prices";
import { AutoColumn } from "components/Layout/Column";
import QuestionHelper from "components/QuestionHelper";
import { RowBetween, RowFixed } from "components/Layout/Row";
import FormattedPriceImpact from "./FormattedPriceImpact";
import SwapRoute from "./SwapRoute";

function TradeSummary({
  trade,
  allowedSlippage,
}: {
  trade: Trade;
  allowedSlippage: number;
}) {
  const { t } = useTranslation();
  const { priceImpactWithoutFee, realizedLPFee } =
    computeTradePriceBreakdown(trade);
  const isExactIn = trade.tradeType === TradeType.EXACT_INPUT;
  const slippageAdjustedAmounts = computeSlippageAdjustedAmounts(
    trade,
    allowedSlippage
  );

  return (
    <>
      <div className="d-flex justify-content-between small pt-3">
        <div className=" mr-1">Price: </div> .
        <div className="text-white"> 
        {isExactIn
              ? `${slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(4)} ${
                  trade.outputAmount.currency.symbol
                }` ?? "-"
              : `${slippageAdjustedAmounts[Field.INPUT]?.toSignificant(4)} ${
                  trade.inputAmount.currency.symbol
                }` ?? "-"}
         SOSX</div>
      </div>
      <div className="  small pt-3">
        <div className="d-flex justify-content-between small">
          <div className="mr-1">Liquidity Provider Fee: </div>
          <div className="text-white"> {realizedLPFee
            ? `${realizedLPFee.toSignificant(4)} ${
                trade.inputAmount.currency.symbol
              }`
            : "-"}</div>
        </div>
      </div>
      <div className="small pt-3">
        <div className="d-flex small justify-content-between">
          <div className=" mr-1">Price Impact: </div>
          <div className="text-white float-right"><FormattedPriceImpact priceImpact={priceImpactWithoutFee} /></div>
        </div>
      </div>

    </>
  );
}

export interface AdvancedSwapDetailsProps {
  trade?: Trade;
}

export function AdvancedSwapDetails({ trade }: AdvancedSwapDetailsProps) {
  const { t } = useTranslation();
  const [allowedSlippage] = useUserSlippageTolerance();

  const showRoute = Boolean(trade && trade.route.path.length > 2);

  return (
    <>
      {trade && (
        <>
          <TradeSummary trade={trade} allowedSlippage={allowedSlippage} />
          {showRoute && (
            <>
              {/* <RowBetween style={{ padding: "0 16px" }}>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <Text fontSize="14px" color="textSubtle">
                    {t("Route")}
                  </Text>
                  <QuestionHelper
                    text={t(
                      "Routing through these tokens resulted in the best price for your trade."
                    )}
                    ml="4px"
                    placement="top-start"
                  />
                </span>
                <SwapRoute trade={trade} />
              </RowBetween> */}
            </>
          )}
        </>
      )}
    </>
  );
}
