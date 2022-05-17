import { Price } from '@pancakeswap/sdk'
import { Text, AutoRenewIcon } from '@pancakeswap/uikit'
import { StyledBalanceMaxMini } from './styleds'

interface TradePriceProps {
  price?: Price
  showInverted: boolean
  setShowInverted: (showInverted: boolean) => void
}

export default function TradePrice({ price, showInverted, setShowInverted }: TradePriceProps) {
  const formattedPrice = showInverted ? price?.toSignificant(6) : price?.invert()?.toSignificant(6)

  const show = Boolean(price?.baseCurrency && price?.quoteCurrency)
  const label = showInverted
    ? `${price?.quoteCurrency?.symbol} = ${price?.baseCurrency?.symbol}`
    : `${price?.baseCurrency?.symbol} = ${price?.quoteCurrency?.symbol}`

  return (
    <Text style={{ justifyContent: 'left', alignItems: 'center', display: 'flex' }}>
      {show ? (
        <>
          {formattedPrice ?? '-'} {label}
          <div onClick={() => setShowInverted(!showInverted)}>
            {/* <AutoRenewIcon width="14px" /> */}
          </div>
        </>
      ) : (
        '-'
      )}
    </Text>
  )
}
