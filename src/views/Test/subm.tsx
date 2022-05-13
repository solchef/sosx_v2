import { useMediaPredicate } from "react-media-hook";
import Masonry from 'react-masonry-css'

export default function Test() {
    const biggerThan1500 = useMediaPredicate("(min-width: 1500px)");
    const biggerThan1200 = useMediaPredicate("(min-width: 1200px)");
    const biggest1200 = useMediaPredicate("(max-width: 1200px)");
    const bet1200and1500 = useMediaPredicate("(min-width: 576px) and (max-width: 850px)");
    const biggest576 = useMediaPredicate(" (max-width: 576px)");
    const breakpointColumnsObj = {


        3000: 5,
        2250: 4,
        1850: 3,
        1500: 4,
        1450: 3,
        1150: 2,
        850: 1,
        768: 2,
        620: 1
    };

    return (<>
        <div className="game container-fluid">
            <div className="row">
                <div className={`col-12 ${biggerThan1500 && 'col-xl-9'}`}>
                    {/*start header*/}
                    <div className="d-flex flex-column flex-xl-row justify-content-between">
                        {/*start Time with prize pool */}
                        <div className={`d-flex flex-column flex-sm-row flex-xl-column ${biggerThan1200 && 'mr-4 '} justify-content-between`}>

                            <div className={`d-flex flex-column ${biggest1200 && 'mb-4 '} ${bet1200and1500 && 'mr-4 '} backgroun-dark p-4 m-0 rounded`}>
                                <div className="d-flex align-items-center">
                                    <img src="images/submission-date-icon.png" width='20px' height='20px' />
                                    <span className="text-white fs-18 ml-2">TIME REMAINING </span>
                                </div>
                                <p className="fs-12 text-muted">To submit a video competing the stage</p>
                                <div className="clock">
                                    <div className="d-flex justify-content-start" id="countdown">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <p className="li pr-2 pl-2 pb-0"><span className=" main-pink m-0" >05</span>Hours</p>
                                            <p className="li"><span className="" >:</span></p>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center">
                                            <p className="li pr-2 pl-2 pb-0"><span className=" main-pink m-0" >22</span>Minutes</p>
                                            <p className="li"><span className="" >:</span></p>
                                        </div>
                                        <p className="li pr-2 pl-2 pb-0"><span className=" main-pink m-0" >33</span>Seconds</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`backgroun-dark m-0 ${biggest1200 && 'mb-4'} p-4 rounded`}>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex pb-1 align-items-center">

                                            <img src="images/prize-pool-icon.png" width='24px' height='24px' />

                                            <span className="text-white fs-18 ml-2 ">PRIZE POOL</span>

                                        </div>
                                        <span className="text-muted pb-2  fs-10">Really want this challenge <br /> to be done? Donate to pool
                                        </span>
                                    </div>
                                    <div className="">
                                        <span className=" fs-22  pb-3 font-weight-bold main-pink">$ 1,000.00
                                        </span><br />
                                        <span className=" fs-10  pb-3 font-weight-bold main-pink">sewedweedwqedwe
                                        </span>
                                    </div>
                                </div>

                            </div>

                        </div>
                        {/*end Time with prize pool */}

                        {/*start Challange*/}

                        <div className={`backgroun-dark rounded m-0 d-flex p-4 pb-0 h-100 text-white`}>
                            <div className="">
                                <div className="text-white d-flex align-items-center mb-2">
                                    <div className={`step done mr-3 `} >1</div>
                                    SUBMIT A CHALLENGE
                                </div>
                                <div className="text-muted d-flex align-items-center mb-2">
                                    <div className={`step  mr-3 `} >2</div>
                                    VOTE A CHALLENGE
                                </div>
                                <div className="text-muted d-flex align-items-center mb-2">
                                    <div className={`step  mr-3 `} >3</div>
                                    UPLOADE VIDEO
                                </div>
                                <p className="fs-14 mb-4 mt-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae atque dolores laborum? Earum vitae voluptatibus necessitatibus ullam nemo tempora fugit quos explicabo quis, saepe illum molestias cumque ipsa quas?
                                </p>
                                <p className="fs-14 mb-4 mt-4">
                                    Lorem itempora fugit qupsa quas?
                                </p>
                                <button type="button" className="btn btn-primary">Vote for Challange</button>
                            </div>
                            <div className="">
                           
                            <div className="card-body">




<div className="text-muted bg-dark rounded">
    Challenge Name
</div>



<textarea rows={15} cols={200} value="Challenge Rules" className="overflow-auto bg-dark p-3 m-0 rounded text-muted" >
</textarea>

</div>
                            </div>
                        </div>


                        {/*end Challange*/}

                    </div>
                    {/*end header*/}
                    {/*start video*/}
                    <div className="row">
                        <div className="col-12 mt-3">
                            <div className=" backgroun-dark  mt-2 rounded  pt-0" >



                                <div className="col-12 p-0">

                                    <div className="d-flex justify-content-between p-2 align-items-center">

                                        <p className="text-white fs-22 font-weight-bold" >All Submissions </p>
                                        <button type="button" className="btn text-nowrap font-weight-bold  ml-auto fs-12 mt-2 btn-success">View All</button>

                                    </div>

                                    <div className="row mx-auto mt-2">


                                        <Masonry
                                            breakpointCols={breakpointColumnsObj}
                                            className="my-masonry-grid mx-auto "
                                            columnClassName="my-masonry-grid_column">
                                            <div className={`width250  p-3 height400  mb-4  align-self-stretch rounded`}>
                                                <iframe className="position-absolute iframe" width="250" height="400" src="https://www.youtube.com/embed/-LAwDM8JKwU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

                                                <a href=""
                                                >
                                                    <span className="details">
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
                                                    <div className="play-btn"></div>
                                                    <div className="text-white details view-vid">

                                                        <div className=" d-flex align-items-center">
                                                            <i className="fa-regular fs-12 fa-heart pr-2"></i>

                                                            <p className="fs-10 mr-4">251</p>


                                                            <i className="fa-regular fs-12 fa-eye pr-2"></i>
                                                            <p className="fs-10">43,125</p>
                                                        </div>
                                                    </div>

                                                </a>

                                            </div>
                                            <div className={`width250  height150  mb-4  rounded`}>
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
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
                                            <div className={`width250  height150  mb-4   rounded`}>
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
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
                                            <div className={`width250  height400  mb-4  align-self-stretch rounded`}>
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
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
                                            <div className={`width250  height150  mb-4  rounded`}>
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
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
                                            <div className={`width250  height150  mb-4   rounded`}>
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
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
                                            <div className={`width250  height400  mb-4  align-self-stretch rounded`}>
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
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
                                            <div className={`width250  height150  mb-4  rounded`}>
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
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
                                            <div className={`width250  height150  mb-4   rounded`}>
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
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
                                            <div className={`width250  height400  mb-4  align-self-stretch rounded`}>
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
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
                                            <div className={`width250  height400  mb-4  align-self-stretch rounded`}>
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
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
                                            <div className={`width250  height400  mb-4  align-self-stretch rounded`}>
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
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
                                            <div className={`width250  height150  mb-4  rounded`}>
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
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
                                            <div className={`width250  height150  mb-4   rounded`}>
                                                <a href=""
                                                >
                                                    <span>
                                                        <div className="text-white d-flex align-items-center pt-1">
                                                            <img className="width-22" src="/images/dp.png" />

                                                            <p className=" ml-2 fs-12" >Oxf...ds3</p>
                                                        </div>
                                                    </span>
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

                    {/*Start Ranking*/}
                    <div className="row h-100 ">
                        <div className="col-12 h-100 ">
                            <div className=" backgroun-dark m-0 h-100 rounded overflow-hidden">

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