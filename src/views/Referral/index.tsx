import { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import useToast from 'hooks/useToast'
import {
  FacebookShareButton, TwitterShareButton, TelegramShareButton, EmailShareButton, WhatsappShareButton, WhatsappIcon, TelegramIcon
} from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import { Popover, OverlayTrigger } from 'react-bootstrap';
import { withSnackbar } from "notistack";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import sosxStakingAbi from 'config/abi/sosxABI.json'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useWeb3React } from '@web3-react/core';
import { useStakingContract } from 'hooks/useContract';
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice';
import get from 'lodash/get'
import { Contract } from '@ethersproject/contracts';
import { Web3Provider } from '@ethersproject/providers';

const BorderCard = styled.div`
  border: solid 1px ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  padding: 16px;
`


export default function Referral() {
  const [referralCount, setReferralCount] = useState(0);
  const [viewReferralReward, setViewReferralReward] = useState(0);
  const [referrals, setReferrals] = useState([]);
  const [loading, setLoading] = useState('');
  const [copied, setCopied] = useState(false);
  const { callWithGasPrice } = useCallWithGasPrice()
  const { account, active, library } = useWeb3React<Web3Provider>()


  // const account = "dd"
  const contract = useStakingContract();


  let popover = (
    <Popover id="popover-success">
      {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
      <Popover.Body>
        <WhatsappShareButton
          url={"https://socialx.io/"}
          // quote={"Welcome to the social experiment"}
          // hashtag={"#socialx"}
          // description={"aiueo"}
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon size={32} round /> Whatsapp
        </WhatsappShareButton>

        <br /><br />

        <TelegramShareButton
          url={"https://socialx.io/"}
          // quote={"Welcome to the social experiment"}
          // hashtag={"#socialx"}
          // description={"aiueo"}
          className="Demo__some-network__share-button">
          <TelegramIcon size={32} round /> Telegram
        </TelegramShareButton>

        <br /><br />


        <FacebookShareButton
          url={"https://socialx.io/"}
          quote={"Welcome to the social experiment"}
          hashtag={"#socialx"}
          // description={"aiueo"}
          className="Demo__some-network__share-button">
          <FacebookIcon size={32} round /> Facebook
        </FacebookShareButton>
        <br /><br />
        <TwitterShareButton
          title={"Welcome to the social experiment"}
          url={"https://socialx.io"}
          hashtags={["socialx", "socialx"]}
        >
          <TwitterIcon size={32} round />
          Twitter
        </TwitterShareButton>
      </Popover.Body>
    </Popover>
  );

  const ShareComponent = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <a className="nav-link" data-toggle="modal"><i className="fa-solid fa-share-from-square" /></a>
    </OverlayTrigger>
  );





  const fetchReferral = async () => {

    // contract.methods.getCurrentReferrals().call().then( (result) => {

    //     console.log(result);
    // });
    console.log(library)

    console.log('get')

    if (!(active && account && library)) return
    const contract = new Contract('0xee52def4a2683e68ba8aecda8219004c4af376df', sosxStakingAbi, library.getSigner());
    //  erc20.transfer(toAddress,parseEther(amount)).catch('error', console.error)
    console.log(contract)
    console.log(await contract.getAllAccount())

    let res = await contract.getCurrentStakeAmount(10).catch('error', console.error)


    // this.state.contractInstance.methods.getCurrentReferrals().call().then( (result) => {
    //     console.log("Fetched Referrals")
    //     console.log(result)

    //     if(result.length == 0){
    //         result = null;
    //     }

    //     this.setState({referrals: result}, () => {
    //         this.fetchTotalReward();
    //     });
    // }).catch( (err) => {
    //     console.log("Unable to list active stake; " + err)
    // });       

  }

  useEffect(() => {

    fetchReferral();
  }, [])



  return (

    <div className="container-fluid">
      <div className="row">

        <div className="col-md-4">
          <div className="card">
            <div>
              <img src="images/step1-referrallink.png" />
              <span className="main-pink">Step 1</span>
              <h4 className="pt-2 pb-2">Get a referral link</h4>
              <p>Connect a wallet & generate your referral link in the
                Referral section.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="images/step2invitefriend-img.png" />
            <span className="main-pink">Step 2</span>
            <h4 className="pt-2 pb-2">Invite friends</h4>
            <p>Invite your friends & register with your referral link.</p>
          </div>
        </div>


        <div className="col-md-4">
          <div className="card">
            <img src="images/step3earnsosx-img.png" />
            <span className="main-pink">Step 3</span>
            <h4 className="pt-2 pb-2">Earn SOSX</h4>
            <p>Receive a referral rewards from your friends’ earnings.
            </p>
          </div>
        </div>
      </div>


      <div className="row">
        <div className="col-sm-4 col-6 col-xl-2">
          <div className="card overflow-hidden">
            <p className="pb-2">Total Friends</p>
            <h4>{referralCount}</h4>
          </div>
        </div>
        <div className="col-sm-4 col-6 col-xl-2">
          <div className="card overflow-hidden">
            <p className="pb-2">Total Earned</p>
            <h4>{viewReferralReward}</h4>
          </div>
        </div>

        <div className="col-sm-4 col-6 col-xl-2">
          <div className="card overflow-hidden">
            <p className="pb-2">Mining Friends</p>
            <h4>{referralCount}</h4>
          </div>
        </div>

        <div className="col-sm-4 col-6 col-xl-2">
          <div className="card overflow-hidden">
            <p className="pb-2">Mining Earned</p>
            <h4>{viewReferralReward}</h4>
          </div>
        </div>

        <div className="col-sm-4 col-6 col-xl-2">
          <div className="card overflow-hidden">
            <p className="pb-2">Staking Friends</p>
            <h4>0</h4>
          </div>
        </div>

        <div className="col-sm-4 col-6 col-xl-2">
          <div className="card overflow-hidden">
            <p className="pb-2">Staking Earned</p>
            <h4>0</h4>
          </div>
        </div>
      </div>



      <div className="row p-2">
        <div className="col-12 p-1  col-xl-7">
          <div className="card  h-100">
            <div className="card-header border-0 pb-0">
              <h4>My Referral Link</h4>
            </div>
            <div className="card-body">
              <div className="bg-dark rounded">
                <div className="d-flex justify-content-between align-items-center">
                  <span>{`${account ? 'https://socialx.io?ref=' + account.replace(/(.{13})..+/, "$1…") : ''}  : `} </span>
                  <div className="float-right d-flex">
                    <li className="nav-item pr-2">
                      <CopyToClipboard
                        text={`https://socialx.io?ref=${account}`}
                        onCopy={() => setCopied(true)} >
                        {/* <Button variant="outlined"><Trans i18nKey="referral_panel.copyButton" /></Button> */}
                        <a className="nav-link" data-toggle="modal"><i className="fa-regular fa-clone" /></a>

                      </CopyToClipboard>
                      {copied ? <span style={{ color: 'red' }}>Copied.</span> : null}

                    </li>

                    <li className="nav-item "><a href="#" className="nav-link" data-toggle="modal">
                      <i className="fa-solid fa-share-from-square"></i></a></li>
                  </div>
                </div>
              </div>
              <div className="bg-dark rounded">
                <h4>You will get</h4>
                <div>
                  <div>
                    <p>Social Mining</p>
                    <h3> 25%</h3>
                  </div>

                  <p>Staking </p>
                  <h3> 10%</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-5">
          <div className="row">
            <div className="col-6  p-1 col-xl-12">
              <div className="card  h-100">
                <div className="card-body ">
                  <img src="images/swapcoin-referral.svg" className="pt-3 referral-rewards" />
                  <span className="main-pink">Social Mining Referral</span>
                  <h4 className="pt-3 pb-3">{viewReferralReward}  SOSX</h4>
                  <button type="button" className="mt-1 btn btn-primary">Withdraw</button>
                </div>
              </div>
            </div>

            <div className="col-6 p-1  col-xl-12">
              <div className="card h-100">
                <div className="card-body ">
                  <img src="images/swapcoin-referral.svg" className="pt-3 referral-rewards" />
                  <span className="main-pink">Staking Referral</span>
                  <h4 className="pt-3 pb-3">{viewReferralReward} SOSX</h4>
                  <button type="button" className="mt-1 btn btn-primary">Withdraw</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper mt-2">
        <div className="tabs">
          <div className="tab">
            <input type="radio" name="css-tabs" id="tab-1" checked className="tab-switch" />
            <label htmlFor="tab-1" className="tab-label">Referral List</label>

            <div className="tab-content">
              <h4>Referral List</h4>
              <p className="fs-12 pt-1 pb-1"> All your referral friends in one place.</p>


              <div className="row pb-3">
                <div className="col-xl-12">
                  <div className="row">

                    <div className="col">
                      <p className="main-pink">Date</p>
                      <p>05/25/2022, 23:20:04 </p>
                      <p>05/25/2022, 23:20:04 </p>
                    </div>

                    <div className="col">
                      <p className="main-pink">Wallet Address</p>
                      <p>fds24fGz1R...</p>
                      <p>fds24fGz1R...</p>
                    </div>

                    <div className="col">
                      <p className="main-pink">Mining Rewards</p>
                      <p>20,512.55 SOSX</p>
                      <p>20,512.55 SOSX</p>
                    </div>

                    <div className="col">
                      <p className="main-pink">Staking Rewards</p>
                      <p>10,412.12 SOSX</p>
                      <p>10,412.12 SOSX</p>

                    </div>

                    <div className="col">
                      <p className="main-pink">Total Earned</p>
                      <p>30,924.67</p>
                      <p>30,924.67</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-content">
              <h4 className="fs-18 mb-0">Referral List</h4>
              <span className="fs-14">All your referral friends in one place.</span>


              <div className="row pb-3">
                <div className="col-xl-12">
                  <div className="d-flex justify-content-between">

                    <div className="col-xl-3">
                      <span className="success fs-12 d-block ">Date</span>
                      <span className="text-white fs-12 d-block ">05/25/2022, 23:20:04 </span>
                      <span className="text-white fs-12">05/25/2022, 23:20:04 </span>
                    </div>
                    <div className="col-xl-2">
                      <span className="success fs-12 d-block ">Wallet Address</span>
                      <span className="text-white fs-12 d-block ">fds24fGz1R...</span>
                      <span className="text-white fs-12">fds24fGz1R...</span>
                    </div>

                    <div className="col-xl-2">
                      <span className="success fs-12 d-block ">Mining Rewards Earned</span>
                      <span className="text-white fs-12 d-block ">20,512.55 SOSX</span>
                      <span className="text-white fs-12">20,512.55 SOSX</span>
                    </div>

                    <div className="col-xl-2">
                      <span className="success fs-12 d-block ">Staking Rewards Earned</span>
                      <span className="text-white fs-12 d-block ">10,412.12 SOSX</span>
                      <span className="text-white fs-12">10,412.12 SOSX</span>

                    </div>

                    <div className="col-xl-2">
                      <span className="success fs-12 d-block ">Total Earned</span>
                      <span className="text-white fs-12 d-block ">30,924.67</span>
                      <span className="text-white fs-12">30,924.67</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="tab">
            <input type="radio" name="css-tabs" id="tab-2" className="tab-switch" />
            <label htmlFor="tab-2" className="tab-label">Social Mining</label>
            <div className="tab-content">
              <h4 className="fs-18 mb-0">Social Mining Reward History</h4>
              <p className="fs-12 pt-1 pb-1">All your Swaps referral rewards are listed below</p>


              <div className="row">
                <div className="col-xl-12">
                  <div className="row">

                    <div className="col">
                      <p className="main-pink">Date</p>
                      <p>05/25/2022, 23:20:04 </p>
                    </div>
                    <div className="col">
                      <p className="main-pink">Wallet Address</p>
                      <p>fds24fGz1R...</p>
                    </div>

                    <div className="col">
                      <p className="main-pink">Mining Rewards</p>
                      <p>105,231.41 SOSX</p>
                    </div>

                    <div className="col">
                      <p className="main-pink">Your Earnings</p>
                      <p>10,523.14</p>

                    </div>

                    <div className="col">
                      <p className="main-pink">Status</p>
                      <p>Claimed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="tab">
            <input type="radio" name="css-tabs" id="tab-3" className="tab-switch" />
            <label htmlFor="tab-3" className="tab-label">Staking</label>
            <div className="tab-content">

              <h4 className="fs-18 ">Staking Reward History</h4>
              <p className="fs-12 pt-1 pb-1">All your Staking referral rewards are listed below</p>


              <div className="row">
                <div className="col-xl-12">
                  <div className="row">

                    <div className="col">
                      <p className="main-pink">Date</p>
                      <p>05/25/2022, 23:20:04 </p>
                    </div>
                    <div className="col">
                      <p className="main-pink">Wallet Address</p>
                      <p>fds24fGz1R...</p>
                    </div>

                    <div className="col">
                      <p className="main-pink">Staking Rewards</p>
                      <p>105,231.41 SOSX</p>
                    </div>

                    <div className="col">
                      <p className="main-pink">Your Earnings</p>
                      <p>10,523.14</p>

                    </div>

                    <div className="col">
                      <p className="main-pink">Status</p>
                      <p>Claimed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div >

  )
}
