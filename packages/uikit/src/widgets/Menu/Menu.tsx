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

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  const subLinksWithoutMobile = subLinks?.filter((subLink) => !subLink.isMobileOnly);
  const subLinksMobileOnly = subLinks?.filter((subLink) => subLink.isMobileOnly);

  return (
    // <MenuContext.Provider value={{ linkComponent }}>
    //   <Wrapper>
    //     <FixedContainer showMenu={showMenu} height={totalTopMenuHeight}>
    //       <StyledNav>
    //         <Flex>
    //           <Logo isDark={isDark} href={homeLink?.href ?? "/"} />
    //           {!isMobile && <MenuItems items={links} activeItem={activeItem} activeSubItem={activeSubItem} ml="24px" />}
    //         </Flex>
    //         <Flex alignItems="center" height="100%">
             
           
    //           {globalMenu} {userMenu}
    //         </Flex>
    //       </StyledNav>
    //     </FixedContainer>
    //     {subLinks && (
    //       <Flex justifyContent="space-around">
    //         <SubMenuItems items={subLinksWithoutMobile} mt={`${totalTopMenuHeight + 1}px`} activeItem={activeSubItem} />

    //         {subLinksMobileOnly?.length > 0 && (
    //           <SubMenuItems
    //             items={subLinksMobileOnly}
    //             mt={`${totalTopMenuHeight + 1}px`}
    //             activeItem={activeSubItem}
    //             isMobileOnly
    //           />
    //         )}
    //       </Flex>
    //     )}
    //     <BodyWrapper mt={!subLinks ? `${totalTopMenuHeight + 1}px` : "0"}>
    //       {/* <Inner isPushed={false} showMenu={showMenu}> */}
    //         {children}
    //         {/* <Footer
    //           items={footerLinks}
    //           isDark={isDark}
    //           toggleTheme={toggleTheme}
    //           langs={langs}
    //           setLang={setLang}
    //           currentLang={currentLang}
    //           cakePriceUsd={cakePriceUsd}
    //           buyCakeLabel={buyCakeLabel}
    //           mb={[`${MOBILE_MENU_HEIGHT}px`, null, "0px"]}
    //         /> */}
    //       {/* </Inner> */}
    //     </BodyWrapper>
    //     {isMobile && <BottomNav items={links} activeItem={activeItem} activeSubItem={activeSubItem} />}
    //   </Wrapper>
    // </MenuContext.Provider>

    <>


                <div className="header">
                    <div className="header-content">
                      <nav className="navbar navbar-expand">
                        <div className="collapse navbar-collapse justify-content-between">
                          <div className="header-left">
                            <div className="dashboard_bar">
                              Swap
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

                    <ul className="mobile-nav" id="menu">
                                    <li className="mm-active">
                                      <Link href="/">
                                           <a>
                                                <i className="fa fa-repeat active"></i>
                                                <span className="nav-text">Swap</span>
                                            </a>
                                         </Link>
                                        </li>
                                        <li>
                                          <Link href="/stake">
                                                <a>
                                                <i className="fa fa-coins"></i>
                                                <span className="nav-text">Staking</span>
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/x-game">
                                            <a>
                                                <i className="fa fa-gamepad"></i>
                                                <span className="nav-text ">X-Game</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/referrals">
                                            <a>
                                                <i className="fa fa-bullhorn"></i>
                                                <span className="nav-text">Affiliate</span>
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/adspace">
                                                <a>
                                                <i className="fa fa-briefcase"></i>
                                                <span className="nav-text ">Ad Space</span>
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/x-mining">
                                               <a>
                                                <i className="fa fa-users"></i>
                                                <span className="nav-text ">Social Mining</span>
                                                </a>
                                            </Link>
                                        </li>


                                    </ul>
                               <div className="deznav mobile-hide">
                                <div className="deznav-scroll">
                                    <ul className="metismenu" id="menu">

                                         <li className="mm-active">
                                    <Link href="/stake">
                                           <a>
                                                <i className="fa fa-repeat active"></i>
                                                <span className="nav-text">Swap</span>
                                            </a>
                                         </Link>
                                        </li>
                                        <li>
                                          <Link href="/stake">
                                                <a>
                                                <i className="fa fa-coins"></i>
                                                <span className="nav-text">Staking</span>
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/x-game">
                                            <a>
                                                <i className="fa fa-gamepad"></i>
                                                <span className="nav-text ">X-Game</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/referrals">
                                            <a>
                                                <i className="fa fa-bullhorn"></i>
                                                <span className="nav-text">Affiliate</span>
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/adspace">
                                                <a>
                                                <i className="fa fa-briefcase"></i>
                                                <span className="nav-text ">Ad Space</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/x-mining">
                                               <a>
                                                <i className="fa fa-users"></i>
                                                <span className="nav-text ">Social Mining</span>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
            
                          <div className="nav-header">
                              <Link href="/">
                                  <img className="brand-logo ml-2" src="/utils/images/xlogo-black.b90261b2.svg" alt=""/>
                              </Link>
                              <div className="nav-control">
                                  <div className="">
                                  <span className="line"></span><span className="line"></span><span className="line"></span>
                                  </div>
                              </div>
                          </div>
    <div className="content-body">

      
      {children}
      </div>

</>



  );
};

export default Menu;
