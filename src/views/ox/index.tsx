import Link from "next/link"
import React from "react"
import NewFooter from "components/NewFooter"
import NavHeader from "components/newHomeHeader"
import Trans from 'components/Trans'
import { useTranslation } from "contexts/Localization"

export const OX = () => {
  const { t } = useTranslation();

    return (
      <div>
  <NavHeader />
  {/* /.navbar */}
  {/*hero section*/}
  <header className="hero-pink hero-banner">
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
      <div className="row text-center justify-content-center">
        <div className="col-md-10">
          <div className="hero-pink">
            <h1 className="ox" style={{fontFamily: 'game_of_squidsregular', fontWeight: 500}}>ox {t("game")}</h1>
      <style jsx>{`
.ox {
  font-size: 128px !important;
}
`}</style>


            <p>{t("WHAT’S THE CRAZIEST THING YOU WOULD RECORD YOURSELF DO FOR MONEY?")}</p>
            <div className="btn-group">
              <Link href="/xgame">
              <a id="dapp_url_game" className="btn">{t("I WANT TO PLAY")}</a>
              </Link>

            </div>
          </div>
          <img src="https://socialx.io/img/sosx-prizepool-banner2.png" />
        </div>
      </div>
    </div>
    {/*/.container*/}
  </header>
  {/*/.hero section*/}
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="card5">
          <img src="https://socialx.io/img/rule1-img.png" className="steps-img" />
          <h1>{t("RULE")} # 1</h1>
          <p className="fs-12">{t("First person to complete the voted challenge by the SOSX community and submit the video on socialx.io and post it on their social media wins all the prize money!")}</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card5">
          <img src="https://socialx.io/img/rule2-img.png" className="steps-img" />
          <h1>{t("RULE")} # 2</h1>
          <p className="fs-12">{t("If the 1st person who submitted the video failed to meet the conditions or incorrectly completed the challenge, the 2nd in line until voted correct takes the prize.")}</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card5">
          <img src="https://socialx.io/img/rule3-img.png" className="steps-img" />
          <h1>{t("RULE")} # 3</h1>
          <p className="fs-12">{t("Prize money will be 100% of the 10% collected on all buy orders from the previous days 24 hour traded volume.")}</p>
        </div>
      </div>
    </div>
  </div>
  <section className="dao-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>DAOX</h1>
          <img src="https://socialx.io/img/daox-img.png" className="daox-img" />
        </div>
        <div className="col-md-4">
          <div className="dao-card">
            <h3>{t("LEVEL")} 1</h3>
            <h4>{t("STAKING 1+ SOSX Tokens")}</h4>
            <p>{t("Vote 1 to top 3 challenges")}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dao-card">
            <h3>{t("LEVEL")} 2</h3>
            <h4>{t("STAKING 100,000+ SOSX Tokens")}</h4>
            <p>{t("Vote 1 to top 3 challenges")}
              <br />{t("create challenges")}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dao-card">
            <h3>{t("LEVEL")} 3</h3>
            <h4>{t("STAKING 1,000,000+ SOSX Tokens")}</h4>
            <p>{t("Final vote from top 3 challenges")}
              <br />{t("create challenges")}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="submitchallenge-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="title-pink custom-pt">
            <h3>{t("Submit Challenges")}</h3>
            <p>{t("8 hours to submit the challenges created by the Level 2 & 3 DAO members.")}</p>
          </div>
        </div>
        <div className="col-md-6">
          <img src="https://socialx.io/img/submitchallenge-banner.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section className="votetopchallenge-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-6 mobile-hide">
          <img src="https://socialx.io/img/votetopchallenge-banner.png" alt="" />
        </div>
        <div className="col-md-6 custom-pt">
          <div className="title-pink custom-pt">
            <h3>{t("Vote Top Challenges")}</h3>
            <p>{t("8 hours to vote the top 3 challenges for the challengers by all level community.")} </p>
          </div>
        </div>
        <div className="col-md-6 mobile-show">
          <img src="https://socialx.io/img/votetopchallenge-banner.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section className="votefinalchallenge-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="title-pink custom-pt">
            <h3>{t("Vote Final Challenge")}</h3>
            <p>{t("8 hours to vote the final challenges of the top 3 by the Level 3 DAO members.")}</p> <br />
          </div>
        </div>
        <div className="col-md-6">
          <img src="https://socialx.io/img/votefinalchallenge-banner.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section className="completechallenge-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-6 mobile-hide">
          <img src="https://socialx.io/img/completechallenge-banner.png" alt="" />
        </div>
        <div className="col-md-6 custom-pt">
          <div className="title-pink custom-pt">
            <h3>{t("Complete Challenge")}</h3>
            <p> 
              <Trans>The challenge will stay up until someone completed it. No new challenge will get voted until
              the previous one is completed.</Trans>
            </p>
          </div>
          <div className="col-md-6 mobile-show">
            <img src="https://socialx.io/img/completechallenge-banner.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="sosxwinner-sec">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="title-pink">
            <h3>{t("SOSX WINNERS")}</h3>
            <p><Trans>All submitted challenge videos that win, will be permanently uploaded to the socialx media website and YouTube channel. All prize money will be recorded through the blockchain and verified for 100% transparency!</Trans></p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img src="https://socialx.io/img/previouswinner-banner.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section className="sosxrule-sec" id="feature">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://socialx.io/img/rules-banner.png" alt="" />
        </div>
        <div className="col-md-6 pl-5">
          <h3><Trans>THERE ARE NO RULES TO THE CHALLENGES EXCEPT NO CHALLENGE CAN BE MADE TO CAUSE INTENTIONAL HARM OR LEADING TO DEATH OR KILL.</Trans></h3>
          <span className="ox" style={{fontFamily: 'game_of_squidsregular', fontWeight: 500}}>- {t("sosx team")}</span>
          <style jsx>{`
        .ox {
          font-size: 25px !important;
        }
      `}</style>
        </div>
      </div>
    </div>
  </section>
  {/*copyright*/}
  <NewFooter />
</div>

    
    )
}