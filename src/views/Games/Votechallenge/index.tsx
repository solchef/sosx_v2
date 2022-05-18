import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { create } from "ipfs-http-client";
import { concat } from "uint8arrays";
import { useMediaPredicate } from "react-media-hook";
import { Placeholder, Spinner } from "react-bootstrap";
import { Skeleton } from "../../../../packages/uikit/src/components/Skeleton";
import LoaderDisplay from "../components/loader";
import moment from "moment";
import useStage from "../../../hooks/useStage";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_Challenges, GET_LastRound } from "utils/graphqlQ";

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
  const [lastRound, setLastRound] = useState();
  const router = useRouter();
  const graphChallengesData = useQuery(GET_Challenges);
  const graphLastRoundData = useQuery(GET_LastRound);

  const stageHook = useStage();
  useEffect(() => {
    setStage(stageHook);
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

  useEffect(() => {
    if (graphLastRoundData.data !== undefined) {
      setLastRound(graphLastRoundData.data.lastRound);
    }
  }, [graphLastRoundData.data]);

  useEffect(() => {
    if (graphChallengesData.data !== undefined) {
      setChallenges(graphChallengesData.data.challenge);
    }
  }, [graphChallengesData.data]);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      let challenges = [];
      for await (const roundContent of server.files.ls(
        "/Rounds/Round-1/challenges"
      )) {
        let challengeData;
        let vote;
        const chunks = [];

        if (roundContent.name.includes("challenge-")) {
          for await (const challengeFolderContent of server.files.ls(
            `/Rounds/Round-1/challenges/${roundContent.name}`
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
              challenges.push(challengeData);
            }
          }
          setChallenges(challenges);
        }
      }

      let topThreeChallenges = [];
      const ch = challenges.sort((a, b) => a.votes - b.votes).reverse();
      topThreeChallenges.push(ch[0], ch[1], ch[2]);
      if (stage == 3) {
        if (challenges.length > 3) {
          setChallenges(topThreeChallenges);
        } else {
          setChallenges(challenges);
        }
      } else {
        setChallenges(challenges);
      }
      setLoading(false);
    };
    getData();
  }, [stage]);

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
                <div style={{ flex: "1", gap: "20px" }}>
                  <div className="card h-100 p-0 d-flex flex-column overflow-hidden">
                    <div className="card-body p-3 align-items-start border-0">
                      <div>
                        <span className="fs-12 font-weight-bold success">
                          {/* {camp.payload.metadata.strategies[0].params.address} */}
                        </span>

                        <h1 className="fs-18 pb-2 pt-3">{camp.payload.name}</h1>

                        <ReadMore size="150" css="fs-14 pt-2">
                          {camp.payload.body}
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
                          camp.payload.name
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
