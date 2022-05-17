import { useEffect, useState, createContext } from "react";
import { Link as reactLink } from "react-router-dom";
import Link from "next/link";
import NavMining from "../NavMining";
import { useMediaPredicate } from "react-media-hook";
import SocialminingS3 from "../SocialminingS3";

const socialMedias = [
  { name: "twitter", addres: "https://twitter.com", reward: "500" },
  { name: "instagram", addres: "https://instagram.com", reward: "500" },
  { name: "tiktok", addres: "https://tiktok.com", reward: "1000" },
];

export default function SocialminingS1() {
  const [media, setMedia] = useState(socialMedias[0]);
  const [copySuccess, setCopySuccess] = useState("");
  const [reward, setReward] = useState("");
  const toggleMenu = (event, type) => {
    setReward(type);
    event.stopPropagation();
    socialMedias.map((socialMedia) =>
      socialMedia.name == type ? setMedia(socialMedia) : ""
    );
    setCopySuccess("");
  };

  const wImg576 = useMediaPredicate("(min-width:  576px)");
  const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
  const biggest1400 = useMediaPredicate("(max-width: 1400px)");

  console.log(reward);
  localStorage.setItem("reward", media.reward);
  return (
    <div
      className={`${biggerThan1400 && "container"} pt-3 ${
        biggest1400 && "container-fluid"
      }`}
    >
      <NavMining />

      <div className="container-fluid mt-3 pb-0">
        <div className="card">
          <div className="row align-items-center">
            <div className="col-xl-5 mx-auto align-items-center col-12">
              {media.name == "tiktok" ? 
                <video width="400" height={400}  controls>
                  <source src="posts/xgame.mp4" type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
               : 
                <img
                  className={`${wImg576 && "img-soc"} rounded w-auto p-0`}
                  src={`${
                    media.name == "tiktok"
                      ? "twitter"
                      : media.name == "twitter"
                      ? "images/post19.jpeg"
                      : "images/post19.jpeg"
                  }`}
                />
              }
            </div>

            <div className="col-xl-7 pl-3 pt-3">
              <h3 className="pr-3 pb-3">
                Post image &amp; caption on to your social media.
              </h3>
              <div className="reward-box mr-3">
                <i className="fab fa-facebook-f pr-2"></i>
                <i className="fab fa-twitter pr-1"></i>{" "}
                <i className="fab fa-tiktok pr-2"></i>
                <span>Reward = {media.reward} SOSX</span>
              </div>

              <p className="pt-3 pl-1 text-white pb-3">
                CAPTION:
                <div className="pt-2 pl-2 row">
                  <a
                    onClick={(e) => toggleMenu(e, "twitter")}
                    className={` btn btn-dark mr-2 ml-2 ${
                      media.name == "twitter" ? "bg-success" : ""
                    }`}
                    id="twitter-toggle"
                  >
                    Twitter
                  </a>

                  <a
                    onClick={(e) => toggleMenu(e, "instagram")}
                    className={` mr-2 ml-2 btn btn-dark ${
                      media.name == "instagram" ? "bg-success" : ""
                    }`}
                    id="instagram-toggle"
                  >
                    Instagram
                  </a>

                  <a
                    onClick={(e) => toggleMenu(e, "tiktok")}
                    className={` mr-2 ml-2 btn btn-dark ${
                      media.name == "tiktok" ? "bg-success" : ""
                    }`}
                    id="tiktok-toggle"
                  >
                    Tiktok
                  </a>
                </div>
              </p>

              <div className="postcaption" id="myCaption">
                <p style={{ display: media.name == "twitter" ? "" : "none" }}>
                  SOSX relaunching new SOSX Token next week 🚀
                  <br />
                  <br />
                  Join twitter for updates: <br />
                  <a href="socialx.io">www.socialx.io</a>{" "}
                  <a href="https://twitter.com/socialx_io?s=20&t=BAk0mefbJABXHT-ig2ycQg">
                    @socialx_io
                  </a>{" "}
                  <br />
                  {media.addres}
                </p>

                <p style={{ display: media.name == "instagram" ? "" : "none" }}>
                  SOCIAL X JUST LAUNCHED OX GAMES!! <br />
                  Create a challenge & watch someone record themselves for the
                  48 hour money prize pool 🤑💰 <br />
                  Earn daily crypto for sharing 💵 <br />
                  <a href="socialx.io">www.socialx.io</a>{" "}
                  <a href="https://t.me/SocialXToken">@socialxtoken</a> <br />
                  <br />
                  {media.addres}
                </p>

                <p style={{ display: media.name == "tiktok" ? "" : "none" }}>
                  SOCIAL X JUST LAUNCHED OX GAMES!! <br />
                  Create a challenge & watch someone record themselves for the
                  48 hour money prize pool 🤑💰 <br />
                  Earn daily crypto for sharing 💵 <br />
                  <a href="socialx.io">www.socialx.io</a>{" "}
                  <a href="https://www.tiktok.com/@socialxtoken">$SOSX</a>{" "}
                  <br />
                  <br />
                  {media.addres}
                </p>
              </div>

              <a
                href={`${
                  media.name == "twitter" ? "post19.jpeg" : "post19.jpeg"
                }`}
                download
              >
                <button className="btn btn-success mr-2 mt-3">
                  Save Image
                </button>
              </a>

              <a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `SOSX relaunching new SOSX Token next week 🚀 . Join ${media.name} for updates: ${media.addres}`
                    );
                    setCopySuccess("Copied!");
                  }}
                  className="btn btn-dark mr-3 mt-3"
                >
                  Copy Caption
                </button>{" "}
                <span className="text-success"> {copySuccess}</span>
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
                <button className="btn btn-outline-primary mr-2 mb-3">
                  Back
                </button>
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
    </div>
  );
}
