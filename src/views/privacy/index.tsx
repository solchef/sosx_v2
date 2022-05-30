import Link from "next/link"
import React from "react"

export const Privacy = () => {
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
  </nav>

  <header className="hero-section-mining" id="home">
    <div className="main-line">
      <div className="main-line-w">
        <div className="line-num one" />
        <div className="line-num two" />
        <div className="line-num three" />
        <div className="line-num four" />
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title-pink custom-pt">
            <h3>PRIVACY POLICY</h3>
            <p>We, SocialX Token (SOSX), are committed to protecting any data we collect concerning you.
              By using our services, you agree to use the information that we collect by this Privacy
              Policy.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="title-pink custom-pt">
            <h3>WE ARE COMMITTED TO PROTECTING YOUR PRIVACY.</h3>
            <p>We collect the minimum amount of information about you that is commensurate with providing
              you with a
              satisfactory service. This Policy indicates the type of processes that may result in data
              being collected
              about you. The purpose of this Privacy Policy is to enable you to understand which personal
              identifying
              information ("PI," "Personal Information") of yours is collected, how and when we might use
              your information,
              who has access to this information, and how you can correct any inaccuracies in the report.
              To better
              protect your privacy, we provide this notice explaining our online information practices and
              your choices
              about how your information is collected and used. To make this notice easy to find, we make
              it available on our website.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="title-pink custom-pt">
            <h3>INFORMATION COLLECTED</h3>
            <p>We may collect any or all of the information via automated means such as communications
              profiles and cookies.
              The personal information you give us depends on the type of service, support, or sale
              inquiry and may include
              your name, wallet address and email address, dates of service provided, types of service
              provided, payment
              history, manner of payment, amount of fees, date of payments, domain name or other payment
              information.
              All sensitive information is collected on a secure server, and data is transferred. When
              transferring personal
              information, a security icon will appear in your browser.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="title-pink custom-pt">
            <h3>INFORMATION USE</h3>
            <p>This information is used for billing and to provide service and support to our customers. We
              may also study this
              information to determine our customer's needs and provide support for our customers. All
              reasonable precautions
              are taken to prevent unauthorized access to this information. This safeguard may require you
              to provide additional
              forms of identity should you wish to obtain information about your account details. We use
              IP addresses to analyze
              trends, administer our site and servers, track access, and gather broad demographic
              information for aggregate use.
              IP addresses are not linked to personally identifiable information.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="title-pink custom-pt">
            <h3>COOKIES</h3>
            <p>Your Internet browser has the in-built facility for storing small text files - "cookies" -
              that hold information that
              allows a website to recognize your account. We use cookies to save your preferences and
              login information and provide
              personalized functionality. You can reject cookies by changing your browser settings, but be
              aware that this will
              disable some of the functionality on the SocialX Token website. For more information about
              cookies,
              visit
              <a href="https://en.wikipedia.org/wiki/HTTP_cookie">
                https://en.wikipedia.org/wiki/HTTP_cookie
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
   
  </header></div>

    )
}   