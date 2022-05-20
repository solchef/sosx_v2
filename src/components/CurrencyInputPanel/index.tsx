import { Currency, Pair } from "@pancakeswap/sdk";
import { Button, Text, useModal } from "@pancakeswap/uikit";
import styled from "styled-components";
import { useTranslation } from "contexts/Localization";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { useCurrencyBalance } from "../../state/wallet/hooks";
import CurrencySearchModal from "../SearchModal/CurrencySearchModal";
import { CurrencyLogo } from "../Logo";
import { Input as NumericalInput } from "./NumericalInput";

const InputRow = styled.div<{ selected: boolean }>`
  display: flex;
  flex-flow: row nowrap;
  align-items: left;
  justify-content: flex-start;
  // padding: ${({ selected }) =>
    selected ? "0.75rem 0.5rem 0.75rem 1rem" : "0.75rem 0.75rem 0.75rem 1rem"};
`;
const LabelRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: left;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.75rem;
  line-height: 1rem;
`;
interface CurrencyInputPanelProps {
  value: string;
  onUserInput: (value: string) => void;
  onMax?: () => void;
  showMaxButton: boolean;
  label?: string;
  onCurrencySelect: (currency: Currency) => void;
  currency?: Currency | null;
  disableCurrencySelect?: boolean;
  hideBalance?: boolean;
  pair?: Pair | null;
  otherCurrency?: Currency | null;
  id: string;
  showCommonBases?: boolean;
}
export default function CurrencyInputPanel({
  value,
  onUserInput,
  onMax,
  showMaxButton,
  label,
  onCurrencySelect,
  currency,
  disableCurrencySelect = false,
  hideBalance = false,
  pair = null, // used for double token logo
  otherCurrency,
  id,
  showCommonBases,
}: CurrencyInputPanelProps) {
  const { account } = useActiveWeb3React();
  const selectedCurrencyBalance = useCurrencyBalance(
    account ?? undefined,
    currency ?? undefined
  );
  const {
    t,
    currentLanguage: { locale },
  } = useTranslation();

  const [onPresentCurrencyModal] = useModal(
    <CurrencySearchModal
      onCurrencySelect={onCurrencySelect}
      selectedCurrency={currency}
      otherSelectedCurrency={otherCurrency}
      showCommonBases={showCommonBases}
    />
  );
  return (
    <div className="bg-dark p-3 rounded">
      <div className="d-flex justify-content-between align-items-center">
        <span className="text-success  fs-12">{label}</span>
        <span onClick={onMax} className="text-success fs-12 ">
          {!hideBalance && !!currency
            ? t("Balance: %balance%", {
                balance:
                  selectedCurrencyBalance?.toSignificant(6) ?? t("Loading"),
              })
            : " -"}
        </span>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <span className="fs-40">
          <LabelRow>
            <NumericalInput
              className="token-amount-input"
              value={value}
              onUserInput={(val) => {
                onUserInput(val);
              }}
            />
          </LabelRow>
          <InputRow selected={disableCurrencySelect}>
            {account && currency && showMaxButton && label !== "To" && (
              <Button onClick={onMax} scale="xs" variant="secondary">
                {t("Max").toLocaleUpperCase(locale)}
              </Button>
            )}
          </InputRow>
        </span>
        <span className="text-white">
          <button
            className="btn btn-selectcoin btn-md dropdown-toggle"
            // @ts-ignore
            selected={!!currency}
            onClick={() => {
              if (!disableCurrencySelect) {
                onPresentCurrencyModal();
              }
            }}
          >
            <CurrencyLogo
              currency={currency}
              size="30px"
              style={{ marginRight: "8px" }}
            />
            <Text id="pair" bold>
              {(currency && currency.symbol && currency.symbol.length > 20
                ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(
                    currency.symbol.length - 5,
                    currency.symbol.length
                  )}`
                : currency?.symbol) || t("Select a currency")}
            </Text>
          </button>
        </span>
      </div>
    </div>
  );
}
