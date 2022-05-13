import { useMediaPredicate } from "react-media-hook";
import Masonry from 'react-masonry-css'

export default function Test() {
    const biggerThan1500 = useMediaPredicate("(min-width: 1500px)");
    const bet768and1200 = useMediaPredicate("(min-width: 576px) and (max-width: 1200px)");
    const bet1200and1500 = useMediaPredicate("(min-width: 1200px) and (max-width: 1500px)");
    const biggest576 = useMediaPredicate(" (max-width: 576px)");
    const breakpointColumnsObj = {
        default: 4,
     
        800: 2,
        500: 1
      };
      
    return (<>
        <div className="game container-fluid">
            <div className="row">
                <div className={`col-12 ${biggerThan1500 && 'col-xl-9'}`}>
                    {/*start header*/}
                    <div className="row">
                        {/*start Time with prize pool */}
                        <div className={`col-xl-4 col-sm-6 col-12`}>
                            <div className=" backgroun-dark d-flex mt-0  p-3 h-100 rounded justify-content-start flex-column  ">
                                <div className="d-flex pt-2 pb-2 align-items-center">

                                    <img src="images/submission-date-icon.png" width='20px' height='20px' />

                                    <span className="text-white fs-18  ml-2 ">TIME REMAINING </span>


                                </div>


                                <p className="fs-12 text-muted">To submit a video competing the stage</p>
                                <div className="clock  pt-2 ">
                                    <div className="d-flex justify-content-start" id="countdown">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <p className="li pr-2 pl-2 pt-4  pb-0"><span className=" main-pink m-0" >05</span>Hours</p>
                                            <p className="li"><span className="" >:</span></p>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <p className="li pr-2 pl-2 pt-4  pb-0"><span className=" main-pink m-0" >22</span>Minutes</p>
                                            <p className="li"><span className="" >:</span></p>
                                        </div>
                                        <p className="li pr-2 pl-2 pt-4  pb-0"><span className=" main-pink m-0" >33</span>Seconds</p>
                                    </div>
                                </div>
                                <div className="d-flex pt-2 pb-1 mt-3 align-items-center">

                                    <img src="images/prize-pool-icon.png" width='24px' height='24px' />

                                    <span className="text-white fs-18 ml-2 ">PRIZE POOL</span>

                                </div>

                                <span className="text-muted pb-2  fs-12">Really want this challenge to be done? Donate to pool
                                </span>
                                <span className=" fs-28 pt-1 pb-3 font-weight-bold main-pink">$ 1,000.00
                                </span>
                                <button type="button" className="btn btn-primary">Upload Video</button>
                            </div>
                        </div>
                        {/*end Time with prize pool */}

                        {(bet768and1200)
                            &&
                            <div className={`col-6 m-0 mt-4 ${bet1200and1500 && 'order-2 row'}`}>

                                <div className={`col-12    ${bet1200and1500 && 'col-xl-6'}  backgroun-dark ml-2 row mt-0 mb-3 pb-3 pr-2 pl-2 pt-4 h-auto rounded`}>

                                    <div className=" col-7">
                                        <div className="d-flex flex-column">
                                            <span className="text-white fs-16 font-weight-bold pb-2">Create <br /> Challenge</span>


                                            <span className="fs-10 text-white">Challenge will be created by Level 2 & Level 3 Community  </span>
                                        </div>
                                        <button type="button" className="btn text-nowrap p-1 fs-12 mt-3 btn-success">Create Now</button>

                                    </div>
                                    <div className="m-0 p-2 col-5 flex-wrap flex-row d-flex align-content-center justify-content-center">
                                        <img src="images/createchallenge-img.png" />

                                    </div>
                                </div>
                                <div className={`col-12  ${bet1200and1500 && 'col-xl-6'}     backgroun-dark ml-2 row m-0 mb-3 pb-3 pr-2 pl-2 pt-4 h-auto rounded`}>

                                    <div className=" col-7">

                                        <div className="d-flex justify-content-start flex-column">
                                            <span className="text-white fs-16 font-weight-bold pb-2">Vote <br /> Challenge</span>



                                        </div>
                                        <p className="fs-10 text-white">Vote a challenge created by Level 2 & Level 3 Community</p>
                                        <button type="button" className="btn w-0 text-nowrap p-2 fs-12 mt-3 btn-success">Vote Now</button>

                                    </div>
                                    <div className="m-0 p-2 col-5 flex-wrap flex-row d-flex align-content-center justify-content-center">
                                        <img src="images/votechallenge-img.png" width='60%' />

                                    </div>
                                </div>
                            </div>
                        }
                        {/*start Challange*/}
                        <div className={`col-xl-8 col-md-12 col-sm-12`}>
                            <div className={`backgroun-dark d-flex rounded  p-4 h-100 ${(biggerThan1500 || bet1200and1500) && 'm-0'} text-white flex-column`}>

                                <span className="text-white pt-1 fs-18 d-flex align-items-center pb-1 mb-1"> <img src="images/submission-date-icon.png" width='20px' height='20px' className="mr-2" />THIS WEEK CHALLENGE </span>
                                <span className="text-white pt-1 fs-22 pb-2 font-weight-bold">Jump over the parlement wall </span>

                                <div className="d-flex align-items-center">
                                    <i className="fa-regular main-pink fa-heart mr-2"></i>

                                    <span className="fs-10">251 votes</span>


                                    <img className="ml-3 width-22 fs-22" src="/images/dp.png" />

                                    <span className="ml-2 fs-12 font-weight-bold">Oxflaaddswd...1523</span>

                                    <p className=" ml-3 p-1 fs-10 bg-pink-radius  text-white"> Level 3</p>

                                </div>

                                <div className="row">
                                    <div className="col-7 d-flex pt-1 pb-1 flex-column ">
                                        <span className="text-muted pb-1 fs-12 mt-3">Details</span>
                                        <p className="fs-12">Lorem ips hium quidem aliquid, cum quas dicta omnis quibusdam numquam hic id dolores vitae labore provident dignissimos! Lorem ipsum quidem aliquid, cum quas dicta omnis quibusdam numquam hic id <br /><br />dolores vitae labore provident dignissimos! Lorem ipsum quidem aliquid, cum quas dicta omnis quibusdam numquam hic id dolores vitae labore provident dignissimos!</p>
                                    </div>
                                    <div className="col-5 d-flex pt-1 pb-1 pt-3 flex-column ">
                                        <span className="text-muted pb-3 fs-12">Rules:</span>
                                        <div className="d-flex pb-3 align-items-center">
                                            <i className="fa-solid fa-check pr-2 main-pink"></i>
                                            <p className="fs-12">Lorem ipsum dolor sit amet consectetuds.</p>
                                        </div>
                                        <div className="d-flex pb-3 align-items-center">
                                            <i className="fa-solid fa-check pr-2 main-pink"></i>
                                            <p className="fs-12">Lorem ipsum dolor sit amet consectetuds.</p>
                                        </div>
                                        <div className="d-flex pb-3 align-items-center">
                                            <i className="fa-solid fa-check pr-2 main-pink"></i>
                                            <p className="fs-12">Lorem ipsum dolor sit amet consectetuds.</p>
                                        </div>
                                        <button type="button" className="btn ml-auto btn-primary">Details</button>

                                    </div>

                                </div>
                            </div>

                        </div>
                        {/*end Challange*/}

                        {(bet1200and1500 || biggest576) &&

                            <div className="row ">
                                <div className={`col-10 col-sm-5 m-4 backgroun-dark d-flex rounded`}>

                                    <div className="">
                                        <div className="d-flex flex-column">
                                            <span className="text-white fs-16 font-weight-bold pb-2">Create <br /> Challenge</span>


                                            <span className="fs-10 text-white">Challenge will be created by Level 2 & Level 3 Community  </span>
                                        </div>
                                        <button type="button" className="btn text-nowrap p-1 fs-12 mt-3 btn-success">Create Now</button>

                                    </div>
                                    <img src="images/createchallenge-img.png" width='40%' />


                                </div>
                                <div className={`col-10 col-sm-5 m-4 backgroun-dark d-flex rounded`}>

                                    <div className=" ">

                                        <div className="d-flex justify-content-start flex-column">
                                            <span className="text-white fs-16 font-weight-bold pb-2">Vote <br /> Challenge</span>



                                        </div>
                                        <p className="fs-10 text-white">Vote a challenge created by Level 2 & Level 3 Community</p>
                                        <button type="button" className="btn w-0 text-nowrap p-2 fs-12 mt-3 btn-success">Vote Now</button>

                                    </div>
                                    <img src="images/votechallenge-img.png" width='40%' />
                                </div>
                            </div>
                        }
                    </div>
                    {/*end header*/}
                    {/*start video*/}
                    <div className="row">
                        <div className="col-12 mt-3">
                            <div className=" backgroun-dark rounded pr-4 pl-4 pb-4 pt-0" >



                                <div className="col-12 p-0 mt-5">

                                    <div className="d-flex justify-content-between pb-2 align-items-center">

                                        <p className="text-white fs-22 font-weight-bold" >All Submissions </p>
                                        <button type="button" className="btn text-nowrap font-weight-bold  p-2 fs-12 mt-2 btn-success">View All</button>

                                    </div>

                                    <div className="row mt-2">


                                        <Masonry
                                            breakpointCols={breakpointColumnsObj}
                                            className="my-masonry-grid"
                                            columnClassName="my-masonry-grid_column">
                                            <div className={`videos m-0 p-3 height400  mb-4  align-self-stretch rounded`}>
                                                <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                                    className="video">
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
                                                    <img src="images/video-banner-1.png" alt="Video1" />
                                                    <div className="play-btn"></div>
                                                    <div className="text-white view-vid">

                                                        <div className=" d-flex align-items-center">
                                                            <i className="fa-regular fs-12 fa-heart pr-2"></i>

                                                            <p className="fs-10 mr-4">251</p>


                                                            <i className="fa-regular fs-12 fa-eye pr-2"></i>
                                                            <p className="fs-10">43,125</p>
                                                        </div>
                                                    </div>

                                                </a>

                                            </div>
                                            <div className={`videos m-0 p-3 height150  mb-4  rounded`}>
                                                <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                                    className="video">
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
                                                    <img src="images/video-banner-1.png" alt="Video1" />
                                                    <div className="play-btn"></div>
                                                    <div className="text-white view-vid">

                                                        <div className=" d-flex align-items-center">
                                                            <i className="fa-regular fs-12 fa-heart pr-2"></i>

                                                            <p className="fs-10 mr-4">251</p>


                                                            <i className="fa-regular fs-12 fa-eye pr-2"></i>
                                                            <p className="fs-10">43,125</p>
                                                        </div>
                                                    </div>

                                                </a>

                                            </div>
                                            <div className={`videos m-0 p-3 height150  mb-4   rounded`}>
                                                <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                                    className="video">
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
                                                    <img src="images/video-banner-1.png" alt="Video1" />
                                                    <div className="play-btn"></div>
                                                    <div className="text-white view-vid">

                                                        <div className=" d-flex align-items-center">
                                                            <i className="fa-regular fs-12 fa-heart pr-2"></i>

                                                            <p className="fs-10 mr-4">251</p>


                                                            <i className="fa-regular fs-12 fa-eye pr-2"></i>
                                                            <p className="fs-10">43,125</p>
                                                        </div>
                                                    </div>

                                                </a>

                                            </div>
                                            <div className={`videos m-0 p-3 height400  mb-4  align-self-stretch rounded`}>
                                                <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                                    className="video">
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
                                                    <img src="images/video-banner-1.png" alt="Video1" />
                                                    <div className="play-btn"></div>
                                                    <div className="text-white view-vid">

                                                        <div className=" d-flex align-items-center">
                                                            <i className="fa-regular fs-12 fa-heart pr-2"></i>

                                                            <p className="fs-10 mr-4">251</p>


                                                            <i className="fa-regular fs-12 fa-eye pr-2"></i>
                                                            <p className="fs-10">43,125</p>
                                                        </div>
                                                    </div>

                                                </a>

                                            </div>
                                            <div className={`videos m-0 p-3 height150  mb-4  rounded`}>
                                                <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                                    className="video">
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
                                                    <img src="images/video-banner-1.png" alt="Video1" />
                                                    <div className="play-btn"></div>
                                                    <div className="text-white view-vid">

                                                        <div className=" d-flex align-items-center">
                                                            <i className="fa-regular fs-12 fa-heart pr-2"></i>

                                                            <p className="fs-10 mr-4">251</p>


                                                            <i className="fa-regular fs-12 fa-eye pr-2"></i>
                                                            <p className="fs-10">43,125</p>
                                                        </div>
                                                    </div>

                                                </a>

                                            </div>
                                            <div className={`videos m-0 p-3 height150  mb-4   rounded`}>
                                                <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                                    className="video">
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
                                                    <img src="images/video-banner-1.png" alt="Video1" />
                                                    <div className="play-btn"></div>
                                                    <div className="text-white view-vid">

                                                        <div className=" d-flex align-items-center">
                                                            <i className="fa-regular fs-12 fa-heart pr-2"></i>

                                                            <p className="fs-10 mr-4">251</p>


                                                            <i className="fa-regular fs-12 fa-eye pr-2"></i>
                                                            <p className="fs-10">43,125</p>
                                                        </div>
                                                    </div>

                                                </a>

                                            </div>
                                            <div className={`videos m-0 p-3 height400  mb-4  align-self-stretch rounded`}>
                                                <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                                    className="video">
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
                                                    <img src="images/video-banner-1.png" alt="Video1" />
                                                    <div className="play-btn"></div>
                                                    <div className="text-white view-vid">

                                                        <div className=" d-flex align-items-center">
                                                            <i className="fa-regular fs-12 fa-heart pr-2"></i>

                                                            <p className="fs-10 mr-4">251</p>


                                                            <i className="fa-regular fs-12 fa-eye pr-2"></i>
                                                            <p className="fs-10">43,125</p>
                                                        </div>
                                                    </div>

                                                </a>

                                            </div>
                                            <div className={`videos m-0 p-3 height150  mb-4  rounded`}>
                                                <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                                    className="video">
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
                                                    <img src="images/video-banner-1.png" alt="Video1" />
                                                    <div className="play-btn"></div>
                                                    <div className="text-white view-vid">

                                                        <div className=" d-flex align-items-center">
                                                            <i className="fa-regular fs-12 fa-heart pr-2"></i>

                                                            <p className="fs-10 mr-4">251</p>


                                                            <i className="fa-regular fs-12 fa-eye pr-2"></i>
                                                            <p className="fs-10">43,125</p>
                                                        </div>
                                                    </div>

                                                </a>

                                            </div>
                                            <div className={`videos m-0 p-3 height150  mb-4   rounded`}>
                                                <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                                    className="video">
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
                                                    <img src="images/video-banner-1.png" alt="Video1" />
                                                    <div className="play-btn"></div>
                                                    <div className="text-white view-vid">

                                                        <div className=" d-flex align-items-center">
                                                            <i className="fa-regular fs-12 fa-heart pr-2"></i>

                                                            <p className="fs-10 mr-4">251</p>


                                                            <i className="fa-regular fs-12 fa-eye pr-2"></i>
                                                            <p className="fs-10">43,125</p>
                                                        </div>
                                                    </div>

                                                </a>

                                            </div>
                                            <div className={`videos m-0 p-3 height400  mb-4  align-self-stretch rounded`}>
                                                <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                                    className="video">
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
                                                    <img src="images/video-banner-1.png" alt="Video1" />
                                                    <div className="play-btn"></div>
                                                    <div className="text-white view-vid">

                                                        <div className=" d-flex align-items-center">
                                                            <i className="fa-regular fs-12 fa-heart pr-2"></i>

                                                            <p className="fs-10 mr-4">251</p>


                                                            <i className="fa-regular fs-12 fa-eye pr-2"></i>
                                                            <p className="fs-10">43,125</p>
                                                        </div>
                                                    </div>

                                                </a>

                                            </div>
                                            <div className={`videos m-0 p-3 height150  mb-4  rounded`}>
                                                <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                                    className="video">
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
                                                    <img src="images/video-banner-1.png" alt="Video1" />
                                                    <div className="play-btn"></div>
                                                    <div className="text-white view-vid">

                                                        <div className=" d-flex align-items-center">
                                                            <i className="fa-regular fs-12 fa-heart pr-2"></i>

                                                            <p className="fs-10 mr-4">251</p>


                                                            <i className="fa-regular fs-12 fa-eye pr-2"></i>
                                                            <p className="fs-10">43,125</p>
                                                        </div>
                                                    </div>

                                                </a>

                                            </div>
                                            <div className={`videos m-0 p-3 height150  mb-4   rounded`}>
                                                <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                                    className="video">
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
                                                    <img src="images/video-banner-1.png" alt="Video1" />
                                                    <div className="play-btn"></div>
                                                    <div className="text-white view-vid">

                                                        <div className=" d-flex align-items-center">
                                                            <i className="fa-regular fs-12 fa-heart pr-2"></i>

                                                            <p className="fs-10 mr-4">251</p>


                                                            <i className="fa-regular fs-12 fa-eye pr-2"></i>
                                                            <p className="fs-10">43,125</p>
                                                        </div>
                                                    </div>

                                                </a>

                                            </div>
                                        </Masonry>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end video*/}
                </div>
                {/*end main*/}
                <div className={`col-12 ${biggerThan1500 && 'col-xl-3'}`}>
                    {/*Start vote and create*/}
                    {biggerThan1500 && <div className="row">
                        <div className={`col-6 ${biggerThan1500 && 'col-xl-12'} `}>
                            <div className=" backgroun-dark  row mt-0 mb-3 pb-3 pr-2 pl-2 pt-4 h-auto rounded">
                                <img className="mobile-show" src="images/createchallenge-img.png" />

                                <div className="col-12 col-lg-7">
                                    <div className="d-flex flex-column">
                                        <span className="text-white fs-16 font-weight-bold pb-2">Create <br /> Challenge</span>


                                        <span className="fs-10 text-white">Challenge will be created by Level 2 & Level 3 Community  </span>
                                    </div>
                                    <button type="button" className="btn text-nowrap p-1 fs-12 mt-3 btn-success">Create Now</button>

                                </div>
                                <div className="col-12 m-0 p-2 col-lg-5 flex-wrap flex-row d-flex align-content-center justify-content-center">
                                    <img className="mobile-hide" src="images/createchallenge-img.png" />

                                </div>
                            </div>
                        </div>
                        <div className={`col-6 ${biggerThan1500 && 'col-xl-12 mt-3 '} `}>
                            <div className=" backgroun-dark  row m-0 mb-3 pb-3 pr-2 pl-2 pt-4 h-auto rounded">
                                <img src="images/votechallenge-img.png" width='60%' className="mobile-show" />

                                <div className="col-12 col-lg-7">

                                    <div className="d-flex justify-content-start flex-column">
                                        <span className="text-white fs-16 font-weight-bold pb-2">Vote <br /> Challenge</span>



                                    </div>
                                    <p className="fs-10 text-white">Vote a challenge created by Level 2 & Level 3 Community</p>
                                    <button type="button" className="btn w-0 text-nowrap p-2 fs-12 mt-3 btn-success">Vote Now</button>

                                </div>
                                <div className="col-12 m-0 p-2 col-lg-5 flex-wrap flex-row d-flex align-content-center justify-content-center">
                                    <img src="images/votechallenge-img.png" width='60%' className="mobile-hide" />

                                </div>
                            </div>
                        </div>
                    </div>
                    }

                    {/*end vote and create*/}
                    {/*Start Ranking*/}
                    <div className="row">
                        <div className="col-12">
                            <div className=" backgroun-dark rounded overflow-hidden">

                                <div className="align-items-start border-0 justify-content-start">
                                    <div>
                                        <h4 className="fs-20" >Ranking</h4>
                                        <span className="fs-12  font-weight-bold text-white text-nowrap">SOSX Top Token Holders</span>
                                    </div>
                                </div>
                                <ul className="nav3 nav-rank nav3-tabs butten nav3-justified">
                                    <li className="nav3-item">
                                        <a className={`nav3-link  pl-1 pr-1  pb-2 font-weight-bold text-white rounded text-nowrap`} href="#" >Level 1</a>
                                    </li>
                                    <li className="nav3-item">
                                        <a className={`nav3-link pl-1 pr-1  pb-2 font-weight-bold text-white rounded text-nowrap`} href="#" >Level 2</a>
                                    </li>
                                    <li className="nav3-item">
                                        <a className={`nav3-link pl-1 pr-1  pb-2 font-weight-bold text-white rounded text-nowrap`} href="#" >Level 3</a>
                                    </li>
                                </ul>

                                <div className={``}>
                                    <a className="blueprint-header-display trader-display">
                                        <div className="d-flex align-items-center">
                                            <span className="text-white mr-3 fs-16 font-w600">1.</span>
                                            <img className="blueprint-img-sm rounded-circle"
                                                src=" https://app.hedgeboard.io/userprofiles/default.png" alt="profile" />
                                            <div className="ml-1">
                                                <span
                                                    className=" card-small-text text-white trader-name">ddsdsdsdsdsd</span>
                                            </div>
                                        </div>
                                        <span> fdfsdfsdfs </span>
                                    </a>
                                    <a className="blueprint-header-display trader-display">
                                        <div className="d-flex align-items-center">
                                            <span className="text-white mr-3 fs-16 font-w600">1.</span>
                                            <img className="blueprint-img-sm rounded-circle"
                                                src=" https://app.hedgeboard.io/userprofiles/default.png" alt="profile" />
                                            <div className="ml-1">
                                                <span
                                                    className=" card-small-text text-white trader-name">ddsdsdsdsdsd</span>
                                            </div>
                                        </div>
                                        <span> fdfsdfsdfs </span>
                                    </a>
                                    <a className="blueprint-header-display trader-display">
                                        <div className="d-flex align-items-center">
                                            <span className="text-white mr-3 fs-16 font-w600">1.</span>
                                            <img className="blueprint-img-sm rounded-circle"
                                                src=" https://app.hedgeboard.io/userprofiles/default.png" alt="profile" />
                                            <div className="ml-1">
                                                <span
                                                    className=" card-small-text text-white trader-name">ddsdsdsdsdsd</span>
                                            </div>
                                        </div>
                                        <span> fdfsdfsdfs </span>
                                    </a>
                                    <a className="blueprint-header-display trader-display">
                                        <div className="d-flex align-items-center">
                                            <span className="text-white mr-3 fs-16 font-w600">1.</span>
                                            <img className="blueprint-img-sm rounded-circle"
                                                src=" https://app.hedgeboard.io/userprofiles/default.png" alt="profile" />
                                            <div className="ml-1">
                                                <span
                                                    className=" card-small-text text-white trader-name">ddsdsdsdsdsd</span>
                                            </div>
                                        </div>
                                        <span> fdfsdfsdfs </span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/*end Ranking*/}
                </div>
                {/*end main*/}
            </div>
        </div>
    </>
    )
}