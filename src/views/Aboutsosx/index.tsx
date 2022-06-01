import { } from 'react'
import { useMediaPredicate } from "react-media-hook";
import { useTranslation } from 'contexts/Localization';
import Link from 'next/link';
import NavHeader from 'components/newHomeHeader';
import NewFooter from 'components/NewFooter';

export default function Aboutsosx() {

    const { t } = useTranslation();
    const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
	const biggest1400 = useMediaPredicate("(max-width: 1400px)");

  return (

    <div className={`${biggerThan1400 && "container"} pt-3 ${biggest1400 && "container-fluid"}`} >
  
     

{/* <!-- <NavHeader />   --> */}
    
        <section className="socialxmedia-about-sec">
    
                <div className="row text-center">
                    <div className="col-md-12">
                        <div className="aboutus-title">{t("ACTUAL PURPOSE OF SOSX - UTILITY CASE")}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3>{t("BECOMING THE WORLDS #1 MEDIA AGENCY")}</h3>
                        <p>{t("SocialX is taking a different approach to becoming the #1 AD space media agency in the world. We’re adding a little more fun to it by gamifying the whole process and rewarding individual’s with lots of money for helping us get to this goal!")}</p>
                    </div>
    
                    <div className="col-md-12">
                        <h4>{t("SOCIAL X WILL HAVE 4 MAIN UTILITY'S IT POWERS!")}</h4>
                    </div>
                    <div className="col-md-3 col-3">
                        <img src="images/mining-about-banner.png"
                            style={{boxShadow:' 1px 0px 0px #00dba1, 0 0 20px #00dba1, 0 0 5px #00dba1'}}/>
                    </div>
    
                    <div className="col-md-3 col-3">
                        <img src="images/oxgame-about-banner.png"
                            style={{boxShadow:' 1px 0px 0px #ff00ce, 0 0 20px #ff00cc, 0 0 5px #ff00cc'}}/>
                    </div>
    
                    <div className="col-md-3 col-3">
                        <img src="images/nft-about-banner.png"
                            style={{boxShadow:' 1px 0px 0px #f6ff00, 0 0 20px #f6ff00, 0 0 5px #f6ff00'}}/>
                    </div>
    
                    <div className="col-md-3 col-3">
                        <img src="images/adspace-about-banner.png"
                            style={{boxShadow:' 1px 0px 0px #0060ff, 0 0 20px #0060ff, 0 0 5px #0060ff'}}/>
                    </div>
    
    
                </div>
        </section>
    
    
    
        <section className="mining-about-sec">
                <div className="row">
                    <div className="col-md-12">
                        <h3>{t("SOCIAL MINING")}</h3>
                        <p>{t("Social mining is new concept that allows anyone in crypto or outside of crypto to earn SOSX tokens daily for posting on social media the daily SocialX posts. This system is designed to incentivize wide spread of any message we wanna market to our token holders social media audience, while allowing someone with no investment to start collecting tokens and participate in our other protocols.")}</p>
                        <Link href="/social-mining">
                        <a>
                            <button type="button" className="btn btn-primary btn-lg mt-4">{t("How Social Mining Works")}</button>
                        </a>
                        </Link>
                    </div>
                </div>
        </section>
    
    
        <section className="oxgame-about-sec">
                <div className="row">
                    <div className="col-md-12">
                        <h3>{"OX CHALLENGE GAMES"}</h3>
                        <p>{t("The game is simple… you the token holders get to create challenges/dares. Some of the bigger token holders get to choose out of the first batch what are the top 3 dares. Finally all the token holders can then choose which of the top 3 will be for the prize pool. Minimum daily prize pool starts at $1000 & goes up to $1 million + He who films himself first completing the chosen challenge of the day and uploads it to their social media and states (SocialX paid me) gets rewarded the full prize pool.")}</p>
                        <br/>
                        <p>{t("This is one of our fun methods of creating opportunity for others to make money while creating internment at the same time. The whole system is community driven through our DOA Governance system. This method of online entertainment only opens of the SocialX brand to more awareness. This awareness drives more traffic and creates higher value to the SOCIAL MINING ad space.")}</p>
                        <Link href="/ox">
                        <a>
                            <button type="button" className="btn btn-primary btn-lg mt-4 ">{t("View OX Game Rules")}</button>
                        </a>
                        </Link>
                    </div>
                </div>
        </section>
    
    
        <section className="nft-about-sec">
                <div className="row">
                    <div className="col-md-12">
                        <h3>SOSX NFT</h3>
                        <p>{t("Coming Soon")}...
                        </p>
                    </div>
                </div>
        </section>
    
    
        <section className="adspace-about-sec">
                <div className="row">
                    <div className="col-md-12">
                        <h3>{t("CORPORATE AD SPACE - NFT STAKING")}</h3>
                        <h5>{t("AD SPACE")}</h5>
                        <p>
                            {t("SocialX provides companies with ad space under social mining. If you want to have a post and message shared by our community please contact admins for details at")} <a href="mailto:support@socialx.io">support@socialx.io</a>
                        </p>
                        <br/>
                        <h5>{t("NFT STAKING")}</h5>
                        <p>
                            {t("SocialX provides NFT Projects staking solutions. A NFT project can offer their holders the ability to stake their NFT’s for SOSX tokens. We created a plug and play cross chain staking system that can be implemented with any project on any blockchain. For details please contact admins at")} <a href="mailto:support@socialx.io">support@socialx.io.</a>
                        </p>
                    </div>
                </div>
        </section>
    
    
    
        <section className="adspace-about-sec">
                <div className="row">
                    <div className="col-md-12">
                        <h3>{t("SOCIAL X - $10 BILLION TARGET")}</h3>
                        <p>{t("We calculated that at around a $10 billion market cap we would have reached a perfect amount of wallet holders and brand recognition to have a success launch of a whole new kind of social media experience. We are in development of fully decentralized and uncensored platform where individuals can share their daily content. We believe in freedom of speech and will go lengths to protect this. This is why we built something community driven, developed on smart contracts, on the blockchain. Time to take back our freedoms! Time to work together!")}
                        </p>
                    </div>
                </div>
        </section>
    
        <section className="prtnr-about-sec mobile-hide">
                <div className="row">
                    <div className="col-md-12">
                        <h3>{t("CURRENT PARTNERS")}</h3>
                    </div>
                    <div className="col-md-4">
                        <img src="images/acatoken.png"/>
                    </div>
    
                    <div className="col-md-4">
                        <img src="images/boredpuma.png"/>
                    </div>
                </div>
    
        </section>
    
    
        <section className="prtnr-about-sec mobile-show">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <h3>{t("CURRENT PARTNERS")}</h3>
                    </div>
                    <div className="col-xs-6">
                        <img src="images/acatoken.png"/>
                    </div>
    
                    <div className="col-xs-6">
                        <img src="images/boredpuma.png"/>
                    </div>
                </div>
        </section>
        <NewFooter />
    
    </div>
    )
}
