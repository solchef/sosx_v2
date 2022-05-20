import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { create } from "ipfs-http-client";
import { useDaoStakingContract, useSosxContract } from "hooks/useContract";
import moment from "moment";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import CreateChallenge from "./CreateChallenge";
import Media from "./components/media";
import Ranking from "./components/ranking";
import TimerDisplay from "./components/timer";
import LoaderDisplay from "./components/loader";
import { getDaoLevel } from "./hooks/getDaoLevel";
import { useQuery } from "@apollo/client";
import { GET_LastVideo, GET_Videos } from "utils/graphqlQ";
import VoteStageTwo from "./VoteStageTwo";
import VoteStageThree from "./VoteStageThree";
import Submission from "./SubmitChallenge";

const server = create({
  url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
});

export default function Game() {
  const { account } = useActiveWeb3React();
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [videos, setVideos] = useState([]);
  const [lastVideos, setLastVideos] = useState([]);
  const contract = useDaoStakingContract();
  let [stage, setStage] = useState(4);
  let [currentLevel, setCurrentLevel] = useState<number>(0);
  const GraphqlVideosData = useQuery(GET_Videos);
  const GraphqlLastVideosData = useQuery(GET_LastVideo);

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
    if (GraphqlVideosData.data !== undefined) setVideos(GraphqlVideosData.data);
  }, [GraphqlVideosData.data]);

  useEffect(() => {
    if (GraphqlLastVideosData.data !== undefined)
      setLastVideos(GraphqlLastVideosData.data);
  }, [GraphqlLastVideosData.data]);

  useEffect(() => {
    const roundStartTime = 1652979696;

    let stageGroups = [];

    let stage1 = { start: roundStartTime, end: roundStartTime * 60 };
    let stage2 = { start: stage1.end, end: stage1.end * 60 };
    let stage3 = { start: stage2.end, end: stage2.end * 60 };
    let stage4 = { start: stage3.end, end: stage3.end * 60 };
    let stage5 = { start: stage3.end, end: stage3.end * 60 };

    stageGroups.push(stage1, stage2, stage3, stage4, stage5);
    let current = moment().unix();
    let check = stageGroups.findIndex(
      (group) => group.end > current && current > group.start
    );

    if (check == -1 && current > current) {
      setStage(4);
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

  useEffect(() => {
    contract.getTotalStakeAmount().then((stakeAmount) => {
      // setTotalAmountStaked(stakeAmount);
      let level = getDaoLevel(stakeAmount);
      setCurrentLevel(level);
    });
  }, [stage]);

  return (
    <div className="game container-fluid d-flex flex-wrap flex-direction-row">
      <div id="timer-section" style={{ flex: "0 1 350px" }}>
        <TimerDisplay
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          stage={stage}
        />
      </div>

      <div id="action-section" style={{ flex: "2 73%" }}>
        {stage == 1 && <CreateChallenge level={currentLevel} stage={stage} />}
        {stage == 2 && <VoteStageTwo level={currentLevel} stage={stage} />}
        {stage == 3 && <VoteStageThree level={currentLevel} stage={stage} />}
        {stage == 4 && <Submission level={currentLevel} stage={stage} />}
      </div>
      <div id="ranking-section" style={{ flex: "0 1 350px" }}>
        <Ranking stage={stage} />
      </div>

      <div id="video-section" style={{ flex: "2 73%" }}>
        <Media todayVideo={undefined} />
      </div>
    </div>
  );
}
