import Link from "next/link"
import React from "react"
import NewFooter from "components/NewFooter"
import NavHeader from "components/newHomeHeader"
import { useTranslation } from "contexts/Localization"
import Trans from 'components/Trans'

export const SMining = () => {
  const { t } = useTranslation();

    return (
    <div>
  <NavHeader />
  {/*hero section*/}
  <header className="hero-section-mining">
    {/*bg animation*/}
    <div className="main-line">
      <div className="main-line-w">
        <div className="line-num one" />
        <div className="line-num two" />
        <div className="line-num three" />
        <div className="line-num four" />
      </div>
    </div>
    {/*bg animation*/}
    <div className="container">
      <div className="row">
        <div className="col-md-7 pos-r mobile-show">
          <div className="row justify-content-md-center justify-content-sm-center">
            <div className="col-md-auto col-sm-auto">
              <div className="hero-app-mock">
                {/*mobile inside image*/}
                <img src="https://socialx.io/img/mining-main.png" alt="" />
              </div>
              {/*/.banner-app-mock*/}
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="row h-100">
            <div className="col-md-12 align-self-center">
              <div className="hero-content" data-aos-easing="ease-out-cubic" data-aos-duration={2000}>
                <h1>{t("SOCIAL MINING")}</h1>
                <p> {t("Earn 500 SOSX token daily and earn up to 35% commission from your friend's earnings & transactions")}</p>
                <div className="btn-group">
                  <Link href="/x-mining" >
                  <a className="btn">{t("Get Free Tokens")}</a>
                  </Link>
                </div>
              </div>
              {/*/.hero-content*/}
            </div>
          </div>
        </div>
        <div className="col-md-7 pos-r mobile-hide">
          <div className="row justify-content-md-center justify-content-sm-center">
            <div className="col-md-auto col-sm-auto">
              <div className="hero-app-mock">
                {/*mobile inside image*/}
                <img src="https://socialx.io/img/mining-main.png" alt="" />
              </div>
              {/*/.banner-app-mock*/}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*/.container*/}
  </header>
  {/*/.hero section*/}
  <section className="app-feature-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-4">
          <div className="card">
            <img src="https://socialx.io/img/share-img.png" className="steps-img" />
            <h1>{t("SHARE")}</h1>
            <p className="fs-12">{t("Share given post on your social media every 24 hours.")}.</p>
          </div>
        </div>
        <div className="col-md-4 col-4">
          <div className="card">
            <img src="https://socialx.io/img/inv-img.png" className="steps-img" />
            <h1>{t("INVITE")}</h1>
            <p className="fs-12">{t("Attempt to have one person join socialx everyday")}.</p>
          </div>
        </div>
        <div className="col-md-4 col-4">
          <div className="card">
            <img src="https://socialx.io/img/collect-img.png" className="steps-img" />
            <h1>{t("COLLECT")}</h1>
            <p className="fs-12">{t("Log your progress and claim your free SOSX Tokens")}. </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="share-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="title-green custom-pt">
            <span>{t("Step")} 1</span>
            <h3>{t("Share Post")}</h3>
            <p>{t("Earn a daily 500 SOSX tokens by sharing a social media posts")}.</p>
          </div>
        </div>
        <div className="col-md-6">
          <img src="https://socialx.io/img/sharepost-banner.png" />
        </div>
      </div>
    </div>
  </section>
  <section className="app-feature-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-6 mobile-hide">
          <img src="https://socialx.io/img/invite-banner.png" />
        </div>
        <div className="col-md-6 custom-pt">
          <div className="title-green custom-pt">
            <span className="main-green">{t("Step")} 2</span>
            <h3>{t("Invite Friends")}</h3>
            <p>{t("Invite and earn up to 35% commission from your friends staking and social mining transactions")}.</p>
          </div>
          <div className="col-md-6 mobile-show">
            <img src="https://socialx.io/img/invite-banner.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="collect-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="title-green custom-pt">
            <span className="main-green">{t("Step")} 3</span>
            <h3>{t("Collect Rewards")}</h3>
            <p>
            <Trans i18nKey="description.part1">Provide your Metamask wallet, email address and the direct link to the post you shared. The SOSX Tokens will be distributed to your wallet every 24 hours as our system reviews the posts</Trans>.
            </p>
            <a href="https://www.instagram.com/p/CYEk583FoC-/">
              <span>{t("Don’t have a MetaMask wallet?")}</span>
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <img src="https://socialx.io/img/collect-banner.png"  alt="" />
        </div>
      </div>
    </div>
  </section>
  <section className="sosxpayout-sec">
    <div className="container">  
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h3>💰 {t("SOSX PAYS OUT IN 8 WAYS")} 💰</h3>
        </div>
        <div className="col-md-3 col-6">
          <div className="cardpayout">
            <img src="https://socialx.io/img/reflections-img.png" className="steps-img" />
            <h1>{t("REFLECTIONS")}</h1>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="cardpayout">
            <img src="https://socialx.io/img/mining-img.png" className="steps-img" />
            <h1>{t("SOCIAL MINING")}</h1>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="cardpayout">
            <img src="https://socialx.io/img/affiliate-img.png" className="steps-img" />
            <h1>{t("AFFILIATE")}</h1>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="cardpayout">
            <img src="https://socialx.io/img/staking-img.png" className="steps-img" />
            <h1>{t("STAKING")}</h1>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="cardpayout">
            <img src="https://socialx.io/img/game-img.png" className="steps-img" />
            <h1>{t("GAME MONEY")}</h1>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="cardpayout">
            <img src="https://socialx.io/img/pool-img.png" className="steps-img" />
            <h1>{t("LIQUIDITY POOL")}</h1>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="cardpayout">
            <img src="https://socialx.io/img/sosxprice-img.png" className="steps-img" />
            <h1>
              {t("RISE IN")} <br className="mobile-show" /> {t("SOSX PRICE")}</h1>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="cardpayout">
            <img src="https://socialx.io/img/nft-img.png" className="steps-img" />
            <h1>NFT <br className="mobile-show" />({t("COMING SOON")})</h1>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
      <Link href="/x-mining" >
        <a>
          <button type="button" className="btn btn-secondary btn-lg mt-4">{t("Claim Your Tokens")}</button>
        </a>
        </Link>
      </div>
    </div>
  </section>
  <NewFooter />
  </div>

    )
}