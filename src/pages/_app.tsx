import { ResetCSS } from '@pancakeswap/uikit'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import BigNumber from 'bignumber.js'
// import GlobalCheckClaimStatus from 'components/GlobalCheckClaimStatus'
import FixedSubgraphHealthIndicator from 'components/SubgraphHealthIndicator'
import { ToastListener } from 'contexts/ToastsContext'
import useEagerConnect from 'hooks/useEagerConnect'
import { useInactiveListener } from 'hooks/useInactiveListener'
import useSentryUser from 'hooks/useSentryUser'
import useUserAgent from 'hooks/useUserAgent'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Fragment } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore, persistor } from 'state'
import { usePollBlockNumber } from 'state/block/hooks'
import { usePollCoreFarmData } from 'state/farms/hooks'
import { NextPage } from 'next'
import { Blocklist, Updaters } from '..'
import ErrorBoundary from '../components/ErrorBoundary'
import Menu from '../components/Menu'
import Providers from '../Providers'
import GlobalStyle from '../style/Global'
import '../../public/font/fontsheet.css'

const EasterEgg = dynamic(() => import('components/EasterEgg'), { ssr: false })

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

function GlobalHooks() {
  usePollBlockNumber()
  useEagerConnect()
  usePollCoreFarmData()
  useUserAgent()
  useInactiveListener()
  useSentryUser()
  return null
}

const noOverlayWorkaroundScript = `
  window.addEventListener('error', event => {
    event.stopImmediatePropagation()
  })

  window.addEventListener('unhandledrejection', event => {
    event.stopImmediatePropagation()
  })
`

function MyApp(props: AppProps) {
  const { pageProps } = props
  const store = useStore(pageProps.initialReduxState)

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
        <meta
          name="description"
          content=""
        />
        <meta name="theme-color" content="#1FC7D4" />
        <meta name="twitter:image" content="" />
        <meta
          name="twitter:description"
          content="."
        />
        <meta name="twitter:card" content="Welcome to the social experiment" />
        <meta name="twitter:title" content="SocialX" />
        <title>SOCIALx</title>
        {process.env.NODE_ENV !== 'production' && <script dangerouslySetInnerHTML={{ __html: noOverlayWorkaroundScript }} />}
      </Head>
      <Providers store={store}>
        <Blocklist>
          <GlobalHooks />
          <Updaters />
          <ResetCSS />
          <GlobalStyle />
          {/* <GlobalCheckClaimStatus excludeLocations={[]} /> */}
          <PersistGate loading={null} persistor={persistor}>
            <App {...props} />
          </PersistGate>
        </Blocklist>
      </Providers>
     
    </>
  )
}

type NextPageWithLayout = NextPage & {
  Layout?: React.FC
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const ProductionErrorBoundary = process.env.NODE_ENV === 'production' ? ErrorBoundary : Fragment

const App = ({ Component, pageProps, ...appProps }) => {
  // Use the layout defined at the page level, if available
  const Layout = Component.Layout || Fragment
  const getContent = () => {
    if ([`/sm`, `/ui`, `/ox`, `/privacy`, `/experiment`].includes(appProps.router.pathname)) {
      return (
        <ProductionErrorBoundary>
        <Head>
        <link rel="stylesheet" href='../../../../font/GameOfSquids.ttf' />
        <link rel="stylesheet" type="text/css" href="https://socialx.io/css/style.css" />
        <link rel="stylesheet" type="text/css" href="https://socialx.io/font/stylesheet.css" />
        <link rel="stylesheet" type="text/css" href="https://socialx.io/css/accordion.css"/>
        <link rel="stylesheet" type="text/css" href="https://socialx.io/css/aos.css"/>
        <link rel="stylesheet" type="text/css" href="https://socialx.io/css/bootstrap.min.css"/>
        <link rel="stylesheet" type="text/css" href="https://socialx.io/css/aos.css"/>
        <link rel="stylesheet" type="text/css" href="https://socialx.io/css/normalize.css"/>
        <link rel="stylesheet" type="text/css" href="https://socialx.io/css/style.css"/>
        <link rel="stylesheet" type="text/css" href="https://socialx.io/css/clock.css"/>
        <link rel="stylesheet" type="text/css" href="https://socialx.io/css/owl.carousel.min.css"/>
        <link rel="stylesheet" type="text/css" href="https://socialx.io/css/owl.theme.default.min.css"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.18/css/bootstrap-select.min.css"/>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </ProductionErrorBoundary>
      )
    } else {
    return (
      <ProductionErrorBoundary>
        <Menu>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Menu>
        <EasterEgg iterations={2} />
        <ToastListener />
        <FixedSubgraphHealthIndicator />
      </ProductionErrorBoundary>
    )
  }
}
  return getContent()
}

export default MyApp
