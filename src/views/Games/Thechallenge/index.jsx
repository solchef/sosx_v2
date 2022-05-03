import { } from 'react'
import Link from 'next/link'
import NavGame from '../NavGame'

export default function Thechallenge() {

	return (
		<>
			<NavGame />

			<div className="container-fluid">
				<div className="card p-3">
					<div className="row d-flex flex-row justify-content-between">

						<div className="p-2">
							<div className="feature-box">
								<div className="feature-icon mobile-hide-card ">
									<img src="images/prize-pool-icon.png" style={{ width: '100%' }} />
								</div>
								<div className="feature-text">
									<span className="main-pink fs-14 font-weight-bold">Prize Pool</span>
									<h3 className="fs-40">$1,000.00</h3>

								</div>
							</div>
						</div>

						<div className="p-2">
							<div className="feature-box">
								<div className="feature-icon mobile-hide-card ">
									<img src="images/submission-date-icon.png" style={{ width: '100%' }} />
								</div>
								<div className="feature-text">
									<span className="main-pink fs-14 font-weight-bold">Time Left </span>
									<h3 className="fs-40 digital-font">05:50:01</h3>

								</div>
							</div>
						</div>


						<div className="p-2">
							<div className="feature-box">
								<div className="feature-text">
									<span className="main-pink fs-22 font-weight-bold">The Challenge will End soon</span>
									<h3 className="fs-12">Send your video now & win the prize pool money!</h3>

								</div>
							</div>
						</div>

						<div className="p-2">
							<div className="feature-box float-right">
								<div className="feature-text">
									<button className="btn btn-primary">Upload Video Here</button>

								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-12 d-flex flex-column  col-xl-7 justify-content-around">
						<div className="card3 overflow-hidden">
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
									<h4 className="fs-12 text-white pt-3">Rules</h4>
									<ul className="fs-12">
										<li><i className="fa-solid fa-check pr-2"></i>Lorem ipsum dolor sit amet.</li>
										<li><i className="fa-solid fa-check pr-2"></i>Lorem ipsum dolor sit amet.</li>
									</ul>
								</div>
							</div>
							<div className="card-footer align-items-start justify-content-between align-items-center">
								<li><i className="fa-regular fa-heart pr-2"></i><span className="fs-12 pr-1"
									id="votes">17</span><span className="fs-12">Votes</span></li>
							</div>
						</div>

						<div className="card3 ">
							<div className="card3-header border-0">
								<div className="row">
									<div className="col-sm-12">
										<h4 className="fs-20 mb-1">Previous Winners</h4>
										<span className="fs-14">Watch the previous Winners</span>
									</div>
								</div>
							</div>

							<div className="card3-body">
								<div className="row">
									<div className="col-md-3 col-sm-6">
										<div className="videos">
											<a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
												class="video">
												<span></span>
												<img src="images/video-banner-1.png" alt="Video1" />
												<div className="play-btn"></div>
											</a>
										</div>
										<h4 className="fs-14 mb-0">Previous Winners</h4>
										<p className="fs-12 success">@challenger 1</p>

										<span className="justify-content-between fs-12"><i
											class="fa-regular fa-eye pr-1"></i>100</span>
										<span className="fs-12 float-right">06/12/22</span>
									</div>

									<div className="col-md-3 col-sm-6">
										<div className="videos">
											<a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
												class="video">
												<span></span>
												<img src="images/video-banner-2.png" alt="Video1" />
												<div className="play-btn"></div>
											</a>
										</div>
										<h4 className="fs-14 mb-0">Previous Winners</h4>
										<p className="fs-12 success">@challenger 1</p>

										<span className="justify-content-between fs-12"><i
											class="fa-regular fa-eye pr-1"></i>100</span>
										<span className="fs-12 float-right">06/12/22</span>
									</div>

									<div className="col-md-3 col-sm-6">
										<div className="videos">
											<a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
												class="video">
												<span></span>
												<img src="images/video-banner-3.png" alt="Video1" />
												<div className="play-btn"></div>
											</a>
										</div>
										<h4 className="fs-14 mb-0">Previous Winners</h4>
										<p className="fs-12 success">@challenger 1</p>

										<span className="justify-content-between fs-12"><i
											class="fa-regular fa-eye pr-1"></i>100</span>
										<span className="fs-12 float-right">06/12/22</span>
									</div>

									<div className="col-md-3 col-sm-6 pb-2">
										<div className="videos">
											<a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
												class="video">
												<span></span>
												<img src="images/video-banner-4.png" alt="Video1" />
												<div className="play-btn"></div>
											</a>
										</div>
										<h4 className="fs-14 mb-0">Previous Winners</h4>
										<p className="fs-12 success">@challenger 1</p>

										<span className="justify-content-between fs-12"><i
											class="fa-regular fa-eye pr-1"></i>100</span>
										<span className="fs-12 float-right">06/12/22</span>
									</div>
									<div className="col-sm-12">
										<span className="fs-14 float-right pt-3 sub-blue font-weight-bold">Watch All Videos
											></span>
									</div>

								</div>
							</div>
						</div>
					</div>

					<div className=" col-12 col-xl-5">
						<div className="card3 overflow-hidden">
							<div className="card3-header align-items-start border-0 justify-content-between">
								<div>
									<h4 className="fs-20 mb-0">Ranking</h4>
									<span className="fs-12">This Week's Top SOSX Token Holders</span>
								</div>
							</div>

							<ul className="nav3 nav3-tabs nav3-justified mb-3">
								<li className="nav3-item">
									<a className="nav3-link active font-weight-bold rounded" href="#lvl1">Level 1</a>
								</li>
								<li className="nav3-item">
									<a className="nav3-link font-weight-bold rounded" href="#lvl2">Level 2</a>
								</li>
								<li className="nav3-item">
									<a className="nav3-link font-weight-bold rounded" href="#lvl3">Level 3</a>
								</li>
							</ul>

							<div className="card3-body">
								<a className="blueprint-header-display trader-display">
									<div className="d-flex align-items-center">
										<span className="text-white mr-3 fs-16 font-w600">1</span>
										<img className="blueprint-img-sm rounded-circle"
											src=" https://app.hedgeboard.io/userprofiles/default.png" alt="profile" />
										<div className="ml-1">

											<span
												class="mb-1 card-small-text text-white trader-name">a43UgcUk768...</span>
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
												class="mb-1 card-small-text text-white trader-name">l24OadkIj232...</span>
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
												class="mb-1 card-small-text text-white trader-name">l00LoHgA909...</span>
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
												class="mb-1 card-small-text text-white trader-name">g43KjkOo334...</span>
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
												class="mb-1 card-small-text text-white trader-name">p33HuhOp561...</span>
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
												class="mb-1 card-small-text text-white trader-name">y51LkpLh710...</span>
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
												class="mb-1 card-small-text text-white trader-name">t45PolYy421...</span>
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
												class="mb-1 card-small-text text-white trader-name">t43JjKFd509...</span>
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
												class="mb-1 card-small-text text-white trader-name">d12FacUg142...</span>
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
