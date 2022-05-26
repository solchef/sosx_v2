import { Box, Button, Flex, Heading, ProposalIcon } from "@pancakeswap/uikit";
import styled from "styled-components";
import { useTranslation } from "contexts/Localization";
import Container from "components/Layout/Container";
import Link from "next/link";
import DesktopImage from "./DesktopImage";
import Masonry from "react-masonry-css";
import { create } from "ipfs-http-client";
import { useEffect, useState } from "react";
import { concat } from "uint8arrays";
import useInterval from "hooks/useInterval";

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

  useEffect(() => {
    getVideo();
  }, []);
  useInterval(
    () => {
      getVideo();
    },
    true ? 4000 : null
  );
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

  return (
    <div className="card w-100 h-100" style={{minHeight: '500px'}}>
    <div className="d-flex align-items-center mb-2">
    <img src="images/prize-pool-icon.png" className="title-icon" />
    <h4>{t("Wall of Fame")}</h4>
    </div>
    <p>{t("Previous Game Winners Archives video")}</p>
    <div className="d-flex w-100 flex-wrap flex-row mt-4 " style={{gap: '21px'}}>
    <div className="row mx-auto text-center my-auto">{t("NO VIDEOS UPLOADED")}</div>
    </div></div>
  );
};

export default Media;
