import { } from 'react';
import Link from 'next/link';
import NavMining from '../NavMining';

export default function SocialminingS1() {

    return (
        <>
           
           <NavMining/>

            <div className="container-fluid pt-3">

                <div className="card p-3">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="postimg m-3">
                                <img src="images/post15.jpeg" />
                            </div>
                        </div>




                        <div className="col-lg-6 pl-3 pt-3">
                            <h3 className="pr-3 pb-3">Post image &amp; caption on to your social media.</h3>
                            <div className="reward-box mr-3">
                                <i className="fab fa-facebook-f pr-2"></i><i className="fab fa-twitter pr-1"></i> <i
                                    className="fab fa-instagram pr-2"></i>
                                <span>Reward = 500 SOSX</span>
                            </div>
                            <p className="pt-3 text-white pb-3">CAPTION: <a className="btn btn-dark mr-2 ml-2"
                                id="twitter-toggle" >Twitter</a> <a
                                    className="btn btn-dark"
                                    id="instagram-toggle">Instagram</a>
                            </p>
                            <div className="postcaption" id="myCaption">
                                <p id="twitter">
                                    SOSX relaunching new SOSX Token next week 🚀<br /><br />
                                    Join telegram for updates: <br />
                                    https://t.me/SocialXToken
                                </p>

                                <p id="instagram" style={{ display: 'none' }}>
                                    SOSX relaunching new SOSX Token next week 🚀<br /><br />
                                    Join telegram for updates: <br />
                                    https://t.me/SocialXToken
                                </p>
                            </div>

                            <a href="images/post15.jpeg">
                                <button className="btn btn-success mr-2 mt-3">Save Image</button>
                            </a>
                            <a>
                                <button className="btn btn-dark mr-3 mt-3">Copy Caption</button>
                            </a>
                        </div>





                    </div>
                </div>
            </div>




            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-md-12">
                        <Link href="/x-mining">
                            <a>
                                <button className="btn btn-outline-primary mr-2 mb-3">Back</button>
                            </a>
                        </Link>
                        <Link href="/socialmining-s2">
                            <a>
                                <button className="btn btn-primary mr-3 mb-3">Continue</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
