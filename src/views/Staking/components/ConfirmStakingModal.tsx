import { useMemo } from "react";
import { Trade } from "@pancakeswap/sdk";
import { InjectedModalProps, Modal, Spinner } from "@pancakeswap/uikit";
import { useTranslation } from "contexts/Localization";
import StakeModalFooter from "./StakeModalFooter";
import { AutoColumn, ColumnCenter } from "components/Layout/Column";
import { Text } from "@pancakeswap/uikit";
import styled from "styled-components";

const ConfirmedIcon = styled(ColumnCenter)`
  padding: 24px 0;
`;

const Wrapper = styled.div`
  width: 100%;
`;

interface ConfirmStakingModalProps {
  trade?: Trade;
  originalTrade?: Trade;
  attemptingTxn: boolean;
  txHash?: string;
  recipient: string | null;
  allowedSlippage: number;
  onAcceptChanges: () => void;
  onConfirm: () => void;
  swapErrorMessage?: string;
  customOnDismiss?: () => void;
}

const ConfirmStakingModal: React.FC<
  InjectedModalProps & ConfirmStakingModalProps
> = ({
  trade,
  originalTrade,
  allowedSlippage,
  onConfirm,
  swapErrorMessage,
}) => {
  const showAcceptChanges = useMemo(
    () =>
      Boolean(
        trade && originalTrade && tradeMeaningfullyDiffers(trade, originalTrade)
      ),
    [originalTrade, trade]
  );

  const { t } = useTranslation();

  return (
    <Modal headerBackground="gradients.cardHeader">
      <Wrapper>
        <ConfirmedIcon>
          <Spinner />
        </ConfirmedIcon>
        <AutoColumn gap="12px" justify="center">
          <Text fontSize="20px">You are staking SOSX</Text>
          <AutoColumn gap="12px" justify="center">
            <Text bold small textAlign="center">
              Transaction is being sent
            </Text>
          </AutoColumn>
          <Text small color="textSubtle" textAlign="center">
            {t("Confirm the transaction by clicking the button below")}
          </Text>
        </AutoColumn>
      </Wrapper>

      <StakeModalFooter
        onConfirm={onConfirm}
        trade={trade}
        disabledConfirm={showAcceptChanges}
        swapErrorMessage={swapErrorMessage}
        allowedSlippage={allowedSlippage}
      />
    </Modal>
  );
};

export default ConfirmStakingModal;
