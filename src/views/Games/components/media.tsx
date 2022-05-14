import { Box, Button, Flex, Heading, ProposalIcon } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/Layout/Container'
import Link from 'next/link'
import DesktopImage from './DesktopImage'
import Masonry from "react-masonry-css";

const StyledMedia = styled(Box)`
  background: ${({ theme }) => theme.colors.gradients.bubblegum};
  padding-bottom: 32px;
  padding-top: 32px;
`

const Media = () => {
  const { t } = useTranslation()
  const breakpointColumnsObj = {
    3000: 5,
    2250: 4,
    1850: 3,
    1500: 4,
    1450: 3,
    950: 2,
    500: 1,
  };
  return (
            
            <div className="row">
             <div className="col-12 mt-3">
               <div className=" backgroun-dark rounded p-4">
                 <div className="d-flex justify-content-between pb-2 align-items-center">
                   <p className="text-white fs-22 font-weight-bold">

                     All Submissions{" "}
                   </p>
                 </div>

                 <div className="row mx-auto mt-2">
                   <Masonry
                     breakpointCols={breakpointColumnsObj}
                     className="my-masonry-grid mx-auto "
                     columnClassName="my-masonry-grid_column"
                   >
                     <div
                       className={`width250  p-3 height400  mb-4  align-self-stretch rounded`}
                     >
                       <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                         <span>
                           <div className="text-white d-flex align-items-center pt-1">
                             <img className="width-22" src="/images/dp.png" />

                             <p className=" ml-2 fs-12">Oxf...ds3</p>
                           </div>
                         </span>
                         <div className="play-btn"></div>
                         <div className="text-white view-vid">
                           <div className=" d-flex align-items-center">
                             <i className="fa-regular fs-12 fa-heart pr-2"></i>

                             <p className="fs-10 mr-4">251</p>

                             <i className="fa-regular fs-12 fa-eye pr-2"></i>
                             <p className="fs-10">43,125</p>
                           </div>
                         </div>
                       </a>
                     </div>
                     <div className={`width250  height150  mb-4  rounded`}>
                       <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                         <span>
                           <div className="text-white d-flex align-items-center pt-1">
                             <img className="width-22" src="/images/dp.png" />

                             <p className=" ml-2 fs-12">Oxf...ds3</p>
                           </div>
                         </span>
                         <div className="play-btn"></div>
                         <div className="text-white view-vid">
                           <div className=" d-flex align-items-center">
                             <i className="fa-regular fs-12 fa-heart pr-2"></i>

                             <p className="fs-10 mr-4">251</p>

                             <i className="fa-regular fs-12 fa-eye pr-2"></i>
                             <p className="fs-10">43,125</p>
                           </div>
                         </div>
                       </a>
                     </div>
                     <div className={`width250  height150  mb-4   rounded`}>
                       <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                         <span>
                           <div className="text-white d-flex align-items-center pt-1">
                             <img className="width-22" src="/images/dp.png" />

                             <p className=" ml-2 fs-12">Oxf...ds3</p>
                           </div>
                         </span>
                         <div className="play-btn"></div>
                         <div className="text-white view-vid">
                           <div className=" d-flex align-items-center">
                             <i className="fa-regular fs-12 fa-heart pr-2"></i>

                             <p className="fs-10 mr-4">251</p>

                             <i className="fa-regular fs-12 fa-eye pr-2"></i>
                             <p className="fs-10">43,125</p>
                           </div>
                         </div>
                       </a>
                     </div>
                     <div
                       className={`width250  height400  mb-4  align-self-stretch rounded`}
                     >
                       <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                         <span>
                           <div className="text-white d-flex align-items-center pt-1">
                             <img className="width-22" src="/images/dp.png" />

                             <p className=" ml-2 fs-12">Oxf...ds3</p>
                           </div>
                         </span>
                         <div className="play-btn"></div>
                         <div className="text-white view-vid">
                           <div className=" d-flex align-items-center">
                             <i className="fa-regular fs-12 fa-heart pr-2"></i>

                             <p className="fs-10 mr-4">251</p>

                             <i className="fa-regular fs-12 fa-eye pr-2"></i>
                             <p className="fs-10">43,125</p>
                           </div>
                         </div>
                       </a>
                     </div>
                     <div className={`width250  height150  mb-4  rounded`}>
                       <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                         <span>
                           <div className="text-white d-flex align-items-center pt-1">
                             <img className="width-22" src="/images/dp.png" />

                             <p className=" ml-2 fs-12">Oxf...ds3</p>
                           </div>
                         </span>
                         <div className="play-btn"></div>
                         <div className="text-white view-vid">
                           <div className=" d-flex align-items-center">
                             <i className="fa-regular fs-12 fa-heart pr-2"></i>

                             <p className="fs-10 mr-4">251</p>

                             <i className="fa-regular fs-12 fa-eye pr-2"></i>
                             <p className="fs-10">43,125</p>
                           </div>
                         </div>
                       </a>
                     </div>
                     <div className={`width250  height150  mb-4   rounded`}>
                       <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                         <span>
                           <div className="text-white d-flex align-items-center pt-1">
                             <img className="width-22" src="/images/dp.png" />

                             <p className=" ml-2 fs-12">Oxf...ds3</p>
                           </div>
                         </span>
                         <div className="play-btn"></div>
                         <div className="text-white view-vid">
                           <div className=" d-flex align-items-center">
                             <i className="fa-regular fs-12 fa-heart pr-2"></i>

                             <p className="fs-10 mr-4">251</p>

                             <i className="fa-regular fs-12 fa-eye pr-2"></i>
                             <p className="fs-10">43,125</p>
                           </div>
                         </div>
                       </a>
                     </div>
                     <div
                       className={`width250  height400  mb-4  align-self-stretch rounded`}
                     >
                       <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                         <span>
                           <div className="text-white d-flex align-items-center pt-1">
                             <img className="width-22" src="/images/dp.png" />

                             <p className=" ml-2 fs-12">Oxf...ds3</p>
                           </div>
                         </span>
                         <div className="play-btn"></div>
                         <div className="text-white view-vid">
                           <div className=" d-flex align-items-center">
                             <i className="fa-regular fs-12 fa-heart pr-2"></i>

                             <p className="fs-10 mr-4">251</p>

                             <i className="fa-regular fs-12 fa-eye pr-2"></i>
                             <p className="fs-10">43,125</p>
                           </div>
                         </div>
                       </a>
                     </div>
                     <div className={`width250  height150  mb-4  rounded`}>
                       <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                         <span>
                           <div className="text-white d-flex align-items-center pt-1">
                             <img className="width-22" src="/images/dp.png" />

                             <p className=" ml-2 fs-12">Oxf...ds3</p>
                           </div>
                         </span>
                         <div className="play-btn"></div>
                         <div className="text-white view-vid">
                           <div className=" d-flex align-items-center">
                             <i className="fa-regular fs-12 fa-heart pr-2"></i>

                             <p className="fs-10 mr-4">251</p>

                             <i className="fa-regular fs-12 fa-eye pr-2"></i>
                             <p className="fs-10">43,125</p>
                           </div>
                         </div>
                       </a>
                     </div>
                     <div className={`width250  height150  mb-4   rounded`}>
                       <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                         <span>
                           <div className="text-white d-flex align-items-center pt-1">
                             <img className="width-22" src="/images/dp.png" />

                             <p className=" ml-2 fs-12">Oxf...ds3</p>
                           </div>
                         </span>
                         <div className="play-btn"></div>
                         <div className="text-white view-vid">
                           <div className=" d-flex align-items-center">
                             <i className="fa-regular fs-12 fa-heart pr-2"></i>

                             <p className="fs-10 mr-4">251</p>

                             <i className="fa-regular fs-12 fa-eye pr-2"></i>
                             <p className="fs-10">43,125</p>
                           </div>
                         </div>
                       </a>
                     </div>
                     <div
                       className={`width250  height400  mb-4  align-self-stretch rounded`}
                     >
                       <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                         <span>
                           <div className="text-white d-flex align-items-center pt-1">
                             <img className="width-22" src="/images/dp.png" />

                             <p className=" ml-2 fs-12">Oxf...ds3</p>
                           </div>
                         </span>
                         <div className="play-btn"></div>
                         <div className="text-white view-vid">
                           <div className=" d-flex align-items-center">
                             <i className="fa-regular fs-12 fa-heart pr-2"></i>

                             <p className="fs-10 mr-4">251</p>

                             <i className="fa-regular fs-12 fa-eye pr-2"></i>
                             <p className="fs-10">43,125</p>
                           </div>
                         </div>
                       </a>
                     </div>
                     <div
                       className={`width250  height400  mb-4  align-self-stretch rounded`}
                     >
                       <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                         <span>
                           <div className="text-white d-flex align-items-center pt-1">
                             <img className="width-22" src="/images/dp.png" />

                             <p className=" ml-2 fs-12">Oxf...ds3</p>
                           </div>
                         </span>
                         <div className="play-btn"></div>
                         <div className="text-white view-vid">
                           <div className=" d-flex align-items-center">
                             <i className="fa-regular fs-12 fa-heart pr-2"></i>

                             <p className="fs-10 mr-4">251</p>

                             <i className="fa-regular fs-12 fa-eye pr-2"></i>
                             <p className="fs-10">43,125</p>
                           </div>
                         </div>
                       </a>
                     </div>
                     <div
                       className={`width250  height400  mb-4  align-self-stretch rounded`}
                     >
                       <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                         <span>
                           <div className="text-white d-flex align-items-center pt-1">
                             <img className="width-22" src="/images/dp.png" />

                             <p className=" ml-2 fs-12">Oxf...ds3</p>
                           </div>
                         </span>
                         <div className="play-btn"></div>
                         <div className="text-white view-vid">
                           <div className=" d-flex align-items-center">
                             <i className="fa-regular fs-12 fa-heart pr-2"></i>

                             <p className="fs-10 mr-4">251</p>

                             <i className="fa-regular fs-12 fa-eye pr-2"></i>
                             <p className="fs-10">43,125</p>
                           </div>
                         </div>
                       </a>
                     </div>
                     <div className={`width250  height150  mb-4  rounded`}>
                       <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                         <span>
                           <div className="text-white d-flex align-items-center pt-1">
                             <img className="width-22" src="/images/dp.png" />

                             <p className=" ml-2 fs-12">Oxf...ds3</p>
                           </div>
                         </span>
                         <div className="play-btn"></div>
                         <div className="text-white view-vid">
                           <div className=" d-flex align-items-center">
                             <i className="fa-regular fs-12 fa-heart pr-2"></i>

                             <p className="fs-10 mr-4">251</p>

                             <i className="fa-regular fs-12 fa-eye pr-2"></i>
                             <p className="fs-10">43,125</p>
                           </div>
                         </div>
                       </a>
                     </div>
                     <div className={`width250  height150  mb-4   rounded`}>
                       <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                         <span>
                           <div className="text-white d-flex align-items-center pt-1">
                             <img className="width-22" src="/images/dp.png" />

                             <p className=" ml-2 fs-12">Oxf...ds3</p>
                           </div>
                         </span>
                         <div className="play-btn"></div>
                         <div className="text-white view-vid">
                           <div className=" d-flex align-items-center">
                             <i className="fa-regular fs-12 fa-heart pr-2"></i>

                             <p className="fs-10 mr-4">251</p>

                             <i className="fa-regular fs-12 fa-eye pr-2"></i>
                             <p className="fs-10">43,125</p>
                           </div>
                         </div>
                       </a>
                     </div>
                   </Masonry>
                 </div>
               </div>
             </div>
           </div>
  )
}

export default Media
