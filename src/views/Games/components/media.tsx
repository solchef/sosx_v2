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
    1150: 2,
    850: 1,
    768: 2,
    620: 1
};
  return (


    <div className="card">
      <div className="row">
        <div className="col-12">
          <div className="flex-row d-flex w-100 justify-content-between">
            <p className="text-white fs-22 font-weight-bold">All Submissions </p>
            <button type="button" className="btn text-nowrap font-weight-bold p-2 fs-12 mt-2 btn-success">View
              All</button>
          </div>
        </div>
      </div>
      <div className="row mx-auto mt-2">
        <div className="col-12">


        <Masonry
                                            breakpointCols={breakpointColumnsObj}
                                            className="my-masonry-grid mx-auto "
                                            columnClassName="my-masonry-grid_column">
                                            <div className={`width250  p-3 height400  mb-4  align-self-stretch rounded`}>
                                                <iframe className="position-absolute iframe" width="250" height="400" src="https://www.youtube.com/embed/-LAwDM8JKwU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

                                                <a href=""
                                                >
                                                    <span className="details">
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
                                                    <div className="play-btn"></div>
                                                    <div className="text-white details view-vid">

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
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
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
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
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
                                            <div className={`width250  height400  mb-4  align-self-stretch rounded`}>
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
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
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
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
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
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
                                            <div className={`width250  height400  mb-4  align-self-stretch rounded`}>
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
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
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
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
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
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
                                            <div className={`width250  height400  mb-4  align-self-stretch rounded`}>
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
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
                                            <div className={`width250  height400  mb-4  align-self-stretch rounded`}>
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
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
                                            <div className={`width250  height400  mb-4  align-self-stretch rounded`}>
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
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
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
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
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
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























  )
}

export default Media
