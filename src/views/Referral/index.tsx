import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import useToast from "hooks/useToast";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  EmailShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramIcon,
} from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import { Popover, OverlayTrigger, Modal } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useStakingContract } from "hooks/useContract";

import { useCallWithGasPrice } from "hooks/useCallWithGasPrice";
import { useMediaPredicate } from "react-media-hook";
import BigNumber from "big-number";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import fetch from "isomorphic-unfetch";
import ConnectWalletButton from "components/ConnectWalletButton";

const BorderCard = styled.div`
  border: solid 1px ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  padding: 16px;
`;

const tabs = [{ name: "list" }, { name: "mining" }, { name: "staking" }];
export default function Referral({ datasocial }) {
  const [resultsoc, setResultsoc] = useState(datasocial);
  const [socialData, setsocialData] = useState([]);
  const [tab, setTab] = useState(tabs[0]);
  const { account } = useActiveWeb3React();
  const [userAccount, setUserAccount] = useState("");
  const contract = useStakingContract();
  const [referralCount, setReferralCount] = useState(0);
  const [viewReferralReward, setViewReferralReward] = useState(0);
  const [referrals, setReferrals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { callWithGasPrice } = useCallWithGasPrice();
  const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
  const biggest1400 = useMediaPredicate("(max-width: 1400px)");
  const [key, setKey] = useState("chart");
  var results = [];
  // const account = "dd"
  const toggleTab = (event, type) => {
    event.stopPropagation();
    tabs.map((tabb) => (tabb.name == type ? setTab(tabb) : ""));
  };
  // console.log(resultsoc);
  // console.log(account);

  useEffect(() => {
    // console.log("hello")
    fetchReferral();
    getaccountDetails();
    getDataSocialMining();
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
      console.log(data);
    }
  };
  const getDataSocialMining = async () => {
    // const res = await fetch("/api/social_mining?referedby=" + account);
    // const json = await res.json();
    // setResultsoc(json.message);
    // setsocialData(json.message);
    // results.push(json.message);
    // console.log("results",results);
    // console.log("data is:",json.message)
    // console.log("data2 is:",socialData)
    // console.log("resultsoc",resultsoc);
  };
  const fetchReferral = async () => {
    let countreferrals = await contract.getReferralCount();

    // console.log(referralCount);
    // this.setState({referralCount:countreferrals})
    setReferralCount(Number(countreferrals));

    contract
      .getCurrentReferrals()
      .then((result) => {
        // console.log("Fetched Referrals")
        // console.log(result)
        if (result.length == 0) {
          result = null;
        }
        // console.log(result);

        fetchTotalReward();

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
            // console.log(referralData)
            
          });
          // console.log(element)
        }

           setReferrals(referralData);
            setViewReferralReward(total);
      })
      .catch((err) => {
        console.log("Unable to list  current referrals; " + err);
      });
  };

  const fetchTotalReward = async () => {
    // console.log(contract)
    //   contract.calculateTotalRewardReferral().then((rawResult) => {
    //       console.log("TotalReward:" + rawResult)
    //       let decimals = BigNumber(10).power(18);
    //       let realAmount = BigNumber(rawResult).divide(decimals);
    //      setViewReferralReward(realAmount.toString());
    //   }).catch( (err) => {
    //       console.log(err)
    //   });
    //   if(referrals === null || referrals.length === 0){
    //       // console.log("No referrals present")
    //       return;
    //   }
  };

  // const fetchStakeReward = async() => {
  //     this.state.contractInstance.methods.calculateRewardReferral(this.state.referrals[0]).call().then( (rawResult) => {
  //         console.log(rawResult)
  //     }).catch( (err) => {
  //         console.log("Unable to calculate")
  //     });
  // }

  const withdrawReferralReward = async () => {
    setLoading(true);

    contract
      .withdrawReferralReward({ from: account })
      .then((rawResult) => {
        console.log(rawResult);

        let result = Boolean(rawResult);

        if (result) {
          console.log("Reward successfully withdrawed");
        } else {
          console.log("The POT is exhausted!!!!");
        }

        fetchTotalReward();
        fetchReferral();
        setLoading(false);
      })
      .catch((err) => {
        console.log("There was an error : " + err);
        setLoading(false);
      });
  };

  let popover = (
    <Popover id="popover-success">
      {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
      <Popover.Body>
        <WhatsappShareButton
          url={`https://socialx.io?ref=${account}`}
          // quote={"Welcome to the social experiment"}
          // hashtag={"#socialx"}
          // description={"aiueo"}
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon size={32} round /> Whatsapp
        </WhatsappShareButton>

        <br />
        <br />

        <TelegramShareButton
          url={`https://socialx.io?ref=${account}`}
          // quote={"Welcome to the social experiment"}
          // hashtag={"#socialx"}
          // description={"aiueo"}
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
          // description={"aiueo"}
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

  // console.log(results.length);
  return (
    <div
      className={`${biggerThan1400 && "container"} ${
        biggest1400 && "container-fluid"
      }`}
    >
      <div className="row mb-3" style={{rowGap:"20px"}}>
        <div className="col-md-4 col-12">
          <div className="card">
            <div className=" mt-2">
              <img className="p-3 mb-4 " src="images/step1-referrallink.png" />
              <span className="main-pink">Step 1</span>
              <h4 className="fs-16 font-weight-bold">Get a referral link</h4>
              <p className="pt-2">
                Connect a wallet & generate your referral link in the Referral
                section.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-12">
          <div className="card">
            <img className="p-3" src="images/step2invitefriend-img.png" />
            <span className="main-pink">Step 2</span>
            <h4 className="fs-16 font-weight-bold">Invite friends</h4>
            <p className="pt-2">
              Invite your friends & register with your referral link.
            </p>
          </div>
        </div>

        <div className="col-md-4 col-12">
          <div className="card">
            <img className="p-3" src="images/step3earnsosx-img.png" />
            <span className="main-pink">Step 3</span>
            <h4 className="fs-16 font-weight-bold">Earn SOSX</h4>
            <p className="pt-2">
              Receive a referral rewards from your friends’ earnings.
            </p>
          </div>
        </div>
      </div>

      <div className="row mb-3 " style={{rowGap:"20px"}}>
        <div className="col-sm-4 col-6 col-xl-2">
          <div className="card h-100 overflow-hidden">
            <p className="pb-2">Total Friends</p>
            <h4 className="fs-16 font-weight-bold">{referralCount}</h4>
          </div>
        </div>
        <div className="col-sm-4 col-6 col-xl-2">
          <div className="card h-100 overflow-hidden">
            <p className="pb-2">Total Earned</p>
            <h4 className="fs-16 font-weight-bold">{viewReferralReward}</h4>
          </div>
        </div>

        <div className="col-sm-4 col-6 col-xl-2">
          <div className="card h-100 overflow-hidden">
            <p className="pb-2">Mining Friends</p>
            <h4 className="fs-16 font-weight-bold">0</h4>
          </div>
        </div>

        <div className="col-sm-4 col-6 col-xl-2">
          <div className="card h-100 overflow-hidden">
            <p className="pb-2">Mining Earned</p>
            <h4 className="fs-16 font-weight-bold">0</h4>
          </div>
        </div>

        <div className="col-sm-4 col-6 col-xl-2">
          <div className="card h-100 overflow-hidden">
            <p className="pb-2">Staking Friends</p>
            <h4 className="fs-16 font-weight-bold">{referralCount}</h4>
          </div>
        </div>

        <div className="col-sm-4 col-6 col-xl-2">
          <div className="card h-100 overflow-hidden">
            <p className="pb-2">Staking Earned</p>
            <h4 className="fs-16 font-weight-bold">{viewReferralReward}</h4>
          </div>
        </div>
      </div>

      <div className="row font-weight-bold" style={{rowGap:"20px"}}>
        <div className="col-xl-6">
          <div className="card h-100">
            <div className="card-header pl-1  border-0 pb-0">
              <h4 className="fs-18 font-weight-bold">My Referral Link</h4>
            </div>
            <div className="card-body">
              <div className="bg-dark rounded">
                <div className="d-flex justify-content-between align-items-center">
                  {account != null ? (
                    <div>
                      <span>
                        https://socialx.io?ref=
                        {account.replace(/(.{13})..+/, "$1…")}
                      </span>
                      <div className="float-right d-flex">
                        <li className="nav-item pr-2">
                          <CopyToClipboard
                            text={`https://socialx.io?ref=${account}`}
                            onCopy={() => setCopied(true)}
                          >
                            {/* <Button variant="outlined"><Trans i18nKey="referral_panel.copyButton" /></Button> */}
                            <a className="nav-link" data-toggle="modal">
                              <i className="fa-regular fa-clone" />
                            </a>
                          </CopyToClipboard>
                          {copied ? (
                            <span style={{ color: "red" }}>Copied.</span>
                          ) : null}
                        </li>

                        <OverlayTrigger
                          show={show}
                          trigger="click"
                          placement="right"
                          overlay={popover}
                        >
                          <li className="nav-item ">
                            <a
                              onClick={() => setShow(!show)}
                              className="nav-link"
                              data-toggle="modal"
                            >
                              <i className="fa-solid fa-share-from-square"></i>
                            </a>
                          </li>
                        </OverlayTrigger>
                      </div>
                    </div>
                  ) : (
                    <p>** Connect to Refer ** </p>
                  )}
                </div>
              </div>

              <div className="card-header border-0 pl-0 pb-0"></div>
              {/* <div className="bg-dark rounded">
          
           <div className='font-weight-bold align-items-center d-flex justify-content-between '>
             <div className='d-flex flex-column align-items-center'>
             <h4 className='fs-18 font-weight-bold' >You will get</h4>
              <p className='text-success font-weight-bold mt-1 fs-28'>35%</p>
             </div>
             <i className="fa-solid fs-28 text-success fa-angles-right"></i>

             <div>
             <p className='text-muted' >Social Mining</p>
               <h3 className='font-weight-bold'> 25%</h3>
             <p className='text-muted'>Staking </p>
             <h3 className='font-weight-bold'> 10%</h3>
             </div>
           </div>
         </div> */}

              <div className="bg-dark rounded">
                <div className="font-weight-bold align-items-center d-flex justify-content-between ">
                  <div className="d-flex flex-column align-items-center">
                    <h4 className="fs-18 font-weight-bold">You will get</h4>
                    <p className="text-success font-weight-bold mt-1 fs-28">35%</p>
                  </div>
                  <i className="fa-solid fs-28 text-success fa-angles-right"></i>
                  <div>
                    <p className="text-muted">Social Mining</p>
                    <h3 className="font-weight-bold"> 25%</h3>
                  </div>
                  <div>
                    <p className="text-muted">Staking </p>
                    <h3 className="font-weight-bold"> 10%</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6">
          <div className="row">
            <div className="col-md-12  col-12">
              <div className="card mb-2 m-0 p-3 h-auto" >
                <div className="card-body" style={{ display: "flex",justifyContent: "space-between", flexFlow: "row-reverse"}}>
                  <img
                    src="images/swapcoin-referral.svg"
                    className="pb-2 pl-2 pr-2 pt-1 referral-rewards"
                  />
                 
                  {account ? (
                    <div>
                       <h4 className="main-pink">Social Mining Referral</h4>
                      <h4 className="fs-18 font-weight-bold pt-2 pb-2">
                        {viewReferralReward} SOSX
                      </h4>
                      <button
                        style={{ padding: "0.338rem 1rem" }}
                        type="button"
                        className="btn btn-primary  "
                      >
                        Withdraw
                      </button>
                    </div>
                  ) : (
                    <div>
                       <h4 className="main-pink">Social Mining Referral</h4>
                      <h4 className="fs-18 font-weight-bold pt-2 pb-2"></h4>
                      <ConnectWalletButton
                        style={{ padding: "0.338rem 1rem" }}
                        className="btn btn-primary "
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="col-md-12   col-12">
              <div className="card m-0 mt-2  h-auto" >
                <div className="card-body" style={{ display: "flex",justifyContent: "space-between", flexFlow: "row-reverse"}}>
                  <img
                    src="images/swapcoin-referral.svg"
                    className="pb-2 pl-2 pr-2 pt-1 referral-rewards"
                  />

                  {account ? (
                    <div>
                       <h4 className="main-pink">Staking Referral</h4>
                      <h4 className="fs-18 font-weight-bold pt-2 pb-2">
                        {viewReferralReward} SOSX
                      </h4>
                      <button
                        style={{ padding: "0.338rem 1rem" }}
                        type="button"
                        className="btn btn-primary  "
                      >
                        Withdraw
                      </button>
                    </div>
                  ) : (
                    <div>
                       <h4 className="main-pink">Staking Referral</h4>
                      <h4 className="fs-18 font-weight-bold pt-2 pb-2"></h4>
                      <ConnectWalletButton
                        style={{ padding: "0.338rem 1rem" }}
                        className="btn btn-primary  "
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper mt-4">
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
              <h4 className="fs-16 font-weight-bold">Referral List</h4>
              <span>All your referral friends in one place.</span>
              <hr />
              <div className="row pb-3">
                <div className="col-xl-12">
                  <div className="d-flex justify-content-between">
                    <div className="col-xl-2">
                      <p className="main-pink">Wallet Address</p>
                    </div>

                    <div className="col-xl-3">
                      <p className="main-pink">Mining Rewards</p>
                    </div>

                    <div className="col-xl-3">
                      <p className="main-pink">Staking Rewards</p>
                    </div>

                    <div className="col-xl-2">
                      <p className="main-pink">Total Earned</p>
                    </div>
                  </div>
                </div>
              </div>


              {referrals.length > 0 ? (
                referrals.map((ref) => (
                  <div className="row pb-3">
                    <div className="col-xl-12">
                      <div className="d-flex justify-content-between">
                        <div className="col-xl-2">
                          <p className="text-white fs-12">
                            {ref.address.replace(/(.{13})..+/, "$1…")}
                          </p>
                        </div>

                        <div className="col-xl-3">
                          <p className="text-white fs-12">0</p>
                        </div>

                        <div className="col-xl-3">
                          <p className="text-white fs-12">{ref.amount}</p>
                        </div>

                        <div className="col-xl-2">
                          <p className="text-white fs-12">{ref.amount}</p>
                        </div>
                      </div>
                    </div>

                  </div>
                ))
              ) : (
                <div className=" mx-auto text-center">Data not available</div>
              )}
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
              <h4 className="fs-16 font-weight-bold">Social Mining</h4>
              <span>All your referral friends in one place.</span>
              <hr />
              <div className="row pb-3">
                <div className="col-xl-12">
                  <div className="d-flex justify-content-between">
                    <div className="col-xl-2">
                      <p className="main-pink">Wallet Address</p>
                    </div>

                    <div className="col-xl-3">
                      <p className="main-pink">Mining Rewards</p>
                    </div>

                    <div className="col-xl-3">
                      <p className="main-pink">Staking Rewards</p>
                    </div>

                    <div className="col-xl-2">
                      <p className="main-pink">Total Earned</p>
                    </div>
                  </div>
                </div>
              </div>

              {socialData.length > 0 ? (
                resultsoc.map((ref) => (
                  <div className="row pb-3">
                    <div className="col-xl-12">
                      <div className="d-flex justify-content-between">
                        <div className="col-xl-2">
                          <p className="text-white fs-12">
                            {ref.gotrefered.replace(/(.{13})..+/, "$1…")}
                          </p>
                        </div>

                        <div className="col-xl-3">
                          <p className="text-white fs-12">0</p>
                        </div>

                        <div className="col-xl-3">
                          <p className="text-white fs-12">0</p>
                        </div>

                        <div className="col-xl-2">
                          <p className="text-white fs-12">0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className=" mx-auto text-center">Data not available</div>
              )}
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
              <h4 className="fs-16 font-weight-bold">Staking</h4>
              <span>All your referral friends in one place.</span>
              <hr />
              <div className="row pb-3">
                <div className="col-xl-12">
                  <div className="d-flex justify-content-between">
                    <div className="col-xl-2">
                      <p className="main-pink">Wallet Address</p>
                    </div>

                    {/* <div className="col-xl-3">
                      <p className="main-pink">Mining Rewards</p>
                    </div> */}

                    <div className="col-xl-3">
                      <p className="main-pink">Staking Rewards</p>
                    </div>

                    <div className="col-xl-2">
                      <p className="main-pink">Total Earned</p>
                    </div>
                  </div>
                </div>
              </div>

              {referrals.length > 0 ? (
                referrals.map((ref) => (
                  <div className="row pb-3">
                    <div className="col-xl-12">
                      <div className="d-flex justify-content-between">

                        <div className="col-xl-2">
                          <p className="text-white fs-12">
                            {ref.address.replace(/(.{13})..+/, "$1…")}
                          </p>
                        </div>


                        {/* <div className="col-xl-3">
                          <p className="text-white fs-12">0</p>
                        </div> */}

                        <div className="col-xl-3">
                          <p className="text-white fs-12">{ref.amount}</p>
                        </div>

                        <div className="col-xl-2">
                          <p className="text-white fs-12">{ref.amount}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className=" mx-auto text-center">Data not available</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(ctx) {
  // get the current environment
  // let dev = process.env.NODE_ENV !== 'production';
  // let { DEV_URL, PROD_URL } = process.env;

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
