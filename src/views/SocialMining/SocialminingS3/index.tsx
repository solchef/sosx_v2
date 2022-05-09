import Link from "next/link";
import NavMining from "../NavMining";
import axios from "axios";
import { useState } from "react";
import router from 'next/router';

export default function SocialminingS3() {
  //    const posts = axios('http://localhost:3001/api/posts')
  //    console.log(posts)

  const [email_address, setEmailAdrress] = useState("");
  const [socialpostlink, setsocialpostlink] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
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
    let response = await fetch('/utils/api/posts', {
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

  return (
    <>
      <NavMining />
      <form onSubmit={handlePost}>
      <div className="container-fluid pt-3">
        <div className="card p-3 mt-3">
          <div className="row">
            <div className="col-lg-6">
              
                <div className="card-body">
                  <h3 className="text-white font-weight-semibold">
                    CLAIM YOUR DAILY SOCIALX TOKEN REWARDS.
                  </h3>
                  <p className="text-white pr-3 mb-3 mt-3">
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
                    />
                  </div>
                </div>
                {/* <button value="submit">Save</button> */}
             
            </div>

            <div className="col-lg-6">
              <div className="card-body">
                <h3 className="main-pink font-weight-semibold">
                  GET PAID FOR LIFE!
                </h3>
                <p className="text-white pr-3 mb-3 mt-3">
                  Rewards are automatic and instant with no staking required.
                  This resolves the issue of locking up finances in hopes of a
                  better interest rate. Rewards are dependent on network trading
                  activity. The more you share the more the network is utilized,
                  the more holders will receive.
                </p>

                <div
                  className="g-recaptcha"
                  data-sitekey="6Lc920sdAAAAAPWFtqUUzsVEG3m6-FI9JrgaPydB"
                >
                  <div style={{ width: "304px", height: " 78px" }}>
                    <div>
                      <iframe
                        e-mail_address="reCAPTCHA"
                        src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6Lc920sdAAAAAPWFtqUUzsVEG3m6-FI9JrgaPydB&amp;co=aHR0cHM6Ly9zb2NpYWx4LmlvOjQ0Mw..&amp;hl=en-GB&amp;v=gZWLhEUEJFxEhoT5hpjn2xHK&amp;size=normal&amp;cb=nmrivyw3ltdo"
                        width="304"
                        height="78"
                        role="presentation"
                        name="a-3lwznuebekb5"
                        frameBorder="0"
                        scrolling="no"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                      ></iframe>
                    </div>
                    <textarea
                      id="g-recaptcha-response"
                      name="g-recaptcha-response"
                      className="g-recaptcha-response"
                      style={{
                        width: "250px",
                        height: "40px",
                        border: "1px solid rgb(193, 193, 193)",
                        margin: "10px 25px",
                        padding: "0px",
                        display: "none",
                      }}
                    ></textarea>
                  </div>
                  <iframe style={{ display: "none" }}></iframe>
                </div>
              </div>
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
                  onClick={() => router.replace('/x-mining')}
                >
                  Claim Your Tokens
                </button>
             
          </div>
        </div>
      </div>
      </form>
    </>
  );
}