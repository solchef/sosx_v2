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

const Media = (props: { todayVideo }) => {
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
        <div className="col-12 mx-auto w-100">

        {videos.length > 0 ? (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid mx-auto "
            columnClassName="my-masonry-grid_column">


                {videos.map((video) =>  
                        
                        <div className={` width200 height400 p-3   mb-4  align-self-stretch rounded`}>
                          <iframe className="position-absolute iframe" width={`${video.youtube ? "200" : "200"}`} height={`${video.youtube ? "400" : "400"}`} src={`https://www.${video.youtube ? "youtube" : "tiktok"}.com/embed/${video.youtube ? video.youtube : video.tiktok}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>

                    )}


          </Masonry>
 ) : (
  <p className='mx-auto w-100'>No Videos</p>
)} 

        </div>
      </div>
    </div>



  )
}

export default Media
