import { useState } from "react";
import { useMediaPredicate } from "react-media-hook";
import { useTranslation } from 'contexts/Localization';
import { Trans } from "react-i18next";
import Link from "next/link";

const menus = {
    showA: false,
    showB: false,
    showC: false,
    showD: false,
    showE: false,
    showF: false,
    showG: false,
    showH: false,
    showI: false,
    showJ: false,
    showK: false,
    showL: false,
  };

export default function Faq() {
    const [showItem , setShowItem ] = useState({...menus});
    const { t } = useTranslation();
    const { showA, showB, showC,showD, showE, showF, showG,showH, showI, showJ, showK, showL } = showItem;

    const mystyle=(type)=> {return {animation:" rotateMenu .5s ease-in-out forwards" ,display: type ? "": "none" ,transition: "all 0.5s ease"}}
    const toggleMenu = (event, type) => {
        event.stopPropagation();
    
        setShowItem({
          ...menus,
          [type]: !showItem[type]
        });
      };

      const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
      const biggest1400 = useMediaPredicate("(max-width: 1400px)");
  
      return (

        <div className={`${biggerThan1400 && "container"} pt-3 ${biggest1400 && "container-fluid"}`} >
 {/* <nav className="justify-content-between navbar navbar-expand-lg fixed-top center-brand static-nav">
    <a className="navbar-brand" href="https://socialx.io/">
      <img src="https://socialx.io/img/logo.png" alt="logo" className="logo-default" />
    </a>
    <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#xenav">
      <i className="fas fa-bars fa-2x" />
    </button>
    <div className="collapse navbar-collapse" id="xenav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
        <Link href="/social-mining">
          <a className="nav-link">SOCIAL MINING</a>
        </Link>
        </li>
        <li className="nav-item">
        <Link href="/ox">
          <a className="nav-link">OX GAME</a>
        </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#nft"> <span style={{color: '#5b5b5b'}}>NFT</span></a>
        </li>
        <li className="nav-item">
        <Link href="/aboutsosx">
          <a className="nav-link">ABOUT SOSX</a>
        </Link>
        </li>
        <li className="nav-item">
        <Link href="/experiment">
          <a className="nav-link">EXPERIMENT</a>
        </Link>
        </li>
        <li className="nav-item">
        <Link href="/faq">
          <a className="nav-link">FAQ</a>
        </Link>
        </li>
        <li className="nav-item mobile-hide">
          <a href="https://app.socialx.io/swap#">
            <button type="button" className="btn btn-primary btn-lg">LAUNCH DAPPS</button>
          </a>
        </li>
        <li className="nav-item mobile-show">
          <a className="nav-link" href="https://app.socialx.io/swap#"> LAUNCH DAPPS</a>
        </li>
      </ul>
    </div>
  </nav> */}

         <div className="section">
                    <h5 className="section-heading">{t("Frequenty Asked Question (FAQ)")}</h5>
                    <p className="p-main">{t("Everything you need to know about SOSX is just one click away")}.</p>

                    <div className="faq-list row">



                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showA")} className="faq-title">
                                    {t("Which wallets can I use to buy on PancakeSwap or SOSX swap?")}

                                </h3>
                            </div>
                            <div  style={mystyle(showA)}
                            className="faq-header ">
                                <div className="text-white p-1 hug">
                                    <a href="https://pancakeswap.finance/swap">
                                    {t("https://pancakeswap.finance.. </a> MetaMask & TrustWallet - *MetaMask most recommended*")}
                                </a>
                                </div>
                            </div>
                        </div>
                      

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showB")} className="faq-title">
                                    {t("Which Network is the ACA Token on?")}
                                </h3>
                            </div>
                            <div style={mystyle(showB)} className="faq-header">
                                <div className="text-white p-1 hug">
                                    {t("Binance Smart Chain Network")}
                                </div>
                            </div>
                        </div>

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showC")} className="faq-title">
                                    {t("How to buy SOSX tokens with MetaMask?")}
                                </h3>
                            </div>
                            <div style={mystyle(showC)} className="faq-header">
                                <div className="text-white p-1 hug"> 
                                    <p>1. {t("Create a metamask wallet")}</p>
                                    <p>2. {t("Add the BSC network")}</p>
                                    <p>3. {t("Transfer BNB into Metamask")}</p>
                                    <p>4. {t("Go to")} <a
                                        href="https://pancakeswap.finance/swap">https://pancakeswap...</a>
                                    </p>
                                    <p>5. {t("Connect your MetaMask wallet")}</p>
                                    <p>6. <Trans i18nKey="description.part1">The "from" is BNB and "to" is the SOSX token contract <a
                                        href="https://bscscan.com/token/0xee52def4a2683e68ba8aecda8219004c4af376df">
                                        (https://bscscan.com/token...)
                                    </a> can be
                                        found here, just copy and paste</Trans></p>
                                    <p>7. {t("Choose the amount of BNB you want to use to buy SOSX")}</p>
                                </div>
                            </div>
                        </div>

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showD")} className="faq-title">
                                    {t("Can anyone participate in the game?")}
                                </h3>
                            </div>
                            <div style={mystyle(showD)} className="faq-header">
                                <div className="text-white p-1 hug"><Trans i18nKey="description.part1">
                                    Yes, anyone can record them selves for the challenge videos. But to participate
                                    in the
                                    challenge
                                    creating and voting you will have to have some SOSX token staked. The amount of
                                    SOSX staked
                                    will
                                    determine the level of governance you have.
                                </Trans></div>
                            </div>
                        </div>

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showE")} className="faq-title">
                                    {t("Can I do the daily activity to receive free SOSX token without buying any?")}
                                </h3>
                            </div>
                            <div style={mystyle(showE)} className="faq-header">
                                <div className="text-white p-1 hug"><Trans i18nKey="description.part1">
                                    Yes, the whole point of our social mining system is to make Crypto and SOSX
                                    token availble
                                    even to
                                    user who can’t purchase crypto. Just make a MetaMask wallet, complete the
                                    activity and
                                    redeem your SOSX tokens.
                                </Trans></div>
                            </div>
                        </div>

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showF")} className="faq-title">
                                    {t("Do you have an affiliate program?")}
                                </h3>
                            </div>
                            <div style={mystyle(showF)} className="faq-header">
                                <div className="text-white p-1 hug"><Trans i18nKey="description.part1">
                                    Yes, you can get paid 25% on all social mining rewards and 10% on all staking
                                    rewards from
                                    your affiliates.
                                    To get your affiliate link please visit. <a
                                        href="https://app.socialx.io/referrals">https://app.socialx.io/referrals</a>
                                </Trans></div>
                            </div>
                        </div>

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showG")} className="faq-title">
                                    {t("How can I sell my SOSX token?")}
                                </h3>
                            </div>
                            <div style={mystyle(showG)} className="faq-header">
                                <div className="text-white p-1 hug">
                                <Trans i18nKey="description.part1">
                                    You can sell your SOSX on <a
                                        href="https://pancakeswap.finance/swap">https://pancakeswap... </a>
                                    or <a href="https://socialx.io/">socialx.io</a> swap
                                </Trans>
                                </div>
                            </div>
                        </div>

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showH")} className="faq-title">
                                    {t("Will the Fee’s ever be reduced?")}
                                </h3>
                            </div>
                            <div style={mystyle(showH)} className="faq-header">
                                <div className="text-white p-1 hug">
                                    {t("No, the fee’s are exactly what power the whole SOSX gaming pool and rewards system")}.
                                </div>
                            </div>
                        </div>

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showI")} className="faq-title">
                                    {t("How do I participate in the game?")}
                                </h3>
                            </div>
                            <div style={mystyle(showI)} className="faq-header">
                            <div className="text-white p-1 hug">
                            {t("Each tier has an x amount you must hold and stake to gain access to the Dao Governance to participate in the different game roles")}
                            </div>
                            </div>
                        </div>

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showJ")} className="faq-title">
                                    {t("What are all the ways to get paid from holding SOSX token?")}
                                </h3>
                            </div>
                            <div style={mystyle(showJ)} className="faq-header">
                                <div className="text-white p-1 hug">
                                    {t("SOSX pays in 8 different ways. Visit this link for details")}
                                </div>
                            </div>
                        </div>

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showK")} className="faq-title">
                                    {t("How do we insure this is not a rug pull and it’s safe?")}
                                </h3>
                            </div>
                            <div style={mystyle(showK)} className="faq-header">
                                <div className="text-white p-1 hug">
                                <Trans i18nKey="description.part1">
                                    Socialx has locked majority of it’s liquidity with a third party LP locker
                                    Unicrypt for
                                    6 month periods at a time. This insures our investors a safe investment and no
                                    possible
                                    rugpulls. Visit link for detials.
                                    <br />
                                    <a
                                        href="https://app.unicrypt.network/amm/pancake-v2/pair/0x31550eb6b4628ad83ee71ca1a05df4a40f622ba6">
                                        https://app.unicrypt.network...
                                    </a>
                                    </Trans>
                                </div>
                            </div>
                        </div>

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showL")} className="faq-title">
                                    {t("When do I see my affiliate commissions?")}
                                </h3>
                            </div>
                            <div style={mystyle(showL)} className="faq-header">
                                <div className="text-white p-1 hug">
                                    <p>
                                {t("Once you send out your affiliate link to someone they must at least do 1 of the 2 to register on your end as an active affiliate")}.
                                </p>
                                    <br />
                                    <p>1 . {t("Stake any amount of SOSX token")}.</p>
                                    <p>2. {"Do at least 1 day of social mining post’s"}</p>
                                </div>
                            </div>
                        </div>

                    </div>
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
