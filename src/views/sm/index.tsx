import React from "react"

export const Sm = () => {
    return (
    <div>
  
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
                <h1>SOCIAL MINING</h1>
                <p>Earn 500 SOSX token daily and earn up to 35% commission from your friend's earnings &amp;
                  transactions </p>
                <div className="btn-group">
                  <a href="https://app.socialx.io/x-mining" className="btn">Get Free Tokens</a>
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
            <h1>SHARE</h1>
            <p className="fs-12">Share given post on your social media every
              24 hours.</p>
          </div>
        </div>
        <div className="col-md-4 col-4">
          <div className="card">
            <img src="https://socialx.io/img/inv-img.png" className="steps-img" />
            <h1>INVITE</h1>
            <p className="fs-12">Attempt to have one person join socialx everyday</p>
          </div>
        </div>
        <div className="col-md-4 col-4">
          <div className="card">
            <img src="https://socialx.io/img/collect-img.png" className="steps-img" />
            <h1>COLLECT</h1>
            <p className="fs-12">Log your progress and claim your free SOSX Tokens. </p>
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
            <span>Step 1</span>
            <h3>Share Post</h3>
            <p>Earn a daily 500 SOSX tokens by sharing a social media posts.</p>
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
            <span className="main-green">Step 2</span>
            <h3>Invite Your Friends</h3>
            <p>Invite and earn up to 35% commission from your friends staking and social mining
              transactions.</p>
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
            <span className="main-green">Step 3</span>
            <h3>Collect Rewards</h3>
            <p>Provide your Metamask wallet, email address and the direct link to the post you shared.
              The SOSX Tokens will be distributed to your wallet every 24 hours as our system reviews the
              posts.</p>
            <a href="https://www.instagram.com/p/CYEk583FoC-/">
              <span>Don’t have a MetaMask wallet?</span>
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
          <h3>💰 SOSX PAYS OUT IN 8 WAYS 💰</h3>
        </div>
        <div className="col-md-3 col-6">
          <div className="cardpayout">
            <img src="https://socialx.io/img/reflections-img.png" className="steps-img" />
            <h1>REFLECTIONS</h1>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="cardpayout">
            <img src="https://socialx.io/img/mining-img.png" className="steps-img" />
            <h1>SOCIAL MINING</h1>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="cardpayout">
            <img src="https://socialx.io/img/affiliate-img.png" className="steps-img" />
            <h1>AFFILIATE</h1>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="cardpayout">
            <img src="https://socialx.io/img/staking-img.png" className="steps-img" />
            <h1>STAKING</h1>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="cardpayout">
            <img src="https://socialx.io/img/game-img.png" className="steps-img" />
            <h1>GAME MONEY</h1>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="cardpayout">
            <img src="https://socialx.io/img/pool-img.png" className="steps-img" />
            <h1>LIQUIDITY POOL</h1>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="cardpayout">
            <img src="https://socialx.io/img/sosxprice-img.png" className="steps-img" />
            <h1>RISE IN SOSX <br className="mobile-show" /> PRICE</h1>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="cardpayout">
            <img src="https://socialx.io/img/nft-img.png" className="steps-img" />
            <h1>NFT <br className="mobile-show" />(COMING SOON)</h1>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <a href="https://app.socialx.io/x-mining">
          <button type="button" className="btn btn-secondary btn-lg mt-4">Claim Your Tokens</button>
        </a>
      </div>
    </div>
  </section>

</div>

    )
}