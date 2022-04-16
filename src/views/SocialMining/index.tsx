import { } from 'react'
import { withStyles } from '@material-ui/core/styles';
import CopyToClipboard from "react-copy-to-clipboard";
import {InlineShareButtons} from 'sharethis-reactjs';
import {Popover, OverlayTrigger } from 'react-bootstrap';

export default function Referral() {
  
const [miningStage, setMiningStage] = [0];
const [account, setAccount] = [0];


const Navigation = (props) => {

    return(
        <ul className="nav nav-tabs nav-justified mb-3">
                <li className="nav-item">
                    <a onClick={props.onClick}   className={`nav-link ${props.stage == 0 && 'active'}`}>Steps</a>
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
                          'telegram',
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


    switch (miningStage) {
        case 0:

        return(
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
                            {/*
                                        <div class="d-inline-flex justify-content-center text-center w-100 m-auto"><i
                                                class="arrow-icon fa-solid fa-right-long"></i></div>
            
                                                */}
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
                           
                            <button onClick={() => ({setMiningStage(1)})} className="btn btn-primary mr-3">Get Free Tokens</button>
                           
                        </div>
                        </div>
                    </div>
                </div>
        )
            
            break;

            case 1:

        return(
                    <div className="content-body">
                            <ul className="nav nav-tabs nav-justified mb-3">
                            <li className="nav-item">
                                <a className="nav-link">Steps</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active">Copy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Affiliate</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Redeem</a>
                            </li>
                            </ul>
                            <div className="container pt-3">
                            {/* row */}
                            <div className="card p-3">
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="postimg m-3">
                                    <img src="images/post16.png" />
                                    </div>
                                </div>
                                <div className="col-md-6 pl-3 pt-3">
                                    <h4 className="fs-24 pr-3 pb-3">Post image &amp; caption on to your social media.</h4>
                                    <div className="reward-box mr-3">
                                    <i className="fab fa-facebook-f pr-2" /><i className="fab fa-twitter pr-1" /> <i className="fab fa-instagram pr-2" />
                                    <span>Reward = 500 SOSX</span>
                                    </div>
                                    <p className="pt-3 text-white">CAPTION: <a className="btn btn-dark mr-2 ml-2" id="twitter-toggle" onclick="toggleSocial('twitter')">Twitter</a> <a className="btn btn-dark" onclick="toggleSocial('instagram')" id="instagram-toggle">Instagram</a>
                                    </p>
                                    <div className="postcaption mr-3 mb-2" id="myCaption">
                                    <p id="twitter">
                                    $SOSX just launched there NEW TOKEN‼️ <br/> <br/>

                                        UP 800% ALREADY 🚀 <br/><br/>

                                        It will power a real life squid games on the blockchain that pays $1000-1,000,000 for participants who record themselve doing made up challanges by token holders!! 
                                        <br/><br/>
                                        @socialx_io $BNB  
                                        {/* 
                                                                #bscgem #moonshot
                                                                #NFT $ewt $sol */}
                                    </p>
                                    <p id="instagram" style={{display: 'none'}}>
                                    @socialxtoken just launched there NEW TOKEN‼️ <br/><br/>

                                                UP 800% ALREADY 📈🚀 <br/><br/>

                                                It will power a real life squid games on the blockchain that pays $1000-$1,000,000 for participants to record themselve doing made up challanges by token holders 🤯
                                                <br/><br/>
                                                www.socialx.io
                                        {/* 
                                                                @acatoken <br><br>

                                                                #bscgem #moonshot #mana 
                                                                #NFT */}
                                    </p>
                                    </div>
                                    <a href="images/post15.jpeg">
                                    <button className="btn btn-success mr-2 mt-3">Save Image</button>
                                    </a>
                                    <a onClick="copyDivToClipboard()">
                                    <button className="btn btn-dark mr-3 mt-3">Copy Caption</button>
                                    </a>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <div style={{textAlign: 'center'}}>
                                
                                    <button onClick={() => ({miningStage:0})} className="btn btn-outline-primary mr-2 mb-3">Back</button>
                                
                                
                                    <button onClick={() => ({miningStage:2})} className="btn btn-primary mr-3 mb-3">Continue</button>
                                
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                
        )
            
            break;

            case 2:

        return(
            <div className="content-body">
            <ul className="nav nav-tabs nav-justified mb-3">
              <li className="nav-item">
                <a className="nav-link">Steps</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Copy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active">Affiliate</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Redeem</a>
              </li>
            </ul>
            <div className="container pt-3">
              {/* row */}
              <div className="row pt-3">
                <div className="col-sm-12">
                  <h4 className="fs-24 text-center pb-3">TELL AT LEAST ONE PERSON EVERYDAY ABOUT SOCIALX.</h4>
                </div>
              </div>
              <div className="card p-3 mt-3">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-header border-0 pb-0">
                      <h4 className="fs-22">Affiliate Link</h4>
                    </div>
                    <div className="card-body">
                      <div className="bg-dark p-3 mb-3 rounded">
                        <div className="d-flex justify-content-between align-items-center pb-1">
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="fs-16">https://socialx.io?ref={.account.replace(/(.{18})..+/, "$1…")}</span>
                          <li className="nav-item ">
                            <CopyToClipboard
                            text={`https://socialx.io?ref=${account}`}
                            onCopy={() => {
                                // this.props.enqueueSnackbar('uruduf', {
                                //     variant: 'info',
                                //     anchorOrigin: {
                                //         vertical: 'bottom',
                                //         horizontal: 'left',
                                //     },
                                // });
                                }} > 
                                {/* <Button variant="outlined"><Trans i18nKey="referral_panel.copyButton" /></Button> */}
                                <a  className="nav-link" data-toggle="modal"><i className="fa-regular fa-clone" /></a>
                            </CopyToClipboard>

                            
                            </li>
                            <li className="nav-item ">
                                
                                {/* */}
                                <ShareComponent data={{url:`https://socialx.io?ref=${this.state.account}`, content:""}}/>
                            
                            </li>
                        </div>
                      </div>

                      
                      <div className="bg-dark p-3 mt-3 rounded">
                        <h4 className="fs-14 mb-2">You will get</h4>
                        <div className="row pt-3">
                          <div className="col-xl-6">
                            <div className="small mr-1">Social Mining</div>
                            <div className="small">
                              <div className="text-white font-w600  fs-18"> 25%</div>
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="small mr-1">Staking </div>
                            <div className="small">
                              <div className="text-white font-w600  fs-18"> 10%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 pl-3 pt-3">
                    <span className="fs-22 main-pink pr-3 pb-3 font-weight-semibold">5 MINS A DAY + 30 DAYS <br />= 1000X PROFITS!</span>
                    <p className="text-white pr-3 mb-3">
                        If one individual attempts to recruit a minimum of one person a day,
                        that person commits to the same experiment; we have calculated that a
                        single identity can be the connection between 536,870,912 individuals
                        and SocialX. Let us imagine a scenario where each associate purchased
                        a simple dollar worth or SocialX Token; we would be looking at a market c
                        ap equal to $536,870,912.
                    </p>
                  </div>
                </div>
              </div>
            </div>
              <div className="row">
                <div className="col-md-12">
                  <div style={{textAlign: 'center'}}>
                   
                      <button onClick={() => ({miningStage:1})} className="btn btn-outline-primary mr-2 mb-3">Back</button>
                   
                      <button onClick={() => ({miningStage:3})}  className="btn btn-primary mr-3 mb-3">Continue</button>
                    
                  
              </div>
            </div>
          </div>
          </div>
        )
            
            break;

            case 3:

        return(
            <div className="content-body">
                <ul className="nav nav-tabs nav-justified mb-3">
                <li className="nav-item">
                    <a className="nav-link">Steps</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Copy</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Affiliate</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active">Redeem</a>
                </li>
                </ul>
                <div className="container pt-3">
                <div className="card p-3 mt-3">
                    <div className="row">
                    <div className="col-md-6">
                        <div className="card-body">
                        <span className="fs-24 text-white pr-3 pb-3 font-weight-semibold">CLAIM YOUR DAILY SOCIALX
                            TOKEN REWARDS.</span>
                        <p className="text-white pr-3 mb-3 mt-3">
                            Please provide your metamask wallet, and a direct URL link to the post you shared.
                            The transfer is not immediate as they get individually reviewed and might come in
                            bulk.
                        </p>
                        <form action="/action_page.php">
                            <div className="row mb-3">
                            <input className="input1" value={this.state.account}  disabled type="text" id="fname" name="firstname" placeholder="Metamask Wallet Address" />
                            </div>
                        </form>
                        <form action="/action_page.php">
                            <div className="row mb-3">
                            <input className="input1" value={this.state.postUrl} onChange={(e) => ({postUrl:e.target.value})} type="text" id="fname" name="firstname" placeholder="Post Link" />
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                        <span className="fs-28 main-pink pr-3 pb-3 font-weight-semibold">GET PAID FOR LIFE!</span>
                        <p className="text-white pr-3 mb-3 mt-3">
                            Rewards are automatic and instant with no staking required. This resolves the issue
                            of locking
                            up finances in hopes of a better interest rate. Rewards are dependent on network
                            trading activity.
                            The more you share the more the network is utilized, the more holders will receive.
                        </p>
                        {/* <div className="g-recaptcha" data-sitekey="6Lc920sdAAAAAPWFtqUUzsVEG3m6-FI9JrgaPydB">
                            <div style={{width: '304px', height: '78px'}}>
                            <div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=2&k=6Lc920sdAAAAAPWFtqUUzsVEG3m6-FI9JrgaPydB&co=aHR0cHM6Ly9zb2NpYWx4LmlvOjQ0Mw..&hl=en-GB&v=gZWLhEUEJFxEhoT5hpjn2xHK&size=normal&cb=nmrivyw3ltdo" width={304} height={78} role="presentation" name="a-3lwznuebekb5" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" />
                            </div><textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none'}} defaultValue={""} />
                            </div><iframe style={{display: 'none'}} />
                        </div> */}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div style={{textAlign: 'center'}}>
                        <button onClick={() => ({miningStage:2})} className="btn btn-outline-primary mr-2 mb-3">Reset</button>
                        <button onClick={this.handleSubmit} className="btn btn-primary mr-3 mb-3">Claim Your Tokens</button>
                    </div>
                    </div>
                </div>
            </div>
        )
            
            break;

           
    
            default:

                return(
                    <div className="content-body">
                        <ul className="nav nav-tabs nav-justified mb-3">
                        <li className="nav-item">
                            <a className="nav-link active">Steps</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Copy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Affiliate</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Redeem</a>
                        </li>
                        </ul>
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
                                    {/*
                                                <div class="d-inline-flex justify-content-center text-center w-100 m-auto"><i
                                                        class="arrow-icon fa-solid fa-right-long"></i></div>
                    
                                                        */}
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
                                    {/*
                                                <div class="d-inline-flex justify-content-center text-center w-100 m-auto"><i
                                                        class="arrow-icon fa-solid fa-right-long"></i></div>
                    
                                                            */}
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
                                    
                                    <button onClick={() => ({miningStage:1})} className="btn btn-primary mr-3">Get Free Tokens</button>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                )
                    
    
        
 }
 