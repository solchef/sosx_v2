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
import { getDaoLevel } from "./hooks/getDaoLevel";

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

  const calculateTimeLeft = (entryTime) => {
    let eventTime = moment(entryTime).unix();
    let currentTime = Number(Math.floor(Date.now() / 1000).toString());
    let leftTime = eventTime - currentTime;
    let duration = moment.duration(leftTime, "seconds");
    let interval = 1000;

    if (duration.asSeconds() <= 0) {
      clearInterval(interval);
    }

    duration = moment.duration(duration.asSeconds() - 1, "seconds");

    setDays(duration.days());
    setHours(duration.hours());
    setMinutes(duration.minutes());
    setSeconds(duration.seconds());

    return {
      hour: duration.hours(),
      min: duration.minutes(),
      sec: duration.seconds(),
    };
  };

  useEffect(() => {
    const roundStartTime = 1652826898;
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
      setStage(1);
    } else {
      const interval = setInterval(() => {
        let currTime = moment().unix();
        let checkStage = stageGroups.findIndex(
          (group) => group.end > currTime && currTime > group.start
        );

        if (checkStage != -1) {
          setStage(checkStage + 1);
          calculateTimeLeft(moment.unix(stageGroups[checkStage].end));
        }
      }, 1000);
      return () => clearInterval(interval);
    }
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



  useEffect(() => {
    contract.getTotalStakeAmount().then((stakeAmount) => {
      // setTotalAmountStaked(stakeAmount);
      let level = getDaoLevel(stakeAmount);
      setCurrentLevel(level);
    });
    // loadDaoLevels();
    getData();
    getVideo();
  }, [stage]);

  return (
    <div className="game container-fluid d-flex flex-wrap flex-direction-row">
      <div id="timer-section" style={{ flex: "0 20%" }}>
        <TimerDisplay
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          stage={stage}
        />
      </div>

      <div id="action-section" style={{ flex: "5 70%" }}>
        <CreateChallenge level={currentLevel} stage={stage} />
      </div>

      <div id="ranking-section" style={{ flex: "1 20%", minWidth: "335px" }}>
        <Ranking voters={voters} />
      </div>

      <div id="video-section" style={{ flex: "5 70%" }}>
        <Media todayVideo={todayChallenge} />
      </div>
    </div>
  );
}
