import { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import useToast from "hooks/useToast";
import { useDaoStakingContract, useSosxContract } from "hooks/useContract";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useMediaPredicate } from "react-media-hook";
import BigNumber from "big-number";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { MaxUint256 } from "@ethersproject/constants";
import { calculateGasMargin } from "utils";
import axios from "axios";
import ConnectWalletButton from "components/ConnectWalletButton";
import web3 from "web3";
import { cleanNumber } from "utils/amount";
import LoaderDisplay from "../Games/components/loader";

const BorderCard = styled.div`
  border: solid 1px ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  padding: 16px;
`;

export default function DaoStaking() {
  const contract = useDaoStakingContract();
  const { account } = useActiveWeb3React();
  const tokenContract = useSosxContract();
  const [balance, setUserBalace] = useState(0);
  const { toastError, toastSuccess } = useToast();
  const [stakingClass, setStakingClass] = useState(1);
  const [stakingInterest, setStakingInterest] = useState(0);
  const [amountToStake, setamountToStake] = useState(0);
  const [stakingList, setstakingList] = useState([]);
  const [hasReferral, setHasReferral] = useState(false);
  const [referralAddress, setReferralAddress] = useState("");
  const [totalAmountStaked, setTotalAmountStaked] = useState(0);
  const [numberOfActiveStake, setNumberOfActiveStake] = useState(0);
  const [activeStakes, setActiveStakes] = useState([]);
  const [allowanceValue, setAllowanceValue] = useState(0);
  const [activateStake, setActivatestake] = useState(true);
  const [showDetails, setShowDetails] = useState(-1);
  const [insufficientBalance, setInsufficientBalance] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
  const biggest1400 = useMediaPredicate("(max-width: 1400px)");
  const [price, setPrice] = useState(Number);
  const [marketCap, setMarketCap] = useState(Number);

  const getSOSXPrice = async () => {
    const getSOSXValue = await axios.get(
      "https://api.pancakeswap.info/api/v2/tokens/0xeE52def4a2683E68ba8aEcDA8219004c4aF376DF",
      {}
    );
    setPrice(parseFloat(getSOSXValue.data.data.price));
    setMarketCap(parseFloat(getSOSXValue.data.data.price_BNB));
  };
  useEffect(() => {
    getSOSXPrice();
    listUserStaking();
  }, []);

  const stakingDetails = async () => {
    contract.getTotalStakeAmount().then((stakeAmount) => {
      setTotalAmountStaked(stakeAmount);
    });

    contract.hasReferral().then((ref) => {
      ref ? setHasReferral(true) : setHasReferral(false);
    });

    contract.getMyReferral().then((referral) => {
      referral
        ? setReferralAddress(referral)
        : setReferralAddress("0x0000000000000000000000000000000000000001");
    });


    contract.getStakeCount().then((activeStakes) => {
      setNumberOfActiveStake(Number(activeStakes));
    });

    tokenContract.allowance(account, contract.address).then((allowance) => {
      if (Number(allowance) > 0) {
        // alert("ff")
        setActivatestake(true);
      }
      setAllowanceValue(allowance);
    });
  };

  const handleUnstake = async (stakeID) => {

    const unstake = await contract.returnTokens(0);

    if (unstake) {
      toastSuccess("Successfully sent unstake SOSX transaction, Check balance in your wallet");
    }

  }


  const handleClaim = async () => {

  }

  const listUserStaking = async () => {
    let list = [];
    let count = []
    console.log(numberOfActiveStake);
    for (let i = 0; i < numberOfActiveStake; i++) {
      await contract.getStakeInfo(i).then(stakeInstance => {

        // if (stakeInstance) {
        // contract.getCurrentStakeClass(i).then(stakeClass => {
        // console.log("here")
        let stakeAmt = Number(stakeInstance[0] / 10 ** 18);
        let stakeClass = stakeAmt > 100000 ? 2 : stakeAmt > 1000000 ? 3 : 1;
        console.log(stakeInstance)
        count.push(i)
        let instance = {
          amount: stakeAmt,
          isWithdrawed: Boolean(stakeInstance[1]),
          stakeDate: new Date(stakeInstance[2] * 1000).toLocaleString(
            "en-US",
            { timeZone: "America/New_York" }
          ),
          referral: stakeInstance[3],
          rewardAmount: Number(stakeInstance[4]),
          penalty: Number(stakeInstance[5]),
          stakingClass: stakeClass,
          periodElapsed: stakeClass,
        };

        list.push(instance);


        // });

        // }


      });

      // console.log(stakeInstance)
    }

    setActiveStakes(list);
    console.log(list)
    console.log(count)
    // clearTimeout(listTimeOut);


    // console.log(list)
  };

  const loadUI = async () => {
    setLoadingData(true);
    await stakingDetails();
    await listUserStaking();
    // console.log(activeStakes)
    setLoadingData(false);
  };


  useEffect(() => {
    if (account !== undefined) {
      tokenContract.balanceOf(account).then((bal) => {
        let balance = Number(bal / 10 ** 18);
        setUserBalace(balance);
      });

      loadUI();

    }
  }, [account]);

  const handleAmountChange = async (event) => {
    let _amountToStake = Number(event.target.value);

    if (_amountToStake > balance) {
      setInsufficientBalance(true);
    } else {
      setInsufficientBalance(false);
    }

    let decimals = new BigNumber(10).pow(18);

    let result = new BigNumber(_amountToStake).multiply(decimals);
    // console.log(result.toString())

    // let finalAmount = this.web3.utils.toBN(result.toString())
    // let finalAmount = result;
    // console.log(_amountToStake)
    console.log(allowanceValue);
    console.log(result);
    // console.log(allowanceValue)
    if (allowanceValue != 0) {
      setActivatestake(false);
    } else {
      setActivatestake(true);
    }

    const p = event.target.value;
    const t = stakingClass == 1 ? 0.25 : stakingClass == 2 ? 0.5 : 1;
    const r = stakingClass == 1 ? 0.06 : stakingClass == 2 ? 0.09 : 0.12;
    const n = 12;

    let interest = compoundInterest(p, t, r, n);

    // this.setState({stakingInterest:interest})
    // console.log(_amountToStake);
    setamountToStake(_amountToStake);
    setStakingInterest(Number(interest));
  };

  const compoundInterest = (p, t, r, n) => {
    let amount = p * Math.pow(1 + r / n, n * t);
    //    amount = amount.toFixed(2)
    //    const interest = amount - p;
    return amount.toFixed(2);
  };

  // const listTimeOut =  setTimeout(function(){
  //   // location.reload();
  //   console.log("trying lo toad agaun")
  //   listUserStaking()
  // }, 10000); 

  const handleSubmit = async () => {
    console.log(allowanceValue);


    if (amountToStake < 1) {
      toastError("You Must stake at least one token. Check your input");
      // referralAddress;
      return;
    }

    if (stakingClass == 2 && amountToStake < Number(process.env.NEXT_PUBLIC_LEVEL2)) {

      toastError("DAO Level 2 required you to stake more than 100000 SOSX");
      return;
    }

    if (stakingClass == 3 && amountToStake < Number(process.env.NEXT_PUBLIC_LEVEL3)) {

      toastError("DAO Level 3 required you to stake more than 100000 SOSX");
      return;
    }
    // console.log()
    if (amountToStake < balance) {
      if (Number(allowanceValue) > amountToStake) {
        // console.log(referralAddress);
        setLoading(true);
        let stake = await contract.stakeToken(
          amountToStake + "000000000000000000",
          "0x0000000000000000000000000000000000000001",
          stakingClass
        );

        if (stake) {
          setActivatestake(true);
          setLoading(false);
          loadUI();
          toastSuccess("Staking Transaction successfully sent");

        } else {
          toastError("Could not stake");
        }
      } else {
        const tx = await tokenContract.populateTransaction.approve(
          contract.address,
          amountToStake + "000000000000000000"
        );
        let signer = contract.signer;
        await signer.sendTransaction(tx);
        toastSuccess("Approval transaction sent. You can stake after the transaction is mined.");
        // 	toastError("token allowance not yet set");
        loadUI()
      }
    } else {
      toastError("Insufficient Balance");
    }
  };

  const getLevel = (amount) => {
    if (
      amount >= process.env.NEXT_PUBLIC_LEVEL1 &&
      amount < process.env.NEXT_PUBLIC_LEVEL2
    ) {
      return 1;
    }

    if (
      amount >= process.env.NEXT_PUBLIC_LEVEL2 &&
      amount < process.env.NEXT_PUBLIC_LEVEL3
    ) {
      return 2;
    }

    if (amount >= process.env.NEXT_PUBLIC_LEVEL3) {
      return 3;
    }
  };

  return (
    <>
      <div style={{ gap: '20px' }} className={`container-fluid d-flex flex-wrap flex-column flex-sm-row flex-direction-row-reverse`} >
        <div style={{ flex: '1 25%', gap: '20px' }}>
          <div className="card w-100 h-100">
            <div className="d-flex h-100 justify-content-between align-items-center">
              <div>
                Img
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center">
                  <span className="align-self-end main-pink">5 MO</span>
                  <h4 style={{ fontSize: '30px', letterSpacing: '3px', fontWeight: '900' }} className="main-pink">$1,000.00</h4>
                  <p className="main-pink" >SOSX Staked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: '1 25%', gap: '20px' }}>
          <div className="card w-100 h-100">
            <div className="d-flex h-100 justify-content-between align-items-center">
              <div>
                Img
              </div>
              <div className="d-flex flex-column justify-content-between">
                <h4 style={{ fontSize: '30px', letterSpacing: '3px', fontWeight: '900' }} className="main-pink" >DAO3
                </h4>
                <br />
                <h4 style={{ fontSize: '30px', letterSpacing: '3px', fontWeight: '900' }} className="main-pink" >Level3
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: '1 25%', gap: '20px' }}>
          <div className="card w-100 h-100">
            <div className="d-flex h-100 justify-content-between align-items-center">
              <div>
                Img
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column align-items-center">
                  <span className="align-self-end main-pink">+2.5%</span>
                  <h4 style={{ fontSize: '30px', letterSpacing: '3px', fontWeight: '900' }} className="display-3 main-pink">${price.toFixed(8)}</h4>
                  <p className="main-pink" >SOSX price</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: '1 30%', gap: '20px' }}>

          <div className="card d-flex flex-column h-100">
            <div className="card-header border-0 pl-0 pt-0">
              <h4 className="fs-18 ">Stake SOSX for DAO Level</h4>
            </div>
            <div className="card-body">
              <div className="bg-dark mb-3 p-3 rounded">
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    <input
                      type="text"
                      className="form-control fs-18"
                      required
                      onChange={(e) => handleAmountChange(e)}
                      defaultValue={0}
                    />
                  </span>
                  <span className="text-white fs-18">SOSX</span>
                </div>
              </div>

              <div className="bg-dark p-3 rounded">
                <div className="d-flex justify-content-between">
                  <div className="small2">
                    <div className="success pt-2 pb-2">Reward Interest: </div>
                    <div className="d-flex align-items-center">
                      <div className="text-white fs-18"> {stakingClass == 1 ? 6 : stakingClass == 2 ? 9 : 12}%</div>
                    </div>
                  </div>
                  <div className="small2">
                    <div className="success mr-1 pb-2git  pt-2">Estimated </div>
                    <div className="d-flex align-items-center">
                      <div className="text-white fs-18">
                        {" "}
                        {stakingInterest} SOSX
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer pt-0 foot-card  border-0">
              {account ? (
                <>
                  {activateStake ? (
                    <div className="d-flex card-footer pt-0 pb-0 foot-card  border-0 justify-content-around">
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="btn btn-primary mr-1 btn-lg w-100 text-nowrap mt-3"
                      //   disabled={insufficientBalance || activateStake}
                      >
                        {loading ? "Approving..." : "Approve"}
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary ml-1 btn-lg w-100 text-nowrap mt-3"
                        disabled
                      >
                        Stake
                      </button>
                    </div>
                  ) : (
                    <div className="d-flex card-footer pt-0 pb-0  foot-card  border-0 justify-content-around">
                      <button
                        type="button"
                        className="btn btn-primary mr-1 btn-lg w-100 text-nowrap mt-3"
                        disabled
                      >
                        Approve
                      </button>
                      <button
                        type="button"
                        // disabled={insufficientBalance || activateStake}
                        onClick={handleSubmit}
                        className="btn btn-primary ml-1 btn-lg w-100 text-nowrap mt-3"
                      >
                        {loading ? "Staking.." : "Stake"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <ConnectWalletButton />
              )}
            </div>

          </div>
        </div>
        <div style={{ flex: '1 30%', gap: '20px' }}>
          <div className="card d-flex flex-column h-100">
            <div className="card-header border-0 p-0">
              <h4 className="fs-18">Staking Log</h4>
            </div>
            <div className="card-body">
              <div className="tab-bg">

                {stakingList.length == 0 ? (
                  <>
                    <div style={{ justifyContent: 'space-between' }} className="mt-3 d-flex p-4 mt-0  ranking-header"
                    >
                      <div className="header-item" >Rank</div>
                      <div style={{ width: ' 55px', textAlign: 'center' }} className="header-item" >Wallet</div>
                      <div className="header-item">Staking</div>
                    </div>


                    {/* {loadingData ? <div className='text-center'>Loading Data</div> : ''} */}
                    {activeStakes.length > 0 ?

                      <>












                        {activeStakes.map((stake, i) => (
                          <>
                            <ul
                              className="token-balance-list mb-2 mt-2"
                              onClick={() => {
                                showDetails == i
                                  ? setShowDetails(-1)
                                  : setShowDetails(i);
                              }}
                            >
                              <li>
                                <span className="justify-content-between success fs-12">
                                  Level {" "}
                                  {stake.stakingClass == 1
                                    ? 1
                                    : stake.stakingClass == 2
                                      ? 2
                                      : 3}{" "}

                                </span>
                              </li>
                              <li>
                                <span className="success fs-12">
                                  {stake.amount.toFixed(3)}
                                </span>
                              </li>
                              <i className="fa fa-chevron-down"></i>
                            </ul>


                            <div
                              style={{
                                display: showDetails == i ? "block" : "none",
                              }}
                              className="faq-header"
                            >
                              <div className="bg-dark rounded">
                                <ul
                                  className="token-balance-list mb-2 mt-2"
                                  onClick={() => {
                                    showDetails == i
                                      ? setShowDetails(-1)
                                      : setShowDetails(i);
                                  }}
                                >
                                  <li>
                                    <span className="justify-content-between success fs-12">
                                      {" "}
                                      Amount Staked: <br />
                                      {stake.amount.toFixed(3)} SOSX
                                    </span>
                                  </li>
                                  <li>
                                    <span className="justify-content-between success fs-12">
                                      {" "}
                                      Rewards Gained: <br />
                                      {stake.amount.toFixed(3)} SOSX{" "}
                                    </span>
                                  </li>
                                </ul>

                                <ul className="token-balance-list mb-2 mt-2">
                                  <li>
                                    <span className="justify-content-between success fs-12">
                                      {" "}
                                      Date Staked: <br />
                                      {stake.stakeDate}
                                    </span>
                                  </li>

                                  <li>
                                    <span className="justify-content-between success fs-12">
                                      {" "}
                                      Duration Elapsed: <br />
                                      {(stake.periodElapsed / (24 * 60)).toFixed(
                                        0
                                      )}{" "}
                                      Days
                                    </span>
                                  </li>
                                </ul>

                                <ul
                                  className="token-balance-list mb-2 mt-2"
                                  onClick={() => {
                                    showDetails == i
                                      ? setShowDetails(-1)
                                      : setShowDetails(i);
                                  }}
                                >
                                  <li>
                                    <span className="justify-content-between success fs-12">
                                      {" "}
                                      Withdrawed: <br />
                                      {stake.isWithdrawed ? "Yes" : "No"}
                                    </span>
                                  </li>
                                  {/* <li>
                                <span className="justify-content-between success fs-12">
                                  {" "}
                                  Remaining Period: <br />
                                  {(
                                    (stake.stakingClass == 1
                                      ? 90
                                      : stake.stakingClass == 2
                                        ? 180
                                        : 360) -
                                    stake.periodElapsed / (24 * 60)
                                  ).toFixed(0)}{" "}
                                  Days
                                </span>
                              </li> */}
                                </ul>
                                {!stake.isWithdrawed ?

                                  <ul
                                    className="token-balance-list mb-2 mt-2"  >

                                    <li>
                                      <span className="justify-content-between success fs-12">
                                        <button onClick={() => handleClaim()} className="btn btn-success full-width">
                                          CLAIM REWARDS
                                        </button>
                                      </span>
                                    </li>
                                    <li>
                                      <span className="justify-content-between success fs-12">
                                        <button onClick={() => handleUnstake(i)} className="btn btn-primary">
                                          UNSTAKE
                                        </button>
                                      </span>
                                    </li>
                                  </ul>

                                  :

                                  <p></p>

                                }

                              </div>
                            </div>
                          </>
                        ))}


                      </>


                      :

                      <>

                        {/* <br />
                      <br />
                      <br />
                      <br />
                      <hr />
                      <hr />
                      <br />
                      <br />
                      <hr />
                      <div className="d-flex justify-content-center">

                        <span className="position-absolute mx-auto main-pink">No Data</span>

                      </div>

                      <hr />
                      <hr />
                      <hr /> */}

                        <div style={{ justifyContent: 'space-between' }} className="rank-item mt-3 d-flex px-4 pt-4 mt-0"
                        >
                          <div className="header-item">1</div>
                          <div className="header-item"  >
                            7640od72938640tr...</div >
                          <div className="header-item" > 1, 098, 000, 00</div >
                        </div >
                        <div style={{ justifyContent: 'space-between' }} className="rank-item mt-3 d-flex px-4 pt-4 mt-0"
                        >
                          <div className="header-item">1</div>
                          <div className="header-item"  >
                            7640od72938640tr...</div >
                          <div className="header-item" > 1, 098, 000, 00</div >
                        </div >
                        <div style={{ justifyContent: 'space-between' }} className="rank-item mt-3 d-flex px-4 pt-4 mt-0"
                        >
                          <div className="header-item">1</div>
                          <div className="header-item"  >
                            7640od72938640tr...</div >
                          <div className="header-item" > 1, 098, 000, 00</div >
                        </div >
                        <div style={{ justifyContent: 'space-between' }} className="rank-item mt-3 d-flex px-4 pt-4 mt-0"
                        >
                          <div className="header-item">1</div>
                          <div className="header-item"  >
                            7640od72938640tr...</div >
                          <div className="header-item"> 1, 098, 000, 00</div >
                        </div >



                      </>

                    }






                  </>
                ) : (
                  { stakingList }
                )}
              </div>
            </div>
          </div>
        </div >
        <div style={{ flex: '1 30%', gap: '20px' }}>
          <div className="card d-flex flex-column justify-content-between h-100">

            <div className="bg-dark p-3 rounded">
              <div className="d-flex align-items-center justify-content-between">
                <div className="text-white fs-28 mr-3" > 6%</div>
                <div className="d-flex flex-column align-items-center">
                  <span className="align-self-end main-pink">DAO Level 1</span>
                  <h4 style={{ fontSize: '30px' }}>100,000</h4>
                  <span className="main-pink" >Dealy Rewared</span>
                </div>
              </div>
            </div>
            <div className="bg-dark p-3 rounded">
              <div className="d-flex align-items-center justify-content-between">
                <div className="text-white fs-28 mr-3" > 10%</div>
                <div className="d-flex flex-column align-items-center">
                  <span className="align-self-end main-pink">DAO Level 2</span>
                  <h4 style={{ fontSize: '30px' }}>100,000K+</h4>
                  <span className="main-pink" >Staking</span>
                </div>
              </div>
            </div>



            <div className="bg-dark p-3 rounded">
              <div className="d-flex align-items-center justify-content-between">
                <div className="text-white fs-28 mr-3"> 16%</div>
                <div className="d-flex flex-column align-items-center">
                  <span className="align-self-end main-pink">DAO Level 3</span>
                  <h4 style={{ fontSize: '30px', letterSpacing: '3px' }}>1,0000.00+</h4>
                  <span className="main-pink" >SOSX</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div >
    </>
  );
}







