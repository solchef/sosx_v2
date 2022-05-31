import Link from "next/link"
import React from "react"
import NewFooter from "components/NewFooter"
import NavHeader from "components/newHomeHeader"
import { useTranslation } from "contexts/Localization"
import Trans from "components/Trans"

export const Experiment = () => {
  const { t } = useTranslation();
  return (
        <div>
          <NavHeader />
  <section className="experimentmain-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-6 mobile-show">
          <img src="https://socialx.io/img/social-mining-experiment-banner.png"  alt="" />
        </div>
        <div className="col-md-6">
          <div className="experiment-title custom-pt">
            <h3>{t("SUBJECTS SHALL BE GETTING COMPENSATED FOR AS LONG THEY WISH TO PARTICIPATE")}</h3>
            <p>
              {t("This is the world's first third-party social mining experiment that compensates its participant with FREE SocialX tokens daily! We require our volunteers to commit to 3 simple tasks every 24 hours, for a minimum of 30 day. Our brilliant crypto scientist has perfected a social-driven tokenomics system that generates consistent growth and supply at an exponential rate while maintaining a low-risk investment that protects its holder. Before we get deeper into our study, let us go over what will be required from our subject every single day for 30 days.")}
              </p>
          </div>
        </div>
        <div className="col-md-6 mobile-hide">
          <img src="https://socialx.io/img/social-mining-experiment-banner.png"  alt="" />
        </div>
      </div>
    </div>
  </section>
  <div className="steps-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-4">
          <div className="card2">
            <img src="https://socialx.io/img/share-img.png" className="steps-img" />
            <h1>{t("SHARE")}</h1>
            <p className="fs-12">{t("Share given post on your social media every 24 hours.")}</p>
          </div>
        </div>
        <div className="col-md-4 col-4">
          <div className="card2">
            <img src="https://socialx.io/img/inv-img.png" className="steps-img" />
            <h1>{t("INVITE")}</h1>
            <p className="fs-12">{t("Attempt to have one person join socialx everyday")}</p>
          </div>
        </div>
        <div className="col-md-4 col-4">
          <div className="card2">
            <img src="https://socialx.io/img/collect-img.png" className="steps-img" />
            <h1>{t("COLLECT")}</h1>
            <p className="fs-12">{t("Log your progress and claim your free SOSX Tokens")}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="experiment1-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="experiment-title">
            <h3>{t("DYNAMIC PRICE FORMULA")}</h3>
            <p>{t("The formula behind SocialX's steady growth in value allows the token to be engineered as a self-fueled tokenomics structure that redistributes its selling fees back into its liquidity, as well it is also a community of mining subjects and holders. This self-powering configuration ensures steady growth of the token, the longevity of holders, and finally, a robust community that gets rewarded every day, making SocialX an infinite wealth-generating machine.")}
              </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card3">
            <img src="https://socialx.io/img/buyer-dynamicprice.png" className="steps-img" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card3">
            <img src="https://socialx.io/img/seller-dynamicprice.png" className="steps-img" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="sosxpayout2-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="experiment-title" id="sosx8ways">
            <h3>💰 {t("SOSX PAYS OUT IN 8 WAYS")} 💰</h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3 col-6">
            <div className="card2">
              <img src="https://socialx.io/img/reflections-img.png" className="steps-img" />
              <h1>{t("REFLECTIONS")}</h1>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card2">
              <img src="https://socialx.io/img/mining-img.png" className="steps-img" />
              <h1>{t("SOCIAL MINING")}</h1>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card2">
              <img src="https://socialx.io/img/affiliate-img.png" className="steps-img" />
              <h1>{t("AFFILIATE")}</h1>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card2">
              <img src="https://socialx.io/img/staking-img.png" className="steps-img" />
              <h1>{t("STAKING")}</h1>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card2">
              <img src="https://socialx.io/img/game-img.png" className="steps-img" />
              <h1>{t("GAME MONEY")}</h1>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card2">
              <img src="https://socialx.io/img/pool-img.png" className="steps-img" />
              <h1>{t("LIQUIDITY POOL")}</h1>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card2">
              <img src="https://socialx.io/img/sosxprice-img.png" className="steps-img" />
              <h1>{t("RISE IN SOSX")} <br className="mobile-show" /> {t("PRICE")}</h1>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card2">
              <img src="https://socialx.io/img/nft-img.png" className="steps-img" />
              <h1>NFT <br className="mobile-show" />({t("COMING SOON")})</h1>
            </div>
          </div>
        </div>
      </div>
    </div></section>
  <section className="experiment2-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="experiment-title">
            <h3>{t("HOW SOCIALX PROTECTS YOUR INVESTMENT")}</h3>
            <p>
              {t("SocialX was designed to ensure that the price can never bottom out to zero; even if every single SocialX holder happens to sell simultaneously, the price will still not go to zero! Alternatively, the token is designed to attract long-time holders while keeping whales away who will not dare to dump for a small 27% return due to SocialX's Dynamic Price Formula. The 2% distribution fee rewards current SocialX holders assuring a constant balance growth for our holders. So this means the price of the coin psychologically will always go up.")}
              </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 col-6">
          <div className="card2">
            <img src="https://socialx.io/img/gas-free.svg" className="steps-img" />
            <h1>{t("GAS FEE FREE ON REWARDS")}</h1>
          </div>
        </div>
        <div className="col-md-4 col-6">
          <div className="card2">
            <img src="https://socialx.io/img/autolock.svg" className="steps-img" />
            <h1>{t("AUTO-LOCKED LIQUIDITY")}</h1>
          </div>
        </div>
        <div className="col-md-4 col-6">
          <div className="card2">
            <img src="https://socialx.io/img/deflat.svg" className="steps-img" />
            <h1>{t("DEFLATIONARY TOKENOMICS")}</h1>
          </div>
        </div>
        <div className="col-md-4 col-6">
          <div className="card2">
            <img src="https://socialx.io/img/safe.svg" className="steps-img" />
            <h1>{t("100% SAFE & RUG-PROOF")}</h1>
          </div>
        </div>
        <div className="col-md-4 col-6">
          <div className="card2">
            <img src="https://socialx.io/img/antiwhale.svg" className="steps-img" />
            <h1>{t('ANTI-WHALE')}
              <br className="mobile-show" />{t("DUMP")}</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="experiment3-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="experiment-title">
            <h3>{t("TELL 1 FRIEND A DAY, WHO TELLS 1 NEW FRIEND A DAY X 30 DAYS")} <br className="mobile-hide" /> = {t("1000X + PROFIT")}</h3>
            <p>
             {t("If each individual attempts to show a minimum of one new person the experiment daily, and that one new person commits to the same experiment everyday; we have calculated that a single identity can be the connection between 536,870,912 individuals on SocialX.")}
              </p> <br />
            <p>
              {t("Let us imagine a scenario where each individual only purchased a simple dollars worth of SocialX Token; we would be looking at a market cap equal to $536,870,912. Now let us visualize another scenario where only ten individuals completed the experiment in a 30 day period we would represent a $5.36 Billion market cap!")}
              </p> <br />
            <p>
              {t("If each person only bought $1 worth of SocialX tokens, total market cap of the coin would equal $536,870,912. If only 10 people out of all the SocialX token holders do this in 30 days, that’s $5.36 Billion market cap!")}
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card4">
            <h1>{t("SCENARIO")} A</h1>
            <span>5.36B MARKET CAP = $5.36/SOSX = <span style={{color: '#ff00cb'}}>53,360X ROI.</span></span>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card4">
            <h1>{t("SCENARIO")} B</h1>
            <span>$1 {t("INVESTED")} = $2,668 {t("PROFIT")} = <span style={{color: '#ff00cb'}}>2,668X ROI {t("IN 30 DAYS")}</span></span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mobile-hide">
          <img src="https://socialx.io/img/30daychart.png"  className="steps-img" />
        </div>
        <div className="col-md-12 mobile-show">
          <img src="https://socialx.io/img/30daychart-mob.png"  className="steps-img" />
        </div>
      </div>
    </div>
  </section>
  <NewFooter />
  </div>

    )
}