import { FormEvent, useEffect, useState } from "react";
import Link from 'next/link'
import { useMediaPredicate } from "react-media-hook";
import { create } from "ipfs-http-client";
import useToast from "hooks/useToast";
import { useTranslation } from 'contexts/Localization'
import { Modal } from "react-bootstrap";
import { concat } from "uint8arrays";
import { useStakingContract, useSosxContract} from 'hooks/useContract'

const server = create({
	url: "http://127.0.0.1:5001",
  
});

export default function Game() {
	const [partyTime, setPartyTime] = useState(false);
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [key, setKey] = useState("chart");
	const { toastSuccess } = useToast()
	const { t } = useTranslation()
	const [videoTitle, setVideoTitle] = useState('')
	const [youtubeURL, setYoutubeURL] = useState('')
	const [tiktokURL, setTiktokURL] = useState('')
	const [videos, setVideos] = useState([]);
	const [displayLevel, setDisplayLevel] = useState(1);
	const [voters, setVoters] = useState([])
	const [todayChallenge, setTodayChallenge] = useState([]);
	const contract = useStakingContract();
	const [videos, setVideos] = useState([])
	const [challenges, setChallenges] = useState<any[]>([]);


	useEffect(() => {
		const target = new Date("05/15/2022 23:59:59");

		const interval = setInterval(() => {
			const now = new Date();
			const difference = target.getTime() - now.getTime();

			const d = Math.floor(difference / (1000 * 60 * 60 * 24));
			setDays(d);

			const h = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			setHours(h);

			const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			setMinutes(m);

			const s = Math.floor((difference % (1000 * 60)) / 1000);
			setSeconds(s);

			if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
				setPartyTime(true);
			}
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		loadDaoLevels();
		// getData();
	}, []);

	const getData = async () => {
		let finalData = [];
		for await (const videoFile of server.files.ls("/vid")) {
			let fileContent;

			for await (const cha of server.files.ls(`/vid/${videoFile.name}`)) {
				const chunks = [];

					for await (const chunk of server.cat(cha.cid)) {
						chunks.push(chunk);
					}
					const data = concat(chunks);
					fileContent = JSON.parse(
						new TextDecoder().decode(data).toString()
					);
			}

			finalData.push(fileContent);
		}

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
		setVideos(finalData);
	};

	const todayChallenge = challenges.sort((a, b) => a.votes - b.votes).reverse()[0]
	const videoLink =  async (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		const form = event.target as HTMLFormElement;
		const files = (form[0] as HTMLInputElement).files;
		const file = files[0];

		if (!files || files.length === 0) {
			console.log('NO')
		}

		const IPFSFile = await server.add(file)
		const url = `http://localhost:8080/ipfs/${IPFSFile.cid}`

		const data = JSON.stringify({
			title: videoTitle,
			youtube: youtubeURL,
			tiktok: tiktokURL,
			video: url
		}, null, 2)

		const todayChallengeName = String(todayChallenge.challenge.payload.name).replaceAll(' ', '-')
		const fileName = `video-${videoTitle.replace(' ', '-')}`
		await server.files.write(`/challenges/challenge-${todayChallengeName}/videos/${fileName}`, data, {create: true})
		toastSuccess(t('Video Uploaded!'))
		form.reset()
		handleClose()
		getData()
	}


	
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);	  
	
	const biggerThan1200 = useMediaPredicate("(min-width: 1200px) and (max-width: 1300px)");
	const biggerThan576 = useMediaPredicate("(min-width: 576px) and (max-width: 625px)");


		const loadDaoLevels = async()=>{
				let daoList = await contract.getAllAccount();
				console.log(daoList);
				let voters = [];
				for (let i = 0; i < daoList.length; i++) {
					let voter_address = daoList[i];
					let total_stake = await contract.getVoterTotalStakeAmount(voter_address);
					// console.log(total_stake);
					total_stake = Number(total_stake/ 10 **18);
				     

					let data = {
						address:voter_address,
						amount: total_stake,
						level: getLevel(total_stake)
					}

					voters.push(data);
				}

				setVoters(voters);
				console.log(voters);
		}

	 const getLevel = (amount) => {
		console.log(process.env.NEXT_PUBLIC_LEVEL1)
		
		if(amount >= process.env.NEXT_PUBLIC_LEVEL1 && amount < process.env.NEXT_PUBLIC_LEVEL2){ return 1; }

		if(amount >= process.env.NEXT_PUBLIC_LEVEL2 && amount < process.env.NEXT_PUBLIC_LEVEL3){ return 2; }

		if(amount >= process.env.NEXT_PUBLIC_LEVEL3){ return 1; }

	 }

	return (
		<>

			<div className="game size-child-game container-fluid">
				<div className="row m-1">
					<div className="col-12 col-sm-6 col-lg-7 col-xl-8 m-0">
						<div className="row m-0">
							<div className={`card3 col-12 text-center ${biggerThan1200 && 
								"p-0"} col-xl-5 rounded-0 d-flex flex-column justify-content-between align-items-center`}>


								<div className="feature-box p-0">
									<div className="pt-4 pr-4 mobile-hide-card ">
										<img src="images/prize-pool-icon.png" style={{ width: '40px', height: '40px' }} />
									</div>
									<div className="feature-text  mt-2">
										<span className="main-pink fs-14 font-weight-bold">Prize Pool</span>
										<h3 className="fs-40">$1,000.00</h3>

									</div>
								</div>


								<div className="feature-box p-0">
									<div className="pt-4 pr-4 mobile-hide-card ">
										<img src="images/submission-date-icon.png" style={{ width: '40px', height: '40px' }} />
									</div>
									<div className="feature-text">
										<span className="main-pink fs-14 d-block font-weight-bold">Time Left </span>
										<div className="clock">
											<div id="countdown">
												<p className="li"><span >{days}</span>days</p>
												<p className="li"><span >{hours}</span>Hours</p>
												<p className="li"><span >{minutes}</span>Minutes</p>
												<p className="li"><span >{seconds}</span>Seconds</p>
											</div>
										</div>

									</div>
								</div>

								<div className="feature-box p-0">
									<div className="feature-text m-3">
										<a onClick={handleShow} className="btn btn-primary">Upload Video Here</a>
									</div>
								</div> 
								<Modal show={show} onHide={handleClose} centered>
								<form onSubmit={videoLink}>
								<div className="form-group row">
									<div className="col-sm-10">
									<input type="file" className="form-control" id="filevideo" placeholder="Upload Video" />
									</div>
									<div className="col-sm-10">
									<input type="text" className="form-control" id="tiktok" placeholder="TikTok" value={tiktokURL} onChange={(e) => setTiktokURL(e.target.value)} />
									</div>
									<div className="col-sm-10">
									<input type="text" className="form-control" id="youtube" placeholder="YouTube" value={youtubeURL} onChange={(e) => setYoutubeURL(e.target.value)}/>
									</div>
									<div className="col-sm-10">
									<input type="text" className="form-control" id="title" placeholder="title" value={videoTitle} onChange={(e) => setVideoTitle(e.target.value)} />
									</div>
								</div>
								<button className="btn btn-primary">Upload Video Here</button>
								</form>
								</Modal>

							</div>

							<div className=" p-0  col-12  col-xl-7 rounded-0 d-flex flex-column justify-content-between card3 overflow-hidden">
									{todayChallenge ? (
										<>
										<div className="card-header align-items-start border-0">
									<div>
										<h4 className="fs-20  mt-2 mb-3">Today's Challenge</h4>
										<h4 className="fs-18 mb-0 pb-2">{todayChallenge.challenge.payload.name}</h4>
										<span className="fs-12">{todayChallenge.challenge.payload.body} </span>
										<h4 className="fs-12 p-1 text-white pt-3">Rules</h4>
										{todayChallenge.challenge.payload.choices.map((element) => (
										<ul className="fs-12">
											<li>
												<i className="fa-solid fa-check pr-2"></i>
												{element}
											</li>
										</ul>
									))}
									</div>

								</div>
								<div className="p-3 align-items-start justify-content-between align-items-center">
									<li><i className="fa-regular fa-heart pr-2"></i><span className="fs-12 pr-1"
										id="votes">{todayChallenge.votes}</span><span className="fs-12">Votes</span></li>
								</div>
										</>
									) : (
										<p>Loading</p>
									)}
								

							</div>
							
							
						</div>
						<div className="row m-0">


							<div className="card3 p-3">

								<div className="row d-flex justify-content-between p-4 align-items-end">
									<div>
										<h4 className="fs-20">All Submission</h4>
									</div>
									<div className="ml-auto pt-3 ">
										<span className="fs-14 sub-blue font-weight-bold">Watch All Videos
										</span>
									</div>
								</div>



								<div className="card3-body">
									<div className="row">
									{videos.length > 0 ? (
										<div>
											{videos.map((video) => 
												<iframe width="auto" height="auto" src={video.video} title="YouTube video player"  allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"></iframe>
											)}
										</div>
									) : (
										<p>No Videos</p>
									)}

									</div>
									<div className="col-sm-12 d-flex mt-3">
										<button className="btn btn-primary mx-auto">Load More</button>

									</div>
								</div>
							</div>



						</div>
					</div>
					<div className="col-12 col-sm-6 col-lg-5 col-xl-4 m-0">
						<div className="card3 overflow-hidden">
							<div className="card3-header">

								<h4 className="fs-20 mx-auto">DAOX</h4>
							</div>
							<div className="d-flex flex-column p-3 ">
								<Link href="/createchallenge">

									<button className="btn btn-success">Create Challenge</button>
								</Link>

								<Link href="/votechallenge">

									<button className="btn btn-primary mt-2">Vote Challenge</button>
								</Link>

							</div>




							<div className="card3-header align-items-start border-0 justify-content-between">
								<div>
									<h4 className="fs-20 mx-auto">Ranking</h4>
									<span className="fs-12 text-nowrap">This Week's Top SOSX Token Holders</span>
								</div>
							</div>


						  

							<ul className="nav3  p-2 nav-rank nav3-tabs butten nav3-justified mb-3">
								<li className="nav3-item">
									<a className={`nav3-link ${displayLevel == 1 && 'active'} pl-1 pr-1 pt-2 pb-2 font-weight-bold rounded text-nowrap` } href="#" onClick={() => setDisplayLevel(1)}>Level 1</a>
								</li>
								<li className="nav3-item">
									<a className={`nav3-link ${displayLevel == 2 && 'active'} pl-1 pr-1 pt-2 pb-2 font-weight-bold rounded text-nowrap` } href="#" onClick={() => setDisplayLevel(2)}>Level 2</a>
								</li>
								<li className="nav3-item">
									<a className={`nav3-link ${displayLevel == 3 && 'active'} pl-1 pr-1 pt-2 pb-2 font-weight-bold rounded text-nowrap` } href="#" onClick={() => setDisplayLevel(3)}>Level 3</a>
								</li>
							</ul>



							<div className={`card3-body ranking ${biggerThan576 && "p-0"} ${biggerThan1200 && "p-0"}`}>
								
							{voters.sort((a, b) => b.amount - a.amount).map((voter, i) => 
									<>
										{voter.level == displayLevel &&  

											<a className="blueprint-header-display trader-display">
											<div className="d-flex align-items-center">
												<span className="text-white mr-3 fs-16 font-w600">{i}</span>
												<img className="blueprint-img-sm rounded-circle"
													src=" https://app.hedgeboard.io/userprofiles/default.png" alt="profile" />
												<div className="ml-1">
													<span
														className="mb-1 card-small-text text-white trader-name">{voter.address.replace(/(.{10})..+/, "$1…")}</span>
												</div>
												</div>
											<span><i className="fa fa-wallet"></i> {voter.amount} </span>
											</a>
										}
									</>
						    	)}
							
							</div>
						</div>

					</div>
				</div>
			</div>


		</>
	)
}
