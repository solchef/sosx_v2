import { useRouter } from "next/router";
import { create } from "ipfs-http-client";
import { useEffect, useState } from "react";
import { concat } from "uint8arrays";
import React, { FormEvent } from "react";
import { signMessage } from "utils/web3React";
import { useWeb3React } from "@web3-react/core";
import useWeb3Provider from "hooks/useActiveWeb3React";
import useToast from "hooks/useToast";
import { useDaoStakingContract } from "hooks/useContract";
import ConnectWalletButton from "../../../components/ConnectWalletButton";
import useStage from "../../../hooks/useStage";
import useLevels from "hooks/useLevels";
import moment from "moment";
import { useTranslation } from "contexts/Localization";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { validLinks } from "utils/validateLink";
import { useQuery } from "@apollo/client";
import { GET_WiningChallenge } from "utils/graphqlQ";

const server = create({
  url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
});

const Submission = (props: { level; stage }) => {
  const [challenge, setChallenge] = useState<any[]>([]);
  const { account } = useWeb3React();
  const [winingChallenge, setWingingChallenge] = useState();
  const { library, connector } = useWeb3Provider();
  const [url, setURL] = useState("");
  const { toastSuccess, toastError } = useToast();
  const { t } = useTranslation();
  const contract = useDaoStakingContract();
  const winingChallengeData = useQuery(GET_WiningChallenge);
  const stage = props.stage;
  const level = props.level;

  useEffect(() => {
    if (winingChallengeData.data !== undefined)
      setWingingChallenge(winingChallengeData.data);
  }, [winingChallengeData.data]);

  const videoLink = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = event.target as HTMLFormElement;

    if (!url) {
      toastError("Link Required");
      return;
    }

    let data;
    if (url.search("youtube") != -1) {
      let regExp =
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      let match = url.match(regExp);
      const valid = match && match[7].length == 11 ? match[7] : false;
      if (valid !== false) {
        data = JSON.stringify({
          id: `${account}+round-1`,
          rId: "round",
          urls: {
            youtube: valid,
          },
        });
      }
    }

    if (url.search("tiktok") != -1) {
      if (url.search("tiktok") != -1) {
        if (url.search("vt") != -1) {
          toastError("Use https://tiktok.com/@usename...");
          return;
        }
        const index = url.indexOf("video/");
        data = JSON.stringify({
          id: `${account}+round-1`,
          rId: "round",
          urls: {
            youtube: url.substring(index + 6, index + 25),
          },
        });
      } else {
        return false;
      }
    }

    if (data !== "") {
      //   const todayChallengeName = String(
      //     todayChallenge.challenge.payload.name
      //   ).replaceAll(" ", "-");

      let todayChallengeName = "Mall-Streaking-Challenge";
      const fileName = `video-${moment().unix()}`;
      await server.files.write(
        `/challenges/challenge-${todayChallengeName}/videos/${fileName}`,
        data,
        { create: true }
      );
      toastSuccess("Uploaded");
      form.reset();
      //   getVideo();
    } else {
      toastError("Not Valid Links");
    }
  };

  return (
    <div className="card h-100">
      <div className="d-flex align-items-center mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 239 116"
          xmlSpace="preserve"
          style={{
            width: "80px",
            fill: "rgb(255, 0, 204)",
            marginRight: "5px",
          }}
        >
          <path d="M58,0C25.97,0,0,25.97,0,58c0,32.03,25.97,58,58,58s58-25.97,58-58C116,25.97,90.03,0,58,0z M58,90.78 c-18.11,0-32.78-14.68-32.78-32.78c0-18.11,14.68-32.78,32.78-32.78S90.78,39.89,90.78,58C90.78,76.11,76.11,90.78,58,90.78z"></path>
          <g>
            <path
              className="st0"
              d="M151.87,48.3l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C165.69,53.57,157.14,53.57,151.87,48.3z"
            ></path>
            <path
              className="st0"
              d="M215.27,112.05l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C229.09,117.32,220.55,117.32,215.27,112.05z"
            ></path>
            <path
              className="st0"
              d="M126.64,92.96l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09l-25.23,25.23 c-5.27,5.27-13.82,5.27-19.09,0l0,0C121.37,106.77,121.37,98.23,126.64,92.96z"
            ></path>
            <path
              className="st0"
              d="M190.73,29.21l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09L209.82,48.3 c-5.27,5.27-13.82,5.27-19.09,0l0,0C185.46,43.03,185.46,34.48,190.73,29.21z"
            ></path>
          </g>
        </svg>
        <h4 style={{ fontSize: "60px" }}>Games</h4>
      </div>
      <div className="d-flex align-items-center mb-2">
        <h4>SUBMIT YOUR VIDEO</h4>
      </div>
      <p>
        Create a video accomplishing described challenge bellow for a chance to
        win prize pool
      </p>
      <div className="mt-5 d-flex flex-row flex-wrap">
        <div className="challenge-details m-3 d-flex flex-column">
          <h1>Challenge Title Here</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <div className="challenge-meta">
            <p className="mb-0">
              {" "}
              <span>Created by: x00000000000000000 </span>
            </p>
            <p>
              <span>Created On: 22/22/2202 22:22:00 </span>
            </p>
          </div>
        </div>
        <div className="upload-game pt-5 m-3 rounded">
          <p> Enter the YOUTUBE, INSTAGRAM or TIKTOK URL of your video.</p>
          <form onSubmit={videoLink}>
            <div className="bg-input mb-3 mt-3 py-2 px-3 rounded ">
              <div className="d-flex justify-content-between align-items-center">
                <input
                  onChange={(e) => setURL(e.target.value)}
                  type="text"
                  placeholder="Video Hosted URL"
                  required
                  className="form-control w-100"
                  style={{ fontSize: "20px" }}
                />
              </div>
            </div>
            <button
              className="btn btn-primary btn-lg mt-5 mb-5 "
              type="submit"
              style={{ width: "max-content" }}
            >
              SUBMIT VIDEO LINK
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Submission;
