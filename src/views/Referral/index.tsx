import { useEffect, useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramIcon,
} from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useStakingContract } from "hooks/useContract";

import { useMediaPredicate } from "react-media-hook";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import fetch from "isomorphic-unfetch";
import ConnectWalletButton from "components/ConnectWalletButton";
import GameGuide from "./guide";



const tabs = [{ name: "list" }, { name: "mining" }, { name: "staking" }];
export default function Referral({ datasocial }) {
  const [resultsoc, setResultsoc] = useState(datasocial);
  const [socialData, setsocialData] = useState([]);
  const [tab, setTab] = useState(tabs[0]);
  const { account } = useActiveWeb3React();
  const contract = useStakingContract();
  const [referralCount, setReferralCount] = useState(0);
  const [viewReferralReward, setViewReferralReward] = useState(0);
  const [referrals, setReferrals] = useState([]);
  const [copied, setCopied] = useState(false);
  const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
  const biggest1400 = useMediaPredicate("(max-width: 1400px)");
  const toggleTab = (event, type) => {
    event.stopPropagation();
    tabs.map((tabb) => (tabb.name == type ? setTab(tabb) : ""));
  };

  useEffect(() => {
    fetchReferral();
    getaccountDetails();
  }, []);

  const getaccountDetails = async () => {
    if (account) {
      let post = {
        viewReferralReward,
        account,
        createdAt: new Date().toDateString,
      };
      // save the post
      let response = await fetch("/api/account", {
        method: "POST",
        body: JSON.stringify(post),
      });

      // get the data
      let data = await response.json();
    }
  };
  const fetchReferral = async () => {
    let countreferrals = await contract.getReferralCount();
    setReferralCount(Number(countreferrals));

    contract
      .getCurrentReferrals()
      .then((result) => {
        if (result.length == 0) {
          result = null;
        }
        let referralData = [];
        let total = 0;

        for (let i = 0; i < referralCount; i++) {
          contract.calculateRewardReferral(result[i]).then((reward) => {
            let data = {
              address: result[i],
              amount: Number(reward / 10 ** 18).toFixed(2),
            };
            total = +Number(reward / 10 ** 18).toFixed(2);
            referralData.push(data);

          });
        }

        setReferrals(referralData);
        setViewReferralReward(total);
      })
      .catch((err) => {
      });
  };


  let popover = (
    <Popover id="popover-success">
      <Popover.Body>
        <WhatsappShareButton
          url={`https://socialx.io?ref=${account}`}
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon size={32} round /> Whatsapp
        </WhatsappShareButton>

        <br />
        <br />

        <TelegramShareButton
          url={`https://socialx.io?ref=${account}`}
          className="Demo__some-network__share-button"
        >
          <TelegramIcon size={32} round /> Telegram
        </TelegramShareButton>

        <br />
        <br />

        <FacebookShareButton
          url={`https://socialx.io?ref=${account}`}
          quote={"Welcome to the social experiment"}
          hashtag={"#socialx"}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={32} round /> Facebook
        </FacebookShareButton>
        <br />
        <br />
        <TwitterShareButton
          title={"Welcome to the social experiment"}
          url={`https://socialx.io?ref=${account}`}
          hashtags={["socialx", "socialx"]}
        >
          <TwitterIcon size={32} round />
          Twitter
        </TwitterShareButton>
      </Popover.Body>
    </Popover>
  );

  const [show, setShow] = useState(false);
  const [displayLevel, setDisplayLevel] = useState(1);

  return (
    <div className="container-fluid d-flex flex-wrap flex-column flex-sm-row flex-direction-row-reverse" style={{ gap: '20px' }}>
      <div style={{ flex: '1 1 25%' }}>
        <div className="card h-100">
          <div className="card-body">
            <div className="flex-row d-flex justify-content-between w-100 ml-auto mr-0 align-items-center">
              <div>
                <div>

                  <h4>   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 297.334 297.334" style={{ width: '30px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }} xmlSpace="preserve">
                    <g>
                      <path d="M255.5,0h-213c-4.418,0-8.333,3.582-8.333,8v223c0,2.923,1.76,5.612,4.324,7.017l106.583,58.334   c1.196,0.655,2.561,0.983,3.884,0.983c1.323,0,2.667-0.328,3.864-0.983l106.344-58.334c2.564-1.404,4.001-4.094,4.001-7.017V8   C263.167,3.582,259.918,0,255.5,0z M247.167,226.261l-98.5,53.952l-98.5-53.952V16h197V226.261z">
                      </path>
                      <polygon points="215.167,209.092 215.167,171.5 148.751,206.5 82.167,171.5 82.167,209.001 148.75,245.334  ">
                      </polygon>
                      <polygon points="215.167,153.438 215.167,115.846 148.751,150.846 82.167,115.846 82.167,153.347 148.75,189.68  ">
                      </polygon>
                      <polygon points="122.753,115.683 149.499,96.263 176.247,115.723 166.032,84.33 192.778,65 159.718,65 149.499,33.557 139.282,65    106.222,65 132.968,84.336  ">
                      </polygon>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                  </svg>Total Friends

                  </h4>
                </div>
                <h2 className="main-pink"> {referralCount} </h2>


              </div>
              <div>
                <div>
                  <h4>   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 297.334 297.334" style={{ width: '30px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }} xmlSpace="preserve">
                    <g>
                      <path d="M255.5,0h-213c-4.418,0-8.333,3.582-8.333,8v223c0,2.923,1.76,5.612,4.324,7.017l106.583,58.334   c1.196,0.655,2.561,0.983,3.884,0.983c1.323,0,2.667-0.328,3.864-0.983l106.344-58.334c2.564-1.404,4.001-4.094,4.001-7.017V8   C263.167,3.582,259.918,0,255.5,0z M247.167,226.261l-98.5,53.952l-98.5-53.952V16h197V226.261z">
                      </path>
                      <polygon points="215.167,209.092 215.167,171.5 148.751,206.5 82.167,171.5 82.167,209.001 148.75,245.334  ">
                      </polygon>
                      <polygon points="215.167,153.438 215.167,115.846 148.751,150.846 82.167,115.846 82.167,153.347 148.75,189.68  ">
                      </polygon>
                      <polygon points="122.753,115.683 149.499,96.263 176.247,115.723 166.032,84.33 192.778,65 159.718,65 149.499,33.557 139.282,65    106.222,65 132.968,84.336  ">
                      </polygon>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                  </svg>Total Earned
                  </h4>
                </div>
                <h2 className="main-pink"> {viewReferralReward}</h2>


              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: '1 1 25%' }}>
        <div className="card h-100">
          <div className="card-body">
            <div className="flex-row d-flex justify-content-between w-100 ml-auto mr-0 align-items-center">
              <div>
                <div>
                  <h4>   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 297.334 297.334" style={{ width: '30px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }} xmlSpace="preserve">
                    <g>
                      <path d="M255.5,0h-213c-4.418,0-8.333,3.582-8.333,8v223c0,2.923,1.76,5.612,4.324,7.017l106.583,58.334   c1.196,0.655,2.561,0.983,3.884,0.983c1.323,0,2.667-0.328,3.864-0.983l106.344-58.334c2.564-1.404,4.001-4.094,4.001-7.017V8   C263.167,3.582,259.918,0,255.5,0z M247.167,226.261l-98.5,53.952l-98.5-53.952V16h197V226.261z">
                      </path>
                      <polygon points="215.167,209.092 215.167,171.5 148.751,206.5 82.167,171.5 82.167,209.001 148.75,245.334  ">
                      </polygon>
                      <polygon points="215.167,153.438 215.167,115.846 148.751,150.846 82.167,115.846 82.167,153.347 148.75,189.68  ">
                      </polygon>
                      <polygon points="122.753,115.683 149.499,96.263 176.247,115.723 166.032,84.33 192.778,65 159.718,65 149.499,33.557 139.282,65    106.222,65 132.968,84.336  ">
                      </polygon>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                  </svg>Mining Friends
                  </h4>
                </div>
                <h2 className="main-pink">0</h2>
              </div>
              <div>
                <div>
                  <h4>   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 297.334 297.334" style={{ width: '30px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }} xmlSpace="preserve">
                    <g>
                      <path d="M255.5,0h-213c-4.418,0-8.333,3.582-8.333,8v223c0,2.923,1.76,5.612,4.324,7.017l106.583,58.334   c1.196,0.655,2.561,0.983,3.884,0.983c1.323,0,2.667-0.328,3.864-0.983l106.344-58.334c2.564-1.404,4.001-4.094,4.001-7.017V8   C263.167,3.582,259.918,0,255.5,0z M247.167,226.261l-98.5,53.952l-98.5-53.952V16h197V226.261z">
                      </path>
                      <polygon points="215.167,209.092 215.167,171.5 148.751,206.5 82.167,171.5 82.167,209.001 148.75,245.334  ">
                      </polygon>
                      <polygon points="215.167,153.438 215.167,115.846 148.751,150.846 82.167,115.846 82.167,153.347 148.75,189.68  ">
                      </polygon>
                      <polygon points="122.753,115.683 149.499,96.263 176.247,115.723 166.032,84.33 192.778,65 159.718,65 149.499,33.557 139.282,65    106.222,65 132.968,84.336  ">
                      </polygon>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                  </svg>Mining Earned
                  </h4>
                </div>
                <h2 className="main-pink">0</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: '1 1 25%' }}>
        <div className="card h-100">
          <div className="card-body">
            <div className="flex-row d-flex justify-content-between w-100 ml-auto mr-0 align-items-center">
              <div>
                <div>
                  <h4>   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 297.334 297.334" style={{ width: '30px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }} xmlSpace="preserve">
                    <g>
                      <path d="M255.5,0h-213c-4.418,0-8.333,3.582-8.333,8v223c0,2.923,1.76,5.612,4.324,7.017l106.583,58.334   c1.196,0.655,2.561,0.983,3.884,0.983c1.323,0,2.667-0.328,3.864-0.983l106.344-58.334c2.564-1.404,4.001-4.094,4.001-7.017V8   C263.167,3.582,259.918,0,255.5,0z M247.167,226.261l-98.5,53.952l-98.5-53.952V16h197V226.261z">
                      </path>
                      <polygon points="215.167,209.092 215.167,171.5 148.751,206.5 82.167,171.5 82.167,209.001 148.75,245.334  ">
                      </polygon>
                      <polygon points="215.167,153.438 215.167,115.846 148.751,150.846 82.167,115.846 82.167,153.347 148.75,189.68  ">
                      </polygon>
                      <polygon points="122.753,115.683 149.499,96.263 176.247,115.723 166.032,84.33 192.778,65 159.718,65 149.499,33.557 139.282,65    106.222,65 132.968,84.336  ">
                      </polygon>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                  </svg>Staking Friends
                  </h4>
                </div>

                <h2 className="main-pink"> {referralCount}</h2>

              </div>
              <div>
                <div>
                  <h4>   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 297.334 297.334" style={{ width: '30px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }} xmlSpace="preserve">
                    <g>
                      <path d="M255.5,0h-213c-4.418,0-8.333,3.582-8.333,8v223c0,2.923,1.76,5.612,4.324,7.017l106.583,58.334   c1.196,0.655,2.561,0.983,3.884,0.983c1.323,0,2.667-0.328,3.864-0.983l106.344-58.334c2.564-1.404,4.001-4.094,4.001-7.017V8   C263.167,3.582,259.918,0,255.5,0z M247.167,226.261l-98.5,53.952l-98.5-53.952V16h197V226.261z">
                      </path>
                      <polygon points="215.167,209.092 215.167,171.5 148.751,206.5 82.167,171.5 82.167,209.001 148.75,245.334  ">
                      </polygon>
                      <polygon points="215.167,153.438 215.167,115.846 148.751,150.846 82.167,115.846 82.167,153.347 148.75,189.68  ">
                      </polygon>
                      <polygon points="122.753,115.683 149.499,96.263 176.247,115.723 166.032,84.33 192.778,65 159.718,65 149.499,33.557 139.282,65    106.222,65 132.968,84.336  ">
                      </polygon>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                  </svg>Staking Earned
                  </h4>
                </div>
                <h2 className="main-pink">{viewReferralReward}</h2>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: '1 1 25%' }}>
        <div className="card d-flex flex-column">
          <div className="card-body mb-3">
            <div className="d-flex align-items-center mb-2"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 239 116" xmlSpace="preserve" style={{ width: '40px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }}>
              <path d="M58,0C25.97,0,0,25.97,0,58c0,32.03,25.97,58,58,58s58-25.97,58-58C116,25.97,90.03,0,58,0z M58,90.78 c-18.11,0-32.78-14.68-32.78-32.78c0-18.11,14.68-32.78,32.78-32.78S90.78,39.89,90.78,58C90.78,76.11,76.11,90.78,58,90.78z">
              </path>
              <g>
                <path className="st0" d="M151.87,48.3l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C165.69,53.57,157.14,53.57,151.87,48.3z">
                </path>
                <path className="st0" d="M215.27,112.05l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C229.09,117.32,220.55,117.32,215.27,112.05z">
                </path>
                <path className="st0" d="M126.64,92.96l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09l-25.23,25.23 c-5.27,5.27-13.82,5.27-19.09,0l0,0C121.37,106.77,121.37,98.23,126.64,92.96z">
                </path>
                <path className="st0" d="M190.73,29.21l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09L209.82,48.3 c-5.27,5.27-13.82,5.27-19.09,0l0,0C185.46,43.03,185.46,34.48,190.73,29.21z">
                </path>
              </g>
            </svg>
              <h4>My Referral Link</h4>
            </div>
            <p className="mb-4">My Referral Link</p>
            <div className="bg-input mb-3 py-2 px-3 rounded mt-4">
              <div className="d-flex justify-content-between align-items-center">
                {account != null ? (
                  <>
                  <h5 className="font-weight-bold text-nowrap pt-3 pb-3 " style={{ color: 'rgb(142, 142, 142)' }}>
                    https://socialx.io?ref={account.replace(/(.{13})..+/, "$1…")}
                  </h5>
  {copied ? (
    <span style={{ color: "red" }}>Copied.</span>
  ) : null}</>

                ) : (
                  <h5 className="font-weight-bold pt-3 pb-3 " style={{ color: 'rgb(142, 142, 142)' }}>** Connect to Refer **</h5>)}

              </div>
            </div>
            {account ? (
              <>
              
         
              <div className="d-flex justify-content-end">
              <CopyToClipboard
                  text={`https://socialx.io?ref=${account}`}
                  onCopy={() => setCopied(true)}
                >
                  <button className="btn btn-primary mr-2">Copy</button>
                </CopyToClipboard>
              
                <OverlayTrigger
                  show={show}
                  trigger="click"
                  placement="right"
                  overlay={popover}
                >
                  <button onClick={() => setShow(!show)} className="btn btn-primary mr-2">Share</button>


                </OverlayTrigger>
               
           </div>
           </>
            ) : (
              <div className="d-flex justify-content-end">
                <ConnectWalletButton className="btn mr-1 btn-primary mt-2">copy</ConnectWalletButton>
                <ConnectWalletButton className="btn mr-1 btn-primary mt-2">share</ConnectWalletButton>
                </div>

            )}

          </div>
          <div
            className="card-body"
            style={{ borderTop: "1px solid #1e2124", paddingTop: "20px" }}
          >
            <div className="d-flex align-items-center mt-">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{
                  //@ts-ignore
                  enableBackground: "new 0 0 512 512",
                  width: "22px",
                  fill: "rgb(255, 0, 204)",
                  marginRight: "10px",
                }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path d="M20.898,0v512h470.204V0H20.898z M459.755,480.653H52.245V31.347h407.51V480.653z"></path>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M83.592,62.694v135.837h344.816V62.694H83.592z M397.061,167.184H114.939V94.041h282.122V167.184z"></path>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M83.592,229.878v94.041h94.041v-94.041H83.592z M146.286,292.571h-31.347v-31.347h31.347V292.571z"></path>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M208.98,229.878v94.041h94.041v-94.041H208.98z M271.673,292.571h-31.347v-31.347h31.347V292.571z"></path>
                  </g>
                </g>
                <g>
                  <g>
                    <rect
                      x="334.367"
                      y="229.878"
                      width="94.041"
                      height="31.347"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M83.592,355.265v94.041h94.041v-94.041H83.592z M146.286,417.959h-31.347v-31.347h31.347V417.959z"></path>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M208.98,355.265v94.041h94.041v-94.041H208.98z M271.673,417.959h-31.347v-31.347h31.347V417.959z"></path>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M334.367,292.571v156.735h94.041V292.571H334.367z M397.061,417.959h-31.347v-94.041h31.347V417.959z"></path>
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>

              <h4>You will get</h4>
            </div>
            <p>You will get</p>
            <div className="font-weight-bold align-items-center d-flex justify-content-between ">
              <div className="d-flex flex-column align-items-center">
                <h4 className=" font-weight-bold">You will get</h4>
                <h2 className="main-pink">35%</h2>
              </div>
              <h4><i className="fa-solid main-pink fa-angles-right"></i></h4>
              <div>
                <p className="text-muted">Social Mining</p>
                <h4 style={{ fontFamily: 'digital-7' }} className="main-pink"> 25%</h4>
              </div>
              <div>
                <p className="text-muted">Staking</p>
                <h4 style={{ fontFamily: 'digital-7' }} className="main-pink"> 10%</h4>

              </div>
            </div>

          </div>
        </div>
      </div>
      <div style={{ flex: '1 1 25%' }}>
        <div className="card d-flex flex-column">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <img src="images/prize-pool-icon.png" className="title-icon" />
              <h4 className="text-nowrap">Social Mining Referral</h4>
            </div>
            <p>Social Mining Referral</p>
            <div className=" mt-4 ">
              <div className="d-flex h-100 justify-content-between mt-3">
                <div>
                  {account ? (
                    <>
                      <div className="d-flex w-auto m-auto">
                        <h3> {viewReferralReward} SOSX</h3>
                      </div>
                      <button
                        className="btn mr-1 btn-primary btn-lg mt-2"
                        type="button"

                      >
                        Withdraw
                      </button>
                    </>

                  ) : (
                    <>
                      <div className="d-flex w-auto m-auto">
                        <h3>&nbsp; </h3>
                      </div>

                      <ConnectWalletButton

                        className="btn mr-1 btn-primary btn-lg mt-2"

                      />
                    </>

                  )}



                </div>
                <div className="d-flex justify-content-between">
                  <img
                    src="images/swapcoin-referral.svg"
                    className="pb-2 pl-2 pr-2 pt-1 referral-rewards"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card d-flex flex-column mt-3">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <img src="images/prize-pool-icon.png" className="title-icon" />
              <h4>Staking Referral</h4>
            </div>
            <p>Staking Referral</p>
            <div className=" mt-4 ">
              <div className="d-flex h-100 justify-content-between mt-3">
                <div>
                  {account ? (
                    <>
                      <div className="d-flex w-auto m-auto">
                        <h3>   {viewReferralReward} SOSX</h3>
                      </div>
                      <button
                        className="btn mr-1 btn-primary btn-lg mt-2"
                        type="button"

                      >
                        Withdraw
                      </button>
                    </>

                  ) : (
                    <>
                      <div className="d-flex w-auto m-auto">
                        <h3> &nbsp;</h3>
                      </div>

                      <ConnectWalletButton

                        className="btn mr-1 btn-primary btn-lg mt-2"

                      />
                    </>

                  )}



                </div>
                <div className="d-flex justify-content-between">
                  <img
                    src="images/swapcoin-referral.svg"
                    className="pb-2 pl-2 pr-2 pt-1 referral-rewards"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: '1 1 40%' }}>
        <div className="card h-100">
          <div className="card-body mb-3">
            <div className="d-flex align-items-center mb-2"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 239 116" xmlSpace="preserve" style={{ width: '40px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }}>
              <path d="M58,0C25.97,0,0,25.97,0,58c0,32.03,25.97,58,58,58s58-25.97,58-58C116,25.97,90.03,0,58,0z M58,90.78 c-18.11,0-32.78-14.68-32.78-32.78c0-18.11,14.68-32.78,32.78-32.78S90.78,39.89,90.78,58C90.78,76.11,76.11,90.78,58,90.78z">
              </path>
              <g>
                <path className="st0" d="M151.87,48.3l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C165.69,53.57,157.14,53.57,151.87,48.3z">
                </path>
                <path className="st0" d="M215.27,112.05l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C229.09,117.32,220.55,117.32,215.27,112.05z">
                </path>
                <path className="st0" d="M126.64,92.96l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09l-25.23,25.23 c-5.27,5.27-13.82,5.27-19.09,0l0,0C121.37,106.77,121.37,98.23,126.64,92.96z">
                </path>
                <path className="st0" d="M190.73,29.21l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09L209.82,48.3 c-5.27,5.27-13.82,5.27-19.09,0l0,0C185.46,43.03,185.46,34.48,190.73,29.21z">
                </path>
              </g>
            </svg>
              <h4>Referral List</h4>
            </div>
            <p className="mb-4">All your referral friends in one place.</p>


            <div
              className="d-flex justify-content-left mt-4"
              style={{ justifyContent: "start" }}
            >
              <button style={{
                borderRadius: '10px 10px 0 0',
                marginRight: '2px'
              }}
                type="submit"
                onClick={() => setDisplayLevel(1)}
                className={`font-weight-bold btn  text-nowrap ${displayLevel === 1 ? " btn-primary" : ""
                  }`}
              >
                {" "}
                Level 1
              </button>
              <button style={{
                borderRadius: '10px 10px 0 0',
                marginRight: '2px'
              }}
                type="submit"
                onClick={() => setDisplayLevel(2)}
                className={`font-weight-bold btn  text-nowrap ${displayLevel === 2 ? " btn-primary" : ""
                  }`}
              >
                {" "}
                Level 2
              </button>
              <button style={{
                borderRadius: '10px 10px 0 0',
                marginRight: '2px'
              }}
                type="submit"
                onClick={() => setDisplayLevel(3)}
                className={`font-weight-bold btn  text-nowrap  ${displayLevel === 3 ? " btn-primary" : ""
                  }`}
              >
                {" "}
                Level 3
              </button>
            </div>

            <div className="tab-bg">

              <table style={{ maxWidth: '100%' }} className="ranking-header fs-12 p-4 mt-0 table">

                <tr className="jsx-e5e2ca7965fa437a">
                  <th className="fs-16 font-weight-normal">Wallet Address</th>
                  <th className="fs-16 font-weight-normal text-center">Staking Rewards</th>
                  <th className="fs-16 font-weight-normal">Total Earned</th>
                </tr>

                <tbody>
                  {referrals.length > 0 ? (
                    referrals.map((ref) => (

                      <tr className="" style={{ borderColor: 'rgb(30, 33, 36)' }}>
                        <td className="text-white">{ref.address.replace(/(.{13})..+/, "$1…")}</td>
                        <td className="text-white">{ref.amount}</td>
                        <td className="text-white">{ref.amount}</td>
                      </tr>
                    ))
                  ) : (
                    <tr className=" mt-4">
                      <td colSpan={3} className="text-white fs-12" style={{ border: 'none' }} >
                        Data not available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <style jsx>{`
       tbody tr:last-child td{
        border-bottom: none;
      }
      `}</style>
            </div>

            {/* <div>
              <div className="tabs">
                <div className="tab">
                  {tab.name == "list" ? (
                    <input
                      type="radio"
                      name="css-tabs"
                      checked
                      id="tab-1"
                      className="tab-switch"
                    />
                  ) : (
                    ""
                  )}
                  <label
                    onClick={(e) => toggleTab(e, "list")}
                    htmlFor="tab-1"
                    className="tab-label"
                  >
                    Referral List
                  </label>

                  <div className="tab-content">
                  
                    <hr />


                    <table className=" fs-12 p-4 mt-0 table " style={{ maxWidth: '100%' }}>
                      <tbody className="ranking-header">
                        <tr >
                          <th >Wallet Address</th>
                          <th className="text-left">Mining Rewards</th>
                          <th >Staking Rewards</th>
                          <th >Total Earned</th>
                        </tr>
                      </tbody>
                      <tbody >









                        {referrals.length > 0 ? (
                          referrals.map((ref) => (



                            <tr className="" style={{ borderColor: 'rgb(30, 33, 36)' }}>
                              <td className="text-white">     {ref.address.replace(/(.{13})..+/, "$1…")}</td>
                              <td className="text-white">0</td>
                              <td className="text-white">{ref.amount}</td>
                              <td className="text-white">{ref.amount}</td>
                            </tr>



                          ))
                        ) : (
                          <tr className=" mt-4">
                            <td colSpan={4} className="text-white fs-12" style={{ border: 'none' }} >
                              Data not available
                            </td>
                          </tr>
                        )}

                      </tbody>
                    </table>
                  </div>

                </div>
                <div className="tab">
                  {tab.name == "mining" ? (
                    <input
                      type="radio"
                      name="css-tabs"
                      checked
                      id="tab-2"
                      className="tab-switch"
                    />
                  ) : (
                    ""
                  )}
                  <label
                    onClick={(e) => toggleTab(e, "mining")}
                    htmlFor="tab-2"
                    className="tab-label"
                  >
                    Social Mining
                  </label>
                  <div className="tab-content">
                    
                    <hr />




                    <table className=" fs-12 p-4 mt-0 table " style={{ maxWidth: '100%' }}>
                      <tbody className="ranking-header">
                        <tr >
                          <th >Wallet Address</th>
                          <th className="text-left">Mining Rewards</th>
                          <th >Staking Rewards</th>
                          <th >Total Earned</th>
                        </tr>
                      </tbody>
                      <tbody >





                        {socialData.length > 0 ? (
                          resultsoc.map((ref) => (

                            <tr className="" style={{ borderColor: 'rgb(30, 33, 36)' }}>
                              <td className="text-white">  {ref.gotrefered.replace(/(.{13})..+/, "$1…")}</td>
                              <td className="text-white">0</td>
                              <td className="text-white">0</td>
                              <td className="text-white">0</td>
                            </tr>
                          ))
                        ) : (
                          <tr className=" mt-4">
                            <td colSpan={4} className="text-white fs-12" style={{ border: 'none' }} >
                              Data not available
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>

                  </div>
                </div>
                <div className="tab">
                  {tab.name == "staking" ? (
                    <input
                      type="radio"
                      name="css-tabs"
                      checked
                      id="tab-3"
                      className="tab-switch"
                    />
                  ) : (
                    ""
                  )}
                  <label
                    onClick={(e) => toggleTab(e, "staking")}
                    htmlFor="tab-3"
                    className="tab-label"
                  >
                    Staking
                  </label>
                  <div className="tab-content">
                
                    <hr />

                    <table className=" fs-12 p-4 mt-0 table " style={{ maxWidth: '100%' }}>
                      <tbody className="ranking-header">
                        <tr >
                          <th >Wallet Address</th>
                          <th >Staking Rewards</th>
                          <th >Total Earned</th>
                        </tr>
                      </tbody>
                      <tbody >


                        {referrals.length > 0 ? (
                          referrals.map((ref) => (

                            <tr className="" style={{ borderColor: 'rgb(30, 33, 36)' }}>
                              <td className="text-white">{ref.address.replace(/(.{13})..+/, "$1…")}</td>
                              <td className="text-white">{ref.amount}</td>
                              <td className="text-white">{ref.amount}</td>
                            </tr>
                          ))
                        ) : (
                          <tr className=" mt-4">
                            <td colSpan={3} className="text-white fs-12" style={{ border: 'none' }} >
                              Data not available
                            </td>
                          </tr>
                        )}

                      </tbody>
                    </table>

                  </div>
                </div>
              </div>
            </div> */}


          </div>
        </div>
      </div>
    <GameGuide />

    </div>
  );
}
export async function getServerSideProps(ctx) {
  // request posts from api
  let response = await fetch(`https://testbed.socialx.io/api/social_mining`);
  // extract the data
  let data = await response.json();

  return {
    props: {
      datasocial: data["message"],
    },
  };
}
