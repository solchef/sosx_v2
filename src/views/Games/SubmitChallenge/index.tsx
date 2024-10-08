import { create } from "ipfs-http-client";
import { useEffect, useState } from "react";
import React, { FormEvent } from "react";
import { useWeb3React } from "@web3-react/core";
import useToast from "hooks/useToast";
import moment from "moment";
import { useQuery } from "@apollo/client";
import { GET_WiningChallenge } from "utils/graphqlQ";

const server = create({
  url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
});

const Submission = (props) => {
  const { account } = useWeb3React();
  const [winingChallenge, setWingingChallenge] = useState();
  const [url, setURL] = useState("");
  const { toastSuccess, toastError } = useToast();
  const winingChallengeData = useQuery(GET_WiningChallenge);
  const lastRound = props.round

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
    if (
      url.search("tiktok") != -1 ||
      url.search("youtu") != -1 ||
      url.search("instagram") != -1
    ) {
      data = JSON.stringify(
        {
          timestamp: moment().unix(),
          id: `${account}`,
          rId: lastRound,
          url: url,
        },
        null,
        2
      );
    } else {
      toastError("Invalid video link");
    }

    if (data !== "") {
      await server.files.write(`/Rounds/Round-${lastRound}/Videos/${account}.json`, data, {
        create: true,
      });
      toastSuccess("Uploaded");
      form.reset();
    } else {
      toastError("Not Valid Links");
    }
  };

  return (
    <div className="card h-100" style={{backgroundColor: "#1e1e1e"}}>
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
        <h4 style={{ fontSize: "53px !important" }}>Games</h4>
      </div>
    
      <div className="mt-3 d-flex flex-row flex-wrap">
        <div className="challenge-section d-flex flex-column">
          <div className="d-flex align-items-start flex-column mt-3 mb-4">
                            <h4 style={{marginBottom: "15px"}}>COMPLETE CHALLENGE</h4>
                            <p>Be the first to complete the challenge below to receive win the prize pool.
                                Record yourself completing the challenge. Remember to start the video with
                                "SocialX paid me to do it!"</p>
          </div>
          <div className="challenge-details">
          <h1>{winingChallenge?.winingChallenge.payload.name}</h1>
          <p>{winingChallenge?.winingChallenge.payload.body}</p>
          <div className="challenge-meta">
            <p className="mb-0">
              {" "}
              <span>
                {/* ts-nocheck */}
                Created by: {winingChallenge?.winingChallenge.payload.creator}{" "}
              </span>
            </p>
            <p>
              {/* <span>Created On: {winingChallenge?.winingChallenge.payload.name} </span> */}
            </p>
          </div>
        </div>
        </div>
        <div className="upload-game">
              <div className="d-flex align-items-start flex-column mt-3 mb-2">
                  <h4 style={{ marginBottom: "15px"}}>SUBMIT VIDEO</h4>
                  <p>Submit the video to youtube or TikTok and provide us with the link below.
                      SocialX.io must be mentioned in the about section of your video &amp; you must
                      share your video on your own social media.</p>
              </div>
          <form onSubmit={videoLink}>
            <div className="bg-input mb-3 mt-3 py-2 px-3 rounded ">
                <input
                  onChange={(e) => setURL(e.target.value)}
                  type="url"
                  placeholder="Video Hosted URL"
                  required
                  className="form-control"
                />
            </div>
            <button
              className="btn btn-primary btn-lg mt25"
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
