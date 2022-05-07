import { useEffect, useState } from "react";
import Link from 'next/link'
import { useMediaPredicate } from "react-media-hook";

export default function Game() {
	const [partyTime, setPartyTime] = useState(false);
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

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
	const biggerThan1200 = useMediaPredicate("(min-width: 1200px) and (max-width: 1300px)");
	const biggerThan576 = useMediaPredicate("(min-width: 576px) and (max-width: 625px)");

	return (
		<>

			<div className="game container-fluid">
				<div className="row">
					<div className="col-12 col-sm-6 col-lg-7 col-xl-8">
						<div className="row">
							<div className={`card3 col-12 text-center ${biggerThan1200 && "p-0"}
 col-xl-5 rounded-0 d-flex flex-column justify-content-between align-items-center`}>


								<div className="feature-box p-0">
									<div className="pt-4 pr-4 mobile-hide-card ">
										<img src="images/prize-pool-icon.png" style={{ width: '40px', height: '40px' }} />
									</div>
									<div className="feature-text">
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
										<button className="btn btn-primary">Upload Video Here</button>

									</div>
								</div>

							</div>
							<div className=" p-0 col-12  col-xl-7 rounded-0 d-flex flex-column justify-content-between card3 overflow-hidden">
								<div className="card-header align-items-start border-0">
									<div>
										<h4 className="fs-20 mb-3">Today's Challenge</h4>
										<span className="fs-12 font-weight-bold success">@challengecreator-1</span>

										<h4 className="fs-18 mb-0 pb-2">Challenge Title</h4>
										<span className="fs-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
											do
											eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
											suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
											vel
											facilisis. </span>
										<h4 className="fs-12 p-1 text-white pt-3">Rules</h4>
										<ul className="fs-12">
											<li><i className="fa-solid fa-check pr-2"></i>Lorem ipsum dolor sit amet.</li>
											<li><i className="fa-solid fa-check pr-2"></i>Lorem ipsum dolor sit amet.</li>
										</ul>
									</div>
								</div>
								<div className="p-3 align-items-start justify-content-between align-items-center">
									<li><i className="fa-regular fa-heart pr-2"></i><span className="fs-12 pr-1"
										id="votes">17</span><span className="fs-12">Votes</span></li>
								</div>
							</div>
						</div>

						<div className="row">


							<div className="card3  p-3">

								<div className="row d-flex justify-content-between p-4 align-items-end">
									<div>
										<h4 className="fs-20">Previous Winners</h4>
										<span className="fs-14">Watch the previous Winners</span>
									</div>
									<div className="ml-auto pt-3 ">
										<span className="fs-14 sub-blue font-weight-bold">Watch All Videos
										</span>
									</div>
								</div>


								<div className="card3-body">
									<div className="row">
										<div className=" col-12 p-2 col-md">
											<div className="videos">
												<a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
													className="video">
													<span></span>
													<img src="images/video-banner-1.png" alt="Video1" />
													<div className="play-btn"></div>
												</a>
											</div>
											<h4 className="fs-14 mb-0">Previous Winners</h4>
											<p className="fs-12 success">@challenger 1</p>

											<span className="justify-content-between fs-12"><i
												className="fa-regular fa-eye pr-1"></i>100</span>
											<span className="fs-12 float-right">06/12/22</span>
										</div>

										<div className=" col-12 p-2 col-md">
											<div className="videos">
												<a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
													className="video">
													<span></span>
													<img src="images/video-banner-2.png" alt="Video1" />
													<div className="play-btn"></div>
												</a>
											</div>
											<h4 className="fs-14 mb-0">Previous Winners</h4>
											<p className="fs-12 success">@challenger 1</p>

											<span className="justify-content-between fs-12"><i
												className="fa-regular fa-eye pr-1"></i>100</span>
											<span className="fs-12 float-right">06/12/22</span>
										</div>

										<div className=" col-12 p-2 col-md">
											<div className="videos">
												<a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
													className="video">
													<span></span>
													<img src="images/video-banner-3.png" alt="Video1" />
													<div className="play-btn"></div>
												</a>
											</div>
											<h4 className="fs-14 mb-0">Previous Winners</h4>
											<p className="fs-12 success">@challenger 1</p>

											<span className="justify-content-between fs-12"><i
												className="fa-regular fa-eye pr-1"></i>100</span>
											<span className="fs-12 float-right">06/12/22</span>
										</div>

										<div className=" col-12 p-2 col-md">
											<div className="videos">
												<a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
													className="video">
													<span></span>
													<img src="images/video-banner-4.png" alt="Video1" />
													<div className="play-btn"></div>
												</a>
											</div>
											<h4 className="fs-14 mb-0">Previous Winners</h4>
											<p className="fs-12 success">@challenger 1</p>

											<span className="justify-content-between fs-12"><i
												className="fa-regular fa-eye pr-1"></i>100</span>
											<span className="fs-12 float-right">06/12/22</span>
										</div>


									</div>
								</div>
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
										<div className=" col-12 p-2 col-md">
											<div className="videos">
												<a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
													className="video">
													<span></span>
													<img src="images/video-banner-1.png" alt="Video1" />
													<div className="play-btn"></div>
												</a>
											</div>
											<h4 className="fs-14 mb-0">Previous Winners</h4>
											<p className="fs-12 success">@challenger 1</p>

											<span className="justify-content-between fs-12"><i
												className="fa-regular fa-eye pr-1"></i>100</span>
											<span className="fs-12 float-right">06/12/22</span>
										</div>

										<div className=" col-12 p-2 col-md">
											<div className="videos">
												<a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
													className="video">
													<span></span>
													<img src="images/video-banner-2.png" alt="Video1" />
													<div className="play-btn"></div>
												</a>
											</div>
											<h4 className="fs-14 mb-0">Previous Winners</h4>
											<p className="fs-12 success">@challenger 1</p>

											<span className="justify-content-between fs-12"><i
												className="fa-regular fa-eye pr-1"></i>100</span>
											<span className="fs-12 float-right">06/12/22</span>
										</div>

										<div className=" col-12 p-2 col-md">
											<div className="videos">
												<a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
													className="video">
													<span></span>
													<img src="images/video-banner-3.png" alt="Video1" />
													<div className="play-btn"></div>
												</a>
											</div>
											<h4 className="fs-14 mb-0">Previous Winners</h4>
											<p className="fs-12 success">@challenger 1</p>

											<span className="justify-content-between fs-12"><i
												className="fa-regular fa-eye pr-1"></i>100</span>
											<span className="fs-12 float-right">06/12/22</span>
										</div>

										<div className=" col-12 p-2 col-md">
											<div className="videos">
												<a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
													className="video">
													<span></span>
													<img src="images/video-banner-4.png" alt="Video1" />
													<div className="play-btn"></div>
												</a>
											</div>
											<h4 className="fs-14 mb-0">Previous Winners</h4>
											<p className="fs-12 success">@challenger 1</p>

											<span className="justify-content-between fs-12"><i
												className="fa-regular fa-eye pr-1"></i>100</span>
											<span className="fs-12 float-right">06/12/22</span>
										</div>


									</div>
									<div className="row">
										<div className=" col-12 p-2 col-md">
											<div className="videos">
												<a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
													className="video">
													<span></span>
													<img src="images/video-banner-1.png" alt="Video1" />
													<div className="play-btn"></div>
												</a>
											</div>
											<h4 className="fs-14 mb-0">Previous Winners</h4>
											<p className="fs-12 success">@challenger 1</p>

											<span className="justify-content-between fs-12"><i
												className="fa-regular fa-eye pr-1"></i>100</span>
											<span className="fs-12 float-right">06/12/22</span>
										</div>

										<div className=" col-12 p-2 col-md">
											<div className="videos">
												<a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
													className="video">
													<span></span>
													<img src="images/video-banner-2.png" alt="Video1" />
													<div className="play-btn"></div>
												</a>
											</div>
											<h4 className="fs-14 mb-0">Previous Winners</h4>
											<p className="fs-12 success">@challenger 1</p>

											<span className="justify-content-between fs-12"><i
												className="fa-regular fa-eye pr-1"></i>100</span>
											<span className="fs-12 float-right">06/12/22</span>
										</div>

										<div className=" col-12 p-2 col-md">
											<div className="videos">
												<a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
													className="video">
													<span></span>
													<img src="images/video-banner-3.png" alt="Video1" />
													<div className="play-btn"></div>
												</a>
											</div>
											<h4 className="fs-14 mb-0">Previous Winners</h4>
											<p className="fs-12 success">@challenger 1</p>

											<span className="justify-content-between fs-12"><i
												className="fa-regular fa-eye pr-1"></i>100</span>
											<span className="fs-12 float-right">06/12/22</span>
										</div>

										<div className=" col-12 p-2 col-md">
											<div className="videos">
												<a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
													className="video">
													<span></span>
													<img src="images/video-banner-4.png" alt="Video1" />
													<div className="play-btn"></div>
												</a>
											</div>
											<h4 className="fs-14 mb-0">Previous Winners</h4>
											<p className="fs-12 success">@challenger 1</p>

											<span className="justify-content-between fs-12"><i
												className="fa-regular fa-eye pr-1"></i>100</span>
											<span className="fs-12 float-right">06/12/22</span>
										</div>


									</div>
									<div className="col-sm-12 d-flex mt-3">
										<button className="btn btn-primary mx-auto">Load More</button>

									</div>
								</div>
							</div>



						</div>
					</div>
					<div className="col-12 col-sm-6 col-lg-5 col-xl-4">
						<div className="card3 overflow-hidden">
							<div className="card3-header">

								<h4 className="fs-20 mx-auto">DAOX</h4>
							</div>
							<div className="d-flex flex-column p-3 ">
								<Link href="/createchallenge">

									<button className="btn btn-primary">Create Challenge</button>
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

							<ul className="nav3 nav-rank nav3-tabs butten nav3-justified mb-3">
								<li className="nav3-item">
									<a className="nav3-link active font-weight-bold rounded text-nowrap" href="#lvl1">Level 1</a>
								</li>
								<li className="nav3-item">
									<a className="nav3-link font-weight-bold rounded text-nowrap" href="#lvl2">Level 2</a>
								</li>
								<li className="nav3-item">
									<a className="nav3-link font-weight-bold rounded text-nowrap" href="#lvl3">Level 3</a>
								</li>
							</ul>

							<div className={`card3-body ranking ${biggerThan576 && "p-0"} ${biggerThan1200 && "p-0"}`}>
								<a className="blueprint-header-display trader-display">
									<div className="d-flex align-items-center">
										<span className="text-white mr-3 fs-16 font-w600">1</span>
										<img className="blueprint-img-sm rounded-circle"
											src=" https://app.hedgeboard.io/userprofiles/default.png" alt="profile" />
										<div className="ml-1">

											<span
												className="mb-1 card-small-text text-white trader-name">a4U...</span>
										</div>
									</div>
									<span><i className="fa fa-wallet"></i> 25,004,214,12 </span>
								</a>


								<a className="blueprint-header-display trader-display">
									<div className="d-flex align-items-center">
										<span className="text-white mr-3 fs-16 font-w600">2</span>
										<img className="blueprint-img-sm rounded-circle"
											src=" https://app.hedgeboard.io/userprofiles/default.png" alt="profile" />
										<div className="ml-1">

											<span
												className="mb-1 card-small-text text-white trader-name">l24a...</span>
										</div>
									</div>
									<span><i className="fa fa-wallet"></i> 23,415,765.01 </span>
								</a>


								<a className="blueprint-header-display trader-display">
									<div className="d-flex align-items-center">
										<span className="text-white mr-3 fs-20 font-w600">3</span>
										<img className="blueprint-img-sm rounded-circle"
											src=" https://app.hedgeboard.io/userprofiles/default.png" alt="profile" />
										<div className="ml-1">

											<span
												className="mb-1 card-small-text text-white trader-name">l0L...</span>
										</div>
									</div>
									<span><i className="fa fa-wallet"></i> 21,110,143.12 </span>
								</a>


								<a className="blueprint-header-display trader-display">
									<div className="d-flex align-items-center">
										<span className="text-white mr-3 fs-16 font-w600">4</span>
										<img className="blueprint-img-sm rounded-circle"
											src=" https://app.hedgeboard.io/userprofiles/default.png" alt="profile" />
										<div className="ml-1">

											<span
												className="mb-1 card-small-text text-white trader-name">g4K...</span>
										</div>
									</div>
									<span><i className="fa fa-wallet"></i> 20,221,321.13 </span>
								</a>


								<a className="blueprint-header-display trader-display">
									<div className="d-flex align-items-center">
										<span className="text-white mr-3 fs-16 font-w600">5</span>
										<img className="blueprint-img-sm rounded-circle"
											src=" https://app.hedgeboard.io/userprofiles/default.png" alt="profile" />
										<div className="ml-1">

											<span
												className="mb-1 card-small-text text-white trader-name">p3H...</span>
										</div>
									</div>
									<span><i className="fa fa-wallet"></i> 19,000,231.00 </span>
								</a>


								<a className="blueprint-header-display trader-display">
									<div className="d-flex align-items-center">
										<span className="text-white mr-3 fs-16 font-w600">6</span>
										<img className="blueprint-img-sm rounded-circle"
											src=" https://app.hedgeboard.io/userprofiles/default.png" alt="profile" />
										<div className="ml-1">

											<span
												className="mb-1 card-small-text text-white trader-name">y5L...</span>
										</div>
									</div>
									<span><i className="fa fa-wallet"></i> 18,142,554,98 </span>
								</a>

								<a className="blueprint-header-display trader-display">
									<div className="d-flex align-items-center">
										<span className="text-white mr-3 fs-16 font-w600">7</span>
										<img className="blueprint-img-sm rounded-circle"
											src=" https://app.hedgeboard.io/userprofiles/default.png" alt="profile" />
										<div className="ml-1">

											<span
												className="mb-1 card-small-text text-white trader-name">t4P...</span>
										</div>
									</div>
									<span><i className="fa fa-wallet"></i> 15,441,214,04 </span>
								</a>

								<a className="blueprint-header-display trader-display">
									<div className="d-flex align-items-center">
										<span className="text-white mr-3 fs-16 font-w600">8</span>
										<img className="blueprint-img-sm rounded-circle"
											src=" https://app.hedgeboard.io/userprofiles/default.png" alt="profile" />
										<div className="ml-1">

											<span
												className="mb-1 card-small-text text-white trader-name">t4J...</span>
										</div>
									</div>
									<span><i className="fa fa-wallet"></i> 14,142,554,98 </span>
								</a>

								<a className="blueprint-header-display trader-display">
									<div className="d-flex align-items-center">
										<span className="text-white mr-3 fs-16 font-w600">9</span>
										<img className="blueprint-img-sm rounded-circle"
											src=" https://app.hedgeboard.io/userprofiles/default.png" alt="profile" />
										<div className="ml-1">

											<span
												className="mb-1 card-small-text text-white trader-name">d1F...</span>
										</div>
									</div>
									<span><i className="fa fa-wallet"></i> 13,142,554,98 </span>
								</a>
							</div>
						</div>

					</div>
				</div>

			</div>
		</>
	)
}
