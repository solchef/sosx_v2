import Link from 'next/link'
import { } from 'react'

export default function Votechallenge() {

	return (
		<>
			<ul className="nav nav-tabs d-flex flex-nowrap nav-justified mb-3">


				<li className="nav-item">
					<Link href="/createchallenge">
						<a className="nav-link rounded ">Create Challenge</a>

					</Link>
				</li>


				<li className="nav-item">
					<Link href="/votechallenge">
						<a className="nav-link active rounded">Vote Challenge</a>

					</Link>
				</li>


				<li className="nav-item">
					<Link href="/thechallenge">
						<a className="nav-link rounded">The Challenge</a>

					</Link>
				</li>
			</ul>
			<div className="container-fluid pt-3">

				<div className="row pt-3">
					<div className="col-xl-4 col-md-6">
						<div className="card overflow-hidden">
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
							<div className="card-footer d-flex flex-column flex-lg-row align-items-center justify-content-between">
								<div>
								<i className="fa-regular fa-heart pr-2"></i><span className="fs-12 pr-1"
									id="votes">17</span><span className="fs-12">Votes</span>
								</div>
								<button type="button"
										className="btn btn-primary float-right"><i
											className="fa-solid fa-check-to-slot pr-2"></i>Votte</button>
							</div>
						</div>
					</div>

					<div className="col-xl-4 col-md-6">
						<div className="card overflow-hidden">
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
							<div className="card-footer align-items-start justify-content-between align-items-center">
								<i className="fa-regular fa-heart pr-2"></i><span className="fs-12 pr-1"
									id="votes">17</span><span className="fs-12">Votes</span><button type="button"
										className="btn btn-primary btn-lg float-right"><i
											className="fa-solid fa-check-to-slot pr-2"></i>Vote</button>
							</div>
						</div>
					</div>

					<div className="col-xl-4 col-md-6">
						<div className="card overflow-hidden">
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
							<div className="card-footer align-items-start justify-content-between align-items-center">
								<i className="fa-regular fa-heart pr-2"></i><span className="fs-12 pr-1"
									id="votes">17</span><span className="fs-12">Votes</span><button type="button"
										className="btn btn-primary btn-lg float-right"><i
											className="fa-solid fa-check-to-slot pr-2"></i>Vote</button>
							</div>
						</div>
					</div>

					<div className="col-xl-4 col-md-6">
						<div className="card overflow-hidden">
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
							<div className="card-footer align-items-start justify-content-between align-items-center">
								<i className="fa-regular fa-heart pr-2"></i><span className="fs-12 pr-1"
									id="votes">17</span><span className="fs-12">Votes</span><button type="button"
										className="btn btn-primary btn-lg float-right"><i
											className="fa-solid fa-check-to-slot pr-2"></i>Vote</button>
							</div>
						</div>
					</div>

					<div className="col-xl-4 col-md-6">
						<div className="card overflow-hidden">
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
							<div className="card-footer align-items-start justify-content-between align-items-center">
								<i className="fa-regular fa-heart pr-2"></i><span className="fs-12 pr-1"
									id="votes">17</span><span className="fs-12">Votes</span><button type="button"
										className="btn btn-primary btn-lg float-right"><i
											className="fa-solid fa-check-to-slot pr-2"></i>Vote</button>
							</div>
						</div>
					</div>

					<div className="col-xl-4 col-md-6">
						<div className="card overflow-hidden">
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
							<div className="card-footer align-items-start justify-content-between align-items-center">
								<i className="fa-regular fa-heart pr-2"></i><span className="fs-12 pr-1"
									id="votes">17</span><span className="fs-12">Votes</span><button type="button"
										className="btn btn-primary btn-lg float-right"><i
											className="fa-solid fa-check-to-slot pr-2"></i>Vote</button>
							</div>
						</div>
					</div>

					<div className="col-xl-4 col-md-6">
						<div className="card overflow-hidden">
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
							<div className="card-footer align-items-start justify-content-between align-items-center">
								<i className="fa-regular fa-heart pr-2"></i><span className="fs-12 pr-1"
									id="votes">17</span><span className="fs-12">Votes</span><button type="button"
										className="btn btn-primary btn-lg float-right"><i
											className="fa-solid fa-check-to-slot pr-2"></i>Vote</button>
							</div>
						</div>
					</div>

					<div className="col-xl-4 col-md-6">
						<div className="card overflow-hidden">
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
							<div className="card-footer align-items-start justify-content-between align-items-center">
								<i className="fa-regular fa-heart pr-2"></i><span className="fs-12 pr-1"
									id="votes">17</span><span className="fs-12">Votes</span><button type="button"
										className="btn btn-primary btn-lg float-right"><i
											className="fa-solid fa-check-to-slot pr-2"></i>Vote</button>
							</div>
						</div>
					</div>

					<div className="col-xl-4 col-md-6">
						<div className="card overflow-hidden">
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
							<div className="card-footer align-items-start justify-content-between align-items-center">
								<i className="fa-regular fa-heart pr-2"></i><span className="fs-12 pr-1"
									id="votes">17</span><span className="fs-12">Votes</span><button type="button"
										className="btn btn-primary btn-lg float-right"><i
											className="fa-solid fa-check-to-slot pr-2"></i>Vote</button>
							</div>
						</div>
					</div>

				</div>
			</div>
		</>
	)
}
