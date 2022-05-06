import Link from "next/link";
import { useEffect, useState } from "react";
import { create } from "ipfs-http-client";
import { concat } from "uint8arrays";
import { exit } from "process";

const server = create({
  url: "http://127.0.0.1:5001",
});

export default function Votechallenge() {
  const [challenges, setChallenges] = useState<any[]>([]);
//   const [votesCount, setVotesCount] = useState<any>();
  const obj = {};

//   challenges.forEach((element, index) => {
// 	obj[element] = votesCount[index];
//   });
//   const [content, setContent] = useState({first:[], second:[]});
  let challengedata = [];
  let countedata = [];

  useEffect(() => {
    const getData = async () => {
		// console.log('st',await server.files.stat('/'))
	let challenges = [];
      for await (const resultPart of server.files.ls("/")) {
		let challenge;
		let vote;

		for await (const cha of server.files.ls(`/${resultPart.name}`)) {
			// let files = server.files.ls(`/${resultPart.name}`);
			// console.log(cha);
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
  return (
    <>
      <div className="container-fluid pt-3">
        <div className="row pt-3">
          {challenges.map((camp) => (
			
            <div className="col-xl-4 col-md-6">
              <div className="card overflow-hidden">
                <div className="card-header align-items-start border-0">
                  <div>
                    <span className="fs-12 font-weight-bold success">
                      {camp.challenge.payload.metadata.strategies[0].params.address}
                    </span>
                    <h4 className="fs-18 mb-0 pb-2">{camp.challenge.payload.name}</h4>
                    <span className="fs-12">{camp.challenge.payload.body}</span>
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
				
                <div className="card-footer d-flex flex-column flex-lg-row align-items-md-center align-items-start justify-content-between">
                  <div>
                    <i className="fa-regular fa-heart p-2"></i>
                    <span className="fs-12 p-1" id="votes">
					{camp.votes}
                    </span>
                    <span className="fs-12">Votes</span>
                  </div>
                  <button type="button" className="btn btn-primary ">
                    <i className="fa-solid fa-check-to-slot pr-2"></i>Votte
                  </button>
                </div>
			
              </div>
            </div>
		  ))}
        </div>
      </div>
    </>
  );
}
