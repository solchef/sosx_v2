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
                        <h4 className='pt-4'>NameNameNameNameNameNameName</h4>
                        <h5 className='pt-3 text-muted pb-3'>22/01/2022</h5>
                        <button style={{ width: 'fit-content' }} type="button" className="btn btn-success">Uploade</button>
                       <div className='pt-3 d-flex justify-content-between'>

                       <button style={{ width: 'fit-content' }} type="button" className="btn btn-success">Tiktok</button>
                        <button style={{ width: 'fit-content' }} type="button" className="btn mx-auto btn-danger">youtube</button>

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