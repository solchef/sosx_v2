import { useEffect, useState } from 'react'
import Link from 'next/link';
import NavMining from '../NavMining';

const socialMedia = {
    twitter: {addres:'https://twitter',value:false},
     telegram: {addres:'https://t.me/SocialXToken',value:false},
   };
export default function SocialminingS1() {
    const [media,setMedia]=useState({...socialMedia})
    const [copySuccess, setCopySuccess] = useState('');

    const { twitter, telegram } = media;
    const toggleMenu = (event, type) => {
        event.stopPropagation();
    
        setMedia({
          ...socialMedia,
          [type]: {addres:socialMedia[type].addres , value:true}
        });
      };

    //   const valueCopy = socialMedia.map(function (value, label) {
         
    // });
    useEffect(()=>setMedia({
        ...socialMedia,
        twitter: {addres:socialMedia.twitter.addres , value:true}
      }),[])


    return (
        <>
           
           <NavMining/>

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
                                    className="fab fa-telegram pr-2"></i>
                                <span>Reward = 500 SOSX</span>
                            </div>
                            <p className="pt-3 text-white pb-3">CAPTION: <a onClick={(e) => toggleMenu(e, "twitter")} className={` btn btn-dark mr-2 ml-2 ${twitter.value ? "bg-success": ""}`} 
                                id="twitter-toggle" >Twitter</a> <a onClick={(e) => toggleMenu(e, "telegram")}
                                className={` btn btn-dark ${telegram.value ? "bg-success": ""}`}
                                    id="telegram-toggle">telegram</a>
                            </p>
                            <div className="postcaption" id="myCaption">
                                <p style={{display: twitter.value ? "": "none" }}>
                                    SOSX relaunching new SOSX Token next week 🚀<br /><br />
                                    Join twitter for updates: <br />
                                    {twitter.addres}
                                </p>

                                <p style={{ display: telegram.value ? "": "none" }}>
                                    SOSX relaunching new SOSX Token next week 🚀<br /><br />
                                    Join telegram for updates: <br />
                                    {telegram.addres}
                                   
                                </p>
                            </div>

                            <a href="images/post15.jpeg">
                                <button className="btn btn-success mr-2 mt-3">Save Image</button>
                            </a>
                            <a>
                                <button onClick={() => { navigator.clipboard.writeText(telegram.value?telegram.addres:twitter.value?twitter.addres:'')
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
