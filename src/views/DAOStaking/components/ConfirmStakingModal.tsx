import { useCallback, useMemo } from "react";
import { InjectedModalProps, Modal, Spinner } from "@pancakeswap/uikit";
import { useTranslation } from "contexts/Localization";
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
  onAcceptChanges: () => void;
  onConfirm: () => void;
  customOnDismiss?: () => void;
  clientMessage :string
  receipt :string
}

const ConfirmStakingModal: React.FC<
  InjectedModalProps & ConfirmStakingModalProps
> = ({
  onAcceptChanges,
  clientMessage,
  onConfirm,
  onDismiss,
  customOnDismiss,
  receipt,
}) => {
  const { t } = useTranslation();

  const handleDismiss = useCallback(() => {
    if (customOnDismiss) {
      customOnDismiss();
    }
    onDismiss?.();
  }, [customOnDismiss, onDismiss]);

  return (
    <Modal
      onDismiss={handleDismiss}
      title={"Staking"}
      headerBackground="gradients.cardHeader"
    >
      <Wrapper>
        <ConfirmedIcon>
          <Spinner />
        </ConfirmedIcon>
        <AutoColumn gap="12px" justify="center">
          <Text fontSize="20px">You are staking SOSX</Text>
          <AutoColumn gap="12px" justify="center">
            <Text bold small textAlign="center">
              {clientMessage}
            </Text>
          </AutoColumn>
          {receipt}
          <Text small color="textSubtle" textAlign="center">
            {t("Confirm this transaction in your wallet")}
          </Text>
        </AutoColumn>
      </Wrapper>

      <button onClick={onConfirm} className="btn btn-primary btn-md">
        Approve
      </button>
    </Modal>
  );
};

export default ConfirmStakingModal;
