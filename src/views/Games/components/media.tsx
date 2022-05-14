import { Box, Button, Flex, Heading, ProposalIcon } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/Layout/Container'
import Link from 'next/link'
import DesktopImage from './DesktopImage'
import Masonry from "react-masonry-css";
import { create } from 'ipfs-http-client'
import { useState } from 'react'
import { concat } from "uint8arrays";

const server = create({
  url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
});

const StyledMedia = styled(Box)`
  background: ${({ theme }) => theme.colors.gradients.bubblegum};
  padding-bottom: 32px;
  padding-top: 32px;
`

const Media = (props: {todayVideo}) => {
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

  const [videos, setVideos] = useState([]);


  const getVideo = async () => {
    let finalData = [];

    if (props.todayVideo) {
      for await (const videoFile of server.files.ls(
        `/challenges/${String(
          `challenge-${props.todayVideo.challenge.payload.name}`
        ).replaceAll(" ", "-")}/videos`
      )) {
        let fileContent;
        const chunks = [];
        for await (const chunk of server.cat(videoFile.cid)) {
          chunks.push(chunk);
        }
        const data = concat(chunks);
        fileContent = JSON.parse(new TextDecoder().decode(data).toString());
        finalData.push(fileContent);
      }
      setVideos(finalData);
    }
  };

  getVideo()
  
  return (


    <div className="card">
      <div className="row">
        <div className="col-12">
          <div className="flex-row d-flex w-100 justify-content-between">
            <p className="text-white fs-22 font-weight-bold">All Submissions </p>
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
{/*         
        {videos.length > 0 ? (
          <div>
            {videos.map((video) =>
          <div className={`width250  p-3 height400  mb-4  align-self-stretch rounded`}>
             {video.youtube ? (
                <iframe className="position-absolute iframe" width="250" height="250" src={`https://www.youtube.com/embed/${video.youtube}`} allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"></iframe>
             ) : (
              <iframe className="position-absolute iframe" width="250" height="400" src={`https://www.tiktok.com/embed/${video.tiktok}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
             )}
              {/* <a href=""
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

              </a> */}

            </div>
          )}
          </div>
        ) : (
          <p>No Videos</p>
        )}

             */}


    
          </Masonry>


        </div>
      </div>
    </div>























  )
}

export default Media
