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
import { useQuery } from "@apollo/client";
import { GET_Stage3Challenges } from "utils/graphqlQ";
import { getWalletIsVotedStage3 } from "api/graphql";
import { getDaoLevel } from "../hooks/getDaoLevel";
import { formatFixedNumber } from "utils/formatBalance";

const server = create({
  url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
});

const VoteStageThree = (props: { level; stage }) => {
  const [voted, setVoted] = useState(true);
  const [justVoted, setJustVoted] = useState(false);
  const { account } = useWeb3React();
  const { library, connector } = useWeb3Provider();
  const { toastSuccess, toastError } = useToast();
  const { t } = useTranslation();
  const contract = useDaoStakingContract();
  const [stage3Challenges, setStage3Challenges] = useState();
  const [selectedChallange, setSelectedChallange] = useState({});
  const top3Challenges = useQuery(GET_Stage3Challenges);
  const stage = props.stage;
  const [votingLevel, setVotingLevel] = useState(0);

  useEffect(() => {
    if (top3Challenges.data !== undefined) {
      setStage3Challenges(top3Challenges.data);
      setSelectedChallange(top3Challenges.data.stage3Challenges[0]);
    }
  }, [top3Challenges.data]);

  console.log(top3Challenges);

  const getVoteData = async () => {
    if (account) {
      const vote = await getWalletIsVotedStage3(account);
      if (vote.walltIsVotaed3 == null) {
        setVoted(false);
      }
    }
  };

  useEffect(() => {
    getVoteData();
  }, [account]);

  useEffect(() => {
    userVotingLevel();
  }, []);

  const userVotingLevel = async () => {
    let amount = await contract.getVoterTotalStakeAmount(account);
    amount = amount;
    let level = getDaoLevel(Number(formatFixedNumber(amount, 3, 18)));
    setVotingLevel(level);
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (votingLevel !== 3) {
      toastError(t("Error"), t("Only Level 3 can vote in this stage"));
      return;
    }

    if (voted) {
      toastError("You already voted for another challenge in stage 3");
      return;
    }

    const vote = JSON.stringify({
      timestamp: moment().unix(),
      voterAddress: account,
      level: votingLevel,
      round: "1",
    });

    const sig = await signMessage(connector, library, account, vote);

    if (sig) {
      const forIPFS = JSON.stringify(
        {
          timestamp: moment().unix(),
          voterAddress: account,
          round: "1",
          sig: sig.toString(),
          level: votingLevel,
          // @ts-ignore
          CId: selectedChallange.CID,
        },
        null,
        2
      );

      await server.files.write(
        `/Rounds/Round-1/Votes/stage-${stage}/${account}.json`,
        forIPFS,
        { create: true }
      );
      toastSuccess(t("Vote created!"));
      setJustVoted(true);
    } else {
      toastError(t("Error"), t("Unable to sign payload"));
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
        <h4 style={{ fontSize: "60px" }}>Game</h4>
      </div>
      <div className="d-flex align-items-center mb-2">
        <h4>VOTE IN FINAL CHALLENGE</h4>
      </div>
      <p>
        Vote for the next OX Game challenge within the top 3 voted challenges.
      </p>
      <div className="d-flex flex-row flex-wrap">
        <div style={{ display: "inline-table" }}>
          {stage3Challenges
            ? stage3Challenges.stage3Challenges.map((data, index) => {
                // if(data != null){
                return (
                  <div key={index} className="challenge-list m-3 rounded">
                    <div className="challenge-items d-flex">
                      <div className="list-title">{data.payload.name}</div>
                      <div className="list-button">
                        {" "}
                        <button
                          className="btn mx-auto btn-primary btn-sm "
                          type="button"
                          onClick={() => setSelectedChallange(data)}
                        >
                          VIEW
                        </button>
                      </div>
                    </div>
                    {/* <div className="challenge-items d-flex">
                <div className="list-title">
                  Challenge Title Here
                </div>
                <div className="list-button"> <button className="btn mx-auto btn-primary btn-sm " type="button">VIEW</button>
                </div>
              </div> */}
                  </div>
                );
                // }
              })
            : ""}
        </div>

        {selectedChallange.payload !== undefined ? (
          <div className="challenge-details m-3 d-flex flex-column">
            <h1>{selectedChallange.payload.name}</h1>
            <p>{selectedChallange.payload.body}</p>
            <div className="challenge-meta">
              <p className="mb-0">
                {" "}
                <span>{selectedChallange.payload.creator} </span>
              </p>
              <p>{/* <span>{moment(selectedChallange.timestamp)} </span> */}</p>
            </div>
            <form onSubmit={handleSubmit}>
              {!account ? (
                <ConnectWalletButton className="btn btn-primary btn-lg w-100 mt-4" />
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary btn-lg mt-5 mb-5 "
                  style={{ width: "max-content" }}
                  disabled={justVoted || voted}
                >
                  <i className="fa-solid fa-check-to-slot pr-2"></i>
                  VOTE FOR THIS CHALLENGE
                </button>
              )}
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default VoteStageThree;
