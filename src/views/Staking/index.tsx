import { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import useToast from "hooks/useToast";
import { useStakingContract, useSosxContract } from "hooks/useContract";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useMediaPredicate } from "react-media-hook";
import BigNumber from "big-number";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { MaxUint256 } from "@ethersproject/constants";
import { calculateGasMargin } from "utils";
import axios from "axios";
import ConnectWalletButton from "components/ConnectWalletButton";
import { cleanNumber } from "utils/amount";
import UserStakingLogs from "./components/userStaking";
import ConfirmStakingModal from "./components/ConfirmStakingModal";
import { useModal } from "@pancakeswap/uikit";
import { useTranslation } from 'contexts/Localization'

export default function Staking() {
  const contract = useStakingContract();
  const { account } = useActiveWeb3React();
  const tokenContract = useSosxContract();
  const [balance, setUserBalace] = useState(0);
  const { toastError, toastSuccess } = useToast();
  const [stakingClass, setStakingClass] = useState(1);
  const [stakingInterest, setStakingInterest] = useState(0);
  const [amountToStake, setamountToStake] = useState(0);
  const [stakingList, setstakingList] = useState([]);
  const [pendingTx, setPendingTx] = useState(false)
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
  const { t } = useTranslation();
  
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
      await contract.getStakeInfo(i).then(stakeInstance => {
         
          // if (stakeInstance) {
            contract.getCurrentStakeClass(i).then(stakeClass => {
              console.log("here")
              
              console.log(i)
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
            })
           
          // }
        
      });

      // console.log(stakeInstance)
    }

    setActiveStakes(list);
    // console.log(list)
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
        // console.log(activeStakes)
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

    let decimals = BigNumber(10).pow(18);

    let result = BigNumber(_amountToStake).multiply(decimals);
    // console.log(result.toString())

    // let finalAmount = this.web3.utils.toBN(result.toString())
    // let finalAmount = result;
    // console.log(_amountToStake)
    // console.log(allowanceValue);
    // console.log(result);
    // console.log(allowanceValue)
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

    // this.setState({stakingInterest:interest})

    setamountToStake(_amountToStake);
    setStakingInterest(Number(interest));
  };

  const compoundInterest = (p, t, r, n) => {
    let amount = p * Math.pow(1 + r / n, n * t);
    //    amount = amount.toFixed(2)
    //    const interest = amount - p;
    return amount.toFixed(2);
  };


  // const handleUnstake = async () => {

    const handleStake = async () => {
      let decimals = BigNumber(10).pow(18);
  
      let result = BigNumber(amountToStake).multiply(decimals);
      // console.log(Number(allowanceValue),amountToStake )
  
      // console.log(referralAddress);
      setLoading(true);
      // alert('ss')
      let stake = await contract.stakeToken(
        result.toString(),
        "0x0000000000000000000000000000000000000001",
        stakingClass
      );
  
      // alert('ss')
      if (stake) {
        setActivatestake(true);
        setLoading(false);
        // loadUI();
        toastSuccess("Staking Transaction successfully sent");
      } else {
        toastError("Could not stake");
      }
    };

  // }

  const handleSubmit = async () => {
    if (Number(amountToStake) < 1) {
      toastError("Yo must stake a minimum of 1 token");
    }

    let decimals = BigNumber(10).pow(18);
    let result = BigNumber(amountToStake).multiply(decimals);
    console.log(result - Number(allowanceValue));
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
      // setTransaction(tx);
      onPresentConfirmModal();
    }
    
  };


    const [onPresentConfirmModal] = useModal(
    <ConfirmStakingModal
		  //   trade={trade}
		  //   originalTrade={tradeToConfirm}
		  //   onAcceptChanges={handleSubmit}
		  //   attemptingTxn={attemptingTxn}
		  //   txHash={txHash}
		  //   recipient={recipient}
		  //   allowedSlippage={allowedSlippage}
		  onConfirm={handleSubmit} attemptingTxn={pendingTx} recipient={""} allowedSlippage={0} onAcceptChanges={function (): void {
			  throw new Error("Function not implemented.");
		  } }    //   swapErrorMessage={swapErrorMessage}
    //   customOnDismiss={handleConfirmDismiss}
    />,
    true,
    true,
    'ConfirmStakingModal',
  )

  return (
    <>
      <div
        className={`${biggerThan1400 && "container"} ${biggest1400 && "container-fluid"
          }`}
      >
        <div className="row mb-2">
          <div className="col-sm-3 col-6">
            <div className="card overflow-hidden"  style={{rowGap:"20px"}} >
              <h4>10,000,000,000</h4>
              <span className="pt-1 pb-1">{t("Total supply")}</span>
            </div>
          </div>
          <div className="col-sm-3 col-6">
            <div className="card overflow-hidden" style={{rowGap:"20px"}}> 
              <h4>${marketCap.toFixed(8)}</h4>
              <span className="pt-1 pb-1">{t("Market Cap")}</span>
            </div>
          </div>
          <div className="col-sm-3 col-6">
            <div className="card overflow-hidden" style={{rowGap:"20px"}}> 
              <h4>${price.toFixed(8)}</h4>
              <span className="pt-1 pb-1">{t("Price")}</span>
              {/* <div className="daily-avr warning fs-12">
								<i className="fa fa-chevron-down"></i> 0.5% 7D
							</div> */}
            </div>
          </div>

          <div className="col-sm-3 col-6">
            <div className="card overflow-hidden" style={{rowGap:"20px"}}> 
              <h4>321139778.950</h4>
              <span className="pt-1 pb-1">{t("Circulating Supply")}</span>
              {/* <div className="daily-avr success fs-12">
								<i className="fa fa-chevron-up"></i> 1.5% 7D
							</div> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 mb-4">
            <div className="card d-flex flex-column h-100">
              <div className="card-header border-0 pl-0 pt-0">
                <h4 className="fs-18 ">{t("Stake SOSX")}</h4>
              </div>
                <div className="card-body">
                  <div className="bg-dark mb-3 p-3 rounded">
                    <div className="d-flex justify-content-between align-items-center">
                      <span>
                        <input
                          type="text"
                          className="form-control"
                          required
                          onChange={(e) => handleAmountChange(e)}
                          defaultValue={0}
                        />
                      </span>
                      <span className="text-white fs-18">{t("SOSX")}</span>
                    </div>
                  </div>
                  <div className="bg-dark p-3 mb-3 rounded">
                    <div className="d-flex justify-content-between align-items-center">
                      <span>
                        <select
                          className="form-control  select-special"
                          onChange={(e) => {
                            setStakingClass(Number(e.target.value));

                            const p = amountToStake;
                            const t =
                              Number(e.target.value) == 1
                                ? 0.25
                                : Number(e.target.value) == 2
                                  ? 0.5
                                  : 1;
                            const r =
                              Number(e.target.value) == 1
                                ? 0.29
                                : Number(e.target.value) == 2
                                  ? 0.64
                                  : 1.45;
                            const n = 12;
                            setStakingInterest(
                              Number(compoundInterest(p, t, r, n))
                            );
                          }}
                        >
                          <option value={1}>3 </option>
                          <option value={2}>6 </option>
                          <option value={3}>12 </option>
                        </select>
                      </span>
                      <span className="text-white fs-18">{t("Months")}</span>
                    </div>
                  </div>
                  <div className="bg-dark p-3 rounded">
                    <div className="d-flex justify-content-between">
                      <div className="small2">
                        <div className="success mr-1">{t("Reward Interest:")} </div>
                        <div className="d-flex align-items-center">
                          <div className="text-white fs-14"> {stakingClass == 1 ? 29 : stakingClass == 2 ? 64 : 145}%</div>
                        </div>
                      </div>
                      <div className="small2">
                        <div className="success mr-1">{t("Estimated")} </div>
                        <div className="d-flex align-items-center">
                          <div className="text-white fs-14">
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
                      <div className="d-flex card-footer pt-0 pb-0 foot-card  border-0 justify-content-between">
                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="btn btn-primary mr-1 btn-lg w-100 text-nowrap mt-3"
                        //   disabled={insufficientBalance || activateStake}
                        >
                          {loading ? t("Approving..."): t("Approve")}
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary ml-1 btn-lg w-100 text-nowrap mt-3"
                          disabled
                        >
                          {t("Stake")}
                        </button>
                      </div>
                    ) : (
                      <div className="d-flex card-footer pt-0 pb-0  foot-card  border-0 justify-content-between">
                        <button
                          type="button"
                          className="btn btn-primary mr-1 btn-lg w-100 text-nowrap mt-3"
                          disabled
                        >
                          {t("Approve")}
                        </button>
                        <button
                          type="button"
                          // disabled={insufficientBalance || activateStake}
                          onClick={handleSubmit}
                          className="btn btn-primary ml-1 btn-lg w-100 text-nowrap mt-3"
                        >
                          {loading ? t("Staking..") : t("Stake")}
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

          <div className="col-xl-4 mb-4">
            <div className="card d-flex flex-column h-100">
              <div className="card-header border-0 p-0">
                <h4 className="fs-18">{t("Staking Summary")}</h4>
              </div>

              <div className="card-body flex-column d-flex justify-content-between">
                <div className="pt-4">
                  <div className="d-flex justify-content-between">
                    <p className="success mb-0 fs-12">{t("Total SOSX Staked")}</p>
                    <h4 className="mb-0 font-w600  fs-24 pb-3">
                      {cleanNumber(totalAmountStaked / 10 ** 18 + "")}
                    </h4>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="success mb-0 fs-12">{t("Active Stakes")}</p>
                    <h4 className="mb-0 font-w600  fs-24 pb-3">
                      {numberOfActiveStake}
                    </h4>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="success mb-0 fs-12">{t("Has Referral")}</p>
                    <h6 className="mb-0 font-w600  fs-24 pb-2">
                      {hasReferral ? t("Yes") : <b> {t("No")}</b>}
                    </h6>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="success mb-0 fs-12">{t("Show Archived")}</p>
                  <span className="MuiSwitch-root mb-0 font-w600  fs-24 pb-3">
                    <span
                      className="MuiButtonBase-root MuiIconButton-root jss5 MuiSwitch-switchBase MuiSwitch-colorSecondary"
                      aria-disabled="false"
                    >
                      <span className="MuiIconButton-label">
                        <input
                          className="jss8 MuiSwitch-input"
                          type="checkbox"
                          defaultValue="false"
                        />
                        <span className="MuiSwitch-thumb" />
                      </span>
                      <span className="MuiTouchRipple-root" />
                    </span>
                    <span className="MuiSwitch-track" />
                  </span>
                </div>
              </div>
              <div className="card-footer pt-0 mx-auto foot-card  border-0">
                <button
                  type="button"
                  className="btn btn-primary btn-lg mt-5"
                >
                  {t("Refresh Summarry")}
                </button>
              </div>
            </div>
          </div>

          <div className="col-xl-4 mb-4">
                    <UserStakingLogs/>
          </div>
        </div>
      </div>

	  
    </>
  );
}
