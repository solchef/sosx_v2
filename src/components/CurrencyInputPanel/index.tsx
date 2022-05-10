import { Currency, Pair, Token } from '@pancakeswap/sdk'
import { Button, ChevronDownIcon, Text, useModal, Flex, Box, MetamaskIcon } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { registerToken } from 'utils/wallet'
import { isAddress } from 'utils'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import CurrencySearchModal from '../SearchModal/CurrencySearchModal'
import { CurrencyLogo, DoubleCurrencyLogo } from '../Logo'

import { Input as NumericalInput } from './NumericalInput'
import { CopyButton } from '../CopyButton'

const InputRow = styled.div<{ selected: boolean }>`
  display: flex;
  flex-flow: row nowrap;
  align-items: left;
  justify-content: flex-start;
  // padding: ${({ selected }) => (selected ? '0.75rem 0.5rem 0.75rem 1rem' : '0.75rem 0.75rem 0.75rem 1rem')};
` 
const CurrencySelectButton = styled(Button).attrs({ variant: 'text', scale: 'sm' })`
  // padding: 0 0.5rem;
  // color: #131618;
  // background-color: #54d7e0;
  // border-color: #54d7e0;
  // font-size: 20px;
  // padding: 28px;
  // min-width: 145px;
  // display: flex;
  // align-items: center;
  // // padding: 0.938rem 1.5rem;
  // border-radius: 0.75rem;
  // font-weight: 500;
  // font-size: 1rem;
`
const LabelRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: left;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.75rem;
  line-height: 1rem;
`
const InputPanel = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  z-index: 1;
`
const Container = styled.div`
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.input};
  box-shadow: ${({ theme }) => theme.shadows.inset};
`
interface CurrencyInputPanelProps {
  value: string
  onUserInput: (value: string) => void
  onMax?: () => void
  showMaxButton: boolean
  label?: string
  onCurrencySelect: (currency: Currency) => void
  currency?: Currency | null
  disableCurrencySelect?: boolean
  hideBalance?: boolean
  pair?: Pair | null
  otherCurrency?: Currency | null
  id: string
  showCommonBases?: boolean
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
  const { account, library } = useActiveWeb3React()
  const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined)
  const {
    t,
    currentLanguage: { locale },
  } = useTranslation()

  const token = pair ? pair.liquidityToken : currency instanceof Token ? currency : null
  const tokenAddress = token ? isAddress(token.address) : null

  const [onPresentCurrencyModal] = useModal(
    <CurrencySearchModal
      onCurrencySelect={onCurrencySelect}
      selectedCurrency={currency}
      otherSelectedCurrency={otherCurrency}
      showCommonBases={showCommonBases}
    />,
  )
  return (

    <div className="bg-dark p-3 rounded">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-success  fs-12">{label}</span>
                    {/* <span className="success fs-14 "> */}
                    {/* <Text onClick={onMax} color="success" fontSize="12px" style={{ display: 'inline', cursor: 'pointer' }}>
                    {!hideBalance && !!currency
                      ? t('Balance: %balance%', { balance: selectedCurrencyBalance?.toSignificant(6) ?? t('Loading') })
                      : ' -'}
                  </Text> */}
                  <span onClick={onMax} className="text-success fs-12 ">
                        {!hideBalance && !!currency
                      ? t('Balance: %balance%', { balance: selectedCurrencyBalance?.toSignificant(6) ?? t('Loading') })
                      : ' -'}
                    </span>
                      {/* </span> */}
                  </div>
                  <div className="d-flex justify-content-between align-items-center">

                  <span className="fs-40">
                    
                    <LabelRow>
                      <NumericalInput
                        className="token-amount-input"
                        value={value}
                        onUserInput={(val) => {
                          onUserInput(val)
                        }}
                      />
                    </LabelRow>
                    <InputRow selected={disableCurrencySelect}>
                      {account && currency && showMaxButton && label !== 'To' && (
                        <Button onClick={onMax} scale="xs" variant="secondary">
                          {t('Max').toLocaleUpperCase(locale)}
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
                            onPresentCurrencyModal()
                          }
                        }}>
                      {/* <button className="btn btn-blue btn-md dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false"> */}
                      
                        {/* <img className="coin-select" src="images/sol-icon.png" /> SOL</button>< */}
                      
                        <CurrencyLogo currency={currency} size="30px" style={{ marginRight: '8px' }} />
                         <Text id="pair" bold>
                  {(currency && currency.symbol && currency.symbol.length > 20
                    ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(
                        currency.symbol.length - 5,
                        currency.symbol.length,
                      )}`
                    : currency?.symbol) || t('Select a currency')}
                    
                </Text>
               </button>
         </span>
                  
                  </div>
                
    {/* <Box position="relative" id={id}>
      <Flex mb="6px" alignItems="center" justifyContent="space-between">
        <Flex>
          <CurrencySelectButton
            className="open-currency-select-button"
            selected={!!currency}
            onClick={() => {
              if (!disableCurrencySelect) {
                onPresentCurrencyModal()
              }
            }}
          >
            <Flex alignItems="center" justifyContent="space-between">
              {pair ? (
                <DoubleCurrencyLogo currency0={pair.token0} currency1={pair.token1} size={16} margin />
              ) : currency ? (
                <CurrencyLogo currency={currency} size="24px" style={{ marginRight: '8px' }} />
              ) : null}
              {pair ? (
                <Text id="pair" bold>
                  {pair?.token0.symbol}:{pair?.token1.symbol}
                </Text>
              ) : (
                <Text id="pair" bold>
                  {(currency && currency.symbol && currency.symbol.length > 20
                    ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(
                        currency.symbol.length - 5,
                        currency.symbol.length,
                      )}`
                    : currency?.symbol) || t('Select a currency')}
                </Text>
              )}
              {!disableCurrencySelect && <ChevronDownIcon />}
            </Flex>
          </CurrencySelectButton>
          {token && tokenAddress ? (
            <Flex style={{ gap: '4px' }} alignItems="center">
              <CopyButton
                width="16px"
                buttonColor="textSubtle"
                text={tokenAddress}
                tooltipMessage={t('Token address copied')}
                tooltipTop={-20}
                tooltipRight={40}
                tooltipFontSize={12}
              />
              {library?.provider?.isMetaMask && (
                <MetamaskIcon
                  style={{ cursor: 'pointer' }}
                  width="16px"
                  onClick={() => registerToken(tokenAddress, token.symbol, token.decimals)}
                />
              )}
            </Flex>
          ) : null}
        </Flex>
        {account && (
          <Text onClick={onMax} color="textSubtle" fontSize="14px" style={{ display: 'inline', cursor: 'pointer' }}>
            {!hideBalance && !!currency
              ? t('Balance: %balance%', { balance: selectedCurrencyBalance?.toSignificant(6) ?? t('Loading') })
              : ' -'}
          </Text>
        )}
      </Flex>
      <InputPanel>
        <Container as="label">
          <LabelRow>
            <NumericalInput
              className="token-amount-input"
              value={value}
              onUserInput={(val) => {
                onUserInput(val)
              }}
            />
          </LabelRow>
          <InputRow selected={disableCurrencySelect}>
            {account && currency && showMaxButton && label !== 'To' && (
              <Button onClick={onMax} scale="xs" variant="secondary">
                {t('Max').toLocaleUpperCase(locale)}
              </Button>
            )}
          </InputRow>
        </Container>
      </InputPanel>
    </Box> */}

    </div>
  )
}
