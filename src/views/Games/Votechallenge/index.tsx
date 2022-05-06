import Link from 'next/link'
import { useEffect, useState } from 'react'
import { create } from 'ipfs-http-client'
import {concat} from 'uint8arrays'

const server = create({
  url: "http://127.0.0.1:5001",
  
});

export default function Votechallenge() {
	
	const [challenges,setChallenges]=useState<any[]>([]);
	let challengedata=[];
	
	// {challenges.map((camp) => (
	// console.log(camp)
	// ))}
	useEffect(()=>{

		const getData = async () => {
		for await (const resultPart of server.files.ls('/')) {
   		// result.push(resultPart)
		// console.log(resultPart)
		for await (const cha of server.files.ls(`/${resultPart.name}`)) {
			if (cha.name == 'challenge.json') {
				console.log(cha.cid.toString())





				const chunks=[]
				for await (const chunk of server.cat(cha.cid)) {
					chunks.push(chunk);
				}
				   
				const data = concat(chunks)
				// console.log(data)
				const decodedData = JSON.parse(new TextDecoder().decode(data).toString());
				
				// console.log(decodedData)
				challengedata.push(decodedData);
				console.log(challengedata)
				console.log('ch', challenges)
			}
		}
		}				
		setChallenges(challengedata)
		}
		getData();
	}, []);
	console.log("challenges", challenges)
	return (
		<>
			<div className="container-fluid pt-3">
			{challenges.map((camp) => (
				<div>
				<div className="row pt-3">
					<div className="col-xl-4 col-md-6">
						<div className="card overflow-hidden">
							<div className="card-header align-items-start border-0">
								<div>
									<span className="fs-12 font-weight-bold success">{camp.payload.metadata.strategies[0].params.address}</span>

									<h4 className="fs-18 mb-0 pb-2">{camp.payload.name}</h4>
									<span className="fs-12">{camp.payload.body}</span>
									<h4 className="fs-12 text-white pt-3">Rules</h4>
									{camp.payload.choices.map((element) => (
									<ul className="fs-12">
										<li><i className="fa-solid fa-check pr-2"></i>{element}</li>
										
									</ul>
									))}
									
									
								</div>
							</div>
							<div className="card-footer d-flex flex-column flex-lg-row align-items-md-center align-items-start justify-content-between">
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
					

					

				</div>
				</div>
				 ))}
			</div>
		</>
	)
}
