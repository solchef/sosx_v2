import Link from "next/link"
import React, { useState } from "react"
import NewFooter from "components/NewFooter"
import { useTranslation } from "contexts/Localization";
import { languageList } from 'config/localization/languages'
import { Dropdown } from "react-bootstrap";


export const UI = () => {
  const { t, setLanguage, currentLanguage } = useTranslation();
  const [loading, setLoading] = useState(true)

  const sp = languageList.filter(function (lan) {
    return  lan.language == "English" || lan.language == "Français" || lan.language == "Español"
  })

  setTimeout(() => {
    setLoading(false)
  }, 4000)

    return (
       <div>
       {(loading === true) && (
       <div id="loading">
       <img id="loading-image" src="https://socialx.io/img/loader.gif" alt="Loading..." />
     </div>
       ) }
      
          <nav className="justify-content-between navbar navbar-expand-lg fixed-top center-brand static-nav">
            <Link href="/">
            <a className="navbar-brand">
              <img src="https://socialx.io/img/logo.png" alt="logo" className="logo-default" />
            </a>
            </Link>
            <div className="float-right">
              
              <Dropdown className="float-right">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                {t(`${currentLanguage.language}`)}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {sp.map(la => 
                    <Dropdown.Item onClick={() => setLanguage(la)}>{la.language}</Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
              <Link href="/swap">
              <a>
                <button type="button" className="btn btn-primary btn-lg">{t("LAUNCH DAPPS")}</button>
              </a>
              </Link>
            </div>
            
          </nav>


        <div className="accordion">
          <ul>
            <li>
              <div>
                <h1 className="h1-1" style={{fontFamily: 'game_of_squidsregular'}}>{t("Social")} <br className="mobile-hide" /> {t("Mining")}</h1>
                <p style={{ fontFamily: 'sans-serif', color:' #ffff', fontWeight: '300', height: '100px', width: '30vw' }}>{t("EARN FREE TOKENS")}</p>
                <Link href="/social-mining" >
                <a>
                  <span className="span1" style={{fontFamily: 'game_of_squidsregular', fontWeight: 500, color:' #ffff'}}>{t("Free Tokens")} &gt;</span>
                </a>
                  </Link>
              </div>
            </li>
            <li>
              <div>
                <h1 className="ox h1-2" style={{fontFamily: 'game_of_squidsregular'}}>ox <br className="mobile-hide" /> {t("game")}</h1>
                <p style={{  fontFamily: 'sans-serif', color:' #ffff', fontWeight: '300', height: '100px', width: '30vw' }}>{t("WIN MONEY")}</p>
                <Link href="/ox">
                <a>
                  <span className="span2" style={{fontFamily: 'game_of_squidsregular'}}>{t("Play Now")} &gt;</span>
                </a>
                </Link>
              </div>
            </li>
            <li>
              <a href="#">
              </a><div><a href="#">
              <h1 className="ox h1-3" style={{fontFamily: 'game_of_squidsregular'}}>sosx <br className="mobile-hide" /> {t("nft")}</h1>
              <p style={{ fontFamily: 'sans-serif', color:' #ffff', fontWeight: '300', height: '100px', width: '30vw' }}>{t("BATTLE X MONEY")}</p>
                </a><a href="#">
                  <span className="span3" style={{fontFamily: 'game_of_squidsregular'}}>{t("Coming Soon")}...</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <NewFooter />
        </div>
    )
}