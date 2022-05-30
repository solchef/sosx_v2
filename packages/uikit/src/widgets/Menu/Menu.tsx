import throttle from "lodash/throttle";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import { Box } from "../../components/Box";
import Flex from "../../components/Box/Flex";
import Footer from "../../components/Footer";
import MenuItems from "../../components/MenuItems/MenuItems";
import { SubMenuItems } from "../../components/SubMenuItems";
import { useMatchBreakpoints } from "../../hooks";
import CakePrice from "../../components/CakePrice/CakePrice";
import Logo from "./components/Logo";
import { MENU_HEIGHT, MOBILE_MENU_HEIGHT, TOP_BANNER_HEIGHT, TOP_BANNER_HEIGHT_MOBILE } from "./config";
import { NavProps } from "./types";
import LangSelector from "../../components/LangSelector/LangSelector";
import { MenuContext } from "./context";
import Link from 'next/link'
import router, { useRouter } from "next/router";
import useStage from "../../../../../src/hooks/useStage";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  transform: translate3d(0, 0, 0);

  padding-left: 16px;
  padding-right: 16px;
`;

const FixedContainer = styled.div<{ showMenu: boolean; height: number }>`
  position: fixed;
  top: ${({ showMenu, height }) => (showMenu ? 0 : `-${height}px`)};
  left: 0;
  transition: top 0.2s;
  height: ${({ height }) => `${height}px`};
  width: 100%;
  z-index: 20;
`;

const TopBannerContainer = styled.div<{ height: number }>`
  height: ${({ height }) => `${height}px`};
  min-height: ${({ height }) => `${height}px`};
  max-height: ${({ height }) => `${height}px`};
  width: 100%;
`;

const BodyWrapper = styled(Box)`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
`;

const Menu: React.FC<NavProps> = ({
  linkComponent = "a",
  userMenu,
  banner,
  globalMenu,
  isDark,
  toggleTheme,
  currentLang,
  setLang,
  cakePriceUsd,
  links,
  subLinks,
  footerLinks,
  activeItem,
  activeSubItem,
  langs,
  buyCakeLabel,
  children,
}) => {
  const { isMobile, isMd } = useMatchBreakpoints();
  const [showMenu, setShowMenu] = useState(true);
  const {stage} = useStage();
  const refPrevOffset = useRef(typeof window === "undefined" ? 0 : window.pageYOffset);

  const topBannerHeight = isMobile ? TOP_BANNER_HEIGHT_MOBILE : TOP_BANNER_HEIGHT;

  const totalTopMenuHeight = banner ? MENU_HEIGHT + topBannerHeight : MENU_HEIGHT;

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current || currentOffset <= totalTopMenuHeight) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [totalTopMenuHeight]);

  const handleReferral = () => {
      
  }

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  const subLinksWithoutMobile = subLinks?.filter((subLink) => !subLink.isMobileOnly);
  const subLinksMobileOnly = subLinks?.filter((subLink) => subLink.isMobileOnly);

    const stages = [
      {
        stage: 1,
        title: "STAGE 1 CHALLENGE CREATION",
        participationText: "ONLY LEVEL 2 & 3 CAN PARTICIPATE",
      },
      {
        stage: 2,
        title: "STAGE 2 TOP CHALLENGES VOTING",
        participationText: "ONLY LEVEL 1, 2 & 3 CAN PARTICIPATE",
      },
      {
        stage: 3,
        title: "STAGE 3 FINAL CHALLENGE VOTING",
        participationText: "ONLY LEVEL  3 CAN PARTICIPATE",
      },
      {
        stage: 4,
        title: "STAGE 4 VIDEO SUBMISSION",
        participationText: "ANYONE CAN PARTICIPATE",
      },
    ];
  
  

   const title = () => {
    switch (router.pathname) {

      case '/':

        return "Swap";
      case '/stake':
        return "STAKING";

      case '/daostaking':
        return "DAOX";

      case '/xgame':
        
        return 'GAME';
        
      case '/referrals':
        return "Referrals";

      case '/adspace':
        return "Adspace";

      case '/x-mining':
        return "Social Mining";

      case '/aboutsosx':
        return "Aboutsosx";

      case '/faq':
        return "Faq";
      case '/socialmining-s1':
        return "Social Mining";
      case '/socialmining-s2':
        return "Social Mining";
      case '/socialmining-s3':
        return "Social Mining";
      default:
        return;
    }

  }
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    setPreloader(true);

    setTimeout(() => {
      setPreloader(false);
    }, 1000);

  }
    , [children])
  return (

    <>
      <div className="nav-header">
        <a href="https://socialx.io" className="brand-logo">
          <img className="logo-abbr" src="/images/xlogo-black.b90261b2.svg" alt="" />
         
             <div className="dashboard_bar mobile-show ml-2">
             {title()} 
            </div>
        </a>
      </div>

      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <div className="dashboard_bar">
                 
                  {router.pathname == '/xgame' ?
                  <>
                    OX {title()} 
                    <p className="mb-0 ml-1 mt-1 float-right">  | {stages[stage-1] && stages[stage-1].title}</p>
                    </>
                    :
                    <>
                    {title()} 
                    </>
                  }
                </div>
               
              </div>
              <ul className="navbar-nav header-right">

                <li className="nav-item wallet-btn">
                  {/* <button type="button" className="btn btn-primary btn-lg">Connect Wallet</button> */}
                  {userMenu}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

     
      <div className="deznav mobile-hide">
        <div className="deznav-scroll">
          <ul className="metismenu" id="menu">
            <li className={router.pathname == "/" ? "mm-active" : ""}>

              <Link href="/">
                <a>
                  <i className="fa fa-repeat"></i>
                  <span className="nav-text">Swap</span>
             
                </a>
              </Link>

            </li>
            <li className={router.pathname == "/stake" ? "mm-active" : ""}>
              <Link href="/stake">
                <a>
                  <i className="fa fa-coins"></i>
                  <span className="nav-text">Staking</span>
                </a>
              </Link>

            </li>

            <li className={router.pathname == "/daostaking" ? "mm-active" : ""}>
              <Link href="/daostaking">
                <a>
                  <i className="fa fa-coins"></i>
                  <span className="nav-text">DAOX</span>
                </a>
              </Link>

            </li>

            <li className={router.pathname == "/xgame" || router.pathname == "/createchallenge" || router.pathname == "/votechallenge" || router.pathname == "/xgame" ? "mm-active" : ""}>
              <Link href="/xgame">

                <a>
                  <i className="fa fa-gamepad"></i>
                  <span className="nav-text">OX Game</span>
                </a>
              </Link>

            </li>
            <li className={router.pathname == "/referrals" ? "mm-active" : ""}>

              <Link href="/referrals">

                <a>
                  <i className="fa fa-bullhorn"></i>
                  <span className="nav-text">Affiliate</span>
                </a>
              </Link>

            </li>

            <li className={router.pathname == "/adspace" ? "mm-active" : ""}>

              <Link href="/adspace">

                <a>
                  <i className="fa fa-briefcase"></i>
                  <span className="nav-text">Ad Space</span>
                </a>
              </Link>

            </li>

            <li className={router.pathname == "/x-mining" || router.pathname == "/socialmining-s1" || router.pathname == "/socialmining-s2" || router.pathname == "/socialmining-s3" ? "mm-active" : ""}>
              <Link href="/x-mining">

                <a>
                  <i className="fa fa-users"></i>
                  <span className="nav-text">Social Mining</span>
                </a>
              </Link>

            </li>

            <li className={router.pathname == "#" ? "mm-active" : ""}>
       

                <a>
                  <i className="fa fa-images"></i>
                  <span className="nav-text">NFT</span>
                  <small style={{fontSize:'14px'}} className="ml-1 text-warning">coming soon </small>
                </a>
            

            </li>

            {/* <li className={router.pathname == "/aboutsosx" ? "mm-active" : ""}>
              <Link href="/aboutsosx">

                <a>
                  <img src="/images/xlogo.png" style={{ width: '12px', height: '12px' }} />
                  <span className="nav-text pl-3">About SOSX</span>
                </a>
              </Link>

            </li>

            <li className={router.pathname == "/faq" ? "mm-active" : ""}>

              <Link href="/faq">

                <a>
                  <i className="fa-solid fa-circle-question"></i>
                  <span className="nav-text">FAQ</span>
                </a>
              </Link>

            </li> */}

          </ul>
        </div>
      </div>
      <div className={`content-body ${preloader ? 'content-preloader' : ''}`}>

        {children}

        {isMobile && <BottomNav items={links} activeItem={activeItem} activeSubItem={activeSubItem} />}

      </div>


      {/* <div className="footer">
        <div className="copyright">
          <p>Copyright © <a href="https://socialx.io/" target="_blank">SocialX</a> 2022</p>
        </div>
      </div> */}

    </>



  );
};

export default Menu;
