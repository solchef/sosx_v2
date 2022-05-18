import { create } from "ipfs-http-client";
import { useState } from "react";
import { concat } from "uint8arrays";

const server = create({
  url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL,
});

//   const [challenges, setChallenges] = useState<any>();

export const challengeVotes = async (challengeName: string) => {
    const name = `challenge-${challengeName.replaceAll(' ', '-')}`
  let challenges = [];
  let challenge
  let votesList = []
  for await (const roundContent of server.files.ls(
    "/Rounds/Round-1/challenges"
  )) {
    let challengeData;
    const chunks = [];
    
    if (roundContent.name === name) {
        const cid = roundContent.cid.toString()
        challenge = cid
    //   for await (const challengeFolderContent of server.files.ls(
    //     `/Rounds/Round-1/challenges/${roundContent.name}`
    //   )) {
    //     if (challengeFolderContent.name == "info.json") {
    //       for await (const chunk of server.cat(challengeFolderContent.cid)) {
    //         chunks.push(chunk); 
    //       }
    //       const data = concat(chunks);
    //       challengeData = JSON.parse(new TextDecoder().decode(data).toString());
    //       challenges.push(challengeData);
    //     }
    //   }
    //   console.log(challenges);
    //   setChallenges(challenges);
    }

    let voteData
    for await (const votes of server.files.ls( 
        "/Rounds/Round-1/votes/stage-2"
      )) {
          const votesChunks = [];
          for await (const votechunk of server.cat(votes.cid)) {
            votesChunks.push(votechunk);
          }
          const data = concat(votesChunks);
          voteData = JSON.parse(new TextDecoder().decode(data).toString());
        //   for await (const votechunk of server.cat(votes.cid)) {
        //     votesChunks.push(votechunk);
        //     const data = concat(votesChunks);
        //     voteData = JSON.parse(new TextDecoder().decode(data).toString());
        //     console.log(voteData)
        //   }
        //   console.log(voteData)
          votesList.push(voteData);
      }
  }
  console.log(votesList) 
//   console.log(challenge)
  
//   console.log(challenges)
};
