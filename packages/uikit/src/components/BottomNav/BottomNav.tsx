import React, { useState } from "react";
import BottomNavItem from "../BottomNavItem";
import StyledBottomNav from "./styles";
import { Box } from "../Box";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { BottomNavProps } from "./types";
import { NotificationDot } from "../NotificationDot";
import { Overlay } from "../Overlay";
import Link from "next/link"
import {useRouter} from 'next/router';

const BottomNav: React.FC<BottomNavProps> = ({ items = [], activeItem = "", activeSubItem = "", ...props }) => {
  const [menuOpenByIndex, setMenuOpenByIndex] = useState({});
  const isBottomMenuOpen = Object.values(menuOpenByIndex).reduce((acc, value) => acc || value, false);
  const router = useRouter()
  return (
    <>
      {isBottomMenuOpen && <Overlay />}
      <StyledBottomNav justifyContent="space-around" {...props}>
        {/* {items.map(
          ({ label, items: menuItems, href, icon, fillIcon, showOnMobile = true, showItemsOnMobile = true }, index) => {
            const statusColor = menuItems?.find((menuItem) => menuItem.status !== undefined)?.status?.color;
            return (
              showOnMobile && (
                <DropdownMenu
                  key={label}
                  items={menuItems}
                  isBottomNav
                  activeItem={activeSubItem}
                  showItemsOnMobile={showItemsOnMobile}
                  setMenuOpenByIndex={setMenuOpenByIndex}
                  index={index}
                >
                  <Box>
                    <NotificationDot show={!!statusColor} color={statusColor}>
                      <BottomNavItem
                        href={href}
                        isActive={href === activeItem}
                        label={label}
                        icon={icon}
                        fillIcon={fillIcon}
                        showItemsOnMobile={showItemsOnMobile}
                      />
                    </NotificationDot>
                  </Box>
                </DropdownMenu>
              )
            );
          }
        )} */}
        {console.log(router.route)}
        <li className={ router.route == "/" ? "mm-active" : ""}>
          <Link href="/">
            <a>
              <i className="fa fa-repeat active"></i>
              <span>Swap</span>
            </a>
            
          </Link>
        </li>
        <li className={router.route == "/stake" ? "mm-active" : ""}>
          <Link href="/stake">
            <a>
              <i className="fa fa-coins"></i>
              <span>Stake</span>
            </a>
          </Link>
        </li>

        <li className={router.route == "/daostaking" ? "mm-active" : ""}>
          <Link href="/daostaking">
            <a>
              <i className="fa fa-coins"></i>
              <span>DAOX</span>
            </a>
          </Link>
        </li>

        <li className={router.route == "/xgame" || router.route == "/createchallenge" || router.route == "/votechallenge" || router.route == "/xgame" ? "mm-active" : ""}>
          <Link href="/xgame">
            <a>
              <i className="fa fa-gamepad"></i>
              <span>OXGame</span>
            </a>
          </Link>
        </li>
        <li className={router.route == "/referrals" ? "mm-active" : ""}>
          <Link href="/referrals">
            <a>
              <i className="fa fa-bullhorn"></i>
              <span>Affiliate</span>
            </a>
          </Link>
        </li>
     
        {/* <li className={router.route == "/adspace" ? "mm-active" : ""}>
          <Link href="/adspace">
            <a>
              <i className="fa fa-briefcase"></i>
              <span>AD</span>
            </a>
          </Link>
        </li> */}
        <li className={router.route == "/x-mining" || router.route == "/socialmining-s1" || router.route == "/socialmining-s2" || router.route == "/socialmining-s3" ? "mm-active" : ""}>
          <Link href="/x-mining">
            <a>
              <i className="fa fa-users"></i>
              <span>Xmining</span>
            </a>
          </Link>
        </li>
        {/* <li>
          <Link href="#">

            <a>
              <i className="fa fa-images"></i>
              <span>Stake</span>
            </a>
          </Link>

        </li> */}

        <li className={router.route == "/aboutsosx" ? "mm-active" : ""}>

          <Link href="/aboutsosx">

            <a>
              <img src="/images/xlogo.png"  />
              <span className="mt-0 mb-1">About</span>
            </a>
          </Link>

        </li>

        <li className={router.route == "/faq" ? "mm-active" : ""}>

          <Link href="/faq">

            <a>
              <i className="fa-solid fa-circle-question"></i>
              <span>FAQ</span>
            </a>
          </Link>

        </li>
   

      </StyledBottomNav>
    </>
  );
};

export default BottomNav;
