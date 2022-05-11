import { create } from 'ipfs-http-client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { useMediaPredicate } from "react-media-hook";
import { concat } from "uint8arrays";
import Link from "next/link";


const server = create({
	url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL
});


export default function Video() {
    const router = useRouter()
    const { name, title } = router.query
    const [videos, setVideos] = useState<any[]>([]);
    const [selectedVideo, setSelectedVideo] = useState([]);

    useEffect(() => {
        getData();
    }, [title]);

    const getData = async () => {
        if (title && name) {
            let videos = [];
            let selectedVideo = [];
            for await (const video of server.files.ls(`/challenges/challenge-${name}/videos`)) {
                let videoJson;
                const chunks = [];

                for await (const chunk of server.cat(video.cid)) {
                    chunks.push(chunk);
                }
                const data = concat(chunks);
                videoJson = JSON.parse(
                    new TextDecoder().decode(data).toString()
                );

                if (videoJson.title === title) {
                    selectedVideo.push(videoJson)
                } else {
                    videos.push(videoJson);
                }

            }
            setVideos(videos)
            setSelectedVideo(selectedVideo)
        }

    }

    const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
    const biggest1400 = useMediaPredicate("(max-width: 1400px)");
    return (
        <div className="container-fluid" >
            <div className="row">
                <div className="col-lg-8 col-12 mb-5">
                    <div className='d-flex flex-column justify-content-between'>
                        {selectedVideo[0] && (
                            <>
                            <video id="my_video_1"
                            controls preload="none" width="auto" height="auto" data-setup='{}'
                            poster='http://video-js.zencoder.com/oceans-clip.jpg'>
                            <source src={`${selectedVideo[0].video}`} type='video/mp4' />
                            </video>

                            <p> <h5 className='pt-3 text-muted pb-3'> Upload Time22/01/2022</h5></p>
                            <h4 className='pt-4'>Challenge: {name}</h4>
                            <p>
                            body                    
                            </p>
                            <ul> <b>Rules</b>
                                <li>Rule 1 for the Game</li>
                                <li>Rule 1 for the Game</li>
                            </ul>

                            <ul>Social Links
                                {selectedVideo[0].tiktok ? <li><a href='#'>Tiktok: {selectedVideo[0].tiktok}</a> </li> : ''}
                                {selectedVideo[0].youtube ? <li><a href='#'>Tiktok: {selectedVideo[0].youtube}</a> </li> : ''}
                            
                            </ul>

                            <div className='pt-3 d-flex justify-content-between'>

                            </div>
                            </>
                        )}
                    </div>

                </div>
                <div className="col-lg-4 col-12">
                    {videos.map((video) => 
                        <a href={`/challenge/${name}/videos/${video.title}`}>
                            <div className="row pb-4 d-flex flex-nowrap ">
                            <img style={{ width: '168px' }} src="images/video-banner-3.png" alt="Video1" />
                            <div className='p-1 pl-2'>
                                <h4>{video.title} </h4>
                                <h4 className='text-muted'>Tuesday, 10 May 2022 </h4>

                            </div>
                            </div>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}