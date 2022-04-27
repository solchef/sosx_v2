import { useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import CopyToClipboard from "react-copy-to-clipboard";
import {InlineShareButtons} from 'sharethis-reactjs';
import {Popover, OverlayTrigger } from 'react-bootstrap';

export default function SocialMining() {
  
const [miningStage, setMiningStage] = useState(0);
const [account, setAccount] = useState(null);


const Navigation = (props) => {

    return(
        <ul className="nav nav-tabs nav-justified mb-3">
                <li className="nav-item">
                  <a   className={`nav-link ${props.stage == 0 && 'active'}`}>Steps</a>
                </li>
                <li className="nav-item">
                    <a onClick={props.onClick}   className={`nav-link ${props.stage == 1 && 'active'}`}>Copy</a>
                </li>
                <li className="nav-item">
                    <a onClick={props.onClick}  className={`nav-link ${props.stage == 2 && 'active'}`}>Affiliate</a>
                </li>
                <li className="nav-item">
                    <a onClick={props.onClick}  className={`nav-link ${props.stage == 3 && 'active'}`}>Redeem</a>
                </li>
        </ul>
    )
}

const ShareComponent = (props) => (
    <OverlayTrigger trigger="click" placement="right" overlay={
  
      <Popover id="popover-success">
          {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
          <Popover.Body>
          <InlineShareButtons
                      config={{
                      alignment: 'center',  // alignment of buttons (left, center, right)
                      color: 'social',      // set the color of buttons (social, white)
                      enabled: true,        // show/hide buttons (true, false)
                      font_size: 16,        // font size for the buttons
                      labels: 'cta',        // button labels (cta, counts, null)
                      language: 'en',       // which language to use (see LANGUAGES)
                      networks: [           // which networks to include (see SHARING NETWORKS)
                          'twitter',
                          'whatsapp',
                          'facebook',
                      
                      ],
                      padding: 12,          // padding within buttons (INTEGER)
                      radius: 4,            // the corner radius on each button (INTEGER)
                      show_total: true,
                      size: 40,             // the size of each button (INTEGER)
  
                      // OPTIONAL PARAMETERS
                      url: props.data.url, // (defaults to current url)
                      image: 'https://socialx.io/images/xlogo@2x.png',  // (defaults to og:image or twitter:image)
                      description: 'CURRENTLY LOOKING FOR HUMAN SUBJECTS TO PARTICIPATE IN A 30 DAY EXPERIMENT. COMPENSATION UP TO A $1 MILLION . WILL YOU PARTICIPATE? ',       // (defaults to og:description or twitter:description)
                      title: 'WELCOME TO THE SOCIAL EXPERIMENT. CURRENTLY LOOKING FOR HUMAN SUBJECTS TO PARTICIPATE IN A 30 DAY EXPERIMENT. COMPENSATION UP TO A $1 MILLION . WILL YOU PARTICIPATE? ',            // (defaults to og:title or twitter:title)
                      message: 'CURRENTLY LOOKING FOR HUMAN SUBJECTS TO PARTICIPATE IN A 30 DAY EXPERIMENT. COMPENSATION UP TO A $1 MILLION . WILL YOU PARTICIPATE?',     // (only for email sharing)
                      subject: 'WELCOME TO THE SOCIAL EXPERIMENT?',  // (only for email sharing)
                      username: 'socialx_io' // (only for twitter sharing)
                      }}
                      />
          </Popover.Body>
          </Popover>
    }>
     <a className="nav-link" data-toggle="modal"><i className="fa-solid fa-share-from-square" /></a> 
    </OverlayTrigger>
  );



        return(
            <>
            <div className="content-body">
                <Navigation  stage={0} />
                    <div className="container pt-3">
                    {/* row */}
                    <div className="row pt-3">
                        <div className="col-sm-12">
                        <h4 className="fs-24 text-center pb-3">CLAIM YOUR DAILY FREE SOSX TOKEN REWARD</h4>
                        </div>
                        <div className="row pt-3">
                        <div className="col-sm-4">
                            <div className="card overflow-hidden">
                            <div className="card-header align-items-start border-0 justify-content-between">
                                <div>
                                <img src="images/share-img.png" className="steps-img pb-3 justify-content-center pb-3 p-3" />
                                <p className="success mb-0 fs-12 pb-2 pt-2">Step 1</p>
                                <h4 className="fs-18 mb-0">Share</h4>
                                <span className="fs-12">Share given assignement on your social media every
                                    24h.</span>
                                </div>
                            </div>
                        </div>
                   
                        </div>
                        <div className="col-sm-4">
                            <div className="card overflow-hidden">
                            <div className="card-header align-items-start border-0 justify-content-between">
                                <div>
                                <img src="images/inv-img.png" className="steps-img pb-3 justify-content-center pb-3 p-3" />
                                <p className="success mb-0 fs-12 pb-2">Step 2</p>
                                <h4 className="fs-18 mb-0">Invite</h4>
                                <span className="fs-12">Attempt to recruit one person to join SocialX
                                    everyday.</span>
                                </div>
                            </div>
                            </div>
                       
                       
                        </div>
                        <div className="col-sm-4">
                            <div className="card overflow-hidden">
                            <div className="card-header align-items-start border-0 justify-content-between">
                                <div>
                                <img src="images/collect-img.png" className="steps-img pb-3 justify-content-center pb-3 p-3" />
                                <p className="success mb-0 fs-12 pb-2">Step 3</p>
                                <h4 className="fs-18 mb-0">Collect</h4>
                                <span className="fs-12">Log your progress and claim your free SOSX Token
                                    reward.</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                        <div style={{textAlign: 'center'}}>
                           
                            <button  className="btn btn-primary mr-3">Get Free Tokens</button>
                           
                        </div>
                        </div>
                    </div>
                </div>
                </>
          );
            


       
        
 }
 