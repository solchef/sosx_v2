import { useCallback, useMemo } from 'react'
import { currencyEquals, Trade } from '@pancakeswap/sdk'
import { InjectedModalProps, Modal, Spinner } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import TransactionConfirmationModal, {
  ConfirmationModalContent,
  TransactionErrorContent,
} from 'components/TransactionConfirmationModal'
import StakeModalFooter from './StakeModalFooter'
import StakeModalHeader from './StakeModalHeader'
import { AutoColumn, ColumnCenter } from 'components/Layout/Column'
import {
  Button,
  Text,
  ErrorIcon,
  ArrowUpIcon,
  MetamaskIcon,
  Flex,
  Box,
  Link,
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
  onAcceptChanges,
  onConfirm,
  onDismiss,
  customOnDismiss,

}) => {


  




  return (
    <Modal onDismiss={onDismiss} title={''} headerBackground="gradients.cardHeader">

             <Wrapper>
                <ConfirmedIcon>
                  <Spinner />
                </ConfirmedIcon>
                <AutoColumn gap="12px" justify="center">
                  <Text fontSize="20px">You are staking SOSX</Text>
                  <AutoColumn gap="12px" justify="center">
                    <Text bold small textAlign="center">
                        Stake SOSX
                    </Text>
                  </AutoColumn>
                  <Text small color="textSubtle" textAlign="center">
                    {t('Press and Confirm this transaction in your wallet')}
                  </Text>
                  
                </AutoColumn>
              </Wrapper>

            {/* <p>Staking </p> */}

           <StakeModalFooter
                onConfirm={onConfirm}
                trade={trade}
                disabledConfirm={showAcceptChanges}
                swapErrorMessage={swapErrorMessage}
                allowedSlippage={allowedSlippage}
            />
    {/* ) : (
      content()
    )} */}
  </Modal>
)
  
}

export default ConfirmStakingModal
