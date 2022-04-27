import { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import useToast from 'hooks/useToast'
import { FacebookShareButton, TwitterShareButton, TelegramShareButton, EmailShareButton, WhatsappShareButton, WhatsappIcon, TelegramIcon
} from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import {Popover, OverlayTrigger } from 'react-bootstrap';
import { withSnackbar } from "notistack";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import sosxStakingAbi from 'config/abi/sosxABI.json'
import {CopyToClipboard} from 'react-copy-to-clipboard';
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
  const[referralCount, setReferralCount] = useState(0);
  const[viewReferralReward, setViewReferralReward] = useState(0);
  const[referrals, setReferrals] = useState([]);
  const[loading, setLoading] = useState('');
  const [copied, setCopied] = useState(false);
  const { callWithGasPrice } = useCallWithGasPrice()
  const { account, active, library} = useWeb3React<Web3Provider>()


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

      <br/><br/>

      <TelegramShareButton
        url={"https://socialx.io/"}
        // quote={"Welcome to the social experiment"}
        // hashtag={"#socialx"}
        // description={"aiueo"}
        className="Demo__some-network__share-button">
        <TelegramIcon size={32} round /> Telegram
      </TelegramShareButton>

      <br/><br/>
      
      
      <FacebookShareButton
        url={"https://socialx.io/"}
        quote={"Welcome to the social experiment"}
        hashtag={"#socialx"}
        // description={"aiueo"}
        className="Demo__some-network__share-button">
        <FacebookIcon size={32} round /> Facebook
      </FacebookShareButton>
      <br /><br/>
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





      const fetchReferral = async() => {

        // contract.methods.getCurrentReferrals().call().then( (result) => {

        //     console.log(result);
        // });
        console.log(library)

        console.log('get')

        if(!(active && account && library)) return
           const contract = new Contract('0xee52def4a2683e68ba8aecda8219004c4af376df', sosxStakingAbi, library.getSigner());
            //  erc20.transfer(toAddress,parseEther(amount)).catch('error', console.error)
          console.log(contract)
            console.log(await contract.getAllAccount())

        let res =  await contract.getCurrentStakeAmount(10).catch('error', console.error)


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

      useEffect(() =>{

        fetchReferral();
      },  [])


  
  return (
    <>
       
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="card overflow-hidden">
            <div className="card-header align-items-start border-0 justify-content-between">
              <div>
                <img src="images/step1-referrallink.png" className="steps-img pb-3 justify-content-center pb-3 p-3" />
                <p className="success mb-0 fs-12 pb-2 pt-2">Step 1</p>
                <h4 className="fs-18 mb-0">Get a referral link</h4>
                <span className="fs-12">Connect a wallet and generate your referral link in the Referral
                  section.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card overflow-hidden">
            <div className="card-header align-items-start border-0 justify-content-between">
              <div>
                <img src="images/step2invitefriend-img.png" className="steps-img pb-3 justify-content-center pb-3 p-3" />
                <p className="success mb-0 fs-12 pb-2">Step 2</p>
                <h4 className="fs-18 mb-0">Invite friends</h4>
                <span className="fs-12">Invite your friends to register with your referral link.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card overflow-hidden">
            <div className="card-header align-items-start border-0 justify-content-between">
              <div>
                <img src="images/step3earnsosx-img.png" className="steps-img pb-3 justify-content-center pb-3 p-3" />
                <p className="success mb-0 fs-12 pb-2">Step 3</p>
                <h4 className="fs-18 mb-0">Earn SOSX</h4>
                <span className="fs-12">Receive referral rewards from your friends’ earnings &amp;
                  swaps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <div className="card overflow-hidden">
            <div className="card-header align-items-start border-0 justify-content-between">
              <div>
                <p className="mb-0 fs-12 pb-2">Total Friends</p>
                <h4 className="fs-26 mb-0">{referralCount}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="card overflow-hidden">
            <div className="card-header align-items-start border-0 justify-content-between">
              <div>
                <p className="mb-0 fs-12 pb-2">Total Earned</p>
                <h4 className="fs-26 mb-0">{viewReferralReward}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="card overflow-hidden">
            <div className="card-header align-items-start border-0 justify-content-between">
              <div>
                <p className="mb-0 fs-12 pb-2">X-stake Friends</p>
                <h4 className="fs-26 mb-0">{referralCount}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="card overflow-hidden">
            <div className="card-header align-items-start border-0 justify-content-between">
              <div>
                <p className="mb-0 fs-12 pb-2">x-Stake Earned</p>
                <h4 className="fs-26 mb-0">{viewReferralReward}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="card overflow-hidden">
            <div className="card-header align-items-start border-0 justify-content-between">
              <div>
                <p className="mb-0 fs-12 pb-2">x-Mining  Friends</p>
                <h4 className="fs-26 mb-0">0</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="card overflow-hidden">
            <div className="card-header align-items-start border-0 justify-content-between">
              <div>
                <p className="mb-0 fs-12 pb-2">X-minging Mining Earned</p>
                <h4 className="fs-26 mb-0">0</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <div className="card h-auto">
            <div className="card-header border-0 pb-0">
              <h4 className="fs-18">My Referral Link</h4>
            </div>
            <div className="card-body">
              <div className="bg-dark p-3 mb-3 rounded">
                <div className="d-flex justify-content-between align-items-center pb-1">
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fs-16">{`${account ? 'https://socialx.io?ref='+account.replace(/(.{13})..+/, "$1…")   : ''}  : `} </span>
                       <li className="nav-item ">
                           <CopyToClipboard
                            text={`https://socialx.io?ref=${account}`}
                            onCopy={() => setCopied(true)} > 
                                {/* <Button variant="outlined"><Trans i18nKey="referral_panel.copyButton" /></Button> */}
                                <a  className="nav-link" data-toggle="modal"><i className="fa-regular fa-clone" /></a>
                                
                          </CopyToClipboard>
                          {copied ? <span style={{color: 'red'}}>Copied.</span> : null}
                  
                  </li>
                  <li className="nav-item ">
                 
                      <ShareComponent/>
                  
                  </li>
                </div>
              </div>
              <div className="bg-dark p-3 rounded">
                <h4 className="fs-14 mb-2">You will get</h4>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="small mr-1">Mining Rewards</div>
                    <div className="small">
                      <div className="text-white font-w600  fs-18"> 25%</div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="small mr-1">Staking Rewards</div>
                    <div className="small">
                      <div className="text-white font-w600  fs-18"> 10%</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <button type="button" className="btn btn-primary btn-lg w-100 mt-3">Create new link</button> */}
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card h-auto">
            <div className="card-body">
              <img src="images/swapcoin-referral.svg" className="referral-rewards" />
              <p className="success mb-0 fs-12 pb-2">Staking Referral</p>
              <h4 className="mb-0 font-w600  fs-15 pb-2">{viewReferralReward} SOSX</h4>
              <button type="button" onClick={() => withDrawReferralReward()} className="btn btn-primary btn-lg">Withdraw</button>
                                 
            </div>
          </div>
          <div className="card h-auto">
            <div className="card-body">
              <img src="images/swapcoin-referral.svg" className="referral-rewards" />
              <p className="success mb-0 fs-12 pb-2">X-Mining Referral</p>
              <h4 className="mb-0 font-w600  fs-15 pb-2">{viewReferralReward} SOSX (Rewards directly sent to your wallet)</h4>
              <button type="button" className="btn btn-primary btn-lg" disabled >Withdraw</button>
            </div>
          </div>
        </div>
      </div>


      <div className="wrapper">
                <div className="tabs">
                  <div className="tab">
                    <input type="radio" name="css-tabs" id="tab-1" checked className="tab-switch"/>
                    <label  className="tab-label active">Referral List</label>

                    
                    <div className="tab-content">

                            <h4 className="fs-18 mb-0">Referral List</h4>
                            <span className="fs-14">All your referral friends in one place.</span>
                            <hr/>
                            <div className="row pb-3">
                                <div className="col-xl-12">
                                    <div className="d-flex justify-content-between">

                                        {/* <div className="col-xl-3"> */}
                                            {/* <span className="success fs-12 ">Date</span> <br/> */}
                                            {/* <span className="text-white fs-12">05/25/2022, 23:20:04 </span> */}
                                        {/* </div> */}
                                        <div className="col-xl-3">
                                            <span className="success fs-12 ">Wallet Address</span> <br/>
                                            {/* <span className="text-white fs-12">fds24fGz1R...</span> */}
                                        </div>

                                        <div className="col-xl-3">
                                            <span className="success fs-12 ">Mining Rewards Earned</span> <br/>
                                            {/* <span className="text-white fs-12">20,512.55 SOSX</span> */}
                                        </div>

                                        <div className="col-xl-3">
                                            <span className="success fs-12 ">Staking Rewards Earned</span> <br/>
                                            {/* <span className="text-white fs-12">10,412.12 SOSX</span> */}

                                        </div>

                                        <div className="col-xl-3">
                                            <span className="success fs-12 ">Total Earned</span> <br/>
                                            {/* <span class="text-white fs-12">30,924.67</span> */}
                                        </div>
                                    </div>

                


                    {referrals !== null ? (
                    
                    <>

                        {!loading ? (
                           referrals.map( (ref_address) =>
                            <ListItem button>
                                {/* <ReferralEntry
                                    contractInstance={contractInstance}
                                    account={account}
                                    tokenDecimals={tokenDecimals}
                                    referredAddress={ref_address}
                                >
                                <></>
                                </ReferralEntry> */}
                                <></>
                            </ListItem>
                            )
                        ) : (
                            <CircularProgress />
                        )}
                          </>

                    ):

                    (
                      <div>
                          {/* <Typography color="error"><ErrorOutlineIcon></ErrorOutlineIcon></Typography>
                          <Typography color="error"><Trans i18nKey="referral_panel.noReferral" /></Typography> */}
                          <span>No Referral</span>
                      </div>
                  )}
                                </div>
                             </div>


                             
                        </div>
                  </div>
                  <div className="tab">
                    <input type="radio" name="css-tabs" id="tab-2" className="tab-switch"/>
                    <label  className="tab-label">Social Mining</label>
                    <div className="tab-content">
                        <h4 className="fs-18 mb-0">Social Mining Reward History</h4>
                        <span className="fs-14">All your Swaps referral rewards are listed below</span>
                        <hr/>
          <div className="row pb-3">
                                <div className="col-xl-12">
                                    <div className="d-flex justify-content-between">

                                        {/* <div className="col-xl-3"> */}
                                            {/* <span className="success fs-12 ">Date</span> <br/> */}
                                            {/* <span className="text-white fs-12">05/25/2022, 23:20:04 </span> */}
                                        {/* </div> */}
                                        <div className="col-xl-3">
                                            <span className="success fs-12 ">Wallet Address</span> <br/>
                                            {/* <span className="text-white fs-12">fds24fGz1R...</span> */}
                                        </div>

                                        <div className="col-xl-3">
                                            <span className="success fs-12 ">Mining Rewards Earned</span> <br/>
                                            {/* <span className="text-white fs-12">20,512.55 SOSX</span> */}
                                        </div>

                                        <div className="col-xl-3">
                                            <span className="success fs-12 ">Staking Rewards Earned</span> <br/>
                                            {/* <span className="text-white fs-12">10,412.12 SOSX</span> */}

                                        </div>

                                        <div className="col-xl-3">
                                            <span className="success fs-12 ">Total Earned</span> <br/>
                                            {/* <span className="text-white fs-12">30,924.67</span> */}
                                        </div>
                                    </div>

                    {referrals !== null ? (
                    
                    <>

                        {!loading ? (
                            referrals.map( (ref_address) =>
                            // <ListItem button>
                                // <ReferralEntry
                                //     contractInstance={contractInstance}
                                //     account={account}
                                //     tokenDecimals={tokenDecimals}
                                //     referredAddress={ref_address}
                                // >
                                // </ReferralEntry>
                            // </ListItem>
                            <></>
                            )
                        ) : (
                            <CircularProgress />
                        )}
                          </>

                    ):

                    (
                      <div>
                          <p>No referral</p>
                      </div>
                  )}
                                </div>
                             </div>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="radio" name="css-tabs" id="tab-3" className="tab-switch"/>
                    <label  className="tab-label">Staking</label>
                    <div className="tab-content">
                        
                        <h4 className="fs-18 mb-0">Staking Reward History</h4>
                        <span className="fs-14">All your Staking referral rewards are listed below</span>
                        <hr/>
          <div className="row pb-3">
                                <div className="col-xl-12">
                                    <div className="d-flex justify-content-between">

                                        {/* <div className="col-xl-3"> */}
                                            {/* <span className="success fs-12 ">Date</span> <br/> */}
                                            {/* <span className="text-white fs-12">05/25/2022, 23:20:04 </span> */}
                                        {/* </div> */}
                                        <div className="col-xl-3">
                                            <span className="success fs-12 ">Wallet Address</span> <br/>
                                            {/* <span className="text-white fs-12">fds24fGz1R...</span> */}
                                        </div>

                                        <div className="col-xl-3">
                                            <span className="success fs-12 ">Mining Rewards Earned</span> <br/>
                                            {/* <span className="text-white fs-12">20,512.55 SOSX</span> */}
                                        </div>

                                        <div className="col-xl-3">
                                            <span className="success fs-12 ">Staking Rewards Earned</span> <br/>
                                            {/* <span className="text-white fs-12">10,412.12 SOSX</span> */}

                                        </div>

                                        <div className="col-xl-3">
                                            <span className="success fs-12 ">Total Earned</span> <br/>
                                            {/* <span class="text-white fs-12">30,924.67</span> */}
                                        </div>
                                    </div>

                


                    {referrals !== null ? (
                    
                    <>

                        {!loading ? (
                        referrals.map( (ref_address) =>
                            // <ListItem button>
                                // <ReferralEntry
                                //     contractInstance={contractInstance}
                                //     account={account}
                                //     tokenDecimals={tokenDecimals}
                                //     referredAddress={ref_address}
                                // >
                                // </ReferralEntry>
                            // </ListItem>
                            <></>
                            )
                        ) : (
                            <CircularProgress />
                        )}
                          </>

                    ):

                    (
                      <div>
                         <p>No Referral</p>
                      </div>
                  )}
                                </div>
                             </div>
                        
                    </div>
                  </div>
                </div>
              </div>
    </div>
  </>
  )
}
