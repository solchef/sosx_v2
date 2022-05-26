import Link from "next/link";
import NavMining from "../NavMining";
import axios from "axios";
import { useState } from "react";
import router from 'next/router';
import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";
import { useMediaPredicate } from "react-media-hook";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import useToast from "hooks/useToast";
import { useTranslation } from 'contexts/Localization';
import { Trans } from "react-i18next";

export default function SocialminingS3() {

  const {account} = useActiveWeb3React();
  const [email_address, setEmailAdrress] = useState("");
  const [socialpostlink, setsocialpostlink] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const recaptchaRef = React.useRef(null);
  const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
  const biggest1400 = useMediaPredicate("(max-width: 1400px)");
  const { t } = useTranslation();
  const { toastError, toastSuccess } = useToast();

  const handlePost = async (e) => {
    e.preventDefault();
    recaptchaRef.current.getValue();
    console.log(recaptchaRef)
    const reward=localStorage.getItem("reward");
    // reset error and message
    setError('');
    setMessage('');

    // fields check
    if (!email_address || !socialpostlink) return console.log(t("'All fields are required'"));

    // post structure
    let post = {
      email_address,
      socialpostlink,
      reward,
        createdAt: new Date().toISOString(),
    };

    let response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(post),
    });

    let data = await response.json();
    // console.log(data)

    let fd = new FormData();
      fd.append('my-name', 'SOSX');
      fd.append('url-reward',  socialpostlink);
      fd.append('referral',  '0x0000000000000000000000000000000000000001');
      fd.append('wallet',  account);
      fd.append('reward-email', email_address);
      fd.append('reward', reward)

  const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
  };
    let rest = await axios.post("https://socialx.io/inviteemail.php", 
        fd,
          {headers}

    );

    if (data.success) {
        // reset the fields
        setEmailAdrress('');
        setsocialpostlink('');
        // set the message
        
        toastSuccess(t("Details successfully submiotted for verifications"));
        router.replace('/x-mining')
        return setMessage(data.message);
    } else {
        // set the error
        toastSuccess(t("Error During Submission"));
    }

   
};


// const onReCAPTCHAChange = async (captchaCode) => {
//   // If the reCAPTCHA code is null or undefined indicating that
//   // the reCAPTCHA was expired then return early
//   if (!captchaCode) {
//     console.log("no captcha")
//   }
//   // alert(`Hey, ${email_address}`);
//   let captchabody= {
//     email_address,
//     captcha: captchaCode
//   };
//   try {
//     const response = await fetch("/api/register", {
//       method: "POST",
//       body: JSON.stringify(captchabody),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.ok) {
//       // If the response is ok than show the success alert
//       alert("Email registered successfully");
//     } else {
//       // Else throw an error with the message returned
//       // from the API
//       const error = await response.json();
//       throw new Error(error.message)
//     }
//   } catch (error) {
//     alert("Something went wrong!!!");
//   } finally {
//     // Reset the reCAPTCHA when the request has failed or succeeeded 
//     // so that it can be executed again if user submits another email.
    
//     recaptchaRef.current.reset();
   
//   }
// };



  return (
    <>
       <div className={`${biggerThan1400 && "container"} pt-3 ${biggest1400 && "container-fluid"}`} >
      <NavMining />
      <form onSubmit={handlePost}>
   
        <div className="card p-3 mt-5">
          <div className="row">
            <div className="col-lg-6">
              
                <div className="card-body">
                  <h3 className="text-white font-weight-bold">
                    {t("CLAIM YOUR DAILY SOCIALX TOKEN REWARDS.")}
                  </h3>
                  <p className="text-white fs-16 pr-3 mb-3 mt-3">
                    {t("Please provide your metamask wallet, and a direct URL link to the post you shared. The transfer is not immediate as they get individually reviewed and might come in bulk")}.
                  </p>

                  <div className="row mb-3">
                    <input
                      className="input1"
                      type="text"
                      name="title"
                      onChange={(e) => setEmailAdrress(e.target.value)}
                      value={email_address}
                      placeholder={t("E-mail Address")}
                      required
                    />
                  </div>

                  <div className="row mb-3">
                    <input
                      className="input1"
                      type="text"
                      id="fname"
                      name="firstname"
                      value={account}
                      readOnly
                      placeholder="Metamask Wallet Address"
                    />
                  </div>

                  <div className="row mb-3">
                    <input
                      className="input1"
                      type="text"
                      name="postlink"
                      onChange={(e) => setsocialpostlink(e.target.value)}
                      value={socialpostlink}
                      placeholder={t("Link to Social Media post")}
                      required
                    />
                  </div>
                </div>
                {/* <button value="submit">Save</button> */}
             
            </div>

            <div className="col-lg-6">
              <div className="card-body">
                <p className="main-pink fs-22  font-weight-bold">
                  {t("GET PAID FOR LIFE!")}
                </p>
                <p className="text-white fs-16 pr-3 mb-3 mt-3">
                <Trans i18nKey="description.part1">
                  Rewards are automatic and instant with no staking required. This resolves the issue of locking up finances in hopes of a
                  better interest rate. Rewards are dependent on network trading
                  activity. The more you share the more the network is utilized,
                  the more holders will receive.
                  </Trans>
                </p>
                
                <ReCAPTCHA
              ref={recaptchaRef}
              size="normal"
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              // onChange={}
            />
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
                  {t("Reset")}
                </button>
              </a>
            </Link>

           
                <button
                  value="submit"
                  className="btn btn-primary mr-3 mb-3"
                  // onClick={() => router.replace('/x-mining')}
                >
                  {t("Claim Your Tokens")}
                </button>
             
          </div>
        </div>
      
      </div>
      </form>
      </div>
    </>
  );
}