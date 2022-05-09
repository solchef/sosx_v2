import { useEffect, useState } from 'react'
import Link from 'next/link';
import NavMining from '../NavMining';

const socialMedias = [
    { name: 'twitter', addres: 'https://twitter', reward: '500' },
    { name: 'instagram', addres: 'https://instagram', reward: '200' },
    { name: 'tiktok', addres: 'https://tiktok', reward: '600' }
];

export default function SocialminingS1() {
    const [media, setMedia] = useState(socialMedias[0])
    const [copySuccess, setCopySuccess] = useState('');

    const toggleMenu = (event, type) => {
        event.stopPropagation();
        socialMedias.map(socialMedia => socialMedia.name==type ? setMedia(socialMedia) :'');
     
    };

    return (
        <>

            <NavMining />

            <div className="container-fluid mt-3">

                <div className="card">
                    <div className="row">
                        <div className="col-lg-5 col-12">
                            <div className="postimg m-3">
                                <img className="img-soc" src="images/post18.jpeg" />
                            </div>
                        </div>




                        <div className="col-lg-7 pl-3 pt-3">
                            <h3 className="pr-3 pb-3">Post image &amp; caption on to your social media.</h3>
                            <div className="reward-box mr-3">
                                <i className="fab fa-facebook-f pr-2"></i><i className="fab fa-twitter pr-1"></i> <i
                                    className="fab fa-tiktok pr-2"></i>
                                <span>Reward = {media.reward} SOSX</span>
                            </div>
                            <p className="pt-3 text-white pb-3">CAPTION:

                                <a onClick={(e) => toggleMenu(e, "twitter")} className={` btn btn-dark mr-2 ml-2 ${media.name== "twitter" ? "bg-success" : ""}`}
                                    id="twitter-toggle" >Twitter</a>

                                <a onClick={(e) => toggleMenu(e, "instagram")}
                                    className={` mr-2 ml-2 btn btn-dark ${media.name== "instagram"? "bg-success" : ""}`}
                                    id="instagram-toggle">instagram</a>

                                <a onClick={(e) => toggleMenu(e, "tiktok")}
                                    className={` mr-2 ml-2 btn btn-dark ${media.name== "tiktok"? "bg-success" : ""}`}
                                    id="tiktok-toggle">tiktok</a>

                            </p>
                            <div className="postcaption" id="myCaption">
                                <p style={{ display: media.name== "twitter"? "" : "none" }}>
                                    SOSX relaunching new SOSX Token next week 🚀<br /><br />
                                    Join twitter for updates: <br />
                                    {media.addres}
                                </p>

                                <p style={{ display: media.name== "instagram"? "" : "none" }}>
                                    SOSX relaunching new SOSX Token next week 🚀<br /><br />
                                    Join instagram for updates: <br />
                                    {media.addres}

                                </p>

                                <p style={{  display: media.name== "tiktok"? "" : "none" }}>
                                    SOSX relaunching new SOSX Token next week 🚀<br /><br />
                                    Join tiktok for updates: <br />
                                    {media.addres}

                                </p>

                            </div>

                            <a href="images/post15.jpeg">
                                <button className="btn btn-success mr-2 mt-3">Save Image</button>
                            </a>
                            <a>
                                <button onClick={() => {
                                    navigator.clipboard.writeText(media.addres)
                                    setCopySuccess('Copied!')

                                }} className="btn btn-dark mr-3 mt-3">Copy Caption</button>  <span className="text-success"> {copySuccess}</span>
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
