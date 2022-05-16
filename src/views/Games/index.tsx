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

    const server = create({
      url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
    });
    export const StageNav = (props) => {
      return (
        <>

                {props.stage == 1 && (  

                <>
                <div className="d-flex align-items-center mb-2">
                    <div className="step done ">1</div>
                    <h4>SUBMIT A CHALLENGE</h4>
                  </div>
                  <p>Currently into Stage 1 of SOSX Game</p>

                  <h5
                    className="d-flex text-muted align-items-center mt-2 mb-2"
                    style={{ order: 2 }}
                  >
                    <div className="step false mr-3 ">2</div>VOTE A CHALLENGE
                  </h5>

                  <h5
                    className="d-flex text-muted align-items-center mt-2 mb-2"
                    style={{ order: 3 }}
                  >
                    <div className="step false mr-3 ">3</div>FINAL TOP 3 VOTE
                  </h5>

                  <h5
                    className="text-muted d-flex align-items-center mt-2 mb-4"
                    style={{ order: 4 }}
                  >
                    <div className="step false mr-3 ">4</div>VIDEO SUBMISSION
                  </h5>
                </>

                )}

                {props.stage == 2 && (  

                <>

                  <h5
                    className="d-flex text-muted align-items-center mt-4 mb-2"
                    style={{ order: 2 }}
                  >
                    <div className="step false mr-3 ">1</div>SUBMIT A CHALLENGE
                  </h5>

                  <div className="d-flex align-items-center mb-2">
                    <div className="step done ">2</div>
                    <h4>VOTE A CHALLENGE</h4>
                  </div>
                  <p>Currently into Stage 2 of SOSX Game. Voting challenges</p>

                  <h5
                    className="text-muted d-flex align-items-center mb-4"
                    style={{ order: 3 }}
                  >
                    <div className="step false mr-3 ">3</div>UPLOAD VIDEO
                  </h5>
                </>

                )}

                {props.stage == 3 && (  

                <>
                  <h5
                    className="d-flex text-muted align-items-center mt-4 mb-2"
                    style={{ order: 2 }}
                  >
                    <div className="step false mr-3 ">1</div>SUBMIT A CHALLENGE
                  </h5>

                  <div className="d-flex align-items-center mb-2">
                    <div className="step done ">2</div>
                    <h4>VOTE A CHALLENGE</h4>
                  </div>
                  <p>Currently into Stage 2 of SOSX Game. Voting final challenges</p>

                  <h5
                    className="text-muted d-flex align-items-center mb-4"
                    style={{ order: 3 }}
                  >
                    <div className="step false mr-3 ">3</div>UPLOAD VIDEO
                  </h5>
                </>

                )}

                    {props.stage == 4 && (  

                    <>

                      <h5
                        className="d-flex text-muted align-items-center mt-4 mb-2"
                        style={{ order: 2 }}
                      >
                        <div className="step false mr-3 ">1</div>SUBMIT A CHALLENGE
                      </h5>

                      <h5
                        className="text-muted d-flex align-items-center mb-4"
                        style={{ order: 3 }}
                      >
                        <div className="step false mr-3 ">2</div>VOTE A CHALLENGE
                      </h5>

                      <div className="d-flex align-items-center mb-2">
                        <div className="step done ">3</div>
                        <h4>UPLOAD VIDEO</h4>
                      </div>
                      <p>Currently into Stage 3 of SOSX Game. Submitting challenge videos.</p>
                    </>

                    )}
        
            
    </>
      );
    };

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

        // console.log(duration)

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
        const roundStartTime = 1652666907;

        let stageGroups = [];

        let stage1 = { start: roundStartTime, end: roundStartTime + 500 * 60 };
        let stage2 = { start: stage1.end, end: stage1.end + 2400 * 60 };
        let stage3 = { start: stage2.end, end: stage2.end + 2400 * 60 };
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
              youtube: valid,
              wallet: account,
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
              tiktok: url.substring(index + 6, index + 25),
              wallet: account,
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
          // setTotalAmountStaked(stakeAmount);
          let level = getLevel(stakeAmount);
          // alert(level);
          setCurrentLevel(level);
        });

        // loadDaoLevels();
        getData();
        getVideo();
        // test();
      }, []);




      return (
        <>
          <div className="game container-fluid d-flex flex-wrap flex-direction-row-reverse" style={{gap:"20px"}}>
            <div id="action-section" style={{ flex: "2 1 60%", order: 2 }}>
              {stage == 1 && <CreateChallenge level={currentLevel} stage={stage} />}
              {stage == 5 && <CreateChallenge level={currentLevel} stage={stage} />}

              {stage == 2 && (
                <div className="card h-100 w-100">
                  <div className="row">
                    <div className="col-12 col-xl-6">
                      <StageNav stage={2} />

                      <p className="mt-2">
                        {" "}
                        Vote for your favorite challenge which the top 3 will then
                        make it to the Final Challenge voting round.
                      </p>
                      <p className="mt-2">
                        {" "}
                        Only Level 2 members can members are allowed to vote.
                      </p>
                      <br/>
                      {/* {console.log(currentLevel)} */}
                      {currentLevel == 3 ? (
                        <Link href="/votechallenge">
                          <button type="submit" className="btn mt-2 btn-primary">
                            {" "}
                            Vote for challenge
                          </button>
                        </Link>
                      ) : (
                        <button
                          type="submit"
                          className="btn mt-2 btn-primary"
                          onClick={() =>
                            toastError("Only level 3 DAO members can participate")
                          }
                        >
                          {" "}
                          Vote for Challange
                        </button>
                      )}
                    </div>
                    <div className="col-6">
                      <img
                        className="mobile-hide"
                        width="60%"
                        src="images/votechallenge-img.png"
                      />
                    </div>
                  </div>
                </div>
              )}

              {stage == 3 && (
                <div className="card h-100">
                  <div className="row h-100">
                    
                    <div className="col-6 h-100 ">
                      <StageNav stage={3} />

                      <p className="mt-2 fs-14">
                        {" "}
                        Vote for the Final Challenge in between the Top 3{" "}
                      </p>
                      <p className="mt-2 fs-14">
                        {" "}
                        Only Levels 3 members are allowed to vote.
                      </p>

                      <Link href="/votechallenge">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg  my-4"
                        >
                          {" "}
                          Vote for Challange
                        </button>
                      </Link>
                      
                    </div>
                    <div className="col-6  border-left">
                      <h4 className="mb-4 pt-2  font-weight-bold">
                        Top 3 Challenges
                      </h4>

                      {topThreeChallenges[2] ? (
                        <>
                          {topThreeChallenges.map((challenge, index) => (
                            <div className="d-flex mb-4">
                              <p className="mr-5 fs-12">
                                {index + 1}. {challenge.challenge.payload.name}
                              </p>
                              <span className="ml-auto fs-12">
                                {challenge.votes} votes
                              </span>
                            </div>
                          ))}
                        </>
                      ) : (
                        "loading"
                      )}
                    </div>
                  </div>
                </div>
              )}

              {stage == 4 && (
                <div className="card h-100">
                  <div className="row h-100">
                    <div className="col-12 col-xl-6">
                      <StageNav stage={4} />

                      <p className="mt-2 fs-14 mb-3">
                        {" "}
                        Here is your challenge. You have 48 hours to complete for
                        the chance to win the prize pool. Challenge must match all
                        criteria listed and submitted to your Youtiube or Tiktok.
                        Anyone can participate.
                      </p>

                      <form onSubmit={videoLink}>
                        <div className="text-muted m-0 mb-2 bg-dark rounded p-2">
                          <input
                            type="text"
                            className="form-control fs-14"
                            id="youtube"
                            placeholder="Youtube or Toktok URL link Here"
                            value={url}
                            onChange={(e) => setURL(e.target.value)}
                          />
                        </div>
                        {account ? (
                          <button type="submit" className="btn btn-primary btn-lg w-100 my-4">
                            Submit you Video
                          </button>
                        ) : (
                          <ConnectWalletButton />
                        )}
                      </form>
                    </div>
                    <div className="col-12 col-xl-6">
                      <div
                        className={`backgroun-dark rounded m-0 d-flex  pb-0 h-100 text-white  flex-column`}
                      >
                        {todayChallenge ? (
                          <>
                            <span className="text-white  fs-18 d-flex align-items-center pb-1 mb-1">
                              {" "}
                              <img
                                src="images/submission-date-icon.png"
                                width="20px"
                                height="20px"
                                className="mr-2"
                              />
                              THIS WEEK CHALLENGE{" "}
                            </span>
                            <span className="text-white pt-1 fs-18 pb-2 font-weight-bold">
                              {todayChallenge.challenge.payload.name}{" "}
                            </span>

                            <div className="d-flex align-items-center">
                              <i className="fa-regular main-pink fa-heart mr-2"></i>

                              <span className="fs-10">
                                {todayChallenge.votes} votes
                              </span>

                              <img
                                className="ml-3 "
                                width={22} height={22}
                                src="/images/dp.png"
                              />

                              <span className="ml-2 fs-12 font-weight-bold">
                                {String(
                                  todayChallenge.challenge.payload.creator
                                ).slice(0, 5)}
                                ...
                                {String(
                                  todayChallenge.challenge.payload.creator
                                ).slice(-5)}
                              </span>

                              <p className=" ml-3 p-1 fs-10 bg-pink-radius text-white">
                                {" "}
                                DAO
                              </p>
                            </div>

                            <div className="row">
                              <div className="col-12 d-flex pt-1 pb-1 flex-column">
                                <span className="text-muted pb-1 fs-12 mt-3">
                                  Details
                                </span>
                                <p
                                  className="fs-12 "
                                  style={{ whiteSpace: "break-spaces" }}
                                >
                                  {todayChallenge.challenge.payload.body}
                                </p>

                                <Link
                                  className="mt-3"
                                  href={`/challenge/${String(
                                    todayChallenge.challenge.payload.name
                                  ).replaceAll(" ", "-")}`}
                                >
                                  Details
                                </Link>
                              </div>
                            </div>
                          </>
                        ) : (
                          <LoaderDisplay />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

        
            </div>

            <div id="timer-section" style={{flex:'1 20%', gap: "20px"}}>
              <TimerDisplay hours={hours} minutes={minutes} seconds={seconds} stage={stage} />
            </div>

            <div id="ranking-section" style={{ flex: 1, order: 4 }}>
              <Ranking voters={voters} />
            </div>

            <div id="video-section" style={{flex: '1 60%', order: 3}}>
              <Media todayVideo={todayChallenge} />
            </div>
          </div>
        </>
      );
    }
