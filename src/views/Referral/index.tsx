import { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import useToast from 'hooks/useToast'
import {
  FacebookShareButton, TwitterShareButton, TelegramShareButton, EmailShareButton, WhatsappShareButton, WhatsappIcon, TelegramIcon
} from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import { Popover, OverlayTrigger } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useStakingContract } from 'hooks/useContract';

import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice';
import { useMediaPredicate } from "react-media-hook";
import BigNumber from "big-number"
import useActiveWeb3React from 'hooks/useActiveWeb3React';

const BorderCard = styled.div`
  border: solid 1px ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  padding: 16px;
`


export default function Referral() {

  const contract = useStakingContract();
  const [referralCount, setReferralCount] = useState(0);
  const [viewReferralReward, setViewReferralReward] = useState(0);
  const [referrals, setReferrals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { callWithGasPrice } = useCallWithGasPrice()
  const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
	const biggest1400 = useMediaPredicate("(max-width: 1400px)");
  const { account } = useActiveWeb3React();

  // const account = "dd"

  useEffect(() => {

    fetchReferral();
  }, [])


  const fetchReferral = async() => {

    let countreferrals = await contract.getReferralCount();
   
    // console.log(referralCount);
    // this.setState({referralCount:countreferrals})
    setReferralCount(Number(countreferrals));
      
      contract.getCurrentReferrals().then( (result) => {
          // console.log("Fetched Referrals")
          // console.log(result)  
          if(result.length == 0){
              result = null;
          }
          console.log(result);

          fetchTotalReward();

          let referralData = [];
          let total = 0;

          for (let i = 0; i < referralCount; i++) {

             contract.calculateRewardReferral(result[i]).then(reward => {

                let data = {
                  address: result[i],
                  amount: Number(reward/10 ** 18).toFixed(2)
                }
                total  =  + Number(reward/10 ** 18).toFixed(2);
                referralData.push(data);
                   // console.log(referralData)
                  setReferrals(referralData);
                  setViewReferralReward(total);

             });
            // console.log(element)
       

          }


      }).catch( (err) => {
          console.log("Unable to list  current referrals; " + err)
      });       
       
  }

  const fetchTotalReward = async() => {

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
  
  }


  // const fetchStakeReward = async() => {
  //     this.state.contractInstance.methods.calculateRewardReferral(this.state.referrals[0]).call().then( (rawResult) => {
  //         console.log(rawResult)
  //     }).catch( (err) => {
  //         console.log("Unable to calculate")
  //     });
  // }


 const  withdrawReferralReward = async() => {
     
      setLoading(true);

      contract.withdrawReferralReward({ from: account }).then( (rawResult) => {

          console.log(rawResult)

          let result = Boolean(rawResult)

          if(result){
              console.log("Reward successfully withdrawed");
          }else{
              console.log("The POT is exhausted!!!!")
          }

          fetchTotalReward();
          fetchReferral();
          setLoading(false)
      }).catch( (err) => {
          console.log("There was an error : " + err)
          setLoading(false)

      });
  }


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

  return (

<div className={`${biggerThan1400 && "container"} ${biggest1400 && "container-fluid"}`} >
 
 <div className="row">

   <div className="col-md-4 col-4">
     <div className="card">
       <div className=' mt-2'>
         <img className='p-3' src="images/step1-referrallink.png"/>
         <span className="main-pink">Step 1</span>
         <h4>Get a referral link</h4>
         <p>Connect a wallet & generate your referral link in the
           Referral section.</p>
       </div>
     </div>
   </div>

   <div className="col-md-4 col-4">
     <div className="card">
       <img className='p-3' src="images/step2invitefriend-img.png"/>
       <span className="main-pink">Step 2</span>
       <h4>Invite friends</h4>
       <p>Invite your friends & register with your referral link.</p>
     </div>
   </div>


   <div className="col-md-4 col-4">
     <div className="card">
       <img className='p-3' src="images/step3earnsosx-img.png"/>
       <span className="main-pink">Step 3</span>
       <h4>Earn SOSX</h4>
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



 <div className="row font-weight-bold">
   <div className="col-xl-6">
     <div className="card h-auto">
       <div className="card-header border-0 pb-0">
         <h4 className='font-weight-bold' >My Referral Link</h4>
       </div>
       <div className="card-body">
         <div className="bg-dark rounded">
           <div className="d-flex justify-content-between align-items-center">
             <span>https://socialx.io?ref={account.replace(/(.{13})..+/, "$1…")}</span>
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
         <div className="bg-dark pt-4 rounded">
           <h4>You will get</h4>
           <div className='font-weight-bold d-flex justify-content-between pt-2'>
             <div>
               <p>Social Mining</p>
               <h3 className='pt-3 font-weight-bold'> 25%</h3>
             </div>

             <div>
             <p>Staking </p>
             <h3 className='pt-3 font-weight-bold'> 10%</h3>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>

   <div className="col-xl-6">
     <div className="row">
       <div className="col-md-12 col-6">
         <div className="card p-1 pl-2 h-auto">
           <div className="card-body">
             <img src="images/swapcoin-referral.svg" className="p-2 referral-rewards"/>
             <span className="main-pink">Social Mining Referral</span>

             <h4 className='pt-2'>{viewReferralReward} SOSX</h4>
             <button type="button" className="btn btn-primary mt-3 ">Withdraw</button>
           </div>
         </div>
       </div>

       <div className="col-md-12 col-6">
         <div className="card  p-1 pl-2 h-auto">
           <div className="card-body">
             <img src="images/swapcoin-referral.svg" className="p-2 referral-rewards"/>
             <span className="main-pink">Staking Referral</span>
             
             <h4 className='pt-2' >{viewReferralReward} SOSX</h4>
             <button type="button" className="btn btn-primary mt-3  ">Withdraw</button>

           </div>
         </div>
       </div>
     </div>
   </div>
 </div>

 <div className="wrapper">
   <div className="tabs">
     <div className="tab">
       <input type="radio" name="css-tabs" id="tab-1" checked className="tab-switch"/>
       <label htmlFor="tab-1" className="tab-label">Referral List</label>

       <div className="tab-content">
         <h4>Referral List</h4>
         <span>All your referral friends in one place.</span>
         <hr/>
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

        {referrals.map(ref => 

             <div className="row pb-3">
               
             <div className="col-xl-12">
               <div className="d-flex justify-content-between">
  
                 <div className="col-xl-2">
                   <p className="text-white fs-12">{ref.address.replace(/(.{13})..+/, "$1…")}</p>
                
                 </div>
  
                 <div className="col-xl-3">
                   <p className="text-white fs-12">0</p>
          
                 </div>
  
                 <div className="col-xl-3">
                   <p className="text-white fs-12">
                     {ref.amount}
                   </p>
                 </div>
                 <div className="col-xl-2">
                   <p className="text-white fs-12">{ref.amount}</p>
                 </div>
               </div>
             </div>
           </div>
        )}

       </div>

       <div className="tab-content">
         <h4 className="fs-18 mb-0">Referral List</h4>
         <span className="fs-14">All your referral friends in one place.</span>
         <hr/>
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

        {referrals.map(ref => 

             <div className="row pb-3">
               
             <div className="col-xl-12">
               <div className="d-flex justify-content-between">
  
                 <div className="col-xl-2">
                   <p className="text-white fs-12">{ref.address.replace(/(.{13})..+/, "$1…")}</p>
                
                 </div>
  
                 <div className="col-xl-3">
                   <p className="text-white fs-12">0</p>
          
                 </div>
  
                 <div className="col-xl-3">
                   <p className="text-white fs-12">
                     {ref.amount}
                   </p>
         
  
                 </div>
  
                 <div className="col-xl-2">
                   <p className="text-white fs-12">{ref.amount}</p>
                 </div>
               </div>
             </div>
           </div>
        )}
       </div>

     </div>
     <div className="tab">
       <input type="radio" name="css-tabs" id="tab-2" className="tab-switch"/>
       <label htmlFor="tab-2" className="tab-label">Social Mining</label>
       <div className="tab-content">
         <h4>Referral List</h4>
         <span>All your referral friends in one place.</span>
         <hr/>
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

        {referrals.map(ref => 

             <div className="row pb-3">
               
             <div className="col-xl-12">
               <div className="d-flex justify-content-between">
  
                 <div className="col-xl-2">
                   <p className="text-white fs-12">{ref.address.replace(/(.{13})..+/, "$1…")}</p>
                
                 </div>
  
                 <div className="col-xl-3">
                   <p className="text-white fs-12">0</p>
          
                 </div>
  
                 <div className="col-xl-3">
                   <p className="text-white fs-12">
                     {ref.amount}
                   </p>
         
  
                 </div>
  
                 <div className="col-xl-2">
                   <p className="text-white fs-12">{ref.amount}</p>
                 </div>
               </div>
             </div>
           </div>
        )}

       </div>
     </div>
     <div className="tab">
       <input type="radio" name="css-tabs" id="tab-3" className="tab-switch"/>
       <label htmlFor="tab-3" className="tab-label">Staking</label>
       <div className="tab-content">
         <h4>Referral List</h4>
         <span>All your referral friends in one place.</span>
         <hr/>
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

        {referrals.map(ref => 

             <div className="row pb-3">
               
             <div className="col-xl-12">
               <div className="d-flex justify-content-between">
  
                 <div className="col-xl-2">
                   <p className="text-white fs-12">{ref.address.replace(/(.{13})..+/, "$1…")}</p>
                
                 </div>
  
                 <div className="col-xl-3">
                   <p className="text-white fs-12">0</p>
          
                 </div>
  
                 <div className="col-xl-3">
                   <p className="text-white fs-12">
                     {ref.amount}
                   </p>
         
  
                 </div>
  
                 <div className="col-xl-2">
                   <p className="text-white fs-12">{ref.amount}</p>
                 </div>
               </div>
             </div>
           </div>
        )}

       </div>
     </div>
   </div>
 </div>


</div>
  )
}
