import { useEffect, useState } from "react";
import useToast from "hooks/useToast";
import { useStakingContract, useSosxContract } from "hooks/useContract";
import { useMediaPredicate } from "react-media-hook";
import BigNumber from "big-number";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import axios from "axios";
import ConnectWalletButton from "components/ConnectWalletButton";
import { cleanNumber } from "utils/amount";
import UserStakingLogs from "./components/userStaking";
import ConfirmStakingModal from "./components/ConfirmStakingModal";
import { useModal } from "@pancakeswap/uikit";

export default function Staking() {
  const contract = useStakingContract();
  const { account } = useActiveWeb3React();
  const tokenContract = useSosxContract();
  const [balance, setUserBalace] = useState(0);
  const { toastError, toastSuccess } = useToast();
  const [stakingClass, setStakingClass] = useState(1);
  const [stakingInterest, setStakingInterest] = useState(0);
  const [amountToStake, setamountToStake] = useState(0);
  const [pendingTx, setPendingTx] = useState(false);
  const [hasReferral, setHasReferral] = useState(false);
  const [referralAddress, setReferralAddress] = useState("");
  const [totalAmountStaked, setTotalAmountStaked] = useState(0);
  const [numberOfActiveStake, setNumberOfActiveStake] = useState(0);
  const [activeStakes, setActiveStakes] = useState([]);
  const [allowanceValue, setAllowanceValue] = useState(0);
  const [activateStake, setActivatestake] = useState(true);
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
    listUserStaking();
    getSOSXPrice();
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

    contract.getActiveStakeCount().then((activeStakes) => {
      setNumberOfActiveStake(Number(activeStakes));
    });

    tokenContract.allowance(account, contract.address).then((allowance) => {
      setAllowanceValue(allowance);
    });
  };

  const listUserStaking = async () => {
    let list = [];
    for (let i = 0; i < numberOfActiveStake; i++) {
      await contract.getStakeInfo(i).then((stakeInstance) => {
        contract.getCurrentStakeClass(i).then((stakeClass) => {
          let instance = {
            amount: Number(stakeInstance[0] / 10 ** 18),
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
        });
      });
    }

    setActiveStakes(list);
  };

  useEffect(() => {
    if (account !== undefined) {
      tokenContract.balanceOf(account).then((bal) => {
        let balance = Number(bal / 10 ** 18);
        setUserBalace(balance);
      });

      const loadUI = async () => {
        setLoadingData(true);
        await stakingDetails();
        await listUserStaking();
        setLoadingData(false);
      };

      loadUI();
      listUserStaking();
    }
  }, []);

  const handleAmountChange = async (event) => {
    let _amountToStake = Number(event.target.value);

    if (_amountToStake > balance) {
      setInsufficientBalance(true);
    } else {
      setInsufficientBalance(false);
    }

    if (allowanceValue != 0) {
      setActivatestake(false);
    } else {
      setActivatestake(true);
    }

    const p = event.target.value;
    const t = stakingClass == 1 ? 0.25 : stakingClass == 2 ? 0.5 : 1;
    const r = stakingClass == 1 ? 0.29 : stakingClass == 2 ? 0.64 : 1.45;
    const n = 12;

    let interest = compoundInterest(p, t, r, n);

    setamountToStake(_amountToStake);
    setStakingInterest(Number(interest));
  };

  const compoundInterest = (p, t, r, n) => {
    let amount = p * Math.pow(1 + r / n, n * t);

    return amount.toFixed(2);
  };

  const handleStake = async () => {
    let decimals = BigNumber(10).pow(18);

    let result = BigNumber(amountToStake).multiply(decimals);

    setLoading(true);
    let stake = await contract.stakeToken(
      result.toString(),
      "0x0000000000000000000000000000000000000001",
      stakingClass
    );

    if (stake) {
      setActivatestake(true);
      setLoading(false);
      toastSuccess("Staking Transaction successfully sent");
    } else {
      toastError("Could not stake");
    }
  };

  const handleSubmit = async () => {
    if (Number(amountToStake) < 1) {
      toastError("Yo must stake a minimum of 1 token");
    }

    let decimals = BigNumber(10).pow(18);
    let result = BigNumber(amountToStake).multiply(decimals);
    if (Number(allowanceValue) >= amountToStake * 10 ** 18) {
      onPresentConfirmModal();
    } else {
      const tx = await tokenContract.populateTransaction.approve(
        contract.address,
        result.toString()
      );

      let signer = contract.signer;
      let trans = await signer.sendTransaction(tx);
      setPendingTx(true);

      toastSuccess(
        "Approval transaction sent. You can stake after the transaction is mined."
      );
      onPresentConfirmModal();
    }
  };

  const [onPresentConfirmModal] = useModal(
    <ConfirmStakingModal
      onConfirm={handleSubmit}
      attemptingTxn={pendingTx}
      recipient={""}
      allowedSlippage={0}
      onAcceptChanges={function (): void {
        throw new Error("Function not implemented.");
      }}
    />,
    true,
    true,
    "ConfirmStakingModal"
  );

  const biggest1500 = useMediaPredicate("(min-width: 1500px)");


  return (
    <>
    <div className="container-fluid d-flex flex-wrap flex-column flex-sm-row flex-direction-row-reverse"
      style={{ gap: '20px' }}>
      <div style={{ flex: `${biggest1500 ? ' 1 1 17%' : ' 1 1 40%'}`, gap: '20px', maxWidth: '100%' }} className="stake-amount">
        <div className="card h-100">
          <div className="card-body">
            <div className="flex-row d-flex justify-content-between w-100   ml-auto mr-0 align-items-center"
            >
              <div className="data-content">
                <div className="d-flex  align-items-end">
                  <h2 className="mb-3 main-pink">$3,210.34</h2>
                </div>
                <div>
                  <div>
                    <h4>STAKED SOSX</h4>
                  </div>
                  <p className="mb-0">Actively staking</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div style={{ flex: `${biggest1500 ? ' 1 1 17%' : ' 1 1 40%'}`, gap: '20px', maxWidth: '100%' }} className="rate-amount">
        <div className="card h-100">
          <div className="card-body">
            <div className="flex-row d-flex justify-content-between w-100   ml-auto mr-0 align-items-center"
            >
              <div className="data-content">
                <div className="d-flex  align-items-end">
                  <h2 className="mb-3 main-pink">16.4%</h2>
                </div>
                <div>
                  <div>
                    <h4>DAILY APY</h4>
                  </div>
                  <p className="mb-0">Daily Staking Rewards %</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div style={{ flex: `${biggest1500 ? ' 1 1 17%' : ' 1 1 40%'}`, gap: '20px', maxWidth: '100%' }} className="price-box">
        <div className="card h-100 datarow justify-content-between">
          <div className="card-body">
            <div className="flex-row d-flex flex-wrap justify-content-between w-100 align-items-center"
            >
              <div className="data-content">
                <div className="d-flex align-items-end">
                  <h2 className="mb-3 main-pink">0.000948</h2>
                </div>
                <div className="d-flex flex-column align-items-start ">
                  <div className="d-flex align-items-center">
                    <h4>TOTAL REWARDS</h4>
                  </div>
                  <p className="mb-0">Total SOSX you gained staking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: `${biggest1500 ? ' 1 1 17%' : ' 1 1 40%'}`, gap: '20px', maxWidth: '100%' }} className="dao-box">
        <div className="card h-100 datarow justify-content-between">
          <div className="card-body">
            <div
              className="flex-row d-flex justify-content-between w-100   ml-auto mr-0 align-items-center">
              <div className="data-content">
                <div className="d-flex align-items-end">
                  <h2 className="mb-3 main-pink">Price SOSX</h2>
                </div>
                <div>
                  <div>
                    <h4>DAOX MEMBERSHIP</h4>
                  </div>
                  <p className="mb-0">Create, vote and final pick.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div style={{ flex: '2 1 30%', maxWidth: '100%' }}>
        <div className="card d-flex flex-column">
          <div className="card-body">
            <div className="d-flex align-items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px"
                y="0px" viewBox="0 0 239 116" xmlSpace="preserve"
                style={{ width: ' 40px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }}>
                <path
                  d="M58,0C25.97,0,0,25.97,0,58c0,32.03,25.97,58,58,58s58-25.97,58-58C116,25.97,90.03,0,58,0z M58,90.78 c-18.11,0-32.78-14.68-32.78-32.78c0-18.11,14.68-32.78,32.78-32.78S90.78,39.89,90.78,58C90.78,76.11,76.11,90.78,58,90.78z">
                </path>
                <g>
                  <path className="st0"
                    d="M151.87,48.3l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C165.69,53.57,157.14,53.57,151.87,48.3z">
                  </path>
                  <path className="st0"
                    d="M215.27,112.05l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C229.09,117.32,220.55,117.32,215.27,112.05z">
                  </path>
                  <path className="st0"
                    d="M126.64,92.96l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09l-25.23,25.23 c-5.27,5.27-13.82,5.27-19.09,0l0,0C121.37,106.77,121.37,98.23,126.64,92.96z">
                  </path>
                  <path className="st0"
                    d="M190.73,29.21l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09L209.82,48.3 c-5.27,5.27-13.82,5.27-19.09,0l0,0C185.46,43.03,185.46,34.48,190.73,29.21z">
                  </path>
                </g>
              </svg>
              <h4>STAKE SOSX</h4>
            </div>
            <p className="mb-4">Become a DAOX member while receiving daily rewards</p>
            <div className="bg-input mb-3 py-2 px-3 rounded mt-4
">
              <div className="d-flex justify-content-between align-items-center"><span><input type="number"
                                onChange={(e) => handleAmountChange(e)}
                                defaultValue={0}
                className="form-control fs-28" required 
              /> </span>
                <h3 className=" pt-3 pb-3 " style={{ color: ' #8e8e8e' }}>SOSX</h3>
              </div>
            </div>
            <button className="btn mr-1 btn-primary btn-lg mt-2"
              type="button">STAKE SOSX</button>

          </div>

        </div>
        <div className="card d-flex flex-column mt-4">

          <div className="card-body">




            <div className="d-flex align-items-center mt-2 mb-2"><img src="images/prize-pool-icon.png"
              className="title-icon" />
              <h4>RETURN CALCULATOR</h4>
            </div>
            <p>Investment Return Estimator</p>
            <div className=" mt-4 ">
              <div className="d-flex h-100 justify-content-between mt-3 mb-3">
                <div>
                  <div className="d-flex w-auto m-auto">
                    <h3>6%</h3>
                  </div>
                  <p className="success mb-0 main-pink pt-2 fs-14">Reward % </p>
                </div>
                <div>

                  <div className="d-flex w-auto m-auto">
                    <h3>Lv 3</h3>
                  </div>
                  <p className="success main-pink mb-0 pt-2 fs-14">DAO Level</p>
                </div>
                <div>

                  <div className="d-flex w-auto m-auto">
                    <h3>1,320,930.00</h3>
                  </div>
                  <p className="success mb-0 main-pink pt-2 fs-14">Estimate yearly Return</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div style={{ flex: '1 1 60%', maxWidth: '100%' }}>
        <div className="card d-flex flex-column h-100">

          <div className="card-body">
            <div className="d-flex align-items-center mb-2">

              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1" id="Capa_1" x="0px" y="0px" width="503.379px" height="503.379px"
                viewBox="0 0 503.379 503.379" style={{
                  width: '30px',
                  fill: 'rgb(255, 0, 204)',
                  marginRight: '10px', height: '30px'
                }}


                xmlSpace="preserve">
                <g>
                  <path
                    d="M458.091,128.116v326.842c0,26.698-21.723,48.421-48.422,48.421h-220.92c-26.699,0-48.421-21.723-48.421-48.421V242.439   c6.907,1.149,13.953,1.894,21.184,1.894c5.128,0,10.161-0.381,15.132-0.969v211.594c0,6.673,5.429,12.104,12.105,12.104h220.92   c6.674,0,12.105-5.432,12.105-12.104V128.116c0-6.676-5.432-12.105-12.105-12.105H289.835c0-12.625-1.897-24.793-5.297-36.315   h125.131C436.368,79.695,458.091,101.417,458.091,128.116z M159.49,228.401c-62.973,0-114.202-51.229-114.202-114.199   C45.289,51.229,96.517,0,159.49,0c62.971,0,114.202,51.229,114.202,114.202C273.692,177.172,222.461,228.401,159.49,228.401z    M159.49,204.19c49.618,0,89.989-40.364,89.989-89.988c0-49.627-40.365-89.991-89.989-89.991   c-49.626,0-89.991,40.364-89.991,89.991C69.499,163.826,109.87,204.19,159.49,204.19z M227.981,126.308   c6.682,0,12.105-5.423,12.105-12.105s-5.423-12.105-12.105-12.105h-56.386v-47.52c0-6.682-5.423-12.105-12.105-12.105   s-12.105,5.423-12.105,12.105v59.625c0,6.682,5.423,12.105,12.105,12.105H227.981z M367.697,224.456h-131.14   c-6.682,0-12.105,5.423-12.105,12.105c0,6.683,5.423,12.105,12.105,12.105h131.14c6.685,0,12.105-5.423,12.105-12.105   C379.803,229.879,374.382,224.456,367.697,224.456z M367.91,297.885h-131.14c-6.682,0-12.105,5.42-12.105,12.105   s5.423,12.105,12.105,12.105h131.14c6.685,0,12.104-5.42,12.104-12.105S374.601,297.885,367.91,297.885z M367.91,374.353h-131.14   c-6.682,0-12.105,5.426-12.105,12.105c0,6.685,5.423,12.104,12.105,12.104h131.14c6.685,0,12.104-5.42,12.104-12.104   C380.015,379.778,374.601,374.353,367.91,374.353z">
                  </path>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
              </svg>



              <h4>STAKING LOG</h4>
            </div>
            <p></p>
            <p className="mb-4">Keep track of your investments activities.</p>
            <p></p>

            <div className="tab-bg" style={{ height: '430px', overflow: 'auto', paddingRight: '5px' }}>


              <div className="rank-item mt-3 d-flex  px-4 pt-4 mt-0"
                style={{ justifyContent: 'space-between' }}>
                <div className="header-item mr-3">Date</div>
                <div className="header-item mr-3"> Action</div>
                <div className="header-item mr-3">Reward</div>
                <div className="header-item"> <div className="d-flex flex-column flex-sm-row "> <button className="btn ml-2 mt-2 pr-4 pl-4 w-100 btn-primary"
                  type="button">CLAIM</button> <button className="btn ml-2 mt-2  w-100 btn-primary"
                    type="button">UNSTAKE</button></div></div>
              </div>
              <div className="rank-item mt-3 d-flex px-4 pt-4 mt-0"
                style={{ justifyContent: 'space-between' }}>
                
                <div className="header-item mr-3">Date</div>
                <div className="header-item mr-3"> Action</div>
                <div className="header-item mr-3">Reward</div>
                <div className="header-item"> <div className="d-flex flex-column flex-sm-row "> <button className="btn ml-2 mt-2 pr-4 pl-4 w-100 btn-primary"
                  type="button">CLAIM</button> <button className="btn ml-2 mt-2  w-100 btn-primary"
                    type="button">UNSTAKE</button></div></div>
              </div>
              <div className="rank-item mt-3 d-flex px-4 pt-4 mt-0"
                style={{ justifyContent: 'space-between' }}>
                 <div className="header-item mr-3">Date</div>
                <div className="header-item mr-3"> Action</div>
                <div className="header-item mr-3">Reward</div>
                
                <div className="header-item"> <div className="d-flex flex-column flex-sm-row "> <button className="btn ml-2 mt-2 pr-4 pl-4 w-100 btn-primary"
                  type="button">CLAIM</button> <button className="btn ml-2 mt-2  w-100 btn-primary"
                    type="button">UNSTAKE</button></div></div>
              </div>
              <div className="rank-item mt-3 d-flex px-4 pt-4 mt-0"
                style={{ justifyContent: 'space-between' }}>
                 <div className="header-item mr-3">Date</div>
                <div className="header-item mr-3"> Action</div>
                <div className="header-item mr-3">Reward</div>
                
                <div className="header-item"> <div className="d-flex flex-column flex-sm-row "> <button className="btn ml-2 mt-2 pr-4 pl-4 w-100 btn-primary"
                  type="button">CLAIM</button> <button className="btn ml-2 mt-2  w-100 btn-primary"
                    type="button">UNSTAKE</button></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
