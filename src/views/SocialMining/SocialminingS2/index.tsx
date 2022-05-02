import { } from 'react'
import Link from 'next/link';

export default function SocialminingS2() {

    return (
       <>
      <ul className="nav2 nav2-tabs nav2-justified mb-3">
                <li className="nav2-item">
                    <Link href="/x-mining">

                        <a className="nav2-link rounded">Steps</a>
                    </Link>

                </li>
                <li className="nav2-item">
                    <Link href="/socialmining-s1">

                        <a className="nav2-link rounded">Copy</a>
                    </Link>

                </li>
                <li className="nav2-item">
                    <Link href="/socialmining-s2">

                        <a className="nav2-link rounded active">Affiliate</a>
                    </Link>

                </li>
                <li className="nav2-item">
                    <Link href="/socialmining-s3">

                        <a className="nav2-link rounded">Redeem</a>
                    </Link>
                </li>
            </ul>
			<div className="container-fluid pt-3">
				

				<div className="row pt-3">
					<div className="col-sm-12">
						<h3 className="h3-mobile text-center">TELL AT LEAST ONE PERSON EVERYDAY ABOUT SOCIALX.</h3>
					</div>
				</div>

				<div className="card p-3 mt-3">
					<div className="row">
						<div className="col-lg-6">
								<div className="card-header border-0">
									<h3>MY REFERRAL LINK</h3>
								</div>
								<div className="card-body">
									<div className="bg-dark rounded">
										<div className="d-flex justify-content-between align-items-center">
											<span>https://socialx.io?ref=997346fb74d12345389e716...</span>
											<div className="float-right d-flex">
												<li className="nav-item pr-2"><a href="#" className="nav-link" data-toggle="modal">
														<i className="fa-regular fa-clone"></i></a></li>
												<li className="nav-item "><a href="#" className="nav-link" data-toggle="modal">
														<i className="fa-solid fa-share-from-square"></i></a></li>
											</div>
										</div>
									</div>
									<div className="bg-dark rounded">
										<h4>You will get</h4>
										<div>
											<div>
												<p>Social Mining</p>
												<h3> 25%</h3>
											</div>
	
											<p>Staking </p>
											<h3> 10%</h3>
										</div>
									</div>
								</div>
						</div>
						<div className="col-lg-6 pl-3 pt-3">
							<h3 className="pr-3 pb-3 font-weight-semibold">5 MINS A DAY + 30 DAYS =
								1000X PROFITS!</h3>
							<p className="text-white pr-3 mb-3">
								If one individual attempts to recruit a minimum of one person a day,
								that person commits to the same experiment; we have calculated that a
								single identity can be the connection between 536,870,912 individuals
								and SocialX. Let us imagine a scenario where each associate purchased
								a simple dollar worth or SocialX Token; we would be looking at a market c
								ap equal to $536,870,912.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="container-fluid">
				<div className="row text-center">
					<div className="col-md-12">
					<Link href="/socialmining-s1">

						<a>
							<button className="btn btn-outline-primary mr-2 mb-3">Back</button>
						</a>
						</Link>
					<Link href="/socialmining-s3">

						<a>
							<button className="btn btn-primary mr-3 mb-3">Continue</button>
						</a>
						</Link>

					</div>
				</div>
			</div>
       </>
    )
}
