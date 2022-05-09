import Link from 'next/link'
import { useEffect, useState } from "react";
import { create } from "ipfs-http-client";
import { concat } from "uint8arrays";
import { useMediaPredicate } from "react-media-hook";

const server = create({
	url: "http://127.0.0.1:5001",
});

export default function Votechallenge() {
	const [challenges, setChallenges] = useState<any[]>([]);
	const obj = {};

	const ReadMore = ({ children,size ,css }) => {
		const text = children;
		const [isReadMore, setIsReadMore] = useState(true);


		return (
			<p className={css}>
				{isReadMore ? text.slice(0, size) : text}
				<a style={{ color: '#ff00cc' }} className="ml-2 read-or-hide">
					{text.length > text.slice(0, size).length ? (isReadMore ? "..." : "") : ''}
				</a>
			</p>
		);
	};


	useEffect(() => {
		const getData = async () => {
			let challenges = [];
			for await (const resultPart of server.files.ls("/")) {
				let challenge;
				let vote;

				for await (const cha of server.files.ls(`/${resultPart.name}`)) {
					const chunks = [];
					if (cha.name == 'votes') {
						let votes = await server.files.stat(`/${resultPart.name}/votes`)
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
		getData();
	}, []);

	console.log("challenges", challenges);

	const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
	const biggest1400 = useMediaPredicate("(max-width: 1400px)");

	return (

		<div className={`${biggerThan1400 && "container"} pt-3 ${biggest1400 && "container-fluid"}`} >
            <p className='p-2'><i className="fa-solid fa-arrow-left"></i>  <Link href='/xgame'> Back </Link> </p>

			<div className="row pt-3">
				{challenges.map((camp) => (

					<div className="col-xl-4 col-md-6">
						<div className="card p-0 overflow-hidden">
							<div className="card-header  align-items-start border-0">
								<div>
									<span className="fs-12 font-weight-bold success">
										{camp.challenge.payload.metadata.strategies[0].params.address}
									</span>

										<ReadMore size="35" css="fs-18 pb-2 pt-3">
											{camp.challenge.payload.name}
										</ReadMore>

										<ReadMore size="150" css="fs-14 pt-2">
											{camp.challenge.payload.body}
										</ReadMore>

									<h4 className="fs-12 text-white pt-3">Rules</h4>
									{camp.challenge.payload.choices.map((element) => (
										<ul className="fs-12">
											<li>
												<i className="fa-solid fa-check pr-2"></i>
												{element}
											</li>
										</ul>
									))}
								</div>
							</div>

							<div className="d-flex flex-column p-3 flex-lg-row align-items-md-center align-items-start justify-content-between">
								<div>
									<i className="fa-regular fa-heart p-2"></i>
									<span className="fs-12 p-1" id="votes">
										{camp.votes}
									</span>
									<span className="fs-12">Votes</span>
								</div>
								<Link href={`/challenge/${camp.challenge.payload.name}`}>
									<button type="button" className="btn btn-primary ">
										<i className="fa-solid fa-check-to-slot pr-2"></i>Details
									</button>
								</Link>
							</div>

						</div>
					</div>
				))}
			</div>
		</div>
	);
}




{/* <div className="container-fluid pt-3">
			<div className="App">
    </div>
				<div className="row pt-3">
	
					<div className="col-xl-4 col-md-6">
						<div className="card overflow-hidden p-0">
							<div className="card-header align-items-start border-0">
								<div>
									<span className="fs-12 font-weight-bold success">@challengecreator-1</span>

									<h4 className="fs-18 mb-0 pb-2">Challenge Title</h4>
									<span className="fs-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
										eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
										suspendisse ultrices gravida. </span>
									<h4 className="fs-12 text-white pt-3">Rules</h4>
									<ul className="fs-12">
										<li><i className="fa-solid fa-check pr-2"></i>Lorem ipsum dolor sit amet.</li>
										<li><i className="fa-solid fa-check pr-2"></i>Lorem ipsum dolor sit amet.</li>
									</ul>
								</div>
							</div>
							<div className=" p-3 d-flex flex-column flex-lg-row align-items-md-center align-items-start justify-content-between">
								<div>
									<i className="fa-regular fa-heart p-2"></i><span className="fs-12 p-1"
										id="votes">17</span><span className="fs-12">Votes</span>
								</div>
								<button type="button"
									className="btn btn-primary "><i
										className="fa-solid fa-check-to-slot pr-2"></i>Votte</button>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6">
						<div className="card overflow-hidden p-0">
							<div className="card-header align-items-start border-0">
								<div>
									<span className="fs-12 font-weight-bold success">@challengecreator-1</span>

									<h4 className="fs-18 mb-0 pb-2">Challenge Title</h4>
									<span className="fs-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
										eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
										suspendisse ultrices gravida. </span>
									<h4 className="fs-12 text-white pt-3">Rules</h4>
									<ul className="fs-12">
										<li><i className="fa-solid fa-check pr-2"></i>Lorem ipsum dolor sit amet.</li>
										<li><i className="fa-solid fa-check pr-2"></i>Lorem ipsum dolor sit amet.</li>
									</ul>
								</div>
							</div>
							<div className=" p-3 d-flex flex-column flex-lg-row align-items-md-center align-items-start justify-content-between">
								<div>
									<i className="fa-regular fa-heart p-2"></i><span className="fs-12 p-1"
										id="votes">17</span><span className="fs-12">Votes</span>
								</div>
								<button type="button"
									className="btn btn-primary "><i
										className="fa-solid fa-check-to-slot pr-2"></i>Votte</button>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6">
						<div className="card overflow-hidden p-0">
							<div className="card-header align-items-start border-0">
								<div>
									<span className="fs-12 font-weight-bold success">@challengecreator-1</span>

									<h4 className="fs-18 mb-0 pb-2">Challenge Title</h4>
									<span className="fs-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
										eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
										suspendisse ultrices gravida. </span>
									<h4 className="fs-12 text-white pt-3">Rules</h4>
									<ul className="fs-12">
										<li><i className="fa-solid fa-check pr-2"></i>Lorem ipsum dolor sit amet.</li>
										<li><i className="fa-solid fa-check pr-2"></i>Lorem ipsum dolor sit amet.</li>
									</ul>
								</div>
							</div>
							<div className=" p-3 d-flex flex-column flex-lg-row align-items-md-center align-items-start justify-content-between">
								<div>
									<i className="fa-regular fa-heart p-2"></i><span className="fs-12 p-1"
										id="votes">17</span><span className="fs-12">Votes</span>
								</div>
								<button type="button"
									className="btn btn-primary "><i
										className="fa-solid fa-check-to-slot pr-2"></i>Votte</button>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6">
						<div className="card overflow-hidden p-0">
							<div className="card-header align-items-start border-0">
								<div>
									<span className="fs-12 font-weight-bold success">@challengecreator-1</span>

									<h4 className="fs-18 mb-0 pb-2">Challenge Title</h4>
									<span className="fs-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
										eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
										suspendisse ultrices gravida. </span>
									<h4 className="fs-12 text-white pt-3">Rules</h4>
									<ul className="fs-12">
										<li><i className="fa-solid fa-check pr-2"></i>Lorem ipsum dolor sit amet.</li>
										<li><i className="fa-solid fa-check pr-2"></i>Lorem ipsum dolor sit amet.</li>
									</ul>
								</div>
							</div>
							<div className=" p-3 d-flex flex-column flex-lg-row align-items-md-center align-items-start justify-content-between">
								<div>
									<i className="fa-regular fa-heart p-2"></i><span className="fs-12 p-1"
										id="votes">17</span><span className="fs-12">Votes</span>
								</div>
								<button type="button"
									className="btn btn-primary "><i
										className="fa-solid fa-check-to-slot pr-2"></i>Votte</button>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6">
						<div className="card overflow-hidden p-0">
							<div className="card-header align-items-start border-0">
								<div>
									<span className="fs-12 font-weight-bold success">@challengecreator-1</span>

									<h4 className="fs-18 mb-0 pb-2">Challenge Title</h4>
									<span className="fs-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
										eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
										suspendisse ultrices gravida. </span>
									<h4 className="fs-12 text-white pt-3">Rules</h4>
									<ul className="fs-12">
										<li><i className="fa-solid fa-check pr-2"></i>Lorem ipsum dolor sit amet.</li>
										<li><i className="fa-solid fa-check pr-2"></i>Lorem ipsum dolor sit amet.</li>
									</ul>
								</div>
							</div>
							<div className=" p-3 d-flex flex-column flex-lg-row align-items-md-center align-items-start justify-content-between">
								<div>
									<i className="fa-regular fa-heart p-2"></i><span className="fs-12 p-1"
										id="votes">17</span><span className="fs-12">Votes</span>
								</div>
								<button type="button"
									className="btn btn-primary "><i
										className="fa-solid fa-check-to-slot pr-2"></i>Votte</button>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6">
						<div className="card overflow-hidden p-0">
							<div className="card-header align-items-start border-0">
								<div>
									<span className="fs-12 font-weight-bold success">@challengecreator-1</span>

									<h4 className="fs-18 mb-0 pb-2">Challenge Title</h4>
									<span className="fs-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
										eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
										suspendisse ultrices gravida. </span>
									<h4 className="fs-12 text-white pt-3">Rules</h4>
									<ul className="fs-12">
										<li><i className="fa-solid fa-check pr-2"></i>Lorem ipsum dolor sit amet.</li>
										<li><i className="fa-solid fa-check pr-2"></i>Lorem ipsum dolor sit amet.</li>
									</ul>
								</div>
							</div>
							<div className=" p-3 d-flex flex-column flex-lg-row align-items-md-center align-items-start justify-content-between">
								<div>
									<i className="fa-regular fa-heart p-2"></i><span className="fs-12 p-1"
										id="votes">17</span><span className="fs-12">Votes</span>
								</div>
								<button type="button"
									className="btn btn-primary "><i
										className="fa-solid fa-check-to-slot pr-2"></i>Votte</button>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6">
						<div className="card overflow-hidden p-0">
							<div className="card-header align-items-start border-0">
								<div>
									<span className="fs-12 font-weight-bold success">@challengecreator-1</span> */}
