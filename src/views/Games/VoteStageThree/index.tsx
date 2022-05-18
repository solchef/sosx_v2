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

const server = create({
  url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
});

const VoteStageThree = (props: {level, stage}) => {
  const [challenge, setChallenge] = useState<any[]>([]);
  const { account } = useWeb3React();
  const { library, connector } = useWeb3Provider();
  const { toastSuccess, toastError } = useToast();
  const { t } = useTranslation();
  const contract = useDaoStakingContract();
  const stage = props.stage
  const level = props.level

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    let daoList = await contract.getAllAccount();
    let voters = [];
    for (let i = 0; i < daoList.length; i++) {
      let voter_address = daoList[i];
      let total_stake = await contract.getVoterTotalStakeAmount(voter_address);
      total_stake = Number(total_stake / 10 ** 18);
      let voterData = {
        address: voter_address,
        amount: total_stake,
        level: level,
      };

      voters.push(voterData);
    }

    // if (stage == 2) {
    //   toastError(
    //     t("Error"),
    //     t("You already voted for another challenge in stage 2")
    //   );
    //   return;
    // }

    // if (stage == 3) {
    //   toastError(
    //     t("Error"),
    //     t("You already voted for another challenge in stage 3")
    //   );
    //   return;
    // }

    // if (stage == 2 && level == 0) {
    //   toastError(t("Error"), t("You should have level to be able to vote"));
    //   return;
    // }

    // if (stage == 3 && level != 3) {
    //   toastError(t("Error"), t("Only Level 3 can vote in this stage"));
    //   return;
    // }

    const vote = JSON.stringify({
      timestamp: moment().unix(),
      address: account,
      round: "1",
    });

    const sig = await signMessage(connector, library, account, vote);

    if (sig) {
      const forIPFS = JSON.stringify(
        {
          timestamp: moment().unix(),
          address: account,
          round: "1",
          // challenge: challenge[0].cid.toString(),
          sig: sig.toString(),
          // data: voters,
        },
        null,
        2
      );

      await server.files.write(
        `/Rounds/Round-1/votes/stage-${stage}/${account}.json`,
        forIPFS,
        { create: true }
      );
      toastSuccess(t("Vote created!"));
    } else {
      toastError(t("Error"), t("Unable to sign payload"));
    }
  };

    return (
      <div className="card h-100">
      <div className="d-flex align-items-center mb-2"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 239 116" xmlSpace="preserve" style={{width: '80px', fill: 'rgb(255, 0, 204)', marginRight: '5px'}}>
          <path d="M58,0C25.97,0,0,25.97,0,58c0,32.03,25.97,58,58,58s58-25.97,58-58C116,25.97,90.03,0,58,0z M58,90.78 c-18.11,0-32.78-14.68-32.78-32.78c0-18.11,14.68-32.78,32.78-32.78S90.78,39.89,90.78,58C90.78,76.11,76.11,90.78,58,90.78z">
          </path>
          <g>
            <path className="st0" d="M151.87,48.3l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C165.69,53.57,157.14,53.57,151.87,48.3z">
            </path>
            <path className="st0" d="M215.27,112.05l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C229.09,117.32,220.55,117.32,215.27,112.05z">
            </path>
            <path className="st0" d="M126.64,92.96l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09l-25.23,25.23 c-5.27,5.27-13.82,5.27-19.09,0l0,0C121.37,106.77,121.37,98.23,126.64,92.96z">
            </path>
            <path className="st0" d="M190.73,29.21l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09L209.82,48.3 c-5.27,5.27-13.82,5.27-19.09,0l0,0C185.46,43.03,185.46,34.48,190.73,29.21z">
            </path>
          </g>
        </svg>
        <h4 style={{fontSize: '60px'}}>Games</h4>
      </div>
      <div className="d-flex align-items-center mb-2">
        <h4>VOTE IN FINAL CHALLENGE</h4>
      </div>
      <p>Vote for the next OX Games challenge within the top 3 voted challenges.</p>
      <div className="d-flex flex-row flex-wrap">
        <div className="challenge-list m-3 rounded">
          <div className="challenge-items d-flex">
            <div className="list-title">
              Challenge Title Here
            </div>
            <div className="list-button"> <button className="btn mx-auto btn-primary btn-sm " type="button">VIEW</button>
            </div>
          </div>
          <div className="challenge-items d-flex">
            <div className="list-title">
              Challenge Title Here
            </div>
            <div className="list-button"> <button className="btn mx-auto btn-primary btn-sm " type="button">VIEW</button>
            </div>
          </div>
          <div className="challenge-items d-flex">
            <div className="list-title">
              Challenge Title Here
            </div>
            <div className="list-button"> <button className="btn mx-auto btn-primary btn-sm " type="button">VIEW</button>
            </div>
          </div>
        </div>
        <div className="challenge-details m-3 d-flex flex-column">
          <h1>Challenge Title Here</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
          <div className="challenge-meta">
            <p className="mb-0"> <span>Created by: x00000000000000000 </span>
            </p>
            <p><span>Created On: 22/22/2202 22:22:00 </span>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
                      {!account ? (
                        <ConnectWalletButton className="btn btn-primary btn-lg w-100 mt-4" />
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg mt-5 mb-5 "
                          style={{width: 'max-content'}}
                        >
                          <i className="fa-solid fa-check-to-slot pr-2"></i>
                          VOTE
              FOR THIS CHALLENGE
                        </button>
                      )}
              </form>
        </div>
      </div>
    </div>
    )
}

export default VoteStageThree