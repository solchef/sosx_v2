import Link from "next/link";
import NavMining from "../NavMining";
import axios from "axios";
import { useState } from "react";
import router from 'next/router';
import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";
import { useMediaPredicate } from "react-media-hook";

export default function SocialminingS3() {

  const [email_address, setEmailAdrress] = useState("");
  const [socialpostlink, setsocialpostlink] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const recaptchaRef = React.useRef(null);
  const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
  const biggest1400 = useMediaPredicate("(max-width: 1400px)");
  const handlePost = async (e) => {
    e.preventDefault();
    recaptchaRef.current.getValue();
    console.log(recaptchaRef)
    const reward=localStorage.getItem("reward");
    // reset error and message
    setError('');
    setMessage('');

    // fields check
    if (!email_address || !socialpostlink) return console.log('All fields are required');

    // post structure
    let post = {
      email_address,
      socialpostlink,
      reward,
        createdAt: new Date().toISOString(),
    };
    console.log(post)
    // save the post
    let response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(post),
    });
    console.log(response)
    // get the data
    let data = await response.json();
    console.log(data)

    if (data.success) {
        // reset the fields
        setEmailAdrress('');
        setsocialpostlink('');
        // set the message
        return setMessage(data.message);
    } else {
        // set the error
        return setError(data.message);
    }
};

const onReCAPTCHAChange = async (captchaCode) => {
  // If the reCAPTCHA code is null or undefined indicating that
  // the reCAPTCHA was expired then return early
  if (!captchaCode) {
    console.log("no captcha")
  }
  // alert(`Hey, ${email_address}`);
  let captchabody= {
    email_address,
    captcha: captchaCode
  };
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(captchabody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // If the response is ok than show the success alert
      alert("Email registered successfully");
    } else {
      // Else throw an error with the message returned
      // from the API
      const error = await response.json();
      throw new Error(error.message)
    }
  } catch (error) {
    alert("Something went wrong!!!");
  } finally {
    // Reset the reCAPTCHA when the request has failed or succeeeded 
    // so that it can be executed again if user submits another email.
    
    recaptchaRef.current.reset();
   
  }
};


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
                    CLAIM YOUR DAILY SOCIALX TOKEN REWARDS.
                  </h3>
                  <p className="text-white fs-16 pr-3 mb-3 mt-3">
                    Please provide your metamask wallet, and a direct URL link
                    to the post you shared. The transfer is not immediate as
                    they get individually reviewed and might come in bulk.
                  </p>

                  <div className="row mb-3">
                    <input
                      className="input1"
                      type="text"
                      name="title"
                      onChange={(e) => setEmailAdrress(e.target.value)}
                      value={email_address}
                      placeholder="E-mail Address"
                      required
                    />
                  </div>

                  <div className="row mb-3">
                    <input
                      className="input1"
                      type="text"
                      id="fname"
                      name="firstname"
                      value="0x684A4e50De4ff380E70DB03D7B61a4111395326a"
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
                      placeholder="Post Link"
                      required
                    />
                  </div>
                </div>
                {/* <button value="submit">Save</button> */}
             
            </div>

            <div className="col-lg-6">
              <div className="card-body">
                <p className="main-pink fs-22  font-weight-bold">
                  GET PAID FOR LIFE!
                </p>
                <p className="text-white fs-16 pr-3 mb-3 mt-3">
                  Rewards are automatic and instant with no staking required.
                  This resolves the issue of locking up finances in hopes of a
                  better interest rate. Rewards are dependent on network trading
                  activity. The more you share the more the network is utilized,
                  the more holders will receive.
                </p>

                
                <ReCAPTCHA
              ref={recaptchaRef}
              size="normal"
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={onReCAPTCHAChange}
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
                  Reset
                </button>
              </a>
            </Link>

           
                <button
                  value="submit"
                  className="btn btn-primary mr-3 mb-3"
                  // onClick={() => router.replace('/x-mining')}
                >
                  Claim Your Tokens
                </button>
             
          </div>
        </div>
      
      </div>
      </form>
      </div>
    </>
  );
}