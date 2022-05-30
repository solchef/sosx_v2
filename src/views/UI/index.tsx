import Link from "next/link"
import React from "react"


export const UI = () => {
    return (
        <div>
          <nav className="justify-content-between navbar navbar-expand-lg fixed-top center-brand static-nav">
            <a className="navbar-brand" href="https://socialx.io/">
              <img src="https://socialx.io/img/logo.png" alt="logo" className="logo-default" />
            </a>
            <div className="float-right">
              <a href="#" id="dapp_url_swap">
                <button type="button" className="btn btn-primary btn-lg">LAUNCH DAPPS</button>
              </a>
            </div>
          </nav>


        <div className="accordion">
          <ul>
            <li>
              <div>
                <h1 className="h1-1" style={{fontFamily: 'game_of_squidsregular'}}>social <br className="mobile-hide" /> mining</h1>
                <p style={{ fontFamily: 'sans-serif', color:' #ffff', fontWeight: '300', height: '100px', width: '30vw' }}>EARN FREE TOKENS</p>
                <Link href="/social-mining" >
                <a>
                  <span className="span1" style={{fontFamily: 'game_of_squidsregular', fontWeight: 500, color:' #ffff'}}>Free Tokens &gt;</span>
                </a>
                  </Link>
              </div>
            </li>
            <li>
              <div>
                <h1 className="ox h1-2" style={{fontFamily: 'game_of_squidsregular'}}>ox <br className="mobile-hide" /> game</h1>
                <p style={{  fontFamily: 'sans-serif', color:' #ffff', fontWeight: '300', height: '100px', width: '30vw' }}>WIN MONEY</p>
                <Link href="/ox">
                <a>
                  <span className="span2" style={{fontFamily: 'game_of_squidsregular'}}>Play Now &gt;</span>
                </a>
                </Link>
              </div>
            </li>
            <li>
              <a href="#">
              </a><div><a href="#">
              <h1 className="ox h1-3" style={{fontFamily: 'game_of_squidsregular'}}>sosx <br className="mobile-hide" /> nft</h1>
              <p style={{ fontFamily: 'sans-serif', color:' #ffff', fontWeight: '300', height: '100px', width: '30vw' }}>BATTLE X MONEY</p>
                </a><a href="#">
                  <span className="span3" style={{fontFamily: 'game_of_squidsregular'}}>Coming Soon...</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <section className="footer mobile-hide">
          <div className="social-link">
            <a href="https://www.instagram.com/socialxtoken/?hl=en" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx.io/img/instagram-social-icon@2x.png" /></a>
            <a href="https://twitter.com/socialx_io" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx.io/img/twittericon@2x.png" /></a>
            <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx.io/img/youtube-social-icon@2x.png" /></a>
            <a href="https://t.me/SocialXToken" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx.io/img/telegram-social-icon@2x.png" /></a>
            <a href="https://bscscan.com/address/0xC27f6473a04b2bdeE0bf650f153F1D8720AA3062" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx.io/img/etherscan@2x.png" /></a>
            <a href="https://www.coingecko.com/en/coins/socialx" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx.io/img/geckoicon@2x.png" /></a>
            <a href="https://coinmarketcap.com/currencies/socialx-2/" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx.io/img/cmcicon@2x.png" /></a>
            <a href="https://pancakeswap.finance/swap" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx.io/img/pancakeswapicon@2x.png" /></a>
            <a href="https://www.tiktok.com/@socialxtoken" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx.io/img/tiktokicon@2x.png" /></a>
          </div>
          <div className="contract">0xeE52def4a2683E68ba8aEcDA8219004c4aF376DF</div>
          <div className="legal-link">
            <a href="privacy.html">Privacy</a> <a href="mailto:support@socialx.io">support@socialx.io</a>
            <a className="slipage-text">*set slippage tolarance 25%*</a>
            <Link href="/aboutsosx">
                  <a className="utility-button">ABOUT SOSX</a>
                  </Link>
          </div>
        </section>
        <nav className="navbar navbar-expand-lg2  center-brand static-nav mobile-show">
          <div className="container">
            <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#xenav">
              <i className="fas fa-bars fa-2x" />
            </button>
            <div className="collapse navbar-collapse" id="xenav">
              <div className="footer">
                <div className="social-link text-center">
                  <a href="https://www.instagram.com/socialxtoken/?hl=en" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx.io/img/instagram-social-icon@2x.png" /></a>
                  <a href="https://twitter.com/socialx_io" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx.io/img/twittericon@2x.png" /></a>
                  <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx.io/img/youtube-social-icon@2x.png" /></a>
                  <a href="https://t.me/SocialXToken" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx.io/img/telegram-social-icon@2x.png" /></a>
                  <a href="https://bscscan.com/address/0xC27f6473a04b2bdeE0bf650f153F1D8720AA3062" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx.io/img/etherscan@2x.png" /></a>
                  <a href="https://www.coingecko.com/en/coins/socialx" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx.io/img/geckoicon@2x.png" /></a>
                  <a href="https://coinmarketcap.com/currencies/socialx-2/" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx.io/img/cmcicon@2x.png" /></a>
                  <a href="https://pancakeswap.finance/swap" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx.io/img/pancakeswapicon@2x.png" /></a>
                  <a href="https://www.tiktok.com/@socialxtoken" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx.io/img/tiktokicon@2x.png" /></a>
                </div>
                <br />
                <div className="contract">0xeE52def4a2683E68ba8aEcDA8219004c4aF376DF</div>
                <div className="legal-link">
                  <a href="privacy">Privacy</a> <a href="mailto:support@socialx.io">support@socialx.io</a>
                  <a className="slipage-text">*set slippage tolarance 25%*</a>
                  <Link href="/aboutsosx">
                  <a className="utility-button">ABOUT SOSX</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        
        </nav>
      </div>
    )
}