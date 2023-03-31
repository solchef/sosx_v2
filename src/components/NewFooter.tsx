import { useTranslation } from "contexts/Localization";
import Link from "next/link"
import React from "react"

const NewFooter = () => {
  const { t } = useTranslation();

    return (
        <>
        <section className="footer mobile-hide">
        <div className="social-link">
          <a href="https://www.instagram.com/socialxtoken/?hl=en" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx-x.vercel.app/img/instagram-social-icon@2x.png" /></a>
          <a href="https://twitter.com/socialx_io" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx-x.vercel.app/img/twittericon@2x.png" /></a>
          <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx-x.vercel.app/img/youtube-social-icon@2x.png" /></a>
          <a href="https://t.me/SocialXToken" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx-x.vercel.app/img/telegram-social-icon@2x.png" /></a>
          <a href="https://bscscan.com/address/0xC27f6473a04b2bdeE0bf650f153F1D8720AA3062" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx-x.vercel.app/img/etherscan@2x.png" /></a>
          <a href="https://www.coingecko.com/en/coins/socialx" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx-x.vercel.app/img/geckoicon@2x.png" /></a>
          <a href="https://coinmarketcap.com/currencies/socialx-2/" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx-x.vercel.app/img/cmcicon@2x.png" /></a>
          <a href="https://pancakeswap.finance/swap" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx-x.vercel.app/img/pancakeswapicon@2x.png" /></a>
          <a href="https://www.tiktok.com/@socialxtoken" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx-x.vercel.app/img/tiktokicon@2x.png" /></a>
        </div>
        <div className="contract">0xeE52def4a2683E68ba8aEcDA8219004c4aF376DF</div>
        <div className="legal-link">
          <a href="privacy.html">Privacy</a> <a href="mailto:support@socialx.io">support@socialx.io</a>
          <a className="slipage-text">*set slippage tolarance 25%*</a>
          <Link href="/aboutsosx">
                <a className="utility-button">{t("ABOUT SOSX")}</a>
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
                <a href="https://www.instagram.com/socialxtoken/?hl=en" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx-x.vercel.app/img/instagram-social-icon@2x.png" /></a>
                <a href="https://twitter.com/socialx_io" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx-x.vercel.app/img/twittericon@2x.png" /></a>
                <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx-x.vercel.app/img/youtube-social-icon@2x.png" /></a>
                <a href="https://t.me/SocialXToken" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx-x.vercel.app/img/telegram-social-icon@2x.png" /></a>
                <a href="https://bscscan.com/address/0xC27f6473a04b2bdeE0bf650f153F1D8720AA3062" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx-x.vercel.app/img/etherscan@2x.png" /></a>
                <a href="https://www.coingecko.com/en/coins/socialx" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx-x.vercel.app/img/geckoicon@2x.png" /></a>
                <a href="https://coinmarketcap.com/currencies/socialx-2/" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx-x.vercel.app/img/cmcicon@2x.png" /></a>
                <a href="https://pancakeswap.finance/swap" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx-x.vercel.app/img/pancakeswapicon@2x.png" /></a>
                <a href="https://www.tiktok.com/@socialxtoken" className="social-icon button" style={{width: '30px', height:'30px'}}><img style={{width: '30px', height:'30px'}} src="https://socialx-x.vercel.app/img/tiktokicon@2x.png" /></a>
              </div>
              <br />
              <div className="contract">0xeE52def4a2683E68ba8aEcDA8219004c4aF376DF</div>
              <div className="legal-link">
                <a href="privacy">Privacy</a> <a href="mailto:support@socialx.io">support@socialx.io</a>
                <a className="slipage-text">*set slippage tolarance 25%*</a>
                <Link href="/aboutsosx">
                <a className="utility-button">{t("ABOUT SOSX")}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      
      </nav>
      </>
    )
}

export default NewFooter