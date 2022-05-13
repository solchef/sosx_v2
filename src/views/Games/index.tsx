import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useMediaPredicate } from "react-media-hook";
import { create } from "ipfs-http-client";
import useToast from "hooks/useToast";
import { concat } from "uint8arrays";
import { useStakingContract, useSosxContract } from "hooks/useContract";
import moment from "moment";
import ConnectWalletButton from "../../components/ConnectWalletButton";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { validLinks } from "utils/validateLink";
import Masonry from "react-masonry-css";
import { CloseButton, Modal, ModalHeader } from "react-bootstrap";
import { cleanNumber } from "utils/amount";
import { Skeleton } from "../../../packages/uikit/src/components/Skeleton";
import { is } from "immer/dist/internal";

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
  const [youtubeURL, setYoutubeURL] = useState("");
  const [tiktokURL, setTiktokURL] = useState("");
  const [displayLevel, setDisplayLevel] = useState(1);
  const [voters, setVoters] = useState([]);
  const [videos, setVideos] = useState([]);
  const router = useRouter();
  const contract = useStakingContract();
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

    return { min: duration.minutes(), sec: duration.seconds() };
  };

  useEffect(() => {
    const roundStartTime = 1652454182;

    let stageGroups = [];
    let stage1 = { start: roundStartTime, end: roundStartTime + 60 * 60 };
    let stage2 = { start: stage1.end, end: stage1.end + 60 * 60 };
    let stage3 = { start: stage2.end, end: stage2.end + 60 * 60 };
    let stage4 = { start: stage3.end, end: stage3.end + 60 * 60 };
    let stage5 = { start: stage4.end, end: stage1.start };

    stageGroups.push(stage1, stage2, stage3, stage4, stage5);
    let current = moment().unix();
    let check = stageGroups.findIndex(
      (group) => group.end > current && current > group.start
    );

    if (check == -1) {
      setStage(5);
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

  const test = async () => {
    const level1 = [];
    for await (const resultPart of server.files.ls("/levels")) {
      let challenge;
      if (resultPart.name === "level.json") {
        console.log("level1");
        for await (const chunk of server.cat(resultPart.cid)) {
          level1.push(chunk);
        }
        const data = concat(level1);
        challenge = JSON.parse(new TextDecoder().decode(data).toString());
        setVoters(challenge);
      }
    }
  };
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

    if (!youtubeURL && !tiktokURL) {
      toastError("One Link Required");
      return
    }

    if (validLinks(youtubeURL, tiktokURL) == true) {
      const data = JSON.stringify(
        {
          youtube: youtubeURL,
          tiktok: tiktokURL,
        },
        null,
        2
      );

      const todayChallengeName = String(
        todayChallenge.challenge.payload.name
      ).replaceAll(" ", "-");
      const fileName = `video-${moment().unix()}`;
      await server.files.write(
        `/challenges/challenge-${todayChallengeName}/videos/${fileName}`,
        data,
        { create: true }
      );
      form.reset();
      handleClose();
      toastSuccess("Uploaded")
      getVideo();
    } else {
      toastError("Not Valid Links");
    }
  };
  const [showDonate, setShowDonate] = useState(false);
  const handleCloseDonate = () => setShowDonate(false);
  const handleShowDonate = () => setShowDonate(true);

  const handleSubmitDonate = async () => {
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const biggerThan1500 = useMediaPredicate("(min-width: 1500px)");
  const bet768and1200 = useMediaPredicate(
    "(min-width: 576px) and (max-width: 1200px)"
  );
  const bet1200and1500 = useMediaPredicate(
    "(min-width: 1200px) and (max-width: 1500px)"
  );
  const biggest576 = useMediaPredicate(" (max-width: 576px)");

  const loadDaoLevels = async () => {
    let daoList = await contract.getAllAccount();
    daoList = [...new Set(daoList)];

    let voters = [];
    for (let i = 0; i < daoList.length; i++) {
      console.log(voters.findIndex((vt) => vt.address == daoList[i]) != -1);
      // if(voters.findIndex(vt => vt.address == daoList[i]) != -1){
      let voter_address = daoList[i];
      let total_stake = await contract.getVoterTotalStakeAmount(voter_address);
      // console.log(total_stake);
      total_stake = Number(total_stake / 10 ** 18);
      let data = {
        address: voter_address,
        amount: total_stake,
        level: getLevel(total_stake),
      };
      if (voter_address === account) setCurrentLevel(getLevel(total_stake));
      voters.push(data);

      // }
    }
    await server.files.write("/levels/level.json", JSON.stringify(voters), {
      create: true,
    });
    setVoters(voters);
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

  const breakpointColumnsObj = {
    3000: 5,
    2250: 4,
    1850: 3,
    1500: 4,
    1450: 3,
    950: 2,
    500: 1,
  };

  useEffect(() => {
    loadDaoLevels();
    getData();
    getVideo();
    test();
  }, []);

  return (
    <>
      <div className="game container-fluid">
        <div className="row">
          <div className={`col-12 ${biggerThan1500 && "col-xl-9"}`}>
            {/*start header*/}
            <div className="row">
              {/*start Time with prize pool */}
              <div className={`col-xl-4 col-sm-6 col-12`}>
                            <div className="row  backgroun-dark p-3 mt-0 rounded">
                                <div className="d-flex align-items-center">
                                    <img src="images/submission-date-icon.png" width='20px' height='20px' />
                                    <span className="text-white fs-18  ml-2 ">TIME REMAINING </span>
                                </div>
                                <p className="fs-12 text-muted">To submit a video competing the stage</p>
                                <div className="clock  ">
                                    <div className="d-flex justify-content-start" id="countdown">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <p className="li pr-2 pl-2 pb-0"><span className=" main-pink m-0" >{hours}</span>Hours</p>
                                            <p className="li"><span className="" >:</span></p>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <p className="li pr-2 pl-2 pb-0"><span className=" main-pink m-0" >{minutes}</span>Minutes</p>
                                            <p className="li"><span className="" >:</span></p>
                                        </div>
                                        <p className="li pr-2 pl-2 pb-0"><span className=" main-pink m-0" >{seconds}</span>Seconds</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" row backgroun-dark rounded  ">
                                <div className="d-flex">
                                    <div>
                                        <div className="d-flex pb-1 align-items-center">

                                            <img src="images/prize-pool-icon.png" width='24px' height='24px' />

                                            <span className="text-white fs-18 ml-2 ">PRIZE POOL</span>

                                        </div>
                                        <span className="text-muted pb-2  fs-10">Really want this challenge to be done? Donate to pool
                                        </span>
                                    </div>
                                    <div>
                                        <span className=" fs-22  pb-3 font-weight-bold main-pink">$ 1,000.00
                                        </span><br />
                                        <span className=" fs-10  pb-3 font-weight-bold main-pink">sewedweedwqedwe
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>


             

              {/*start Challange*/}
              <div className={`col-xl-8 col-md-12 col-sm-12`}>
                            <div className={`backgroun-dark rounded  p-4 pb-0 h-100 ${(biggerThan1500 || bet1200and1500) && 'm-0'} text-white`}>

                                <div className="row">





                                    <div className="col-6">
                                        <div className="text-white d-flex align-items-center mb-3">
                                            <div className={`step done mr-3 `} >1</div>
                                            SUBMIT A CHALLENGE
                                        </div>
                                        <div className="text-muted d-flex align-items-center mb-3">
                                            <div className={`step  mr-3 `} >2</div>
                                            VOTE A CHALLENGE
                                        </div>
                                        <div className="text-muted d-flex align-items-center mb-3">
                                            <div className={`step  mr-3 `} >3</div>
                                            UPLOADE VIDEO
                                        </div>
                                        <p className="fs-14 mb-4 mt-4">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae atque dolores laborum? Earum vitae voluptatibus necessitatibus ullam nemo tempora fugit quos explicabo quis, saepe illum molestias cumque ipsa quas?
                                        </p>
                                        <p className="fs-14 mb-4 mt-4">
                                            Lorem itempora fugit qupsa quas?
                                        </p>
                                        <button type="button" className="btn btn-primary">Submit your challenge</button>

                                    </div>
                                    <div className="col-6">
                                        <div className="card-body">




                                            <div className="text-muted bg-dark rounded">
                                                Challenge Name
                                            </div>



                                            <textarea rows={14} value="Challenge Rules" className="overflow-auto bg-dark p-3 m-0 rounded text-muted" >
                                            </textarea>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
              {/* <div className={`col-xl-8 col-md-12 col-sm-12`}>
                <div className=" backgroun-dark d-flex rounded  p-4 h-100 text-white flex-column">
                  {todayChallenge ? (
                    <>
                      <span className="text-white pt-1 fs-18 d-flex align-items-center pb-1 mb-1">
                        {" "}
                        <img
                          src="images/submission-date-icon.png"
                          width="20px"
                          height="20px"
                          className="mr-2"
                        />
                        THIS WEEK CHALLENGE{" "}
                      </span>
                      <span className="text-white pt-1 fs-22 pb-2 font-weight-bold">
                        {todayChallenge.challenge.payload.name}
                      </span>

                      <div className="d-flex align-items-center">
                        <i className="fa-regular main-pink fa-heart mr-2"></i>

                        <span className="fs-10">
                          {todayChallenge.votes} votes
                        </span>

                        <img
                          className="ml-3 width-22 fs-22"
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

                        <p className=" ml-3 p-1 fs-10 bg-pink-radius  text-white">
                          {" "}
                          Level 3
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-7 d-flex pt-1 pb-1 flex-column ">
                          <span className="text-muted pb-1 fs-12 mt-3">
                            Details
                          </span>
                          <p className="fs-12">
                            {todayChallenge.challenge.payload.body}
                          </p>
                        </div>
                        <div className="col-5 d-flex pt-1 pb-1 pt-3 flex-column ">
                          <span className="text-muted pb-3 fs-12">Rules:</span>

                          {todayChallenge.challenge.payload.choices.map(
                            (element) => (
                              <div className="d-flex pb-3 align-items-center">
                                <i className="fa-solid fa-check pr-2 main-pink"></i>
                                <p className="fs-12">{element}</p>
                              </div>
                            )
                          )}
                          <Link
                            href={`/challenge/${String(
                              todayChallenge.challenge.payload.name
                            ).replaceAll(" ", "-")}`}
                          >
                            <button
                              type="button"
                              className="btn ml-auto btn-primary"
                            >
                              Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="col-12 col-xl-4 col-md-6">
                      {/* @ts-ignore */}
                      {/* <Skeleton className="mb-2" width={"60%"} /> */}
                      {/* @ts-ignore */}
                      {/* <Skeleton className="mb-2" width={"100%"} /> */}
                      {/* @ts-ignore */}
                      {/* <Skeleton className="mb-2" width={"50%"} /> */}
                      {/* @ts-ignore */}
                      {/* <Skeleton className="mb-2" width={"80%"} height={100} /> */}
                      {/* @ts-ignore */}
                      {/* <Skeleton className="mb-2" width={"80%"} /> */}
                    {/* </div> */}
                  {/* )} */}
                {/* </div> */}
              {/* </div> */} 
              {/*end Challange*/}

             
            </div>
            {/*end header*/}
            {/*start video*/}
            <div className="row">
              <div className="col-12 mt-3">
                <div className=" backgroun-dark rounded p-4">
                  <div className="d-flex justify-content-between pb-2 align-items-center">
                    <p className="text-white fs-22 font-weight-bold">
                      All Submissions{" "}
                    </p>
                    <button
                      type="button"
                      className="btn text-nowrap font-weight-bold  p-2 fs-12 mt-2 btn-success"
                    >
                      View All
                    </button>
                  </div>

                  <div className="row mx-auto mt-2">
                    <Masonry
                      breakpointCols={breakpointColumnsObj}
                      className="my-masonry-grid mx-auto "
                      columnClassName="my-masonry-grid_column"
                    >
                      <div
                        className={`width250  p-3 height400  mb-4  align-self-stretch rounded`}
                      >
                        <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                          <span>
                            <div className="text-white d-flex align-items-center pt-1">
                              <img className="width-22" src="/images/dp.png" />

                              <p className=" ml-2 fs-12">Oxf...ds3</p>
                            </div>
                          </span>
                          <div className="play-btn"></div>
                          <div className="text-white view-vid">
                            <div className=" d-flex align-items-center">
                              <i className="fa-regular fs-12 fa-heart pr-2"></i>

                              <p className="fs-10 mr-4">251</p>

                              <i className="fa-regular fs-12 fa-eye pr-2"></i>
                              <p className="fs-10">43,125</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className={`width250  height150  mb-4  rounded`}>
                        <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                          <span>
                            <div className="text-white d-flex align-items-center pt-1">
                              <img className="width-22" src="/images/dp.png" />

                              <p className=" ml-2 fs-12">Oxf...ds3</p>
                            </div>
                          </span>
                          <div className="play-btn"></div>
                          <div className="text-white view-vid">
                            <div className=" d-flex align-items-center">
                              <i className="fa-regular fs-12 fa-heart pr-2"></i>

                              <p className="fs-10 mr-4">251</p>

                              <i className="fa-regular fs-12 fa-eye pr-2"></i>
                              <p className="fs-10">43,125</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className={`width250  height150  mb-4   rounded`}>
                        <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                          <span>
                            <div className="text-white d-flex align-items-center pt-1">
                              <img className="width-22" src="/images/dp.png" />

                              <p className=" ml-2 fs-12">Oxf...ds3</p>
                            </div>
                          </span>
                          <div className="play-btn"></div>
                          <div className="text-white view-vid">
                            <div className=" d-flex align-items-center">
                              <i className="fa-regular fs-12 fa-heart pr-2"></i>

                              <p className="fs-10 mr-4">251</p>

                              <i className="fa-regular fs-12 fa-eye pr-2"></i>
                              <p className="fs-10">43,125</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div
                        className={`width250  height400  mb-4  align-self-stretch rounded`}
                      >
                        <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                          <span>
                            <div className="text-white d-flex align-items-center pt-1">
                              <img className="width-22" src="/images/dp.png" />

                              <p className=" ml-2 fs-12">Oxf...ds3</p>
                            </div>
                          </span>
                          <div className="play-btn"></div>
                          <div className="text-white view-vid">
                            <div className=" d-flex align-items-center">
                              <i className="fa-regular fs-12 fa-heart pr-2"></i>

                              <p className="fs-10 mr-4">251</p>

                              <i className="fa-regular fs-12 fa-eye pr-2"></i>
                              <p className="fs-10">43,125</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className={`width250  height150  mb-4  rounded`}>
                        <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                          <span>
                            <div className="text-white d-flex align-items-center pt-1">
                              <img className="width-22" src="/images/dp.png" />

                              <p className=" ml-2 fs-12">Oxf...ds3</p>
                            </div>
                          </span>
                          <div className="play-btn"></div>
                          <div className="text-white view-vid">
                            <div className=" d-flex align-items-center">
                              <i className="fa-regular fs-12 fa-heart pr-2"></i>

                              <p className="fs-10 mr-4">251</p>

                              <i className="fa-regular fs-12 fa-eye pr-2"></i>
                              <p className="fs-10">43,125</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className={`width250  height150  mb-4   rounded`}>
                        <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                          <span>
                            <div className="text-white d-flex align-items-center pt-1">
                              <img className="width-22" src="/images/dp.png" />

                              <p className=" ml-2 fs-12">Oxf...ds3</p>
                            </div>
                          </span>
                          <div className="play-btn"></div>
                          <div className="text-white view-vid">
                            <div className=" d-flex align-items-center">
                              <i className="fa-regular fs-12 fa-heart pr-2"></i>

                              <p className="fs-10 mr-4">251</p>

                              <i className="fa-regular fs-12 fa-eye pr-2"></i>
                              <p className="fs-10">43,125</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div
                        className={`width250  height400  mb-4  align-self-stretch rounded`}
                      >
                        <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                          <span>
                            <div className="text-white d-flex align-items-center pt-1">
                              <img className="width-22" src="/images/dp.png" />

                              <p className=" ml-2 fs-12">Oxf...ds3</p>
                            </div>
                          </span>
                          <div className="play-btn"></div>
                          <div className="text-white view-vid">
                            <div className=" d-flex align-items-center">
                              <i className="fa-regular fs-12 fa-heart pr-2"></i>

                              <p className="fs-10 mr-4">251</p>

                              <i className="fa-regular fs-12 fa-eye pr-2"></i>
                              <p className="fs-10">43,125</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className={`width250  height150  mb-4  rounded`}>
                        <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                          <span>
                            <div className="text-white d-flex align-items-center pt-1">
                              <img className="width-22" src="/images/dp.png" />

                              <p className=" ml-2 fs-12">Oxf...ds3</p>
                            </div>
                          </span>
                          <div className="play-btn"></div>
                          <div className="text-white view-vid">
                            <div className=" d-flex align-items-center">
                              <i className="fa-regular fs-12 fa-heart pr-2"></i>

                              <p className="fs-10 mr-4">251</p>

                              <i className="fa-regular fs-12 fa-eye pr-2"></i>
                              <p className="fs-10">43,125</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className={`width250  height150  mb-4   rounded`}>
                        <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                          <span>
                            <div className="text-white d-flex align-items-center pt-1">
                              <img className="width-22" src="/images/dp.png" />

                              <p className=" ml-2 fs-12">Oxf...ds3</p>
                            </div>
                          </span>
                          <div className="play-btn"></div>
                          <div className="text-white view-vid">
                            <div className=" d-flex align-items-center">
                              <i className="fa-regular fs-12 fa-heart pr-2"></i>

                              <p className="fs-10 mr-4">251</p>

                              <i className="fa-regular fs-12 fa-eye pr-2"></i>
                              <p className="fs-10">43,125</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div
                        className={`width250  height400  mb-4  align-self-stretch rounded`}
                      >
                        <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                          <span>
                            <div className="text-white d-flex align-items-center pt-1">
                              <img className="width-22" src="/images/dp.png" />

                              <p className=" ml-2 fs-12">Oxf...ds3</p>
                            </div>
                          </span>
                          <div className="play-btn"></div>
                          <div className="text-white view-vid">
                            <div className=" d-flex align-items-center">
                              <i className="fa-regular fs-12 fa-heart pr-2"></i>

                              <p className="fs-10 mr-4">251</p>

                              <i className="fa-regular fs-12 fa-eye pr-2"></i>
                              <p className="fs-10">43,125</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div
                        className={`width250  height400  mb-4  align-self-stretch rounded`}
                      >
                        <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                          <span>
                            <div className="text-white d-flex align-items-center pt-1">
                              <img className="width-22" src="/images/dp.png" />

                              <p className=" ml-2 fs-12">Oxf...ds3</p>
                            </div>
                          </span>
                          <div className="play-btn"></div>
                          <div className="text-white view-vid">
                            <div className=" d-flex align-items-center">
                              <i className="fa-regular fs-12 fa-heart pr-2"></i>

                              <p className="fs-10 mr-4">251</p>

                              <i className="fa-regular fs-12 fa-eye pr-2"></i>
                              <p className="fs-10">43,125</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div
                        className={`width250  height400  mb-4  align-self-stretch rounded`}
                      >
                        <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                          <span>
                            <div className="text-white d-flex align-items-center pt-1">
                              <img className="width-22" src="/images/dp.png" />

                              <p className=" ml-2 fs-12">Oxf...ds3</p>
                            </div>
                          </span>
                          <div className="play-btn"></div>
                          <div className="text-white view-vid">
                            <div className=" d-flex align-items-center">
                              <i className="fa-regular fs-12 fa-heart pr-2"></i>

                              <p className="fs-10 mr-4">251</p>

                              <i className="fa-regular fs-12 fa-eye pr-2"></i>
                              <p className="fs-10">43,125</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className={`width250  height150  mb-4  rounded`}>
                        <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                          <span>
                            <div className="text-white d-flex align-items-center pt-1">
                              <img className="width-22" src="/images/dp.png" />

                              <p className=" ml-2 fs-12">Oxf...ds3</p>
                            </div>
                          </span>
                          <div className="play-btn"></div>
                          <div className="text-white view-vid">
                            <div className=" d-flex align-items-center">
                              <i className="fa-regular fs-12 fa-heart pr-2"></i>

                              <p className="fs-10 mr-4">251</p>

                              <i className="fa-regular fs-12 fa-eye pr-2"></i>
                              <p className="fs-10">43,125</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className={`width250  height150  mb-4   rounded`}>
                        <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg">
                          <span>
                            <div className="text-white d-flex align-items-center pt-1">
                              <img className="width-22" src="/images/dp.png" />

                              <p className=" ml-2 fs-12">Oxf...ds3</p>
                            </div>
                          </span>
                          <div className="play-btn"></div>
                          <div className="text-white view-vid">
                            <div className=" d-flex align-items-center">
                              <i className="fa-regular fs-12 fa-heart pr-2"></i>

                              <p className="fs-10 mr-4">251</p>

                              <i className="fa-regular fs-12 fa-eye pr-2"></i>
                              <p className="fs-10">43,125</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </Masonry>
                  </div>
                </div>
              </div>
            </div>
            {/*end video*/}
          </div>
          {/*end main*/}
          <div className={`col-12 ${biggerThan1500 && "col-xl-3"}`}>






          <div className="row h-100 ">
                        <div className="col-12 h-100 ">
                            <div className=" backgroun-dark m-0 h-100 rounded overflow-hidden">

                                <div className="align-items-start border-0 justify-content-start">
                                    <div>
                                        <h4 className="fs-20" >Ranking</h4>
                                        <span className="fs-12  font-weight-bold text-white text-nowrap">SOSX Top Token Holders</span>
                                    </div>
                                </div>
                                <ul className="nav3 nav-rank nav3-tabs butten nav3-justified">
                    <li className="nav3-item ">
                      <a
                        className={
                          displayLevel === 1
                            ? `nav3-link active pl-1 pr-1  pb-2 font-weight-bold text-white rounded text-nowrap`
                            : "nav3-link  pl-1 pr-1  pb-2 font-weight-bold text-white rounded text-nowrap"
                        }
                        onClick={() => setDisplayLevel(1)}
                      >
                        Level 1
                      </a>
                    </li>
                    <li className="nav3-item">
                      <a
                        className={
                          displayLevel === 2
                            ? `nav3-link active pl-1 pr-1  pb-2 font-weight-bold text-white rounded text-nowrap`
                            : "nav3-link  pl-1 pr-1  pb-2 font-weight-bold text-white rounded text-nowrap"
                        }
                        onClick={() => setDisplayLevel(2)}
                      >
                        Level 2
                      </a>
                    </li>
                    <li className="nav3-item">
                      <a
                        className={
                          displayLevel === 3
                            ? `nav3-link active pl-1 pr-1  pb-2 font-weight-bold text-white rounded text-nowrap`
                            : "nav3-link  pl-1 pr-1  pb-2 font-weight-bold text-white rounded text-nowrap"
                        }
                        onClick={() => setDisplayLevel(3)}
                      >
                        Level 3
                      </a>
                    </li>
                  </ul>

                  <div className={``}>
                    {voters
                      .sort((b, a) => a.amount - b.amount)
                      .map((voter, i) => (
                        <span key={i}>
                          {voter.level == displayLevel && (
                            <a className="blueprint-header-display trader-display">
                              <div className="d-flex align-items-center">
                                <span className="text-white mr-3 fs-16 font-w600">
                                  {i + 1}.
                                </span>
                                <img
                                  className="blueprint-img-sm rounded-circle"
                                  src=" https://app.hedgeboard.io/userprofiles/default.png"
                                  alt="profile"
                                />
                                <div className="ml-1">
                                  <span className=" card-small-text text-white trader-name">
                                    {voter.address.replace(/(.{10})..+/, "$1…")}
                                  </span>
                                </div>
                              </div>
                              <span> {cleanNumber(voter.amount + "")} </span>
                            </a>
                          )}
                        </span>
                      ))}
                  </div>

                      </div>
                  </div>
                    </div>
      
            {/*Start Ranking*/}
            <div className="row">
              <div className="col-12">
                <div className=" backgroun-dark rounded overflow-hidden">
                  <div className="align-items-start border-0 justify-content-start">
                    <div>
                      <h4 className="fs-20">Ranking</h4>
                      <span className="fs-12  font-weight-bold text-white text-nowrap">
                        SOSX Top Token Holders
                      </span>
                    </div>
                  </div>
                  <ul className="nav3 nav-rank nav3-tabs butten nav3-justified">
                    <li className="nav3-item ">
                      <a
                        className={
                          displayLevel === 1
                            ? `nav3-link active pl-1 pr-1  pb-2 font-weight-bold text-white rounded text-nowrap`
                            : "nav3-link  pl-1 pr-1  pb-2 font-weight-bold text-white rounded text-nowrap"
                        }
                        onClick={() => setDisplayLevel(1)}
                      >
                        Level 1
                      </a>
                    </li>
                    <li className="nav3-item">
                      <a
                        className={
                          displayLevel === 2
                            ? `nav3-link active pl-1 pr-1  pb-2 font-weight-bold text-white rounded text-nowrap`
                            : "nav3-link  pl-1 pr-1  pb-2 font-weight-bold text-white rounded text-nowrap"
                        }
                        onClick={() => setDisplayLevel(2)}
                      >
                        Level 2
                      </a>
                    </li>
                    <li className="nav3-item">
                      <a
                        className={
                          displayLevel === 3
                            ? `nav3-link active pl-1 pr-1  pb-2 font-weight-bold text-white rounded text-nowrap`
                            : "nav3-link  pl-1 pr-1  pb-2 font-weight-bold text-white rounded text-nowrap"
                        }
                        onClick={() => setDisplayLevel(3)}
                      >
                        Level 3
                      </a>
                    </li>
                  </ul>

                  <div className={``}>
                    {voters
                      .sort((b, a) => a.amount - b.amount)
                      .map((voter, i) => (
                        <span key={i}>
                          {voter.level == displayLevel && (
                            <a className="blueprint-header-display trader-display">
                              <div className="d-flex align-items-center">
                                <span className="text-white mr-3 fs-16 font-w600">
                                  {i + 1}.
                                </span>
                                <img
                                  className="blueprint-img-sm rounded-circle"
                                  src=" https://app.hedgeboard.io/userprofiles/default.png"
                                  alt="profile"
                                />
                                <div className="ml-1">
                                  <span className=" card-small-text text-white trader-name">
                                    {voter.address.replace(/(.{10})..+/, "$1…")}
                                  </span>
                                </div>
                              </div>
                              <span> {cleanNumber(voter.amount + "")} </span>
                            </a>
                          )}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            {/*end Ranking*/}
          </div>
          {/*end main*/}
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <ModalHeader className="text-dark">
          SUBMIT LINK TO UPLOADED MEDIA
          <CloseButton />
        </ModalHeader>

        <div className="modal-body">
          <form onSubmit={videoLink}>
            <div className="bg-dark  rounded fs-8">
              <input
                type="text"
                className="form-control fs-20"
                id="tiktok"
                placeholder="TikTok link Here"
                value={tiktokURL}
                onChange={(e) => setTiktokURL(e.target.value)}
              />
            </div>

            <div className="bg-dark  rounded fs-8">
              <input
                type="text"
                className="form-control fs-20"
                id="youtube"
                placeholder="Youtube link Here"
                value={youtubeURL}
                onChange={(e) => setYoutubeURL(e.target.value)}
              />
            </div>

            <div className=" rounded p-2">
              <button className="btn btn-primary w-100">Submit</button>
            </div>
          </form>
        </div>
      </Modal>

      <Modal show={showDonate} onHide={handleCloseDonate} centered>
        <ModalHeader className="text-dark">
          Donate
          <CloseButton />
        </ModalHeader>

        <div className="modal-body">
          <form onSubmit={handleSubmitDonate}>
            Hi
            <div className=" rounded p-2">
              <button className="btn btn-primary w-100">Submit</button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
