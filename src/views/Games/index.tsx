import { useEffect, useState } from "react";
import { useDaoStakingContract } from "hooks/useContract";
import CreateChallenge from "./CreateChallenge";
import Media from "./components/media";
import Ranking from "./components/ranking";
import TimerDisplay from "./components/timer";
import { getDaoLevel } from "./hooks/getDaoLevel";
import { useQuery } from "@apollo/client";
import { GET_LastVideo, GET_Videos, GET_LastRound } from "utils/graphqlQ";
import VoteStageTwo from "./VoteStageTwo";
import VoteStageThree from "./VoteStageThree";
import Submission from "./SubmitChallenge";
import GameGuide from "./guide";
import useStage from "hooks/useStage";

export default function Game() {
  const [videos, setVideos] = useState([]);
  const [lastVideos, setLastVideos] = useState([]);
  const [lastRound, setLastRound] = useState(Number);
  const [startingTimeStamp, setStartingTime] = useState(Number);
  const contract = useDaoStakingContract();
  // let [stage, setStage] = useState(1);
  let [currentLevel, setCurrentLevel] = useState<number>(0);
  const GraphqlVideosData = useQuery(GET_Videos);
  const GraphqlLastVideosData = useQuery(GET_LastVideo);
  const GraphqlLastRoundData = useQuery(GET_LastRound);
   const {stage} = useStage();

  useEffect(() => {
    if (GraphqlVideosData.data !== undefined) setVideos(GraphqlVideosData.data);
  }, [GraphqlVideosData.data]);

  useEffect(() => {
    if (GraphqlLastVideosData.data !== undefined)
      setLastVideos(GraphqlLastVideosData.data);
  }, [GraphqlLastVideosData.data]);

  useEffect(() => {
    if (GraphqlLastRoundData.data !== undefined) {
      setLastRound(GraphqlLastRoundData.data.lastRound.id);
      setStartingTime(GraphqlLastRoundData.data.lastRound.startingTime);
    }
  }, [GraphqlLastRoundData.data]);

  useEffect(() => {
    contract.getTotalStakeAmount().then((stakeAmount) => {
      let level = getDaoLevel(stakeAmount);
      setCurrentLevel(level);
    });
  }, [stage]);

  return (
    <>
      {startingTimeStamp > 0 ? (
        <div className="game container-fluid d-flex flex-wrap flex-direction-row">
          <div id="timer-section" style={{ flex: "0 1 350px" }}>
            <TimerDisplay />
          </div>

          <div id="action-section" style={{ flex: "1 45%" }}>
            {stage == 1 && (
              <CreateChallenge
                level={currentLevel}
                stage={stage}
                round={lastRound}
              />
            )}

            {stage == 2 && (
              <VoteStageTwo
                level={currentLevel}
                stage={stage}
                round={lastRound}
              />
            )}
            {stage == 3 && (
              <VoteStageThree
                level={currentLevel}
                stage={stage}
                round={lastRound}
              />
            )}
            {stage == 4 && (
              <Submission
                level={currentLevel}
                stage={stage}
                round={lastRound}
              />
            )}
          </div>
          <div id="ranking-section" style={{ flex: "0px"}}>
            <Ranking stage={stage} />
          </div>

          <div id="video-section" style={{ flex: "1 40%" }}>
            <Media todayVideo={undefined} />
          </div>
        </div>
     ) : (
        ""
      )} 
      <GameGuide />
    </>
  );
}
