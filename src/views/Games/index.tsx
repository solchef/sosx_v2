import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useMediaPredicate } from "react-media-hook";
import { create } from "ipfs-http-client";
import useToast from "hooks/useToast";
import { concat } from "uint8arrays";
import { useDaoStakingContract, useSosxContract } from "hooks/useContract";
import moment from "moment";
import ConnectWalletButton from "../../components/ConnectWalletButton";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { validLinks } from "utils/validateLink";
import { CloseButton, Modal, ModalHeader } from "react-bootstrap";
import { cleanNumber } from "utils/amount";
import CreateChallenge from "./CreateChallenge";
// import Votechallenge from "./Votechallenge";
import Media from "./components/media";
import Ranking from "./components/ranking";
import TimerDisplay from "./components/timer";
import LoaderDisplay from "./components/loader";
import { calculateTimeLeft } from "./utils/calculateTimeLeft";

const server = create({
  url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
});


export default function Game() {
  const { account } = useActiveWeb3React();
  const [days, setDays] = useState(0);
  const { toastError, toastSuccess } = useToast();
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [url, setURL] = useState("");
  const [displayLevel, setDisplayLevel] = useState(1);
  const [voters, setVoters] = useState([]);
  const [videos, setVideos] = useState([]);
  const router = useRouter();
  const contract = useDaoStakingContract();
  const [challenges, setChallenges] = useState<any[]>([]);
  let [stage, setStage] = useState(5);
  let [currentLevel, setCurrentLevel] = useState<number>(0);


   const stageTimer = (time) => {
    const roundStartTime = 1652705443;
    let stageGroups = [];
    let stage1 = { start: roundStartTime, end: roundStartTime + 500 * 60 };
    let stage2 = { start: stage1.end, end: stage1.end + 500 * 60 };
    let stage3 = { start: stage2.end, end: stage2.end + 500 * 60 };
    let stage4 = { start: stage3.end, end: stage3.end + 2400 * 60 };
    let stage5 = { start: stage4.end, end: stage1.start };

    stageGroups.push(stage1, stage2, stage3, stage4, stage5);
    let current = moment().unix();
    let check = stageGroups.findIndex(
      (group) => group.end > current && current > group.start
    );

    if (check == -1 && current > current) {
      stage = 1;
    } else {
      const interval = setInterval(() => {
        let currTime = moment().unix();
        let checkStage = stageGroups.findIndex(
          (group) => group.end > currTime && currTime > group.start
        );

        if (checkStage != -1) {
        //   setStage(checkStage + 1);
        let timeleft = calculateTimeLeft(moment.unix(stageGroups[checkStage].end));

            setHours(timeleft.hour);
            setMinutes(timeleft.min);
            setSeconds(timeleft.sec);


        }
      }, 1000);
      return () => clearInterval(interval);
    }
}


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
        
        useEffect(() => {
              stageTimer
        }, []);

  const getData = async () => {
    console.log("first");
    let challenges = [];
    for await (const resultPart of server.files.ls("/challenges")) {
      let challenge;
      let vote;

      for await (const cha of server.files.ls(
        `/challenges/${resultPart.name}`
      )) {
        const chunks = [];
        if (cha.name == "votes") {
          let votes = await server.files.stat(
            `/challenges/${resultPart.name}/votes`
          );
          vote = votes.blocks;
        }

        if (cha.name == "challenge.json") {
          for await (const chunk of server.cat(cha.cid)) {
            chunks.push(chunk);
          }
          const data = concat(chunks);
          challenge = JSON.parse(new TextDecoder().decode(data).toString());
        }
      }

      let challengeData = {
        challenge: challenge,
        votes: vote,
      };
      challenges.push(challengeData);
    }

    setChallenges(challenges);
  };




  const todayChallenge = challenges
    .sort((a, b) => a.votes - b.votes)
    .reverse()[0];

  let topThreeChallenges = [];
  const ch = challenges.sort((a, b) => a.votes - b.votes).reverse();
  topThreeChallenges.push(ch[0], ch[1], ch[2]);

  const getVideo = async () => {
    let finalData = [];

    if (todayChallenge) {
      for await (const videoFile of server.files.ls(
        `/challenges/${String(
          `challenge-${todayChallenge.challenge.payload.name}`
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

  const videoLink = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = event.target as HTMLFormElement;

    if (!url) {
      toastError("Link Required");
      return;
    }

    let data;
    if (url.search("youtu") != -1) {
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
          }
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
          }
        });
      } else {
        return false;
      }
    }

    if (data !== "") {
      const todayChallengeName = String(
        todayChallenge.challenge.payload.name
      ).replaceAll(" ", "-");
      const fileName = `video-${moment().unix()}`;
      await server.files.write(
        `/challenges/challenge-${todayChallengeName}/videos/${fileName}`,
        data,
        { create: true }
      );
      toastSuccess("Uploaded");
      form.reset();
      getVideo();
    } else {
      toastError("Not Valid Links");
    }
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


  useEffect(() => {
    contract.getTotalStakeAmount().then((stakeAmount) => {
      let level = getLevel(stakeAmount);
      setCurrentLevel(level);
    });

    getData();
    getVideo();

  }, [stage]);

  return (
    <>
      <div
        className="game container-fluid d-flex flex-wrap flex-direction-row-reverse"
        style={{ gap: "20px" }}>
        <div id="action-section" style={{ flex: "1 50%", order: 2 }}>
          <CreateChallenge level={currentLevel} stage={stage} />
        </div>

        <div id="timer-section" style={{ flex: 1, gap: "20px" }}>
          <TimerDisplay
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            stage={stage}
          />
        </div>

        <div id="ranking-section" style={{ flex: 1, order: 4 }}>
          <Ranking voters={voters} />
        </div>

        <div id="video-section" style={{ flex: "1 50%", order: 3 }}>
          <Media todayVideo={todayChallenge} />
        </div>
      </div>
    </>
  );
}
