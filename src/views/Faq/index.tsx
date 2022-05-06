import { useState } from "react";

const menus = {
    showA: false,
    showB: false,
    showC: false,
    showD: false,
    showE: false,
    showF: false,
    showG: false,
    showH: false,
    showI: false,
    showJ: false,
    showK: false,
    showL: false,
  };

export default function Faq() {
    const [showItem , setShowItem ] = useState({...menus});

    const { showA, showB, showC,showD, showE, showF, showG,showH, showI, showJ, showK, showL } = showItem;

    const mystyle=(type)=> {return {animation:" rotateMenu .5s ease-in-out forwards" ,display: type ? "": "none" ,transition: "all 0.5s ease"}}
    const toggleMenu = (event, type) => {
        event.stopPropagation();
    
        setShowItem({
          ...menus,
          [type]: !showItem[type]
        });
      };

    return (
        <div className="container-fluid pt-3">


            <div className="section">
                    <h5 className="section-heading">Frequenty Asked Question (FAQ)</h5>
                    <p className="p-main">Everything you need to know about SOSX is just one click away.</p>

                    <div className="faq-list container-fluid row">



                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showA")} className="faq-title">
                                    Which wallets can I use to buy on PancakeSwap or SOSX swap?

                                </h3>
                            </div>
                            <div  style={mystyle(showA)}
                            className="faq-header ">
                                <div className="faq-title p-1 hug">
                                    <a href="https://pancakeswap.finance/swap">
                                        https://pancakeswap.finance.. </a> MetaMask & TrustWallet - *MetaMask
                                    most
                                    recommended*

                                </div>
                            </div>
                        </div>
                      

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showB")} className="faq-title">
                                    Which Network is the ACA Token on?
                                </h3>
                            </div>
                            <div style={mystyle(showB)} className="faq-header">
                                <div className="faq-title p-1 hug">
                                    Binance Smart Chain Network
                                </div>
                            </div>
                        </div>

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showC")} className="faq-title">
                                    How to buy SOSX tokens with MetaMask?
                                </h3>
                            </div>
                            <div style={mystyle(showC)} className="faq-header">
                                <div className="faq-title p-1 hug">
                                    <p>1. Create a metamask wallet</p>
                                    <p>2. Add the BSC network</p>
                                    <p>3. Transfer BNB into Metamask</p>
                                    <p>4. Go to <a
                                        href="https://pancakeswap.finance/swap">https://pancakeswap...</a>
                                    </p>
                                    <p>5. Connect your MetaMask wallet</p>
                                    <p>6. The "from" is BNB and "to" is the SOSX token contract <a
                                        href="https://bscscan.com/token/0xee52def4a2683e68ba8aecda8219004c4af376df">
                                        (https://bscscan.com/token...)
                                    </a> can be
                                        found here, just copy and paste</p>
                                    <p>7. Choose the amount of BNB you want to use to buy SOSX</p>
                                </div>
                            </div>
                        </div>

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showD")} className="faq-title">
                                    Can anyone participate in the game?
                                </h3>
                            </div>
                            <div style={mystyle(showD)} className="faq-header">
                                <div className="faq-title p-1 hug">
                                    Yes, anyone can record them selves for the challenge videos. But to participate
                                    in the
                                    challenge
                                    creating and voting you will have to have some SOSX token staked. The amount of
                                    SOSX staked
                                    will
                                    determine the level of governance you have.
                                </div>
                            </div>
                        </div>

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showE")} className="faq-title">
                                    Can I do the daily activity to receive free SOSX token without buying any?

                                </h3>
                            </div>
                            <div style={mystyle(showE)} className="faq-header">
                                <div className="faq-title p-1 hug">
                                    Yes, the whole point of our social mining system is to make Crypto and SOSX
                                    token availble
                                    even to
                                    user who can’t purchase crypto. Just make a MetaMask wallet, complete the
                                    activity and
                                    redeem your SOSX tokens.
                                </div>
                            </div>
                        </div>

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showF")} className="faq-title">
                                    Do you have an affiliate program?
                                </h3>
                            </div>
                            <div style={mystyle(showF)} className="faq-header">
                                <div className="faq-title p-1 hug">
                                    Yes, you can get paid 25% on all social mining rewards and 10% on all staking
                                    rewards from
                                    your affiliates.
                                    To get your affiliate link please visit. <a
                                        href="https://app.socialx.io/referrals">https://app.socialx.io/referrals</a>
                                </div>
                            </div>
                        </div>

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showG")} className="faq-title">
                                    How can I sell my SOSX token?
                                </h3>
                            </div>
                            <div style={mystyle(showG)} className="faq-header">
                                <div className="faq-title p-1 hug">
                                    You can sell your SOSX on <a
                                        href="https://pancakeswap.finance/swap">https://pancakeswap... </a>
                                    or <a href="https://socialx.io/">socialx.io</a> swap
                                </div>
                            </div>
                        </div>

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showH")} className="faq-title">
                                    Will the Fee’s ever be reduced?
                                </h3>
                            </div>
                            <div style={mystyle(showH)} className="faq-header">
                                <div className="faq-title p-1 hug">
                                    No, the fee’s are exactly what power the whole SOSX gaming pool and rewards
                                    system.
                                </div>
                            </div>
                        </div>

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showI")} className="faq-title">
                                    How do I participate in the game?
                                </h3>
                            </div>
                            <div style={mystyle(showI)} className="faq-header">
                                <div className="faq-title p-1 hug">
                                    Each tier has an x amount you must hold and stake to gain access to the Dao
                                    Governance to
                                    participate
                                    in the different game roles
                                </div>
                            </div>
                        </div>

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showJ")} className="faq-title">
                                    What are all the ways to get paid from holding SOSX token?
                                </h3>
                            </div>
                            <div style={mystyle(showJ)} className="faq-header">
                                <div className="faq-title p-1 hug">
                                    SOSX pays in 8 different ways. Visit this link for details
                                </div>
                            </div>
                        </div>

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showK")} className="faq-title">
                                    How do we insure this is not a rug pull and it’s safe?
                                </h3>
                            </div>
                            <div style={mystyle(showK)} className="faq-header">
                                <div className="faq-title p-1 hug">
                                    Socialx has locked majority of it’s liquidity with a third party LP locker
                                    Unicrypt for
                                    6 month periods at a time. This insures our investors a safe investment and no
                                    possible
                                    rugpulls. Visit link for detials.
                                    <br />
                                    <a
                                        href="https://app.unicrypt.network/amm/pancake-v2/pair/0x31550eb6b4628ad83ee71ca1a05df4a40f622ba6">
                                        https://app.unicrypt.network...
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="faq col-12">
                            <div className="faq-header pointer">
                                <h3 onClick={(e) => toggleMenu(e, "showL")} className="faq-title">
                                    When do I see my affiliate commissions?
                                </h3>
                            </div>
                            <div style={mystyle(showL)} className="faq-header">
                                <div className="faq-title p-1 hug">
                                    <p>Once you send out your affiliate link to someone they must at least do 1 of
                                        the 2 to
                                        register on your
                                        end as an active affiliate.</p>
                                    <br />
                                    <p>1 . Stake any amount of SOSX token.</p>
                                    <p>2. Do at least 1 day of social mining post’s</p>
                                </div>
                            </div>
                        </div>

                    </div>
            </div>




        </div>
    )
}
