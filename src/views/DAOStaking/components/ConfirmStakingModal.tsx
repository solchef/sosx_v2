import { useCallback, useMemo } from 'react'
import { currencyEquals, Trade } from '@pancakeswap/sdk'
import { InjectedModalProps, Modal, Spinner } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

import StakeModalFooter from './StakeModalFooter'
import { AutoColumn, ColumnCenter } from 'components/Layout/Column'
import {
  Text,

} from '@pancakeswap/uikit'
import styled from 'styled-components'

const ConfirmedIcon = styled(ColumnCenter)`
  padding: 24px 0;
`;

const Wrapper = styled.div`
  width: 100%;
`;

interface ConfirmStakingModalProps {
  trade?: Trade
  originalTrade?: Trade
  attemptingTxn: boolean
  txHash?: string
  recipient: string | null
  allowedSlippage: number
  onAcceptChanges: () => void
  onConfirm: () => void
  swapErrorMessage?: string
  customOnDismiss?: () => void
}

const ConfirmStakingModal: React.FC<InjectedModalProps & ConfirmStakingModalProps> = ({
  trade,
  originalTrade,
  onAcceptChanges,
  allowedSlippage,
  onConfirm,
  onDismiss,
  customOnDismiss,
  recipient,
}) => {

  const { t } = useTranslation()

  const handleDismiss = useCallback(() => {
    if (customOnDismiss) {
      customOnDismiss()
    }
    onDismiss?.()
  }, [customOnDismiss, onDismiss])


  return (
    <Modal onDismiss={handleDismiss} title={'Staking'}  headerBackground="gradients.cardHeader">
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
                    {t('Confirm this transaction in your wallet')}
                  </Text>
                </AutoColumn>
              </Wrapper>


           <StakeModalFooter
                onConfirm={onConfirm}
                trade={trade}
                disabledConfirm={false}
                swapErrorMessage={"Transaction could not be confirmed"}
                allowedSlippage={allowedSlippage}
            />
  
  </Modal>
)
  
}

export default ConfirmStakingModal
