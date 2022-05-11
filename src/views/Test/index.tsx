import { useMediaPredicate } from "react-media-hook";

export default function Test() {
    const littleThan1200 = useMediaPredicate(" (max-width: 1200px)");
    const biggerThan2000 = useMediaPredicate(" (min-width: 2000px)");
    const biggerThan1800 = useMediaPredicate(" (min-width: 1800px)");
    const biggerThan1650 = useMediaPredicate(" (max-width: 1650px)");
    const littThan1650 = useMediaPredicate(" (min-width: 1650px)");

    return (<>
        <div className="container-fluid">
            <div className="row ">
                {/*start Time with prize pool */}
                <div className={`col-12  col-lg ${biggerThan1800 && 'col-xl-3'} ${littleThan1200 && 'mb-3'}`}>
                    <div style={{ backgroundColor: 'rgb(17 17 22)' }} className="d-flex p-3 m-0 h-100 rounded justify-content-start flex-column  ">
                        <div className="d-flex align-items-center mt-2 mb-3 justify-content-start">
                            <div className="d-flex align-items-between">

                                <img src="images/submission-date-icon.png" style={{ width: '24px', height: '24px' }} />

                                <span style={{ fontWeight: '1000 ', fontSize: '22px' }} className="text-white pl-2">TIME REMAINING </span>

                            </div>

                            <p style={{ backgroundColor: '#f600cc', borderRadius: '10px' }} className="pl-1 mx-auto pr-1 fs-14 pt-0 pb-0 mr-3 text-white"> Stage</p>
                        </div>
                        <div className="clock mb-3 pr-2 pl-2 pb-2">
                            <div className="d-flex justify-content-start" id="countdown">
                                <div className="d-flex justify-content-start align-items-center">


                                    <p style={{ backgroundColor: '#f600cc', borderRadius: '10px' }} className="li pt-2 pr-3 pb-2 pl-3"><span className="m-0" style={{ fontSize: '40px', fontFamily: 'digital-7' }} >01</span>days</p>
                                    <p className="li"><span className="" >:</span></p>
                                </div>

                                <div className="d-flex justify-content-start align-items-center">

                                    <p style={{ backgroundColor: '#f600cc', borderRadius: '10px' }} className="li pt-2 pr-3 pb-2 pl-3"><span className="m-0" style={{ fontSize: '40px', fontFamily: 'digital-7' }} >01</span>Hours</p>
                                    <p className="li"><span className="" >:</span></p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">

                                    <p style={{ backgroundColor: '#f600cc', borderRadius: '10px' }} className="li pt-2 pr-3 pb-2 pl-3"><span className="m-0" style={{ fontSize: '40px', fontFamily: 'digital-7' }} >22</span>Minutes</p>
                                    <p className="li"><span className="" >:</span></p>
                                </div>

                                <p style={{ backgroundColor: '#f600cc', borderRadius: '10px' }} className="li pt-2 pr-3 pb-2 pl-3"><span className="m-0" style={{ fontSize: '40px', fontFamily: 'digital-7' }}>33</span>Seconds</p>
                            </div>
                        </div>
                        <div className="d-flex mb-3 mt-2 align-items-center">

                            <img src="images/prize-pool-icon.png" style={{ width: '24px', height: '24px' }} />

                            <span style={{ fontWeight: '1000 ', fontSize: '22px' }} className="text-white pl-2">PRIZE POOL</span>

                        </div>
                        <span style={{ fontWeight: '1000 ', fontSize: '60px' }} className="mb-3 main-pink">$ 1,000.00
                        </span>
                        <span className="text-muted mb-3 fs-12">et! Possimus ea repudi?repudndae in? fdfsd  dfssfds
                        </span>
                        <button type="button" className="btn pt-1 pb-1 btn-primary">Upload Video</button>
                    </div>
                </div>


                {/*end Time with prize pool */}


                {/*start Challange*/}

                <div className={`col-12 col-lg-6  ${biggerThan1650 && 'col-xl-7'}  ${biggerThan1800 && 'col-xl-6 '} ${littleThan1200 && 'mb-3'}`}>
                    <div style={{ backgroundColor: 'rgb(17 17 22)' }} className="d-flex rounded m-0 h-100  p-3 pl-4 text-white flex-column">
                        <span style={{ fontWeight: '1000 ', fontSize: '22px' }} className="text-white mt-2">THIS WEEK CHALLENGE </span>
                        <span style={{ fontWeight: '1000 ', fontSize: '18px' }} className="text-white pt-3">Selfie Naked </span>

                        <div className="pt-3 main-pink">
                            <i className="fa-regular fa-heart pr-3"></i>

                            <span>251 votes</span>
                        </div>
                        <div className="d-flex align-items-center pt-3">
                            <span>Creator</span>
                            <p style={{ backgroundColor: '#f600cc', borderRadius: '10px' }} className="pl-1 pr-1 pt-0 pb-0 ml-3 fs-14 text-white"> Level 3</p>

                        </div>

                        <div className="d-flex align-items-center pt-3">
                            <img style={{ width: '26px' }} src="/images/xlogo-black.b90261b2.svg" />

                            <span className="ml-3">Oxflaaddswd...1523</span>
                        </div>

                        <div className="d-flex flex-column pt-3">
                            <span className="text-muted pb-1">Details:</span>
                            <p className="fs-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quod obcaecati autem officia suscipit at quidem aliquid, cum quas dicta omnis quibusdam numquam hic id dolores vitae labore provident dignissimos!</p>
                        </div>
                        <div className="d-flex flex-column pt-3">
                            <span className="text-muted pb-1">Roles:</span>
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-check pr-2 main-pink"></i>
                                <p className="fs-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-check pr-2 main-pink"></i>
                                <p className="fs-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-check pr-2 main-pink"></i>
                                <p className="fs-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-check pr-2 main-pink"></i>
                                <p className="fs-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-check pr-2 main-pink"></i>
                                <p className="fs-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit</p>
                            </div>
                        </div>
                    </div>





                </div>
                {/*end Challange*/}



                <div className={`col-12 col-lg ${littleThan1200 && 'mb-3'}`}>
                    <div className="row">
                    <div className={`col-5 ${biggerThan1800 && 'col-xl-12'} ${biggerThan1650 && 'mt-5'} ${littThan1650 && 'col-xl-12'}`}>
                        <div style={{ backgroundColor: 'rgb(17 17 22)' }} className=" row m-0 p-0 h-auto rounded">
                            <div className="col-12 col-lg-6">
                                <div className="d-flex flex-column">
                                    <span style={{ fontWeight: '1000 ', fontSize: '22px' }} className="text-white pt-3 ">Create </span>
                                    <span style={{ fontWeight: '1000 ', fontSize: '22px' }} className="text-white "> CHALLENGE </span>


                                    <span className="fs-14 pt-2 text-white">LOREM LOREM LOREM LOREM LOREM </span>
                                    <button type="button" className="btn mt-3 mb-2 btn-success">Create Now</button>
                                </div>

                            </div>
                            <div className="col-12 col-lg-6">
                                <img src="images/createchallenge-img.png" />

                            </div>
                        </div>
                    </div>
                    <div className={`col-5 ${biggerThan1800 && 'col-xl-12'} ${littThan1650 && 'col-xl-12'}`}>

                        <div style={{ backgroundColor: 'rgb(17 17 22)' }} className={` row m-0 mt-5 p-0 rounded ${littleThan1200 && '  '}`}>
                            <div className="col-12 col-lg-6">
                                <div className="d-flex flex-column">
                                    <span style={{ fontWeight: '1000 ', fontSize: '22px' }} className="text-white pt-3 ">Vote </span>
                                    <span style={{ fontWeight: '1000 ', fontSize: '22px' }} className="text-white "> CHALLENGE </span>


                                    <span className="fs-14 pt-2 text-white">LOREM LOREM LOREM LOREM LOREM </span>
                                    <button type="button" className="btn mt-3 mb-2 btn-success">Vote Now</button>
                                </div>

                            </div>
                            <div className="col-12 col-lg-6">
                                <img src="images/votechallenge-img.png" />

                            </div>
                        </div>
                    </div>
                    </div>
                 

                </div>



            </div>
            <div className="row mt-3">
                <div className="col-12 col-xl-9">
                    <div style={{ backgroundColor: 'rgb(17 17 22)' }} className="rounded" >
                        <div className="d-flex mb-2 flex-column">

                            <div className="d-flex justify-content-between  mb-2  align-items-center">

                                <p className="text-white  font-weight-bold" style={{ fontWeight: '1000 ', fontSize: '22px' }} >MOST VIEWED CHALLENGES <span className="main-pink">7 DAY</span></p>
                                <button type="button" className="btn pl-2 pt-1 pb-1 pr-2 btn-success font-weight-bold ">View All</button>

                            </div>

                            <div className="row ">



                                <div className={`videos pl-3 m-0 p-0 pr-3 pb-3 col-12 col-sm-6 col-lg-4  ${biggerThan2000 && 'col-xl-2'} rounded`}>
                                    <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                        className="video">
                                        <span>
                                            <div className="text-white d-flex pt-3">
                                                <img style={{ width: '26px' }} src="/images/xlogo-black.b90261b2.svg" />

                                                <p className=" ml-2 fs-12" >Oxfwd...ds3</p>
                                            </div>
                                        </span>
                                        <img src="images/video-banner-1.png" alt="Video1" />
                                        <div className="play-btn"></div>
                                        <div className="text-white view-vid">

                                            <div className="pt-3 d-flex align-items-center">
                                                <i className="fa-regular fa-heart pr-2"></i>

                                                <p>251 votes</p>
                                            </div>
                                        </div>

                                    </a>
                                    <style jsx>{`
                    .view-vid {
                        position: absolute;
                        bottom:7px;
                        left:5px;
                    }
                    
                `}</style>
                                </div>






                                <div className={`videos pl-3 m-0 p-0 pr-3 pb-3 col-12 col-sm-6 col-lg-4  ${biggerThan2000 && 'col-xl-2'} rounded`}>
                                    <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                        className="video">
                                        <span>
                                            <div className="text-white d-flex pt-3">
                                                <img style={{ width: '26px' }} src="/images/xlogo-black.b90261b2.svg" />

                                                <p className=" ml-2 fs-12" >Oxfwd...ds3</p>
                                            </div>
                                        </span>
                                        <img src="images/video-banner-1.png" alt="Video1" />
                                        <div className="play-btn"></div>
                                        <div className="text-white view-vid">

                                            <div className="pt-3 d-flex align-items-center">
                                                <i className="fa-regular fa-heart pr-2"></i>

                                                <p>251 votes</p>
                                            </div>
                                        </div>

                                    </a>
                                    <style jsx>{`
                    .view-vid {
                        position: absolute;
                        bottom:7px;
                        left:5px;
                    }
                    
                `}</style>
                                </div>




                                <div className={`videos pl-3 m-0 p-0 pr-3 pb-3 col-12 col-sm-6 col-lg-4  ${biggerThan2000 && 'col-xl-2'} rounded`}>
                                    <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                        className="video">
                                        <span>
                                            <div className="text-white d-flex pt-3">
                                                <img style={{ width: '26px' }} src="/images/xlogo-black.b90261b2.svg" />

                                                <p className=" ml-2 fs-12" >Oxfwd...ds3</p>
                                            </div>
                                        </span>
                                        <img src="images/video-banner-1.png" alt="Video1" />
                                        <div className="play-btn"></div>
                                        <div className="text-white view-vid">

                                            <div className="pt-3 d-flex align-items-center">
                                                <i className="fa-regular fa-heart pr-2"></i>

                                                <p>251 votes</p>
                                            </div>
                                        </div>

                                    </a>
                                    <style jsx>{`
                    .view-vid {
                        position: absolute;
                        bottom:7px;
                        left:5px;
                    }
                    
                `}</style>
                                </div>




                                <div className={`videos pl-3 m-0 p-0 pr-3 pb-3 col-12 col-sm-6 col-lg-4  ${biggerThan2000 && 'col-xl-2'} rounded`}>
                                    <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                        className="video">
                                        <span>
                                            <div className="text-white d-flex pt-3">
                                                <img style={{ width: '26px' }} src="/images/xlogo-black.b90261b2.svg" />

                                                <p className=" ml-2 fs-12" >Oxfwd...ds3</p>
                                            </div>
                                        </span>
                                        <img src="images/video-banner-1.png" alt="Video1" />
                                        <div className="play-btn"></div>
                                        <div className="text-white view-vid">

                                            <div className="pt-3 d-flex align-items-center">
                                                <i className="fa-regular fa-heart pr-2"></i>

                                                <p>251 votes</p>
                                            </div>
                                        </div>

                                    </a>
                                    <style jsx>{`
                    .view-vid {
                        position: absolute;
                        bottom:7px;
                        left:5px;
                    }
                    
                `}</style>
                                </div>




                                <div className={`videos pl-3 m-0 p-0 pr-3 pb-3 col-12 col-sm-6 col-lg-4  ${biggerThan2000 && 'col-xl-2'} rounded`}>
                                    <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                        className="video">
                                        <span>
                                            <div className="text-white d-flex pt-3">
                                                <img style={{ width: '26px' }} src="/images/xlogo-black.b90261b2.svg" />

                                                <p className=" ml-2 fs-12" >Oxfwd...ds3</p>
                                            </div>
                                        </span>
                                        <img src="images/video-banner-1.png" alt="Video1" />
                                        <div className="play-btn"></div>
                                        <div className="text-white view-vid">

                                            <div className="pt-3 d-flex align-items-center">
                                                <i className="fa-regular fa-heart pr-2"></i>

                                                <p>251 votes</p>
                                            </div>
                                        </div>

                                    </a>
                                    <style jsx>{`
                    .view-vid {
                        position: absolute;
                        bottom:7px;
                        left:5px;
                    }
                    
                `}</style>
                                </div>












                            </div>
                        </div>

                        <div className="d-flex mb-2 flex-column">

                            <div className="d-flex justify-content-between  mb-2  align-items-center">

                                <p className="text-white  font-weight-bold" style={{ fontWeight: '1000 ', fontSize: '22px' }} >MOST VIEWED CHALLENGES <span className="main-pink">7 DAY</span></p>
                                <button type="button" className="btn pl-2 pt-1 pb-1 pr-2 btn-success font-weight-bold ">View All</button>

                            </div>

                            <div className="row">











                                <div className={`videos pl-3 m-0 p-0 pr-3 pb-3 col-12 col-sm-6 col-lg-4  ${biggerThan2000 && 'col-xl-2'} rounded`}>
                                    <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                        className="video">
                                        <span>
                                            <div className="text-white d-flex pt-3">
                                                <img style={{ width: '26px' }} src="/images/xlogo-black.b90261b2.svg" />

                                                <p className=" ml-2 fs-12" >Oxfwd...ds3</p>
                                            </div>
                                        </span>
                                        <img src="images/video-banner-1.png" alt="Video1" />
                                        <div className="play-btn"></div>
                                        <div className="text-white view-vid">

                                            <div className="pt-3 d-flex align-items-center">
                                                <i className="fa-regular fa-heart pr-2"></i>

                                                <p>251 votes</p>
                                            </div>
                                        </div>

                                    </a>
                                    <style jsx>{`
                    .view-vid {
                        position: absolute;
                        bottom:7px;
                        left:5px;
                    }
                    
                `}</style>
                                </div>






                                <div className={`videos pl-3 m-0 p-0 pr-3 pb-3 col-12 col-sm-6 col-lg-4  ${biggerThan2000 && 'col-xl-2'} rounded`}>
                                    <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                        className="video">
                                        <span>
                                            <div className="text-white d-flex pt-3">
                                                <img style={{ width: '26px' }} src="/images/xlogo-black.b90261b2.svg" />

                                                <p className=" ml-2 fs-12" >Oxfwd...ds3</p>
                                            </div>
                                        </span>
                                        <img src="images/video-banner-1.png" alt="Video1" />
                                        <div className="play-btn"></div>
                                        <div className="text-white view-vid">

                                            <div className="pt-3 d-flex align-items-center">
                                                <i className="fa-regular fa-heart pr-2"></i>

                                                <p>251 votes</p>
                                            </div>
                                        </div>

                                    </a>
                                    <style jsx>{`
                    .view-vid {
                        position: absolute;
                        bottom:7px;
                        left:5px;
                    }
                    
                `}</style>
                                </div>




                                <div className={`videos pl-3 m-0 p-0 pr-3 pb-3 col-12 col-sm-6 col-lg-4  ${biggerThan2000 && 'col-xl-2'} rounded`}>
                                    <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                        className="video">
                                        <span>
                                            <div className="text-white d-flex pt-3">
                                                <img style={{ width: '26px' }} src="/images/xlogo-black.b90261b2.svg" />

                                                <p className=" ml-2 fs-12" >Oxfwd...ds3</p>
                                            </div>
                                        </span>
                                        <img src="images/video-banner-1.png" alt="Video1" />
                                        <div className="play-btn"></div>
                                        <div className="text-white view-vid">

                                            <div className="pt-3 d-flex align-items-center">
                                                <i className="fa-regular fa-heart pr-2"></i>

                                                <p>251 votes</p>
                                            </div>
                                        </div>

                                    </a>
                                    <style jsx>{`
                    .view-vid {
                        position: absolute;
                        bottom:7px;
                        left:5px;
                    }
                    
                `}</style>
                                </div>




                                <div className={`videos pl-3 m-0 p-0 pr-3 pb-3 col-12 col-sm-6 col-lg-4  ${biggerThan2000 && 'col-xl-2'} rounded`}>
                                    <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                        className="video">
                                        <span>
                                            <div className="text-white d-flex pt-3">
                                                <img style={{ width: '26px' }} src="/images/xlogo-black.b90261b2.svg" />

                                                <p className=" ml-2 fs-12" >Oxfwd...ds3</p>
                                            </div>
                                        </span>
                                        <img src="images/video-banner-1.png" alt="Video1" />
                                        <div className="play-btn"></div>
                                        <div className="text-white view-vid">

                                            <div className="pt-3 d-flex align-items-center">
                                                <i className="fa-regular fa-heart pr-2"></i>

                                                <p>251 votes</p>
                                            </div>
                                        </div>

                                    </a>
                                    <style jsx>{`
                    .view-vid {
                        position: absolute;
                        bottom:7px;
                        left:5px;
                    }
                    
                `}</style>
                                </div>




                                <div className={`videos pl-3 m-0 p-0 pr-3 pb-3 col-12 col-sm-6 col-lg-4  ${biggerThan2000 && 'col-xl-2'} rounded`}>
                                    <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                        className="video">
                                        <span>
                                            <div className="text-white d-flex pt-3">
                                                <img style={{ width: '26px' }} src="/images/xlogo-black.b90261b2.svg" />

                                                <p className=" ml-2 fs-12" >Oxfwd...ds3</p>
                                            </div>
                                        </span>
                                        <img src="images/video-banner-1.png" alt="Video1" />
                                        <div className="play-btn"></div>
                                        <div className="text-white view-vid">

                                            <div className="pt-3 d-flex align-items-center">
                                                <i className="fa-regular fa-heart pr-2"></i>

                                                <p>251 votes</p>
                                            </div>
                                        </div>

                                    </a>
                                    <style jsx>{`
                    .view-vid {
                        position: absolute;
                        bottom:7px;
                        left:5px;
                    }
                    
                `}</style>
                                </div>












                            </div>
                        </div>

                        <div className="d-flex mb-2 flex-column">

                            <div className="d-flex justify-content-between  mb-2  align-items-center">

                                <p className="text-white  font-weight-bold" style={{ fontWeight: '1000 ', fontSize: '22px' }} >MOST VIEWED CHALLENGES <span className="main-pink">7 DAY</span></p>
                                <button type="button" className="btn pl-2 pt-1 pb-1 pr-2 btn-success font-weight-bold ">View All</button>

                            </div>

                            <div className="row">











                                <div className={`videos pl-3 m-0 p-0 pr-3 pb-3 col-12 col-sm-6 col-lg-4  ${biggerThan2000 && 'col-xl-2'} rounded`}>
                                    <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                        className="video">
                                        <span>
                                            <div className="text-white d-flex pt-3">
                                                <img style={{ width: '26px' }} src="/images/xlogo-black.b90261b2.svg" />

                                                <p className=" ml-2 fs-12" >Oxfwd...ds3</p>
                                            </div>
                                        </span>
                                        <img src="images/video-banner-1.png" alt="Video1" />
                                        <div className="play-btn"></div>
                                        <div className="text-white view-vid">

                                            <div className="pt-3 d-flex align-items-center">
                                                <i className="fa-regular fa-heart pr-2"></i>

                                                <p>251 votes</p>
                                            </div>
                                        </div>

                                    </a>
                                    <style jsx>{`
                    .view-vid {
                        position: absolute;
                        bottom:7px;
                        left:5px;
                    }
                    
                `}</style>
                                </div>






                                <div className={`videos pl-3 m-0 p-0 pr-3 pb-3 col-12 col-sm-6 col-lg-4  ${biggerThan2000 && 'col-xl-2'} rounded`}>
                                    <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                        className="video">
                                        <span>
                                            <div className="text-white d-flex pt-3">
                                                <img style={{ width: '26px' }} src="/images/xlogo-black.b90261b2.svg" />

                                                <p className=" ml-2 fs-12" >Oxfwd...ds3</p>
                                            </div>
                                        </span>
                                        <img src="images/video-banner-1.png" alt="Video1" />
                                        <div className="play-btn"></div>
                                        <div className="text-white view-vid">

                                            <div className="pt-3 d-flex align-items-center">
                                                <i className="fa-regular fa-heart pr-2"></i>

                                                <p>251 votes</p>
                                            </div>
                                        </div>

                                    </a>
                                    <style jsx>{`
                    .view-vid {
                        position: absolute;
                        bottom:7px;
                        left:5px;
                    }
                    
                `}</style>
                                </div>




                                <div className={`videos pl-3 m-0 p-0 pr-3 pb-3 col-12 col-sm-6 col-lg-4  ${biggerThan2000 && 'col-xl-2'} rounded`}>
                                    <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                        className="video">
                                        <span>
                                            <div className="text-white d-flex pt-3">
                                                <img style={{ width: '26px' }} src="/images/xlogo-black.b90261b2.svg" />

                                                <p className=" ml-2 fs-12" >Oxfwd...ds3</p>
                                            </div>
                                        </span>
                                        <img src="images/video-banner-1.png" alt="Video1" />
                                        <div className="play-btn"></div>
                                        <div className="text-white view-vid">

                                            <div className="pt-3 d-flex align-items-center">
                                                <i className="fa-regular fa-heart pr-2"></i>

                                                <p>251 votes</p>
                                            </div>
                                        </div>

                                    </a>
                                    <style jsx>{`
                    .view-vid {
                        position: absolute;
                        bottom:7px;
                        left:5px;
                    }
                    
                `}</style>
                                </div>




                                <div className={`videos pl-3 m-0 p-0 pr-3 pb-3 col-12 col-sm-6 col-lg-4  ${biggerThan2000 && 'col-xl-2'} rounded`}>
                                    <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                        className="video">
                                        <span>
                                            <div className="text-white d-flex pt-3">
                                                <img style={{ width: '26px' }} src="/images/xlogo-black.b90261b2.svg" />

                                                <p className=" ml-2 fs-12" >Oxfwd...ds3</p>
                                            </div>
                                        </span>
                                        <img src="images/video-banner-1.png" alt="Video1" />
                                        <div className="play-btn"></div>
                                        <div className="text-white view-vid">

                                            <div className="pt-3 d-flex align-items-center">
                                                <i className="fa-regular fa-heart pr-2"></i>

                                                <p>251 votes</p>
                                            </div>
                                        </div>

                                    </a>
                                    <style jsx>{`
                    .view-vid {
                        position: absolute;
                        bottom:7px;
                        left:5px;
                    }
                    
                `}</style>
                                </div>




                                <div className={`videos pl-3 m-0 p-0 pr-3 pb-3 col-12 col-sm-6 col-lg-4  ${biggerThan2000 && 'col-xl-2'} rounded`}>
                                    <a href="https://www.youtube.com/channel/UCpj_-oiab_vwuJMl7omUrEg"
                                        className="video">
                                        <span>
                                            <div className="text-white d-flex pt-3">
                                                <img style={{ width: '26px' }} src="/images/xlogo-black.b90261b2.svg" />

                                                <p className=" ml-2 fs-12" >Oxfwd...ds3</p>
                                            </div>
                                        </span>
                                        <img src="images/video-banner-1.png" alt="Video1" />
                                        <div className="play-btn"></div>
                                        <div className="text-white view-vid">

                                            <div className="pt-3 d-flex align-items-center">
                                                <i className="fa-regular fa-heart pr-2"></i>

                                                <p>251 votes</p>
                                            </div>
                                        </div>

                                    </a>
                                    <style jsx>{`
                    .view-vid {
                        position: absolute;
                        bottom:7px;
                        left:5px;
                    }
                    
                `}</style>
                                </div>












                            </div>
                        </div>
                    </div>



                </div>
                {/*Start Ranking*/}
                <div className="col-12 col-xl-3">
                    <div style={{ backgroundColor: 'rgb(17 17 22)' }} className="rounded overflow-hidden">



                        <div className="align-items-start border-0 justify-content-start">
                            <div>
                                <h4 className="fs-20 font-weight-bold  mx-auto">Ranking</h4>
                                <span className="fs-12 mt-2 font-weight-bold p-2 text-white text-nowrap">SOSX Top Token Holders</span>
                            </div>
                        </div>



                        <ul className="nav3 nav-rank nav3-tabs butten nav3-justified mb-3">
                            <li className="nav3-item">
                                <a className={`nav3-link  pl-1 pr-1 pt-2 pb-2 font-weight-bold text-white rounded text-nowrap`} href="#" >Level 1</a>
                            </li>
                            <li className="nav3-item">
                                <a className={`nav3-link pl-1 pr-1 pt-2 pb-2 font-weight-bold text-white rounded text-nowrap`} href="#" >Level 2</a>
                            </li>
                            <li className="nav3-item">
                                <a className={`nav3-link pl-1 pr-1 pt-2 pb-2 font-weight-bold text-white rounded text-nowrap`} href="#" >Level 3</a>
                            </li>
                        </ul>

                        <div className={`card3-body ranking`}>
                            <a className="blueprint-header-display trader-display">
                                <div className="d-flex align-items-center">
                                    <span className="text-white mr-3 fs-16 font-w600">1.</span>
                                    <img className="blueprint-img-sm rounded-circle"
                                        src=" https://app.hedgeboard.io/userprofiles/default.png" alt="profile" />
                                    <div className="ml-1">
                                        <span
                                            className="mb-1 card-small-text text-white trader-name">ddsdsdsdsdsd</span>
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
                                            className="mb-1 card-small-text text-white trader-name">ddsdsdsdsdsd</span>
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
                                            className="mb-1 card-small-text text-white trader-name">ddsdsdsdsdsd</span>
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
                                            className="mb-1 card-small-text text-white trader-name">ddsdsdsdsdsd</span>
                                    </div>
                                </div>
                                <span> fdfsdfsdfs </span>
                            </a>
                        </div>

                    </div>
                </div>
                {/*end Ranking*/}
            </div>
        </div>
    </>
    )
}