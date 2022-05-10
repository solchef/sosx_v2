import { } from 'react'
import { useMediaPredicate } from "react-media-hook";

export default function Video() {


    const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
    const biggest1400 = useMediaPredicate("(max-width: 1400px)");
    return (
        <div className="container-fluid" >
            <div className="row">
                <div className="col-lg-8 col-12 mb-5">
                    <div className='d-flex flex-column justify-content-between'>

                        <video id="my_video_1"
                            controls preload="none" width="auto" height="auto" data-setup='{}'
                            poster='http://video-js.zencoder.com/oceans-clip.jpg'>
                            <source src="https://vjs.zencdn.net/v/oceans.mp4" type='video/mp4' />
                            <source src="https://vjs.zencdn.net/v/oceans.webm" type='video/webm' />
                        </video>
                        <img className='mt-2 mb-1 ml-1' width='24px' height='24px' src="images/xlogo-black.b90261b2.svg" />
                        <h4 className='pt-1 fs-18 font-weight-bold'>Challenge: pancake Bunnys</h4>

                        <p className='pt-1 border-bottom text-muted pb-3'> Upload Time: 22/01/2022</p>
                        <p className='text-white w-75 pt-3'>
                            Good afternoon ! Create a burn staking pool so that the price of the token also grows, maybe the cake community will also want this and will invest the cake. You are burning too few coins and putting too much into circulation, so the price of the token will not grow.
                        </p>

                        <ul className='fs-16 text-white'> <b>Rules</b>
                            <li>Rule 1 for the Game</li>
                            <li>Rule 1 for the Game</li>
                        </ul>

                        <ul className='fs-16 text-white'>Social Links
                            <li>  <a href='#'>Tiktok: https://tiktok.com</a> </li>
                          
                        </ul>
                       
                       <div className='pt-3 d-flex justify-content-between'>

                       </div>
     

                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="row pb-4 d-flex flex-nowrap ">
                        <img style={{ width: '168px' }} src="images/video-banner-3.png" alt="Video1" />
                        <div className='p-1 pl-2'>
                            <h4>Title </h4>
                            <h4 className='text-muted'>Tuesday, 10 May 2022 </h4>

                        </div>
                    </div>
                    <div className="row pb-4 d-flex flex-nowrap ">
                        <img style={{ width: '168px' }} src="images/video-banner-3.png" alt="Video1" />
                        <div className='p-1 pl-2'>
                            <h4>Title </h4>
                            <h4 className='text-muted'>Tuesday, 10 May 2022 </h4>

                        </div>
                    </div>
                    <div className="row pb-4 d-flex flex-nowrap ">
                        <img style={{ width: '168px' }} src="images/video-banner-3.png" alt="Video1" />
                        <div className='p-1 pl-2'>
                            <h4>Title </h4>
                            <h4 className='text-muted'>Tuesday, 10 May 2022 </h4>

                        </div>
                    </div>
                    <div className="row pb-4 d-flex flex-nowrap ">
                        <img style={{ width: '168px' }} src="images/video-banner-3.png" alt="Video1" />
                        <div className='p-1 pl-2'>
                            <h4>Title </h4>
                            <h4 className='text-muted'>Tuesday, 10 May 2022 </h4>

                        </div>
                    </div>
                    <div className="row pb-4 d-flex flex-nowrap ">
                        <img style={{ width: '168px' }} src="images/video-banner-3.png" alt="Video1" />
                        <div className='p-1 pl-2'>
                            <h4>Title </h4>
                            <h4 className='text-muted'>Tuesday, 10 May 2022 </h4>

                        </div>
                    </div>
                    <div className="row pb-4 d-flex flex-nowrap ">
                        <img style={{ width: '168px' }} src="images/video-banner-3.png" alt="Video1" />
                        <div className='p-1 pl-2'>
                            <h4>Title </h4>
                            <h4 className='text-muted'>Tuesday, 10 May 2022 </h4>

                        </div>
                    </div>
                    <div className="row pb-4 d-flex flex-nowrap ">
                        <img style={{ width: '168px' }} src="images/video-banner-3.png" alt="Video1" />
                        <div className='p-1 pl-2'>
                            <h4>Title </h4>
                            <h4 className='text-muted'>Tuesday, 10 May 2022 </h4>

                        </div>
                    </div>
                    <div className="row pb-4 d-flex flex-nowrap ">
                        <img style={{ width: '168px' }} src="images/video-banner-3.png" alt="Video1" />
                        <div className='p-1 pl-2'>
                            <h4>Title </h4>
                            <h4 className='text-muted'>Tuesday, 10 May 2022 </h4>

                        </div>
                    </div>
                    <div className="row pb-4 d-flex flex-nowrap ">
                        <img style={{ width: '168px' }} src="images/video-banner-3.png" alt="Video1" />
                        <div className='p-1 pl-2'>
                            <h4>Title </h4>
                            <h4 className='text-muted'>Tuesday, 10 May 2022 </h4>

                        </div>
                    </div>
  
                </div>
            </div>
        </div>
    )
}