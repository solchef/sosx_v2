import { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import useToast from "hooks/useToast";
import { useDaoStakingContract, useSosxContract } from "hooks/useContract";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useMediaPredicate } from "react-media-hook";
import BigNumber from "big-number";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { cleanNumber } from "utils/amount";
import UserStaking from "./components/userStaking";
import ConfirmStakingModal from "./components/ConfirmStakingModal";
import { useModal } from "@pancakeswap/uikit";
import Statistics from "./components/statistics";
import StakingSummary from "./components/DaoMemebrship";
import DaoMemebrship from "./components/DaoMemebrship";
import { useGetDaoLevel } from "views/Games/hooks/useGetDaoLevel";

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
  const [transaction, setTransaction] = useState();
  const [challenge, setChallenge] = useState(false);
  const [pendingTx, setPendingTx] = useState(false);
  const [estimateDaoLevel, setEstimateDaoLevel] = useState(1);
  const [transactionState, setTransactionState] = useState(1);
  const [txHash, setTxHash] = useState(1);

  const listUserStaking = async () => {
    let list = [];
    let count = [];
    // console.log(numberOfActiveStake);
    for (let i = 0; i < numberOfActiveStake; i++) {
      await contract.getStakeInfo(i).then((stakeInstance) => {
        // if (stakeInstance) {
        // contract.getCurrentStakeClass(i).then(stakeClass => {
        // console.log("here")
        let stakeAmt = Number(stakeInstance[0] / 10 ** 18);
        let stakeClass = stakeAmt > 100000 ? 2 : stakeAmt > 1000000 ? 3 : 1;
        // console.log(stakeInstance)
        count.push(i);
        let instance = {
          amount: stakeAmt,
          isWithdrawed: Boolean(stakeInstance[1]),
          stakeDate: new Date(stakeInstance[2] * 1000).toLocaleString("en-US", {
            timeZone: "America/New_York",
          }),
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
    console.log(list);
    // console.log(count)
    // clearTimeout(listTimeOut);

    // console.log(list)
  };

  const loadUI = async () => {
    setLoadingData(true);
    // await stakingDetails();
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

      tokenContract.allowance(account, contract.address).then((allowance) => {
        if (Number(allowance) > 0) {
          // alert("ff")
          setActivatestake(true);
        }
        setAllowanceValue(allowance);
      });
    }
  }, [account]);


  const handleAmountChange = async (event) => {
        let _amountToStake = Number(event.target.value);
        let level = useGetDaoLevel(_amountToStake);
        setEstimateDaoLevel(level)
        
        // let decimals = new BigNumber(10).pow(18);

        if (Number(allowanceValue) > amountToStake * 10 ** 18) {
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
    //    amount = amount.toFixed(2)
    //    const interest = amount - p;
    return amount.toFixed(2);
  };

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
      loadUI();
      toastSuccess("Staking Transaction successfully sent");
    } else {
      toastError("Could not stake");
    }
  };

  const handleClaimReward = async () => {
    // if (stake) {
    //   setActivatestake(true);
    //   setLoading(false);
    //   toastSuccess("Staking Transaction successfully sent");
    // } else {
      toastError("Rewards not yet available");
    // }
  };


  const handleUnStake = async () => {
    let decimals = BigNumber(10).pow(18);

    let result = BigNumber(amountToStake).multiply(decimals);
    setLoading(true);

    const tx = await contract.stakeToken(0);

    if (tx) {
      setActivatestake(true);
      setLoading(false);
      toastSuccess("Staking Transaction successfully sent");
      
    } else {
      toastError("Could not unstake");
    }
  };

  const handleConfirmDismiss = useCallback(() => {
    setTransactionState(4)
    // if there was a tx hash, we want to clear the input
    // if (txHash) {
    //   onUserInput(Field.INPUT, '')
    // }
  }, [])

  const handleSubmit = async () => {
    if (Number(amountToStake/(10 ** 18)) < 0) {
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
      onConfirm={handleStake}
      attemptingTxn={pendingTx}
      recipient={""}
      allowedSlippage={0}
      onAcceptChanges={function (): void {
        throw new Error("Function not implemented.");
      }}
     customOnDismiss={handleConfirmDismiss}
    />,
    true,
    true,
    "ConfirmStakingModal"
  );

  return (
      <div
        className="container-fluid d-flex flex-wrap flex-column flex-sm-row flex-direction-row-reverse"
        style={{ gap: "20px" }}
      >
        <Statistics />

        <div style={{ flex: "2 1 30%", minWidth: "400px" }}>
          <div className="card d-flex flex-column">
            <div className="card-body">
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
                    width: " 40px",
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
                      type="text"
                      className="form-control"
                      //   required
                      onChange={(e) => handleAmountChange(e)}
                      value={amountToStake}
                    />
                  </span>
                  <h3 className=" pt-3 pb-3 " style={{ color: " #8e8e8e" }}>
                    SOSX
                  </h3>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <button
                  className="btn w-100  mr-1 btn-primary btn-lg mt-2"
                  type="button"
                  onClick={handleSubmit}
                >
                  STAKE
                    </button>

                    {/* <button
                      className="btn w-100 ml-1 btn-primary btn-lg mt-2"
                      type="button"
                      onClick={handleUnStake}
                    >
                  UNSTAKE
                </button> */}
              </div>
            </div>
          </div>

          <div className="card d-flex flex-column mt-4">
            <div className="card-body">
              <div className="d-flex align-items-center mt-2 mb-2">
                <img src="images/prize-pool-icon.png" className="title-icon" />
                <h4>RETURN CALCULATOR</h4>
              </div>
              <p>Investment Return Estimator</p>
              <div className=" mt-4 ">
                <div className="d-flex h-100 justify-content-between mt-3 mb-3">
                  <div>
                    <div className="d-flex w-auto m-auto">
                      <h3>{estimateDaoLevel == 1 ? 6 : estimateDaoLevel == 2 ? 9 : 12} %</h3>
                    </div>
                    <p className="success mb-0 main-pink pt-2">Reward % </p>
                  </div>
                  <div>
                    <div className="d-flex w-auto m-auto">
                      <h3>Lv {estimateDaoLevel}</h3>
                    </div>
                    <p className="success main-pink mb-0 pt-2">DAO Level</p>
                  </div>
                  <div>
                    <div className="d-flex w-auto m-auto">
                      <h3>{stakingInterest}</h3>
                    </div>
                    <p className="success mb-0 main-pink pt-2">
                      Estimate yearly Return
                    </p>
                  </div>
                </div>
              </div>
              <button onClick={handleClaimReward}
                className="btn mx-auto btn-primary btn-lg mt-3"
                type="button"
              >
                CLAIM REWARD
              </button>
            </div>
          </div>
        </div>

        <DaoMemebrship />

        <UserStaking />

      
  </div>
  );
}
