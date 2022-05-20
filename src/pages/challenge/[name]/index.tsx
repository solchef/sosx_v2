import { useRouter } from "next/router";
import { create } from "ipfs-http-client";
import { useEffect, useState } from "react";
import { concat } from "uint8arrays";
import React, { FormEvent } from "react";
import { signMessage } from "utils/web3React";
import { useWeb3React } from "@web3-react/core";
import useWeb3Provider from "hooks/useActiveWeb3React";
import { useTranslation } from "contexts/Localization";
import useToast from "hooks/useToast";
import { generatePayloadData } from "views/Games/helpers";
import Link from "next/link";
import { useMediaPredicate } from "react-media-hook";
import { useDaoStakingContract } from "hooks/useContract";
import ConnectWalletButton from "../../../components/ConnectWalletButton";
import useStage from "../../../hooks/useStage";
import useLevels from "hooks/useLevels";
import moment from "moment";

const server = create({
  url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
});

export default function Challenge() {
  const router = useRouter();
  const { name } = router.query;
  const [challenge, setChallenge] = useState<any[]>([]);
  const [votesList, setVotesList] = useState([]);
  const [challengeUrl, setChallengeUrl] = useState([]);
  const [votingLevel, setVotingLevel] = useState(0);
  const { account } = useWeb3React();
  const { library, connector } = useWeb3Provider();
  const { toastSuccess, toastError } = useToast();
  const { t } = useTranslation();
  const contract = useDaoStakingContract();
  const [voters, setVoters] = useState([]);
  const [stage, setStage] = useState(2);
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    getData();
    userVotingLevel();
  }, [stage, name]);

  const stageHook = useStage();
  useEffect(() => {
    setStage(stageHook);
  });

  const allowedStages = [2, 3];
  let challengeName = `challenge-${name}`;

  const getData = async () => {
    if (name && stage) {
      let challenge = [];
      for await (const roundContent of server.files.ls("/Rounds/Round-1")) {
        let challengeData;
        let voteData;
        let votes = 0;
        const chunks = [];
        let allVotes = [];

        if (roundContent.name.includes(`${challengeName}`)) {
          challenge.push(roundContent);
          for await (const challengeFolderContent of server.files.ls(
            `/Rounds/Round-1/${roundContent.name}`
          )) {
            if (challengeFolderContent.name == "info.json") {
              for await (const chunk of server.cat(
                challengeFolderContent.cid
              )) {
                chunks.push(chunk);
              }
              const data = concat(chunks);
              challengeData = JSON.parse(
                new TextDecoder().decode(data).toString()
              );
              challenge.push(challengeData);
            }
          }
          setChallenge(challenge);
        }
      }
    }
  };

  const level = useLevels(account);

  const stageTwoVotes = async () => {
    let voted = true;
    for await (const challenges of server.files.ls("/challenges")) {
      for await (const cha of server.files.ls(
        `/challenges/${challenges.name}/votes/stage-2`
      )) {
        if (cha.name === `${account}.json`) {
          voted = false;
        }
      }
    }
    return voted;
  };

  const stageThreeVotes = async () => {
    let voted = true;
    for await (const challenges of server.files.ls("/challenges")) {
      for await (const cha of server.files.ls(
        `/challenges/${challenges.name}/votes/stage-3`
      )) {
        if (cha.name === `${account}.json`) {
          voted = false;
        }
      }
    }
    return voted;
  };

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
        level: getLevel(total_stake),
      };

      voters.push(voterData);
    }
    const stage2voted = await stageTwoVotes();
    const stage3voted = await stageThreeVotes();

    if (stage == 2 && !stage2voted) {
      toastError(
        t("Error"),
        t("You already voted for another challenge in stage 2")
      );
      return;
    }

    if (stage == 3 && !stage3voted) {
      toastError(
        t("Error"),
        t("You already voted for another challenge in stage 3")
      );
      return;
    }

    if (stage == 2 && level == 0) {
      toastError(t("Error"), t("You should have level to be able to vote"));
      return;
    }

    if (stage == 3 && level != 3) {
      toastError(t("Error"), t("Only Level 3 can vote in this stage"));
      return;
    }

    const vote = JSON.stringify({
      timestamp: moment().unix(),
      address: account,
      round: "1",
      // data: voters,
      comments: [],
    });

    const sig = await signMessage(connector, library, account, vote);

    if (sig) {
      const forIPFS = JSON.stringify(
        {
          timestamp: moment().unix(),
          address: account,
          round: "1",
          challenge: challenge[0].cid.toString(),
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
      getData();
    } else {
      toastError(t("Error"), t("Unable to sign payload"));
    }
  };

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text  overflow-hidden">
        {isReadMore ? text.slice(0, 600) : text}
        <a
          style={{ cursor: "pointer", color: "#ff00cc" }}
          onClick={toggleReadMore}
          className="ml-2 read-or-hide"
        >
          {text.length > text.slice(0, 600).length
            ? isReadMore
              ? "...Read more"
              : " Show less"
            : ""}
        </a>
      </p>
    );
  };

  const userVotingLevel = async () => {
    let amount = await contract.getVoterTotalStakeAmount(account);
    amount = amount / 10 ** 18;
    let level = getLevel(amount);
    setVotingLevel(level);
  };

  const getLevel = (amount) => {
    if (
      amount >= process.env.NEXT_PUBLIC_LEVEL1 &&
      amount < process.env.NEXT_PUBLIC_LEVEL2
    ) {
      return 1;
    }
    if (
      amount >= process.env.NEXT_PUBLIC_LEVEL2 &&
      amount < process.env.NEXT_PUBLIC_LEVEL3
    ) {
      return 2;
    }
    if (amount >= process.env.NEXT_PUBLIC_LEVEL3) {
      return 3;
    }
  };

  const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
  const biggerThan1200 = useMediaPredicate("(min-width: 1200px)");
  const biggest1400 = useMediaPredicate("(max-width: 1400px)");
  const fixD = useMediaPredicate("(min-width: 1200px) and (max-width: 1350px)");

  return (
    <div
      className={`${biggerThan1400 && "container"} pt-3  ${
        biggest1400 && "container-fluid"
      }`}
    >
      <p className="p-2">
        <i className="fa-solid fa-arrow mx-auto-left"></i>{" "}
        <Link href="/votechallenge"> Back to Challenges </Link>{" "}
      </p>
      {challenge[1] && (
        <div className="row mx-auto">
          <div className="col-12 col-xl-8 ">
            <div className="row mx-auto">
              <div className="card p-3 col-12">
                <div className="card-body">
                  <div className="text-muted font-weight-bold">
                    <h1 className="font-weight-bold mb-2">{name}</h1>

                    <ReadMore>{challenge[1].payload.body}</ReadMore>
                  </div>
                </div>

                <div className="row mx-auto pt-5">
                  <div className="ml-2 text-nowrap ">
                    <form onSubmit={handleSubmit}>
                      {!account ? (
                        <ConnectWalletButton className="btn btn-primary btn-lg w-100 mt-4" />
                      ) : votesList.find((acc) => acc.name == account) ? (
                        <button
                          disabled
                          className="btn btn-primary  font-weight-bold "
                        >
                          <i className="fa-solid fa-check-to-slot pr-2"></i>You
                          already voted
                        </button>
                      ) : (
                        <button
                          disabled={!allowedStages.includes(stage)}
                          type="submit"
                          className="btn btn-primary  font-weight-bold "
                        >
                          <i className="fa-solid fa-check-to-slot pr-2"></i>
                          {allowedStages.includes(stage)
                            ? "Vote For the Challenge"
                            : "Voting Disabled in this Stage"}
                        </button>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mx-auto ">
              <div className="card p-3 col-12">
                <h5 className="  fs-16 font-weight-bold ">
                  {votesList.length} &nbsp;Votes
                </h5>

                <table className="table text-white">
                  {votesList.map((vote, index) => (
                    <tr>
                      <td className="border-0 pl-0 pb-0"> {index + 1}</td>
                      <td className="border-0 pb-0">Level {vote.level}</td>
                      <td className="border-0 pb-0">
                        {vote.name.replace(/(.{15})..+/, "$1…")}
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>

          <div className={`col-12 ${biggerThan1200 && "pr-0 pl-0"} col-xl-4`}>
            <div className="row mx-auto ">
              <div
                style={{ fontSize: "80%" }}
                className={`  card ${fixD && "p-1"} col-12`}
              >
                <h5 className=" fs-16 font-weight-bold pb-2">Details</h5>
                <div className="card-body p-0">
                  <div className="row mx-auto d-flex font-weight-bold justify-content-between ">
                    <div>OxGame Challenge</div>
                    <div className="ml-auto text-white">
                      {" "}
                      <img
                        style={{ width: "26px" }}
                        src="/images/xlogo-black.b90261b2.svg"
                      />
                    </div>
                  </div>
                  {/* <div className="row mx-auto d-flex font-weight-bold pt-2 justify-content-between p-0">
                                        <div >IPFS	</div>
                                        <div className="ml-auto text-white" > <div className="ml-auto text-white" ><a href="#"> #QmUzzeT <i className="fa-solid fa-arrow mx-auto-up-right-from-square"></i> </a></div></div>
                                    </div> */}
                  <div className="row mx-auto d-flex font-weight-bold pt-2 justify-content-between p-0">
                    <div>Voting system</div>
                    <div className="ml-auto text-white  fa-12">
                      Vote Challenge
                    </div>
                  </div>

                  <div className="row mx-auto d-flex font-weight-bold pt-2 justify-content-between p-0">
                    <div>Challenge Creation </div>
                    <div className="ml-auto text-white">
                      {challenge[1].payload.created}
                    </div>
                  </div>

                  <div className="row mx-auto d-flex font-weight-bold pt-2 justify-content-between p-0">
                    <div>Voting Stage </div>
                    <div className="ml-auto text-white">{stage}</div>
                  </div>
                  <div className="row  pb-2 mx-auto d-flex font-weight-bold pt-2 justify-content-between p-0">
                    <div>Creator </div>
                    <div className="ml-auto text-white">
                      {" "}
                      <div className="ml-auto text-white">
                        <a
                          href={`https://bscscan.com/address/${challenge[1].payload.creator}`}
                          target="_blank"
                        >
                          {" "}
                          {challenge[1].payload.creator.replace(
                            /(.{15})..+/,
                            "$1…"
                          )}{" "}
                          <i className="fa-solid fa-arrow mx-auto-up-right-from-square"></i>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <div className="row mx-auto d-flex font-weight-bold pt-2 justify-content-between p-0">
                                        <div >Network</div>
                                        <div className="ml-auto text-white" >{challenge[1].payload.metadata.network}</div>
                                    </div> */}
                </div>
              </div>
            </div>
            <div className="row mx-auto">
              <div style={{ fontSize: "90%" }} className="card col-12">
                <h5 className=" fs-16 font-weight-bold pb-2 ">
                  Current results
                </h5>
                <div className="card-body ">
                  <div className="row mx-auto d-flex font-weight-bold justify-content-between">
                    <div>The Votes </div>
                    <div className="ml-auto text-white">
                      {" "}
                      {votesList.length}{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
