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
      router.push('/xgame')
    }
  });
  
  const ReadMore = ({ children, size, css }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);

    return (
      <p className={css}>
        {isReadMore ? text?.slice(0, size) : text}
        <a style={{ color: "#ff00cc" }} className="ml-2 read-or-hide">
          {text?.length > text?.slice(0, size).length
            ? isReadMore
              ? "..."
              : ""
            : ""}
        </a>
      </p>
    );
  };

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
        setChallenges(topThreeChallenges);
      } else {
        setChallenges(challenges);
      }
      setLoading(false);
    };
    getData();
  }, []);
  console.log;(challenges)

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

           
                  <div className="card h-100 p-0 overflow-hidden">
                    <div className="card-body p-3 align-items-start border-0">
                      <div>
                        <span className="fs-12 font-weight-bold success">
                          {/* {camp.challenge.payload.metadata.strategies[0].params.address} */}
                        </span>

                        <h1 className="fs-18 pb-2 pt-3">
                          {camp.challenge?.payload?.name}
                        </h1>

                        <ReadMore size="150" css="fs-14 pt-2">
                          {camp.challenge?.payload?.body}
                        </ReadMore>
                      </div>
                    </div>
                    <div className="card-footer pt-0 foot-card border-0">
                      <div>
                      </div>
                      <div className="align-items-center d-flex justify-content-between">
                        <div>
                          <i className="fa-regular fa-heart p-2"></i>
                          <span className="fs-12 p-1" id="votes">
                            {camp?.votes}
                          </span>
                          <span className="fs-12">Votes</span>
                        </div>
                      </div>

                      <Link
                        href={`/challenge/${String(
                          camp.challenge?.payload?.name
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
