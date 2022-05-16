import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { create } from "ipfs-http-client";
import { concat } from "uint8arrays";
import { useMediaPredicate } from "react-media-hook";
import { Placeholder, Spinner } from "react-bootstrap";
import { Skeleton } from "../../../../packages/uikit/src/components/Skeleton";
import LoaderDisplay from "../components/loader";
import moment from "moment";
import useStage from "../hooks/useStage";
import { useRouter } from "next/router";

const server = create({
  url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
});

export default function Votechallenge() {
  const [challenges, setChallenges] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [topChallenges, setTopChallenges] = useState([]);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [stage, setStage] = useState(2);
  const router = useRouter();

  const allowedStages = [2, 3]
  const stageHook = useStage();
  useEffect(() => {
    setStage(stageHook);
    if (!allowedStages.includes(stageHook)) {
      // router.push('/xgame')
    }
  });
  
  const ReadMore = ({ children, size, css }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);

    return (
      <p className={css}>
        {isReadMore ? text.slice(0, size) : text}
        <a style={{ color: "#ff00cc" }} className="ml-2 read-or-hide">
          {text.length > text.slice(0, size).length
            ? isReadMore
              ? "..."
              : ""
            : ""}
        </a>
      </p>
    );
  };

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

    // console.log(duration)

    // setDays(duration.days());
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
    const roundStartTime = 1652653254;

    let stageGroups = [];

    let stage1 = { start: roundStartTime, end: roundStartTime + 5 * 10 };
    let stage2 = { start: stage1.end, end: stage1.end + 5 * 10 };
    let stage3 = { start: stage2.end, end: stage2.end + 5 * 10 };
    let stage4 = { start: stage3.end, end: stage3.end + 5 * 10 };
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

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
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
              `/challenges/${resultPart.name}/votes/stage-${stage}`
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
        console.log(challengeData)
      }
      // setTopChallenges(challenges);

      let topThreeChallenges = [];
      const ch = challenges.sort((a, b) => a.votes - b.votes).reverse();
      topThreeChallenges.push(ch[0], ch[1], ch[2]);

      if (stage == 3) {

        if(challenges.length > 3){
          setChallenges(topThreeChallenges);

        }else{
          setChallenges(challenges);
        }
      } else {
        setChallenges(challenges);
      }
      setLoading(false);
    };
    getData();
  }, []);

  const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
  const biggest1400 = useMediaPredicate("(max-width: 1400px)");

  return (
    <div
      className={`${biggerThan1400 && "container"} pt-3 ${
        biggest1400 && "container-fluid"
      }`}
    >
      <p className="p-2">
        <i className="fa-solid fa-arrow-left"></i>{" "}
        <Link href="/xgame"> Back </Link>{" "}
      </p>
      <div
        className="container-fluid d-flex flex-wrap flex-column flex-sm-row"
        style={{ gap: "20px" }}
      >
        {challenges.length > 0 ? (
          <>
            {challenges
              .sort((a, b) => a.votes - b.votes)
              .reverse()
              .map((camp) => (
              <div  style={{ flex: "1", gap: "20px" }}>

           
                  <div className="card h-100 p-0 d-flex flex-column overflow-hidden">
                    <div className="card-body p-3 align-items-start border-0">
                      <div>
                        <span className="fs-12 font-weight-bold success">
                          {/* {camp.challenge.payload.metadata.strategies[0].params.address} */}
                        </span>

                        <h1 className="fs-18 pb-2 pt-3">
                          {camp.challenge.payload.name}
                        </h1>

                        <ReadMore size="150" css="fs-14 pt-2">
                          {camp.challenge.payload.body}
                        </ReadMore>
                      </div>
                    </div>
                    <div className="card-footer pt-0 mb-auto d-flex flex-column foot-card border-0">
                      
                      <div className="align-items-center d-flex justify-content-between">
                        <div>
                          <i className="fa-regular fa-heart p-2"></i>
                          <span className="fs-12 p-1" id="votes">
                            {camp.votes}
                          </span>
                          <span className="fs-12">Votes</span>
                        </div>
                      </div>

                      <Link
                        href={`/challenge/${String(
                          camp.challenge.payload.name
                        ).replaceAll(" ", "-")}`}
                      >
                        <button type="button" className="btn btn-primary ">
                          <i className="fa-solid fa-check-to-slot pr-2"></i>
                          Details
                        </button>
                      </Link>
                    </div>
                  </div>
                  </div>
              ))}
              </>
      ) : loading ? (
        <LoaderDisplay />
      ) : (
        "No Challenge"
      )}
    </div>
    </div>
  );
}
