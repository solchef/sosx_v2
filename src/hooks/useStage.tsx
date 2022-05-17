import moment from "moment";
import { useState, useEffect, useMemo } from "react";

const useStage = () => {
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

    return {
      hour: duration.hours(),
      min: duration.minutes(),
      sec: duration.seconds(),
    };
  };


  
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const roundStartTime = 1652666907;

    let stageGroups = [];

    const STAGE_1 = Number(process.env.NEXT_PUBLIC_STAGE_1)
    const STAGE_2 = Number(process.env.NEXT_PUBLIC_STAGE_2)
    const STAGE_3 = Number(process.env.NEXT_PUBLIC_STAGE_3)
    const STAGE_4 = Number(process.env.NEXT_PUBLIC_STAGE_4)

    let stage1 = { start: roundStartTime, end: roundStartTime + STAGE_1 * 60 };
    let stage2 = { start: stage1.end, end: stage1.end + STAGE_2  * 60 };
    let stage3 = { start: stage2.end, end: stage2.end + STAGE_3  * 60 };
    let stage4 = { start: stage3.end, end: stage3.end + STAGE_4  * 60 };
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
  });
  return stage;
};

export default useStage;
