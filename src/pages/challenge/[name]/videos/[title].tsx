import { create } from 'ipfs-http-client';
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import { useMediaPredicate } from "react-media-hook";

const server = create({
    url: "https://ipfs.socialx.io",

});

export default function Video() {
    const router = useRouter()
    const {title} = router.query
    
    // useEffect(() => {
    //     getData();
    // }, [title]);

    // const getData = async () => {
    //     if (name) {
    //         let challenge = [];
    //         for await (const resultPart of server.files.ls("/challenges")) {
    //             let challengeJson;
    //             let vote;
    //             let votesList = []

    //             if (resultPart.name === challengeName) {
    //                 for await (const cha of server.files.ls(`/challenges/${resultPart.name}`)) {
    //                     const chunks = [];

    //                     if (cha.name == 'challenge.json') {
    //                         for await (const chunk of server.cat(cha.cid)) {
    //                             chunks.push(chunk);
    //                         }
    //                         const data = concat(chunks);
    //                         challengeJson = JSON.parse(
    //                             new TextDecoder().decode(data).toString()
    //                         );
    //                     }
    //                     if (cha.name == 'votes') {
    //                         for await (const vote of server.files.ls(`/challenges/${resultPart.name}/votes`)) {
    //                             votesList.push(vote.name.slice(0, -5))
    //                         }
    //                     }
    //                     setVotesList(votesList)
    //                 }
    //                 let challengeData = {
    //                     challenge: challengeJson,
    //                     votes: vote
    //                 }
    //                 challenge.push(challengeData);
    //             }
    //         }
    //         setChallenge(challenge);
    //     }
    // }

    // let challengeName = `challenge-${name}`

    // const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
    // const biggest1400 = useMediaPredicate("(max-width: 1400px)");
    // return (
    //     <div className="container-fluid" >
    //         <div className="row">
    //             <div className="col-lg-8 col-12 mb-5">
    //                 <div className='d-flex flex-column justify-content-between'>

    //                     <video id="my_video_1"
    //                         controls preload="none" width="auto" height="auto" data-setup='{}'
    //                         poster='http://video-js.zencoder.com/oceans-clip.jpg'>
    //                         <source src="https://vjs.zencdn.net/v/oceans.mp4" type='video/mp4' />
    //                         <source src="https://vjs.zencdn.net/v/oceans.webm" type='video/webm' />
    //                     </video>
    //                     <p> <h5 className='pt-3 text-muted pb-3'> Upload Time22/01/2022</h5></p>
    //                     <h4 className='pt-4'>Challenge: pancake Bunnys</h4>
    //                     <p>
    //                         {title}
    //                         Good afternoon ! Create a burn staking pool so that the price of the token also grows, maybe the cake community will also want this and will invest the cake. You are burning too few coins and putting too much into circulation, so the price of the token will not grow.
    //                     </p>

    //                     <ul> <b>Rules</b>
    //                         <li>Rule 1 for the Game</li>
    //                         <li>Rule 1 for the Game</li>
    //                     </ul>

    //                     <ul>Social Links
    //                         <li>  <a href='#'>Tiktok: https://tiktok.com</a> </li>
                          
    //                     </ul>
                       
    //                    <div className='pt-3 d-flex justify-content-between'>

    //                    </div>
     

    //                 </div>
    //             </div>
    //             <div className="col-lg-4 col-12">
    //                 <div className="row pb-4 d-flex flex-nowrap ">
    //                     <img style={{ width: '168px' }} src="images/video-banner-3.png" alt="Video1" />
    //                     <div className='p-1 pl-2'>
    //                         <h4>Title </h4>
    //                         <h4 className='text-muted'>Tuesday, 10 May 2022 </h4>

    //                     </div>
    //                 </div>
    //                 <div className="row pb-4 d-flex flex-nowrap ">
    //                     <img style={{ width: '168px' }} src="images/video-banner-3.png" alt="Video1" />
    //                     <div className='p-1 pl-2'>
    //                         <h4>Title </h4>
    //                         <h4 className='text-muted'>Tuesday, 10 May 2022 </h4>

    //                     </div>
    //                 </div>
    //                 <div className="row pb-4 d-flex flex-nowrap ">
    //                     <img style={{ width: '168px' }} src="images/video-banner-3.png" alt="Video1" />
    //                     <div className='p-1 pl-2'>
    //                         <h4>Title </h4>
    //                         <h4 className='text-muted'>Tuesday, 10 May 2022 </h4>

    //                     </div>
    //                 </div>
    //                 <div className="row pb-4 d-flex flex-nowrap ">
    //                     <img style={{ width: '168px' }} src="images/video-banner-3.png" alt="Video1" />
    //                     <div className='p-1 pl-2'>
    //                         <h4>Title </h4>
    //                         <h4 className='text-muted'>Tuesday, 10 May 2022 </h4>

    //                     </div>
    //                 </div>
    //                 <div className="row pb-4 d-flex flex-nowrap ">
    //                     <img style={{ width: '168px' }} src="images/video-banner-3.png" alt="Video1" />
    //                     <div className='p-1 pl-2'>
    //                         <h4>Title </h4>
    //                         <h4 className='text-muted'>Tuesday, 10 May 2022 </h4>

    //                     </div>
    //                 </div>
    //                 <div className="row pb-4 d-flex flex-nowrap ">
    //                     <img style={{ width: '168px' }} src="images/video-banner-3.png" alt="Video1" />
    //                     <div className='p-1 pl-2'>
    //                         <h4>Title </h4>
    //                         <h4 className='text-muted'>Tuesday, 10 May 2022 </h4>

    //                     </div>
    //                 </div>
    //                 <div className="row pb-4 d-flex flex-nowrap ">
    //                     <img style={{ width: '168px' }} src="images/video-banner-3.png" alt="Video1" />
    //                     <div className='p-1 pl-2'>
    //                         <h4>Title </h4>
    //                         <h4 className='text-muted'>Tuesday, 10 May 2022 </h4>

    //                     </div>
    //                 </div>
    //                 <div className="row pb-4 d-flex flex-nowrap ">
    //                     <img style={{ width: '168px' }} src="images/video-banner-3.png" alt="Video1" />
    //                     <div className='p-1 pl-2'>
    //                         <h4>Title </h4>
    //                         <h4 className='text-muted'>Tuesday, 10 May 2022 </h4>

    //                     </div>
    //                 </div>
    //                 <div className="row pb-4 d-flex flex-nowrap ">
    //                     <img style={{ width: '168px' }} src="images/video-banner-3.png" alt="Video1" />
    //                     <div className='p-1 pl-2'>
    //                         <h4>Title </h4>
    //                         <h4 className='text-muted'>Tuesday, 10 May 2022 </h4>

    //                     </div>
    //                 </div>
  
    //             </div>
    //         </div>
    //     </div>
    // )
}