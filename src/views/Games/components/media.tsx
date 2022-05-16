import { Box, Button, Flex, Heading, ProposalIcon } from "@pancakeswap/uikit";
import styled from "styled-components";
import { useTranslation } from "contexts/Localization";
import Container from "components/Layout/Container";
import Link from "next/link";
import DesktopImage from "./DesktopImage";
import Masonry from "react-masonry-css";
import { create } from "ipfs-http-client";
import { useState } from "react";
import { concat } from "uint8arrays";

const server = create({
  url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
});

const StyledMedia = styled(Box)`
  background: ${({ theme }) => theme.colors.gradients.bubblegum};
  padding-bottom: 32px;
  padding-top: 32px;
`;

const Media = (props: { todayVideo }) => {
  const { t } = useTranslation();

  const breakpointColumnsObj = {
    3000: 5,
    2250: 4,
    1850: 3,
    1500: 4,
    1450: 3,
    1150: 2,
    850: 1,
    768: 2,
    620: 1,
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

  getVideo();

  return (
    // <div className="card w-100 h-100" style={{minHeight: "500px"}}>
    //   <div className="flex-row d-flex w-100 justify-content-between">
    //   <div className="row mx-auto mt-2">
    //     <div className="col-12 mx-auto w-100">

    //     {videos.length > 0 ? (
    //       <Masonry
    //         breakpointCols={breakpointColumnsObj}
    //         className="my-masonry-grid mx-auto "
    //         columnClassName="my-masonry-grid_column">

    //             {videos.map((video) =>

    //                     <div className={` width200 height400 p-3   mb-4  align-self-stretch rounded`}>
    //                       <iframe className="position-absolute iframe" width={`${video.youtube ? "200" : "200"}`} height={`${video.youtube ? "400" : "400"}`} src={`https://www.${video.youtube ? "youtube" : "tiktok"}.com/embed/${video.youtube ? video.youtube : video.tiktok}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    //                     </div>

    //                 )}

    //       </Masonry>
    //         ) : (
    //           <p className='mx-auto w-100'>No Videos</p>
    //         )}

    //     </div>
    //   </div>
    // </div>

    <div className="card w-100 h-100" style={{minHeight: '500px'}}>
    <div className="d-flex align-items-center mb-2"><img src="images/prize-pool-icon.png" className="title-icon" />
      <h4>Wall of Fame</h4>
    </div>
    <p>Previous Game Winners Archives video</p>
    <div className="d-flex w-100 flex-wrap flex-row mt-4 " style={{gap: '21px'}}>

      <div className="row mx-auto text-center"></div>
      {/* <div className="my-masonry-grid_column">
        <div className="video-submission">
          <div className="video-container">
            <iframe  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/PzqWfRE5mYk" />
          </div>
          <p className="video-title">SOSXGAME001_Username - Challenge Name excerpt...</p>
        </div>
        <div className="video-submission">
          <div className="video-container">
            <iframe  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/PzqWfRE5mYk" />
          </div>
          <p className="video-title">SOSXGAME001_Username - Challenge Name excerpt...</p>
        </div>
      </div> */}
      {/* <div className="my-masonry-grid_column">
        <div className="video-submission">
          <div className="video-container">
            <iframe  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/PzqWfRE5mYk" />
          </div>
          <p className="video-title">SOSXGAME001_Username - Challenge Name excerpt...</p>
        </div>
        <div className="video-submission">
          <div className="video-container">
            <iframe  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/PzqWfRE5mYk" />
          </div>
          <p className="video-title">SOSXGAME001_Username - Challenge Name excerpt...</p>
        </div>
      </div> */}
      {/* <div className="my-masonry-grid_column">
        <div className="video-submission">
          <div className="video-container">
            <iframe  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/PzqWfRE5mYk" />
          </div>
          <p className="video-title">SOSXGAME001_Username - Challenge Name excerpt...</p>
        </div>
        <div className="video-submission">
          <div className="video-container">
            <iframe  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder={0} src="https://www.youtube.com/embed/PzqWfRE5mYk" />
          </div>
          <p className="video-title">SOSXGAME001_Username - Challenge Name excerpt...</p>
        </div>
      </div> */}
    </div>
  </div>
  );
};

export default Media;
