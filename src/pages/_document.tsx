/* eslint-disable jsx-a11y/iframe-has-title */
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import Link from 'next/link'
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
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>

          <link rel="icon" type="image/png" sizes="16x16" href="/" />
          <link href="https://cdn.lineicons.com/2.0/LineIcons.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
            crossOrigin="anonymous" referrerPolicy="no-referrer" />

        </Head>

        <body data-typography="roboto" data-theme-version="dark" data-layout="vertical" data-nav-headerbg="color_1" data-headerbg="color_1" data-sidebar-style="full" data-sibebarbg="color_1" data-sidebar-position="fixed" data-header-position="fixed" data-container="wide" dir="ltr" data-primary="color_1">
          <noscript>
            <iframe
              // src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTAG}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }} />
          </noscript>
          <div id="main-wrapper">
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
