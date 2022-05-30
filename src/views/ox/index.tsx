import React from "react"


export const OX = () => {
    return (
      <div>
  <nav className="justify-content-between navbar navbar-expand-lg fixed-top center-brand static-nav">
    <a className="navbar-brand" href="https://socialx.io/">
      <img src="https://socialx.io/img/logo.png" alt="logo" className="logo-default" />
    </a>
    <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#xenav">
      <i className="fas fa-bars fa-2x" />
    </button>
    <div className="collapse navbar-collapse" id="xenav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="socialmining.html">SOCIAL MINING</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="oxgame.html">OX GAME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#nft"> <span style={{color: '#5b5b5b'}}>NFT</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="aboutsosx.html">ABOUT SOSX</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="experiment.html">EXPERIMENT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="faq.html"> FAQ </a>
        </li>
        <li className="nav-item mobile-hide">
          <a href="#" id="dapp_url_swap">
            <button type="button" className="btn btn-primary btn-lg">LAUNCH DAPPS</button>
          </a>
        </li>
        <li className="nav-item mobile-show">
          <a className="nav-link" href="#" id="dapp_url_swap"> LAUNCH DAPPS</a>
        </li>
      </ul>
    </div>
  </nav>
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
            <h1 className="ox" style={{fontFamily: 'game_of_squidsregular', fontWeight: 500}}>ox game</h1>
      <style jsx>{`
.ox {
  font-size: 128px !important;
}
`}</style>


            <p>WHAT’S THE CRAZIEST THING YOU WOULD RECORD YOURSELF DO FOR MONEY?</p>
            <div className="btn-group">
              <a href="#" id="dapp_url_game" className="btn">I WANT TO PLAY</a>
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
          <h1>RULE # 1</h1>
          <p className="fs-12">First person to complete the voted challenge by the SOSX community and submit the video on
            socialx.io
            and post it on their social media wins all the prize money!</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card5">
          <img src="https://socialx.io/img/rule2-img.png" className="steps-img" />
          <h1>RULE # 2</h1>
          <p className="fs-12">If the 1st person who submitted the video failed to meet the conditions or incorrectly
            completed the challenge, the 2nd in line until voted correct takes the prize.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card5">
          <img src="https://socialx.io/img/rule3-img.png" className="steps-img" />
          <h1>RULE # 3</h1>
          <p className="fs-12">Prize money will be 100% of the 10% collected on all buy orders from the previous days 24
            hour traded volume.</p>
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
            <h3>LEVEL 1</h3>
            <h4>STAKING 1+ SOSX Tokens</h4>
            <p>Vote 1 to top 3 challenges</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dao-card">
            <h3>LEVEL 2</h3>
            <h4>STAKING 100,000+ SOSX Tokens</h4>
            <p>Vote 1 to top 3 challenges
              <br />create challenges</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dao-card">
            <h3>LEVEL 3</h3>
            <h4>STAKING 1,000,000+ SOSX Tokens</h4>
            <p>Final vote from top 3 challenges
              <br />create challenges</p>
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
            <h3>Submit Challenges</h3>
            <p>8 hours to submit the challenges created by the Level 2 &amp; 3 DAO members.</p>
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
            <h3>Vote Top Challenges</h3>
            <p>8 hours to vote the top 3 challenges for the challengers by all level community. </p>
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
            <h3>Vote Final Challenge</h3>
            <p>8 hours to vote the final challenges of the top 3 by the Level 3 DAO members.</p> <br />
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
            <h3>Complete Challenge</h3>
            <p> 
              The challenge will stay up until someone completed it. No new challenge will get voted until
              the previous one is completed.
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
            <h3>SOSX WINNERS</h3>
            <p>All submitted challenge videos that win, will be permanently uploaded to the socialx
              media website and YouTube channel. All prize money will be recorded through the blockchain
              and verified for 100% transparency!</p>
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
          <h3>THERE ARE NO RULES TO THE CHALLENGES EXCEPT NO CHALLENGE CAN BE MADE TO CAUSE INTENTIONAL HARM
            OR LEADING TO DEATH OR KILL.</h3>
          <span className="ox" style={{fontFamily: 'game_of_squidsregular', fontWeight: 500}}>- sosx team</span>
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
  <section className="footer mobile-hide">
    <div className="social-link">
      <a href="https://www.instagram.com/socialxtoken/?hl=en" className="social-icon button" style={{width: '30px', height: '30px'}}><img style={{width: '30px', height: '30px'}} src="https://socialx.io/img/instagram-social-icon@2x.png" /></a>
      <a href="https://twitter.com/socialx_io" className="social-icon button" style={{width: '30px', height: '30px'}}><img style={{width: '30px', height: '30px'}} src="https://socialx.io/img/twittericon@2x.png" /></a>
      <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg" className="social-icon button" style={{width: '30px', height: '30px'}}><img style={{width: '30px', height: '30px'}} src="https://socialx.io/img/youtube-social-icon@2x.png" /></a>
      <a href="https://t.me/SocialXToken" className="social-icon button" style={{width: '30px', height: '30px'}}><img style={{width: '30px', height: '30px'}} src="https://socialx.io/img/telegram-social-icon@2x.png" /></a>
      <a href="https://bscscan.com/address/0xC27f6473a04b2bdeE0bf650f153F1D8720AA3062" className="social-icon button" style={{width: '30px', height: '30px'}}><img style={{width: '30px', height: '30px'}} src="https://socialx.io/img/etherscan@2x.png" /></a>
      <a href="https://www.coingecko.com/en/coins/socialx" className="social-icon button" style={{width: '30px', height: '30px'}}><img style={{width: '30px', height: '30px'}} src="https://socialx.io/img/geckoicon@2x.png" /></a>
      <a href="https://coinmarketcap.com/currencies/socialx-2/" className="social-icon button" style={{width: '30px', height: '30px'}}><img style={{width: '30px', height: '30px'}} src="https://socialx.io/img/cmcicon@2x.png" /></a>
      <a href="https://pancakeswap.finance/swap" className="social-icon button" style={{width: '30px', height: '30px'}}><img style={{width: '30px', height: '30px'}} src="https://socialx.io/img/pancakeswapicon@2x.png" /></a>
      <a href="https://www.tiktok.com/@socialxtoken" className="social-icon button" style={{width: '30px', height: '30px'}}><img style={{width: '30px', height: '30px'}} src="https://socialx.io/img/tiktokicon@2x.png" /></a>
    </div>
    <div className="contract">0xeE52def4a2683E68ba8aEcDA8219004c4aF376DF</div>
    <div className="legal-link">
      <a href="privacy.html">Privacy</a> <a href="mailto:support@socialx.io">support@socialx.io</a>
      <a className="slipage-text">*set slippage tolarance 25%*</a>
      <a href="aboutsosx.html" className="utility-button">ABOUT SOSX</a>
    </div>
  </section>
  <div className="footer">
    <div className="social-link text-center">
      <a href="https://www.instagram.com/socialxtoken/?hl=en" className="social-icon button" style={{width: '30px', height: '30px'}}><img style={{width: '30px', height: '30px'}} src="https://socialx.io/img/instagram-social-icon@2x.png" /></a>
      <a href="https://twitter.com/socialx_io" className="social-icon button" style={{width: '30px', height: '30px'}}><img style={{width: '30px', height: '30px'}} src="https://socialx.io/img/twittericon@2x.png" /></a>
      <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg" className="social-icon button" style={{width: '30px', height: '30px'}}><img style={{width: '30px', height: '30px'}} src="https://socialx.io/img/youtube-social-icon@2x.png" /></a>
      <a href="https://t.me/SocialXToken" className="social-icon button" style={{width: '30px', height: '30px'}}><img style={{width: '30px', height: '30px'}} src="https://socialx.io/img/telegram-social-icon@2x.png" /></a>
      <a href="https://bscscan.com/address/0xC27f6473a04b2bdeE0bf650f153F1D8720AA3062" className="social-icon button" style={{width: '30px', height: '30px'}}><img style={{width: '30px', height: '30px'}} src="https://socialx.io/img/etherscan@2x.png" /></a>
      <a href="https://www.coingecko.com/en/coins/socialx" className="social-icon button" style={{width: '30px', height: '30px'}}><img style={{width: '30px', height: '30px'}} src="https://socialx.io/img/geckoicon@2x.png" /></a>
      <a href="https://coinmarketcap.com/currencies/socialx-2/" className="social-icon button" style={{width: '30px', height: '30px'}}><img style={{width: '30px', height: '30px'}} src="https://socialx.io/img/cmcicon@2x.png" /></a>
      <a href="https://pancakeswap.finance/swap" className="social-icon button" style={{width: '30px', height: '30px'}}><img style={{width: '30px', height: '30px'}} src="https://socialx.io/img/pancakeswapicon@2x.png" /></a>
      <a href="https://www.tiktok.com/@socialxtoken" className="social-icon button" style={{width: '30px', height: '30px'}}><img style={{width: '30px', height: '30px'}} src="https://socialx.io/img/tiktokicon@2x.png" /></a>
    </div>
    <div className="contract">0xeE52def4a2683E68ba8aEcDA8219004c4aF376DF</div>
    <div className="legal-link">
      <a href="privacy">Privacy</a> <a href="mailto:support@socialx.io">support@socialx.io</a>
      <a className="slipage-text">*set slippage tolarance 25%*</a>
      <a href="aboutsosx.html" className="utility-button">ABOUT SOSX</a>
    </div>
  </div>
  {/*/.CONTAINER*/}
  {/*/.copyright*/}
  {/*<div data-aos-anchor=".other-element"></div>*/}
  {/*jquery*/}
  {/*bootstrap v4 js*/}
  {/*popper js*/}
  {/*aos js*/}
  {/*owl carousel */}
  {/*counter js*/}
  {/*easing js*/}
  {/*ajax contact*/}
  {/*maps*/}
  {/*main script*/}
</div>

    
    )
}