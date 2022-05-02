import { } from 'react'
import Link from 'next/link';

export default function Createchallenge() {

    return (
<>
<ul className="nav nav-tabs d-flex flex-nowrap nav-justified mb-3">


				<li className="nav-item">
                <Link href="/createchallenge">
					<a className="nav-link active rounded ">Create Challenge</a>
				
                </Link>
                </li>
               

				<li className="nav-item">
                <Link href="/votechallenge">
					<a className="nav-link  rounded">Vote Challenge</a>
				
                </Link>
                </li>
                

				<li className="nav-item">
                <Link href="/thechallenge">
					<a className="nav-link rounded">The Challenge</a>
				
                </Link>
                </li>
			</ul>
		 
			<div className="container-fluid pt-3">
				<div className="row justify-content-center">
					<div className="col-xl-7">
						<div className="card">
							<div className="card-header border-0 pb-0 justify-content-between">
								<h4 className="fs-18">Create Challenge</h4>


							</div>
							<div className="card-body">

								<form action="/action_page.php">
									<div className="row mb-3">
										<input className="input1" type="text" id="fname" name="firstname"
											placeholder="Challenge Title Here"/>
									</div>


									<div className="row">
										<textarea id="subject" name="subject"
											placeholder="Challenge description here..." style={{height:'200px'}}></textarea>
									</div>
								</form>

								<h4 className="p-2">Rules</h4>
								<div className="input-group justify-content-between">
									<input id="rulename" type="text" ng-modal="artist1" className="inputrule mb-3"
										placeholder="Enter Rule" />
									<div className="input-group-btn">
										<button type="button" className="btn btn-primary" ng-click="addArtistChoice()"><span
												className="glyphicon glyphicon-plus mb-3"></span> <i
												className="fa fa-plus mr-1"></i>Add Rule</button>
									</div>
								</div>
								<button type="button" className="btn btn-primary btn-lg w-100 mt-4">Submit</button>
							</div>
						</div>
					</div>

				</div>
			</div>
</>
        )
    }
    