/* eslint-disable jsx-a11y/iframe-has-title */
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { useState } from 'react'
import { ServerStyleSheet } from 'styled-components'
import { nodes } from 'utils/getRpcUrl'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    

    try {
      // eslint-disable-next-line no-param-reassign
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html translate="no">
        <Head>
          {nodes.map((node) => (
            <link key={node} rel="preconnect" href={node} />
          ))}
          {process.env.NEXT_PUBLIC_NODE_PRODUCTION && (
            <link rel="preconnect" href={process.env.NEXT_PUBLIC_NODE_PRODUCTION} />
          )}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>
          {/* <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;600&amp;display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo.png" />
          <link rel="manifest" href="/manifest.json" /> */}
      
          {/* <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width,initial-scale=1"/> */}
          {/* <title>Ditto Token - A token that change and adjust to any market conditions</title> */}
      
          <link rel="icon" type="image/png" sizes="16x16" href="/utils/images/favicon.png"/>
          <link href="/utils/vendor/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet" />
          <link href="/utils/css/style.css" rel="stylesheet"/>
          <link href="https://cdn.lineicons.com/2.0/LineIcons.css" rel="stylesheet"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
            crossOrigin="anonymous" referrerPolicy="no-referrer" />

        </Head>

        <body data-typography="poppins" data-theme-version="dark" data-layout="vertical" data-nav-headerbg="color_1" data-headerbg="color_1" data-sidebar-style="full" data-sibebarbg="color_1" data-sidebar-position="fixed" data-header-position="fixed" data-container="wide" dir="ltr" data-primary="color_1">
          <noscript>
            <iframe
              // src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTAG}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }} />
          </noscript>
          <div id="main-wrapper">
          <div className="header">
          <div className="header-content">
            <nav className="navbar navbar-expand">
              <div className="collapse navbar-collapse justify-content-between">
                <div className="header-left">
                  <div className="dashboard_bar">
                    Swap
                  </div>
                </div>
                <ul className="navbar-nav header-right">

                  <li className="nav-item wallet-btn">
                    <button type="button" className="btn btn-primary btn-lg">Connected</button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

             <ul className="mobile-nav" id="menu">
                                    <li className="mm-active"><a href="#" className="mm-active">
                                                <i className="fa fa-repeat active"></i>
                                                <span className="nav-text">Swap</span>
                                            </a>
                                        </li>
                                        <li><a href="https://app.socialx.io/staking-form">
                                                <i className="fa fa-coins"></i>
                                                <span className="nav-text">Staking</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://app.socialx.io/x-game">
                                                <i className="fa fa-gamepad"></i>
                                                <span className="nav-text ">X-Game</span>
                                            </a>
                                        </li>
                                        <li>
                                            < a href="https://app.socialx.io/referrals">
                                                <i className="fa fa-bullhorn"></i>
                                                <span className="nav-text">Affiliate</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://app.socialx.io/adspace">
                                                <i className="fa fa-briefcase"></i>
                                                <span className="nav-text ">Ad Space</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://app.socialx.io/x-mining">
                                                <i className="fa fa-users"></i>
                                                <span className="nav-text ">Social Mining</span>
                                            </a>
                                        </li>

                                        {/* <li>
                                            <a href="#">
                                                <i className="fa fa-images"></i>
                                                <span className="nav-text ">NFT</span>
                                            </a>
                                        </li> */}

                                    </ul>
                     <div className="deznav mobile-hide">
                                <div className="deznav-scroll">
                                    <ul className="metismenu" id="menu">

                                        
                                        <li className="mm-active"><a href="#" className="mm-active">
                                                <i className="fa fa-repeat active"></i>
                                                <span className="nav-text">Swap</span>
                                            </a>
                                        </li>
                                        <li><a href="https://app.socialx.io/staking-form">
                                                <i className="fa fa-coins"></i>
                                                <span className="nav-text">Staking</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://app.socialx.io/x-game">
                                                <i className="fa fa-gamepad"></i>
                                                <span className="nav-text ">X-Game</span>
                                            </a>
                                        </li>
                                        <li>
                                            < a href="https://app.socialx.io/referrals">
                                                <i className="fa fa-bullhorn"></i>
                                                <span className="nav-text">Affiliate</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://app.socialx.io/adspace">
                                                <i className="fa fa-briefcase"></i>
                                                <span className="nav-text ">Ad Space</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://app.socialx.io/x-mining">
                                                <i className="fa fa-users"></i>
                                                <span className="nav-text ">Social Mining</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <i className="fa fa-images"></i>
                                                <span className="nav-text comingsoon">NFT</span>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
            
                          <div className="nav-header">
                              <a href="#" className="brand-logo">
                                  <img className="logo-abbr" src="/utils/images/xlogo-black.b90261b2.svg" alt=""/>
                              </a>
                              <div className="nav-control">
                                  <div className="">
                                  <span className="line"></span><span className="line"></span><span className="line"></span>
                                  </div>
                              </div>
                          </div>
           
          <Main />
          <NextScript />
          <div id="portal-root" />
          </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
