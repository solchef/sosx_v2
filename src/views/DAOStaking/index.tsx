import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import useToast from "hooks/useToast";
import { useDaoStakingContract, useSosxContract } from "hooks/useContract";
import { useMediaPredicate } from "react-media-hook";
import BigNumber from "big-number";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import UserStaking from "./components/userStaking";
import ConfirmStakingModal from "./components/ConfirmStakingModal";
import { useModal } from "@pancakeswap/uikit";
import Statistics from "./components/statistics";
import DaoMemebrship from "./components/DaoMemebrship";
import { getDaoLevel } from "views/Games/hooks/getDaoLevel";
import { formatFixedNumber, getDecimalAmount } from "utils/formatBalance";
import { useTranslation } from 'contexts/Localization';
import { Trans } from "react-i18next";
import { Modal, ModalHeader } from "react-bootstrap";
import ConnectWalletButton from "components/ConnectWalletButton";


export default function DaoStaking() {
  const contract = useDaoStakingContract();
  const { account } = useActiveWeb3React();
  const tokenContract = useSosxContract();
  const [balance, setUserBalace] = useState(0);
  const { toastError, toastSuccess } = useToast();
  const [stakingClass, setStakingClass] = useState(1);
  const [stakingInterest, setStakingInterest] = useState(0);
  const [amountToStake, setamountToStake] = useState(0);
  const [stakelist, setStakeList] = useState([]);
  const [activeStakes, setActiveStakes] = useState([]);
  const [allowanceValue, setAllowanceValue] = useState(0);
  const [activateStake, setActivatestake] = useState(true);
  const [reward, setReward] = useState(true);
  const [showDetails, setShowDetails] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [pendingTx, setPendingTx] = useState(false);
  const [estimateDaoLevel, setEstimateDaoLevel] = useState(0);
  const [transactionState, setTransactionState] = useState(1);
  const [txHash, setTxHash] = useState("");
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setLoading(false);
    if (account !== undefined) {

      tokenContract.balanceOf(account).then((bal) => {
        let balance = formatFixedNumber(bal, 3, 18);
        setUserBalace(Number(balance));
      });

      listUserStaking();
      
      tokenContract.allowance(account, contract.address).then((allowance) => {
        allowance = Number(formatFixedNumber(allowance, 3, 18));
        if (allowance > 0) {
          setActivatestake(true);
        }
        setAllowanceValue(allowance);

      });
    }
}, [account]);

  const listUserStaking = async () => {
    const list = [];
    let rew = 0;
    contract.getStakeCount().then((stakes) => {
      setActiveStakes([]);
      for (let i = 0; i < stakes; i++) {
        contract.getStakeInfo(i).then((stakeInstance) => {
          contract.calculatePeriods(i).then((period) => {
          let stakeAmt = Number(stakeInstance[0] / 10 ** 18);
          let stakeClass = stakeAmt > 100000 ? 2 : stakeAmt > 1000000 ? 3 : 1;
          let instance = {
            stakeID: i,
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
          // console.log(stakeClass)
         let rate = stakeClass == 1 ? 0.06 : stakeClass == 2 ? 0.09 : 0.12;
          rew = rew + Number(calculateInterest(12, stakeAmt, period, rate));
          console.log(rew)
          setReward(rew);
          list.push(instance)
          // if (!instance.isWithdrawed) {
          setActiveStakes((activeStakes) => [...activeStakes, instance]);
          // }
          // if (!instance.isWithdrawed) {
          setStakeList((activeStakes) => [...activeStakes, instance]);
          // }
        });
      });
      }
    });
  };

  const calculateInterest = (timeLocked, amount, periods, rate) => {
    let t = periods/360;
    let r = rate;
    let n = 12;
    let p = amount;
    let amt = p * Math.pow(1 + r / n, n * t);
    // amt = amt.toFixed(3);
    const interest = (amt - p).toFixed(4);

    return interest;
  };

  const handleAmountChange = async (event) => {
    let _amountToStake = Number(event.target.value);
    let level = getDaoLevel(_amountToStake);
    setEstimateDaoLevel(level);
    if (allowanceValue > amountToStake) {
      setActivatestake(true);
    } else {
      setActivatestake(false);
    }

    const p = event.target.value;
    const t = stakingClass == 1 ? 0.25 : stakingClass == 2 ? 0.5 : 1;
    const r = stakingClass == 1 ? 0.06 : stakingClass == 2 ? 0.09 : 0.12;
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
    let level = getDaoLevel(amountToStake);
    let result = BigNumber(amountToStake).multiply(decimals);
    setLoading(true);
    let stake = await contract.stakeToken(
      result.toString(),
      "0x0000000000000000000000000000000000000001",
      level
    );

    await listUserStaking();
    if (stake) {
      setActivatestake(true);
      setLoading(false);
      toastSuccess("Staking Transaction successfully sent");
      handleConfirmDismiss();
    } else {
      toastError("Could not stake");
    }
  };

  const handleClaimReward = async (i) => {
    toastError("Rewards not yet available for claim.");
  };

  const handleUnStake = async (instance) => {
    let decimals = BigNumber(10).pow(18);

    try {
      let result = BigNumber(amountToStake).multiply(decimals);
      setLoading(true);

      const tx = await contract.returnTokens(instance);

      if (tx) {
        setActivatestake(true);
        setLoading(false);
        toastSuccess("Staking Transaction successfully sent");
        listUserStaking();
      } else {
        toastError("Could not unstake");
      }
    } catch (e) {
      toastError("Could not unstake at the moment.");
    }
  };

  const handleConfirmDismiss = useCallback(() => {
    setTransactionState(4);
  }, []);

  const handleSubmit = async () => {

    let bal = await tokenContract.balanceOf(account);

    bal = formatFixedNumber(bal, 3, 18);

    if (amountToStake < 1) {
      toastError(t("You must stake a minimum of 1 token"));
      return;
    }

    if (amountToStake > bal) {
      toastError(
        `Insufficient balance. Your wallet balance is ${bal} you need  ${(
          amountToStake - bal
        ).toFixed(3)} more SOSX to stake that amount. `
      );
      return;
    }

    let decimals = BigNumber(10).pow(18);
    let result = BigNumber(amountToStake).multiply(decimals);

    if (allowanceValue > amountToStake) {
      onPresentConfirmModal();
    } else {
      const tx = await tokenContract.populateTransaction.approve(
        contract.address,
        result.toString()
      );
      setTxHash(tx.toString);

      let signer = contract.signer;

      let trans = await signer.sendTransaction(tx);
      setPendingTx(true);

      onPresentConfirmModal();

      toastSuccess(
        t("Approval transaction sent. You can stake after the transaction is mined.")
      );
    }
  };

  const [onPresentConfirmModal] = useModal(
    <ConfirmStakingModal
      onConfirm={handleStake}
      receipt={pendingTx ? "Pending" : "Success"}
      clientMessage={"Your spending approval is being confirmed. "}
      onAcceptChanges={function (): void {
        throw new Error(t("Function not implemented."));
      }}
      customOnDismiss={handleConfirmDismiss}
    />,
    true,
    true,
    "ConfirmStakingModal"
  );

  const biggest1500 = useMediaPredicate("(min-width: 1500px)");

  return (

    <div
      className="container-fluid d-flex flex-wrap flex-column flex-sm-row flex-direction-row-reverse"
      style={{ gap: "20px" }}
    >
      <Statistics reward={reward}/>
      <div style={{ flex: "1 1 30%"}}>
        <div className="card d-flex flex-column"
         style={{ background: "#1e1e1e" }}
        >
          <div className="card-body mb-3">
            <div className="d-flex align-items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 239 116"
                xmlSpace="preserve"
                style={{
                  width: "40px",
                  fill: "rgb(255, 0, 204)",
                  marginRight: "10px",
                }}
              >
                <path d="M58,0C25.97,0,0,25.97,0,58c0,32.03,25.97,58,58,58s58-25.97,58-58C116,25.97,90.03,0,58,0z M58,90.78 c-18.11,0-32.78-14.68-32.78-32.78c0-18.11,14.68-32.78,32.78-32.78S90.78,39.89,90.78,58C90.78,76.11,76.11,90.78,58,90.78z"></path>
                <g>
                  <path
                    className="st0"
                    d="M151.87,48.3l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C165.69,53.57,157.14,53.57,151.87,48.3z"
                  ></path>
                  <path
                    className="st0"
                    d="M215.27,112.05l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C229.09,117.32,220.55,117.32,215.27,112.05z"
                  ></path>
                  <path
                    className="st0"
                    d="M126.64,92.96l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09l-25.23,25.23 c-5.27,5.27-13.82,5.27-19.09,0l0,0C121.37,106.77,121.37,98.23,126.64,92.96z"
                  ></path>
                  <path
                    className="st0"
                    d="M190.73,29.21l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09L209.82,48.3 c-5.27,5.27-13.82,5.27-19.09,0l0,0C185.46,43.03,185.46,34.48,190.73,29.21z"
                  ></path>
                </g>
              </svg>
              <h4>STAKE SOSX</h4>
            </div>
            <p className="mb-4">
              Become a DAOX member while receiving daily rewards
            </p>
            <div className="bg-input mb-3 py-2 px-3 rounded mt-4">
              <div className="d-flex justify-content-between align-items-center">
                <span>
           
                   <input
                    type="number"
                    className="form-control fs-28"
                    placeholder="0.00"
                    //   required
                    onChange={(e) => handleAmountChange(e)}
                    // value={amountToStake}
                  />
                </span>
                <h3
                  className=" pt-3 pb-3 "
                  style={{ color: "rgb(142, 142, 142)" }}
                >
                  SOSX
                </h3>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <button
                className="btn mr-1 btn-primary btn-lg mt-2"
                type="button"
                onClick={handleSubmit}
              >
                STAKE YOUR SOSX TOKEN
              </button>
            </div>
          </div>
          <div
            className="card-body"
            style={{ borderTop: "1px solid #1e2124", paddingTop: "20px" }}
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
    
              <h4>RETURN CALCULATOR</h4>
            </div>
            <p>Input staking amount to show estimation</p>
            <div>
              <div className="d-flex h-100 justify-content-between mt-3">
              <div className="text-center"><h1 className="mb-0 main-pink" style={{fontFamily: 'digital-7', fontSize: '60px', color: 'rgb(255, 0, 204)', lineHeight: '54px'}}> {estimateDaoLevel > 0
                        ? estimateDaoLevel == 1
                          ? 6.0
                          : estimateDaoLevel == 2
                          ? 9.0
                          : 12.0
                        : 0}%</h1><p className="mt-0" style={{fontSize: '15px', color: 'rgb(255, 0, 204)'}}> Reward % </p></div>
              <div className="text-center"><h1 className="mb-0 main-pink" style={{fontFamily: 'digital-7', fontSize: '60px', color: 'rgb(255, 0, 204)', lineHeight: '54px'}}>Lv{estimateDaoLevel}</h1><p className="mt-0" style={{fontSize: '15px', color: 'rgb(255, 0, 204)'}}> DAO Level </p></div>
              <div className="text-center"><h1 className="mb-0 main-pink" style={{fontFamily: 'digital-7', fontSize: '60px', color: 'rgb(255, 0, 204)', lineHeight: '54px'}}>{(stakingInterest - amountToStake).toFixed(2)}</h1><p className="mt-0" style={{fontSize: '15px', color: 'rgb(255, 0, 204)'}}>   Estimate yearly Return </p></div>
              </div>
            </div>
          </div>
        </div>
        <div className="card d-flex flex-column mt-4">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <img src="images/prize-pool-icon.png" className="title-icon" />
              <h4>CLAIM YOUR REWARDS</h4>
            </div>
            <p>Cash in your staking rewards</p>
            <div className=" mt-4 ">
              <div className="d-flex h-100 justify-content-between mt-3">
                <div>
                  <div className="d-flex w-auto m-auto">
                    <h3>0.000 SOSX</h3>
                  </div>
                  <p className="success mb-0 fs-13 main-pink pt-2">AVAILABLE</p>
                </div>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn mr-1 btn-primary btn-lg mt-2"
                    type="button"
                    onClick={handleShow}
                  >
                    CLAIM REWARD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: "1 1 30%", gap: "20px", maxWidth: "100%" }}>
        <DaoMemebrship />
      </div>
      <div style={{ flex: "1 1 30%" }}>
        <UserStaking status={loading} stakelist={stakelist} onActionModal={handleShow} />
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <ModalHeader
          className="text-dark"
          style={{ background: "#111117", borderRadius: "10px 10px 0px 0px" }}
        >
          Select the Stake Entry
          {/* <CloseButton /> */}
          <a href="#" onClick={handleClose} className="pull-right text-white">
            <i className="fa fa-close"></i>
          </a>
        </ModalHeader>

        <div
          className="modal-body"
          style={{ background: "#111117", borderRadius: "0px 0px 10px 10px" }}
        >
          {activeStakes.map((stake, i) => (
            <>
              <div
                className="d-flex mb-4 justify-content-between"
                onClick={() => {
                  showDetails == i ? setShowDetails(-1) : setShowDetails(i);
                }}
              >
                <div className="fs-18 font-weight-bold main-pink">
                  {" "}
                  Stake #{stake.stakeID}
                </div>
                <div className="fs-18 font-weight-bold main-pink">
                  {stake.amount.toFixed(3)}
                </div>
                <div className="fs-18 font-weight-bold main-pink">
                  <i className="fa fa-chevron-down"></i>
                </div>
              </div>

              <div
                style={{
                  display: showDetails == i ? "block" : "none",
                }}
              >
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="d-flex mb-3 flex-column">
                      <span className="mb-1">Amount Staked:</span>
                      <span className="text-success">
                        {stake.amount.toFixed(3)} SOSX
                      </span>
                    </div>
                    <div className="d-flex mb-3 flex-column">
                      <span className="mb-1">Date Staked:</span>
                      <span className="text-success">{stake.stakeDate}</span>
                    </div>
                    <div className="d-flex mb-3 flex-column">
                      <span className="mb-1">Withdrawed:</span>
                      <span className="text-success">
                        {stake.isWithdrawed ? "Yes" : "No"}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex mb-3 flex-column">
                      <span className="mb-1">Rewards Gained:</span>
                      <span className="text-success"> 0.00 SOSX </span>
                    </div>
                    <div className="d-flex mb-3 flex-column">
                      <span className="mb-1">Duration Elapsed:</span>
                      <span className="text-success">
                        {(stake.periodElapsed).toFixed(0)} Days
                      </span>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => handleClaimReward(stake.stakeID)}
                    className="btn w-100  mr-1 btn-primary btn-lg mt-2"
                    type="button"
                  >
                    CLAIM REWARD
                  </button>

                  <button
                    className="btn w-100  mr-1 btn-primary btn-lg mt-2"
                    type="button"
                    onClick={() => handleUnStake(stake.stakeID)}
                  >
                    UNSTAKE
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </Modal>
    </div>
  );
}
