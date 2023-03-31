import { useTranslation } from "contexts/Localization"
import Link from "next/link"
import React from "react"

const NavHeader = () => {
  const { t } = useTranslation();
    return (
        <nav className="justify-content-between navbar navbar-expand-lg fixed-top center-brand static-nav">
        <Link href="/">
        <a className="navbar-brand">
          <img src="https://socialx-x.vercel.app/img/logo.png" alt="logo" className="logo-default" />
        </a>
        </Link>
        <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#xenav">
          <i className="fas fa-bars fa-2x" />
        </button>
        <div className="collapse navbar-collapse" id="xenav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link href="/social-mining">
              <a className="nav-link">{t("SOCIAL MINING")}</a>
            </Link>
            </li>
            <li className="nav-item">
            <Link href="/ox">
              <a className="nav-link">{t("OX GAME")}</a>
            </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#nft"> <span style={{color: '#5b5b5b'}}>NFT</span></a>
            </li>
            <li className="nav-item">
            <Link href="/aboutsosx">
              <a className="nav-link">{t("ABOUT SOSX")}</a>
            </Link>
            </li>
            <li className="nav-item">
            <Link href="/experiment">
              <a className="nav-link">{t("EXPERIMENT")}</a>
            </Link>
            </li>
            <li className="nav-item">
            <Link href="/faq">
              <a className="nav-link">{t("FAQ")}</a>
            </Link>
            </li>
            <li className="nav-item mobile-hide">
            <Link href="/swap">
                <a>
                <button type="button" className="btn btn-primary btn-lg">{t("LAUNCH DAPPS")}</button>
              </a>
              </Link>
            </li>
            <li className="nav-item mobile-show">
            <Link href="/swap">
              <a className="nav-link"> {t("LAUNCH DAPPS")}</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default NavHeader