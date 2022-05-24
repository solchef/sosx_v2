import styled from "styled-components";
import { Flex } from "../Box";

const StyledBottomNav = styled(Flex)`
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 10px 18px 10px 8px;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding-bottom: env(safe-area-inset-bottom);
  html[data-useragent*="TokenPocket_iOS"] & {
    padding-bottom: 45px;
  }
  z-index: 20;
  
  li{
    list-style:none;
  }
  .mm-active{
    a{
      color:#f600cc !important;
    }
   
  }

  a{
    display:flex;
    flex-direction:column;
    text-align: center;
    color: white !important;

   

    img{
      width: 13px;
      height: 13px;
      margin-bottom: 3px;
      margin-left: 6px;
    }

    span{
      font-size: 9px;
      margin-top:8px !important;
    }
  
  }
`;

export default StyledBottomNav;
