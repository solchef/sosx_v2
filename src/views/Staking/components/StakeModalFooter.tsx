import { useMemo } from "react";
import { Trade } from "@pancakeswap/sdk";
import { Button } from "@pancakeswap/uikit";
import {
  computeTradePriceBreakdown,
  warningSeverity,
} from "utils/prices";
import { AutoRow } from "components/Layout/Row";
import { SwapCallbackError } from "../../Swap/components/styleds";

export default function SwapModalFooter({
  trade,
  onConfirm,
  swapErrorMessage,
  disabledConfirm,
}: {
  trade: Trade;
  allowedSlippage: number;
  onConfirm: () => void;
  swapErrorMessage: string | undefined;
  disabledConfirm: boolean;
}) {
  const { priceImpactWithoutFee } = useMemo(
    () => computeTradePriceBreakdown(trade),
    [trade]
  );
  const severity = warningSeverity(priceImpactWithoutFee);

  return (
    <>
      <AutoRow>
        <Button
          variant={severity > 2 ? "danger" : "primary"}
          onClick={onConfirm}
          disabled={disabledConfirm}
          mt="12px"
          id="confirm-swap-or-send"
          width="100%"
        >
          Stake SOSX
        </Button>

        {swapErrorMessage ? (
          <SwapCallbackError error={swapErrorMessage} />
        ) : null}
      </AutoRow>
    </>
  );
}
