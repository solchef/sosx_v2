import { FormEvent, useEffect, useRef, useState } from "react";
import Link from 'next/link'
import { useMediaPredicate } from "react-media-hook";
import { create } from "ipfs-http-client";
import useToast from "hooks/useToast";
import { useTranslation } from 'contexts/Localization'
import { CloseButton, Modal, ModalHeader } from "react-bootstrap";
import { concat } from "uint8arrays";
import { useStakingContract, useSosxContract } from 'hooks/useContract'
import moment from "moment";
import ConnectWalletButton from '../../components/ConnectWalletButton';
import useActiveWeb3React from 'hooks/useActiveWeb3React';
import {useDropzone} from 'react-dropzone';
import { TikTok } from "react-tiktok";
import { validLinks } from "utils/validateLink";


const server = create({
	url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL
});


export default function Game() {
	const {account} = useActiveWeb3React();
	const [partyTime, setPartyTime] = useState(false);
	const [days, setDays] = useState(0);
	const { toastError } = useToast()
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [key, setKey] = useState("chart");
	const { toastSuccess } = useToast()
	const { t } = useTranslation()
	const [videoTitle, setVideoTitle] = useState('')
	const [youtubeURL, setYoutubeURL] = useState('')
	const [tiktokURL, setTiktokURL] = useState('')
	const [displayLevel, setDisplayLevel] = useState(1);
	const [voters, setVoters] = useState([]);
	
	const [videos, setVideos] = useState([])
	const contract = useStakingContract();
	const [challenges, setChallenges] = useState<any[]>([]);
	const videoElem = useRef();
	const videoInput = useRef();
	const [imgSrc, setImgSrc] = useState('');
  	let [stage ,setStage] = useState(1);

	const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

	// const files = acceptedFiles.map(file => (
	// 	<li key={file.path}>
	// 	  {file.path} - {file.size} bytes
	// 	</li>
	//   ));
	
	const calculateTimeLeft = (entryTime) => {

		let eventTime =  moment(entryTime).unix();
		let currentTime = Number((Math.floor(Date.now() / 1000)).toString());
		let leftTime = eventTime - currentTime;
		let duration = moment.duration(leftTime, 'seconds');
		let interval = 1000;

		if (duration.asSeconds() <= 0) {
			clearInterval(interval);
		}

		duration = moment.duration(duration.asSeconds() - 1, 'seconds');

		setDays(duration.days());
		setHours(duration.hours());
		setMinutes(duration.minutes());
		setSeconds(duration.seconds()); 

		return ({min:duration.minutes(), sec: duration.seconds()});

	}

	useEffect(() => {
		const roundStartTime = 1652428999 + 10;
		let stageGroups = [];
		let stage1 = { start: roundStartTime, end: roundStartTime + (1 * 10) }
		let stage2 = { start: stage1.end, end: (stage1.end) + (1 * 10)}
		let stage3 = { start: stage2.end, end: (stage2.end) + (1 * 10) }
		let stage4 = { start: stage3.end, end: (stage3.end) + (1 * 10) }

		stageGroups.push(stage1,stage2,stage3, stage4);
		const interval = setInterval(() => {
			let currTime = moment().unix();
			let checkStage = stageGroups.findIndex(group => group.end > currTime && currTime > group.start);

			if(checkStage != -1){
			  	setStage(checkStage + 1)
				 calculateTimeLeft(moment.unix(stageGroups[checkStage].end));
			}

		}, 1000);
		return () => clearInterval(interval);

	},[]);




	const getData = async () => {
		let challenges = [];
		for await (const resultPart of server.files.ls("/challenges")) {
			let challenge;
			let vote;

			for await (const cha of server.files.ls(`/challenges/${resultPart.name}`)) {
				const chunks = [];
				if (cha.name == 'votes') {
					let votes = await server.files.stat(`/challenges/${resultPart.name}/votes`)
					vote = votes.blocks;
				}

				if (cha.name == 'challenge.json') {
					for await (const chunk of server.cat(cha.cid)) {
						chunks.push(chunk);
					}
					const data = concat(chunks);
					challenge = JSON.parse(
						new TextDecoder().decode(data).toString()
					);
				}
			}

			let challengeData = {
				challenge: challenge,
				votes: vote
			}
			challenges.push(challengeData);
		}

		setChallenges(challenges);
	};

	const todayChallenge = challenges.sort((a, b) => a.votes - b.votes).reverse()[0]

	const getVideo = async () => {
		let finalData = [];
		
		if (todayChallenge) {
			for await (const videoFile of server.files.ls(`/challenges/${String(`challenge-${todayChallenge.challenge.payload.name}`).replaceAll(' ', '-')}/videos`)) {
				let fileContent;
				const chunks = [];
				for await (const chunk of server.cat(videoFile.cid)) {
					chunks.push(chunk);
				}
				const data = concat(chunks);
				fileContent = JSON.parse(
					new TextDecoder().decode(data).toString()
				);
				finalData.push(fileContent);
			}
			setVideos(finalData);
		}
	}
	
	const videoLink =  async (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		const form = event.target as HTMLFormElement;

		if(!validLinks(youtubeURL, tiktokURL)) {
			const data = JSON.stringify({
				title: youtubeURL,
				youtube: youtubeURL,
				tiktok: tiktokURL,
				// video: url,
				// thumbnail: imgSrc 
			}, null, 2)

			const todayChallengeName = String(todayChallenge.challenge.payload.name).replaceAll(' ', '-')
			const fileName = `video-${moment().unix()}`
			await server.files.write(`/challenges/challenge-${todayChallengeName}/videos/${fileName}`, data, { create: true })
			// toastSuccess(t('Video Uploaded!'))
			form.reset()
			handleClose()
			getVideo()
		} else{
			if (validLinks(youtubeURL, tiktokURL) == "One Link Required") {
				toastError("One Link Required");
			}
			if (validLinks(youtubeURL, tiktokURL) == "Invalid Youtube Link")
				toastError("Invalid Youtube Link");
			if (validLinks(youtubeURL, tiktokURL) == "Invalid TikTok Link") {
				toastError("Invalid TikTok Link");
			}

		}
	}
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


    const littleThan1200 = useMediaPredicate(" (max-width: 1200px)");
    const biggerThan2000 = useMediaPredicate(" (min-width: 2000px)");
    const biggerThan1800 = useMediaPredicate(" (min-width: 1800px)");
    const biggerThan1650 = useMediaPredicate(" (max-width: 1650px)");
    const littThan1650 = useMediaPredicate(" (min-width: 1650px)");


	const loadDaoLevels = async () => {
		let daoList = await contract.getAllAccount();
		daoList = [...new Set(daoList)];

		console.log(daoList);
		let voters = [];
		for (let i = 0; i < daoList.length; i++) {
			console.log(voters.findIndex(vt => vt.address == daoList[i]) != -1)
			// if(voters.findIndex(vt => vt.address == daoList[i]) != -1){
				let voter_address = daoList[i];
					let total_stake = await contract.getVoterTotalStakeAmount(voter_address);
					// console.log(total_stake);
					total_stake = Number(total_stake / 10 ** 18);
					let data = {
						address: voter_address,
						amount: total_stake,
						level: getLevel(total_stake)
					}
					voters.push(data);

			// }
			
		}

		setVoters(voters);
	}

	 const getLevel = (amount) => {
		// console.log(process.env.NEXT_PUBLIC_LEVEL1)
		
		if (amount >= process.env.NEXT_PUBLIC_LEVEL1 && amount < process.env.NEXT_PUBLIC_LEVEL2) { return 1; }

		if (amount >= process.env.NEXT_PUBLIC_LEVEL2 && amount < process.env.NEXT_PUBLIC_LEVEL3) { return 2; }

		if(amount >= process.env.NEXT_PUBLIC_LEVEL3){ return 1; }

		if (amount >= process.env.NEXT_PUBLIC_LEVEL3) { return 3; }

	}

	useEffect(() => {
		loadDaoLevels()
		getData()
		getVideo()
	},[]);

	return (
		<>
        <div className="container-fluid">
            <div className="row ">
                {/*start Time with prize pool */}
                <div className={`col-12  col-lg ${biggerThan1800 && 'col-xl-3'} ${littleThan1200 && 'mb-3'}`}>
                    <div style={{ backgroundColor: 'rgb(17 17 22)' }} className="d-flex p-3 m-0 h-100 rounded justify-content-start flex-column  ">
                        <div className="d-flex align-items-center mt-2 mb-3 justify-content-start">
                            <div className="d-flex align-items-between">

                                <img src="images/submission-date-icon.png" style={{ width: '24px', height: '24px' }} />

                                <span style={{ fontWeight: '1000 ', fontSize: '22px' }} className="text-white pl-2">TIME REMAINING </span>

                            </div>

                            <p style={{ backgroundColor: '#f600cc', borderRadius: '10px' }} className="pl-1 mx-auto pr-1 fs-14 pt-0 pb-0 mr-3 text-white"> Stage {stage}</p>
                        </div>
                        <div className="clock mb-3 pr-2 pl-2 pb-2">
                            <div className="d-flex justify-content-start" id="countdown">
                                <div className="d-flex justify-content-start align-items-center">


                                    <p style={{ backgroundColor: '#f600cc', borderRadius: '10px' }} className="li pt-2 pr-3 pb-2 pl-3"><span className="m-0" style={{ fontSize: '40px', fontFamily: 'digital-7' }} >{days}</span>days</p>
                                    <p className="li"><span className="" >:</span></p>
                                </div>

                                <div className="d-flex justify-content-start align-items-center">

                                    <p style={{ backgroundColor: '#f600cc', borderRadius: '10px' }} className="li pt-2 pr-3 pb-2 pl-3"><span className="m-0" style={{ fontSize: '40px', fontFamily: 'digital-7' }} >{hours}</span>Hours</p>
                                    <p className="li"><span className="" >:</span></p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">

                                    <p style={{ backgroundColor: '#f600cc', borderRadius: '10px' }} className="li pt-2 pr-3 pb-2 pl-3"><span className="m-0" style={{ fontSize: '40px', fontFamily: 'digital-7' }} >{minutes}</span>Minutes</p>
                                    <p className="li"><span className="" >:</span></p>
                                </div>

                                <p style={{ backgroundColor: '#f600cc', borderRadius: '10px' }} className="li pt-2 pr-3 pb-2 pl-3"><span className="m-0" style={{ fontSize: '40px', fontFamily: 'digital-7' }}>{seconds}</span>Seconds</p>
                            </div>
                        </div>
                        <div className="d-flex mb-3 mt-2 align-items-center">

                            <img src="images/prize-pool-icon.png" style={{ width: '24px', height: '24px' }} />

                            <span style={{ fontWeight: '1000 ', fontSize: '22px' }} className="text-white pl-2">PRIZE POOL</span>

                        </div>
                        <span style={{ fontWeight: '1000 ', fontSize: '60px' }} className="mb-3 main-pink">$ 1,000.00
                        </span>
                        <span className="text-muted mb-3 fs-12">et! Possimus ea repudi?repudndae in? fdfsd  dfssfds
                        </span>
						{!account ? (
                     <ConnectWalletButton className="btn btn-primary btn-lg w-100 mt-4"/>
                    	) : (<a  onClick={handleShow} className="btn pt-1 pb-1 btn-primary">Upload Video</a>)
						} 
                    </div>
                </div>

                {/*end Time with prize pool */}


                {/*start Challange*/}
                <div className={`col-12 col-lg-6  ${biggerThan1650 && 'col-xl-7'}  ${biggerThan1800 && 'col-xl-6 '} ${littleThan1200 && 'mb-3'}`}>
				
                    <div style={{ backgroundColor: 'rgb(17 17 22)' }} className="d-flex rounded m-0 h-100  p-3 pl-4 text-white flex-column">
					{todayChallenge ? (
						<>
                        <span style={{ fontWeight: '1000 ', fontSize: '22px' }} className="text-white mt-2">THIS WEEK CHALLENGE </span>
                        <span style={{ fontWeight: '1000 ', fontSize: '18px' }} className="text-white pt-3">{todayChallenge.challenge.payload.name} </span>

                        <div className="pt-3 main-pink">
                            <i className="fa-regular fa-heart pr-3"></i>

                            <span>{todayChallenge.votes} votes</span>
                        </div>
                        <div className="d-flex align-items-center pt-3">
                            <span>Creator</span>
                            <p style={{ backgroundColor: '#f600cc', borderRadius: '10px' }} className="pl-1 pr-1 pt-0 pb-0 ml-3 fs-14 text-white"> Level 3</p>

                        </div>

                        <div className="d-flex align-items-center pt-3">
                            <img style={{ width: '26px' }} src="/images/xlogo-black.b90261b2.svg" />

                            <span className="ml-3">{String(todayChallenge.challenge.payload.creator).slice(0, 5)}...{String(todayChallenge.challenge.payload.creator).slice(-5)}</span>
                        </div>

                        <div className="d-flex flex-column pt-3">
                            <span className="text-muted pb-1">Details:</span>
                            <p className="fs-14">{todayChallenge.challenge.payload.body}</p>
                        </div>

                        <div className="d-flex flex-column pt-3">
                            <span className="text-muted pb-1">Roles:</span>
							{todayChallenge.challenge.payload.choices.map((element) => 
								<div className="d-flex align-items-center">
								<i className="fa-solid fa-check pr-2 main-pink"></i>
								<p className="fs-12">{element}</p>
								</div>
							)}
                        </div>

						</>

						) : (
							<div className="mx-auto my-auto">
								<p>Loading</p>
							</div>
					
				)}

                    </div>



                </div>

                <div className={`col-12 col-lg ${littleThan1200 && 'mb-3'}`}>
                    <div className="row">
                    <div className={`col-5 ${biggerThan1800 && 'col-xl-12'} ${biggerThan1650 && 'mt-5'} ${littThan1650 && 'col-xl-12'}`}>
                        <div style={{ backgroundColor: 'rgb(17 17 22)' }} className=" row m-0 p-0 h-auto rounded">
                            <div className="col-12 col-lg-6">
                                <div className="d-flex flex-column">
                                    <span style={{ fontWeight: '1000 ', fontSize: '22px' }} className="text-white pt-3 ">Create </span>
                                    <span style={{ fontWeight: '1000 ', fontSize: '22px' }} className="text-white "> CHALLENGE </span>


                                    <span className="fs-14 pt-2 text-white">Create a new challenge to be voted</span>
									<Link href="/createchallenge">
                                    <button disabled={stage > 1} type="button" className="btn mt-3 mb-2 btn-success">Create Now</button>
									</Link>
                                </div>

                            </div>
                            <div className="col-12 col-lg-6">
                                <img src="images/createchallenge-img.png" />

                            </div>
                        </div>
                    </div>
                    <div className={`col-5 ${biggerThan1800 && 'col-xl-12'} ${littThan1650 && 'col-xl-12'}`}>

                        <div style={{ backgroundColor: 'rgb(17 17 22)' }} className={` row m-0 mt-5 p-0 rounded ${littleThan1200 && '  '}`}>
                            <div className="col-12 col-lg-6">
                                <div className="d-flex flex-column">
                                    <span style={{ fontWeight: '1000 ', fontSize: '22px' }} className="text-white pt-3 ">Vote </span>
                                    <span style={{ fontWeight: '1000 ', fontSize: '22px' }} className="text-white "> CHALLENGE </span>


                                    <span className="fs-14 pt-2 text-white">Vote challenges created by DAO members </span>
									<Link href="/votechallenge">
                                    <button type="button" className="btn mt-3 mb-2 btn-success">Vote Now</button>
									</Link>
                                </div>

                            </div>
                            <div className="col-12 col-lg-6">
                                <img src="images/votechallenge-img.png" />

                            </div>
                        </div>
                    </div>
                    </div>
                 

                </div>



            </div>
            <div className="row mt-3">
                <div className="col-12 col-xl-9">
					
                    <div style={{ backgroundColor: 'rgb(17 17 22)' }} className="rounded" >
                        <div className="d-flex mb-2 flex-column">

                            {/* <div className="d-flex justify-content-between  mb-2  align-items-center">

                                <p className="text-white  font-weight-bold" style={{ fontWeight: '1000 ', fontSize: '22px' }} >MOST VIEWED CHALLENGES <span className="main-pink">7 DAY</span></p>
                                <button type="button" className="btn pl-2 pt-1 pb-1 pr-2 btn-success font-weight-bold ">View All</button>

                            </div> */}

                            <div className="row ">
                            </div>
                        </div>

                        <div className="d-flex mb-2 flex-column">

                            <div className="d-flex justify-content-between  mb-2  align-items-center">

                                <p className="text-white  font-weight-bold" style={{ fontWeight: '1000 ', fontSize: '22px' }} >MOST VIEWED CHALLENGES <span className="main-pink">7 DAY</span></p>
                                <button type="button" className="btn pl-2 pt-1 pb-1 pr-2 btn-success font-weight-bold ">View All</button>

                            </div>

                            <div className="row">

								{videos.length > 0 ? (
									<>
										{videos.map((video) =>
										<>
 									<div className={`videos pl-3 m-0 p-0 pr-3 pb-3 col-12 col-sm-6 col-lg-4  ${biggerThan2000 && 'col-xl-2'} rounded`}>
										<a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
											className="video">

											<span>
												<div className="text-white d-flex pt-3">
													<img style={{ width: '26px' }} src="/images/xlogo-black.b90261b2.svg" />

													<p className=" ml-2 fs-12" >Oxfwd...ds3</p>
												</div>
											</span>
											
											{/* {console.log(video)} */}
												{video.tiktok.length > 2 ?  

													<TikTok  url="https://www.tiktok.com/@scout2015/video/6718335390845095173" />
																// <></>
												:

												 <iframe width="" height="" src="https://www.youtube.com/embed/-LAwDM8JKwU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
														// <></>
											
												}
												{/* <TikTok url="https://www.tiktok.com/@scout2015/video/6718335390845095173" /> */}


										
											<div className="play-btn"></div>
											<div className="text-white view-vid">

												<div className="pt-3 d-flex align-items-center">
													<i className="fa-regular fa-heart pr-2"></i>

													<p>{video.votes}</p>
												</div>
											</div>

										</a>
                                    <style jsx>{`
										.view-vid {
											position: absolute;
											bottom:7px;
											left:5px;
										}
										
									`}</style>
										</div>
										</>
										)}
									</>
								) : (
									// <p>No Videos</p>
									<div className="row">
										<div className="justify-center">
										<p>No Videos</p>

										</div>
									</div>
								)}
                               
                            </div>
                        </div>
                    </div>



                </div>
                {/*Start Ranking*/}
                <div className="col-12 col-xl-3">
                    <div style={{ backgroundColor: 'rgb(17 17 22)' }} className="rounded overflow-hidden">

                        <div className="align-items-start border-0 justify-content-start">
                            <div>
                                <h4 className="fs-20 font-weight-bold  mx-auto">Ranking</h4>
                                <span className="fs-12 mt-2 font-weight-bold p-2 text-white text-nowrap">SOSX Top Token Holders</span>
                            </div>
                        </div>

                        <ul className="nav3 nav-rank nav3-tabs butten nav3-justified mb-3">
                            <li className="nav3-item">
                                <a className={`nav3-link  pl-1 pr-1 pt-2 pb-2 font-weight-bold text-white rounded text-nowrap`} onClick={() => setDisplayLevel(1)} >Level 1</a>
                            </li>
                            <li className="nav3-item">
                                <a className={`nav3-link pl-1 pr-1 pt-2 pb-2 font-weight-bold text-white rounded text-nowrap`} onClick={() => setDisplayLevel(2)} >Level 2</a>
                            </li>
                            <li className="nav3-item">
                                <a className={`nav3-link pl-1 pr-1 pt-2 pb-2 font-weight-bold text-white rounded text-nowrap`} onClick={() => setDisplayLevel(3)} >Level 3</a>
                            </li>
                        </ul>

                        <div className={`card3-body ranking`}>

						{voters.sort((b, a) => a.amount - b.amount).map((voter, i) =>
									<>	
										{voter.level == displayLevel &&

											<a className="blueprint-header-display trader-display">
											<div className="d-flex align-items-center">
												<span className="text-white mr-3 fs-16 font-w600">{i + 1}.</span>
												<img className="blueprint-img-sm rounded-circle"
													src=" https://app.hedgeboard.io/userprofiles/default.png" alt="profile" />
												<div className="ml-1">
													<span
														className="mb-1 card-small-text text-white trader-name">{voter.address.replace(/(.{10})..+/, "$1…")}</span>
												</div>
											</div>
											<span> {voter.amount} </span>
											</a>
										}
									</>
								)}
                        </div>
                    </div>
                </div>
                {/*end Ranking*/}
				<Modal show={show} onHide={handleClose} centered>

					<ModalHeader className="text-dark">
							  SUBMIT  LINK TO UPLOADED MEDIA
							  <CloseButton />
					</ModalHeader>

					<div className="modal-body">
					<form onSubmit={videoLink}>

						<div className="bg-dark  rounded fs-8">
									<input type="text" className="form-control fs-20" id="tiktok" placeholder="TikTok link Here" value={tiktokURL} onChange={(e) => setTiktokURL(e.target.value)} />
						</div>

						<div className="bg-dark  rounded fs-8">
								<input type="text" className="form-control fs-20" id="youtube" placeholder="Youtube link Here" value={youtubeURL} onChange={(e) => setYoutubeURL(e.target.value)} />
						</div>

						<div className=" rounded p-2">
					     	<button className="btn btn-primary w-100">Submit</button>
						</div>
					</form>
					</div>
				</Modal>
            </div>
        </div>
    </>
	)
}
