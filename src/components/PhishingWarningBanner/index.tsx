import styled from 'styled-components'
import { Text, Flex, Box, CloseIcon, IconButton, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { usePhishingBannerManager } from 'state/user/hooks'

const Container = styled(Flex)`
  // overflow: hidden;
  // height: 100%;
  // padding: 12px;
  // align-items: center;
  // background: linear-gradient(0deg, rgba(39, 38, 44, 0.4), rgba(39, 38, 44, 0.4)),
  //   linear-gradient(180deg, #8051d6 0%, #492286 100%);
  // ${({ theme }) => theme.mediaQueries.md} {
  //   padding: 0px;
  //   background: linear-gradient(180deg, #8051d6 0%, #492286 100%);
  // }
`

const InnerContainer = styled(Flex)`
  // width: 100%;
  // height: 100%;
  // justify-content: center;
  // align-items: center;
`

const SpeechBubble = styled.div`
  // background: rgba(39, 38, 44, 0.4);
  // border-radius: 16px;
  // padding: 8px;
  // width: 60%;
  // height: 80%;
  // display: flex;
  // align-items: center;
  // flex-wrap: wrap;

  // & ${Text} {
  //   flex-shrink: 0;
  //   margin-right: 4px;
  // }
`

const PhishingWarningBanner: React.FC = () => {
  const { t } = useTranslation()
  const [, hideBanner] = usePhishingBannerManager()
  const { isMobile, isMd } = useMatchBreakpoints()
  const warningText = t("please make sure you're visiting https://pancakeswap.finance - check the URL carefully.")
  const warningTextAsParts = warningText.split(/(https:\/\/pancakeswap.finance)/g)
  const warningTextComponent = (
    <>
 
    
    </>
  )
  return (
<>
</>
  )
}

export default PhishingWarningBanner
