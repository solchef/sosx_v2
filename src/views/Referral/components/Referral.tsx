import {  useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ConnectWalletButton from "components/ConnectWalletButton";
import {Popover, OverlayTrigger } from "react-bootstrap";
import {
    FacebookShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    TelegramIcon,
  } from "react-share";
  import { FacebookIcon, TwitterIcon } from "react-share";
  import { useMediaPredicate } from "react-media-hook";
  const Referral = ({account})=>{
    const [copied, setCopied] = useState(false);
    const [show, setShow] = useState(false);


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
      const lessThan700 = useMediaPredicate("(max-width:700px)");
return (
    <div 
   style={{ flex: '1 1 25%',maxWidth:'100%', order: lessThan700 ? "1" : "5" }}
    >
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
          <h4>MY REFERRAL LINK</h4>
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
        style={{ borderTop: "1px solid #1e2124", paddingTop: "30px", marginTop: "10px" }}
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

          <h4>YOU WILL GET</h4>
        </div>
        <p>You will get</p>
        <div className="font-weight-bold align-items-center d-flex justify-content-between ">
          <div className="d-flex flex-column align-items-center">
            <h4 className=" font-weight-bold"> &nbsp;</h4>
            <h2 className="main-pink">35%</h2>
          </div>
          <h4><i className="fa-solid main-pink mt-3 fa-angles-right"></i></h4>
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
)


}

export default Referral