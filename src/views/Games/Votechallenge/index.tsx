import Link from 'next/link'
import { useEffect } from 'react'
import { create } from 'ipfs-http-client'
import {concat} from 'uint8arrays'

const server = create({
  url: "http://127.0.0.1:5001",
  
});

export default function Votechallenge() {

	useEffect(() => {
		const getChallenges = async () => {
		 const getData = async () => {
		
		  let chunks=[]
		  for await (const file of server.files.ls('/')) {
		   for await (const one of server.files.ls(`/${file.name}`)) {
			
		  if (one.name==='challenge.json') {
		   console.log(one.type)
		   for await (const chunk of server.cat(one.cid)) {
			chunks.push(chunk);
			 }
			 
			 const data = concat(chunks)
			 const decodedData = JSON.parse(new TextDecoder().decode(data).toString());
			 console.log(decodedData)
			}
		  
		   }
		   }
			}
			getData()
		  
		   }
		   getChallenges()
		  
		})

	return (
		<>
			<div className="container-fluid pt-3">

				<div className="row pt-3">
					<div className="col-xl-4 col-md-6">
						<div className="card overflow-hidden">
							<div className="card-header align-items-start border-0">
								<div>
									<span className="fs-12 font-weight-bold success">@challengecreator-1</span>

									<h4 className="fs-18 mb-0 pb-2"></h4>
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
		</>
	)
}
