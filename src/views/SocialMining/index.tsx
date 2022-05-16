import Link from 'next/link';
import NavMining from './NavMining';
import { useMediaPredicate } from 'react-media-hook';

export default function SocialMining() {
    const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
    const biggest1400 = useMediaPredicate("(max-width: 1400px)");

    return (
        <>
           <div className={`${biggerThan1400 && "container"} pt-3 ${biggest1400 && "container-fluid"}`} >
          <NavMining/>

            <div className="pt-2 pb-0">
                
                <div className="row pt-3">
                    <div className="col-sm-12">
                        <h3 className="text-center h3-mobile pb-1">CLAIM YOUR DAILY FREE SOSX TOKEN REWARD</h3>
                    </div>

                    <div className="row pt-1 text-center container ">
                        <div className="col-md-4 mb-3">
                            <div className="card overflow-hidden">
                                <div>
                                    <img src="images/share-img.png" className="steps-img pb-3 justify-content-center pb-3" />
                                    <p className="main-pink pb-2 pt-2">Step 1</p>
                                    <h4 className="fs-18 mb-0">Share</h4>
                                    <p className="text-white">Share given assignement on your social media every
                                        24h.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-3">
                            <div className="card overflow-hidden">
                                <div>
                                    <img src="images/inv-img.png" className="steps-img pb-3 justify-content-center pb-3" />
                                    <p className="main-pink pb-2 pt-2">Step 2</p>
                                    <h4 className="fs-18 mb-0">Invite</h4>
                                    <p className="text-white">Attempt to recruit one person to join SocialX everyday.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card overflow-hidden">
                                <div>
                                    <img src="images/collect-img.png"
                                        className="steps-img pb-3 justify-content-center pb-3" />
                                    <p className="main-pink pb-2 pt-2">Step 3</p>
                                    <h4 className="fs-18 mb-0">Collect</h4>
                                    <p className="text-white">Log your progress and claim your free SOSX Token reward.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mx-auto text-center">
                <div className="col-md-12 mx-auto">
                    <Link href="/socialmining-s1">
                        <a href="socialmining-s1.html">
                            <button className="btn w-25  btn-primary">Continue</button>
                        </a>
                    </Link>
                </div>
            </div>
            </div>
        </>
    );

}

