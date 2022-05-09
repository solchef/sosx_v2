import Link from 'next/link';
import NavMining from '../NavMining';


export default function SocialminingS3() {
   
    return (
        <>
                <NavMining/>

            <div className="container-fluid pt-3 pb-0">

                <div className="card p-3 mt-3">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card-body">
                                <h3 className="text-white font-weight-semibold">CLAIM YOUR DAILY SOCIALX
                                    TOKEN REWARDS.</h3>
                                <p className="text-white pr-3 mb-3 mt-3">
                                    Please provide your metamask wallet, and a direct URL link to the post you shared.
                                    The transfer is not immediate as they get individually reviewed and might come in
                                    bulk.
                                </p>
                                <form action="/action_page.php">
                                    <div className="row mb-3">
                                        <input className="input1" type="text" id="fname" name="firstname"
                                            placeholder="Email Address" />
                                    </div>
                                </form>
                                <form action="/action_page.php">
                                    <div className="row mb-3">
                                        <input className="input1" type="text" id="fname" name="firstname"
                                            value="0x684A4e50De4ff380E70DB03D7B61a4111395326a" readOnly
                                            placeholder="Metamask Wallet Address" />
                                    </div>
                                </form>
                                <form action="/action_page.php">
                                    <div className="row mb-3">
                                        <input className="input1" type="text" id="fname" name="firstname"
                                            placeholder="Post Link" />
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card-body">
                                <h3 className="main-pink font-weight-semibold">GET PAID FOR LIFE!</h3>
                                <p className="text-white pr-3 mb-3 mt-3">
                                    Rewards are automatic and instant with no staking required. This resolves the issue
                                    of locking
                                    up finances in hopes of a better interest rate. Rewards are dependent on network
                                    trading activity.
                                    The more you share the more the network is utilized, the more holders will receive.
                                </p>

                                <div className="g-recaptcha" data-sitekey="6Lc920sdAAAAAPWFtqUUzsVEG3m6-FI9JrgaPydB">
                                    <div style={{ width: '304px', height: ' 78px' }}>
                                        <div><iframe title="reCAPTCHA"
                                            src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6Lc920sdAAAAAPWFtqUUzsVEG3m6-FI9JrgaPydB&amp;co=aHR0cHM6Ly9zb2NpYWx4LmlvOjQ0Mw..&amp;hl=en-GB&amp;v=gZWLhEUEJFxEhoT5hpjn2xHK&amp;size=normal&amp;cb=nmrivyw3ltdo"
                                            width="304" height="78" role="presentation" name="a-3lwznuebekb5"
                                            frameBorder="0" scrolling="no"
                                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
                                        </div><textarea id="g-recaptcha-response" name="g-recaptcha-response"
                                            className="g-recaptcha-response"
                                            style={{ width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', display: 'none' }}></textarea>
                                    </div><iframe style={{ display: 'none' }}></iframe>
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
                                <button className="btn btn-outline-primary mr-2 mb-3">Reset</button>
                            </a>
                        </Link>

                        <Link href="/x-mining">

                            <a>
                                <button className="btn btn-primary mr-3 mb-3">Claim Your Tokens</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}
