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
import { getDaoLevel } from "views/Games/hooks/getDaoLevel";
import { formatFixedNumber, getDecimalAmount } from "utils/formatBalance";
import { useTranslation } from 'contexts/Localization';
import { Trans } from "react-i18next";

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
  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(false);
  const [transaction, setTransaction] = useState();
  const [challenge, setChallenge] = useState(false);
  const [pendingTx, setPendingTx] = useState(false);
  const [estimateDaoLevel, setEstimateDaoLevel] = useState(0);
  const [transactionState, setTransactionState] = useState(1);
  const [txHash, setTxHash] = useState("");
  const { t } = useTranslation();

  useEffect(() => {

    setLoading(false)
    if (account !== undefined) {
      tokenContract.balanceOf(account).then((bal) => {
        let balance = formatFixedNumber(bal, 3, 18)
        // console.log(balance)
        setUserBalace(Number(balance));
      });

      tokenContract.allowance(account, contract.address).then((allowance) => {
          allowance = Number(formatFixedNumber(allowance, 3, 18));
          console.log(allowance)
        if (allowance > 0) {
          setActivatestake(true);
        }
        setAllowanceValue(allowance);
      });
    }
  }, [account]);


  const handleAmountChange = async (event) => {
        let _amountToStake = Number(event.target.value);
        let level = getDaoLevel(_amountToStake);
          setEstimateDaoLevel(level)
        // let decimals = new BigNumber(10).pow(18);
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
    //    amount = amount.toFixed(2)
    //    const interest = amount - p;
    return amount.toFixed(2);
  };

  const handleStake = async () => {
        let decimals = BigNumber(10).pow(18);

        let result = BigNumber(amountToStake).multiply(decimals);
        // console.log(Number(allowanceValue),amountToStake)

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
          toastSuccess(t("Staking Transaction successfully sent"));
          handleConfirmDismiss();
        } else {
          toastError(t("Could not stake"));
        }
  };

  const handleClaimReward = async () => {
    // if (stake) {
    //   setActivatestake(true);
    //   setLoading(false);
    //   toastSuccess("Staking Transaction successfully sent");
    // } else {
      toastError(t("Rewards not yet available"));
    // }
  };

  const handleUnStake = async () => {
    let decimals = BigNumber(10).pow(18);

    let result = BigNumber(amountToStake).multiply(decimals);
    setLoading(true);

    const tx = await contract.returnTokens(0);

    if (tx) {
      setActivatestake(true);
      setLoading(false);
      toastSuccess(t("Staking Transaction successfully sent"));
      
    } else {
      toastError(t("Could not unstake"));
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
    if (amountToStake < 1) {
      toastError(t("You must stake a minimum of 1 token"));
      return;
    }

    if (amountToStake > balance) {
      toastError(t(`Insufficient balance. Your wallet balance is ${balance} you need  ${(amountToStake - balance).toFixed(3)} more SOSX to stake that amount. `));
      return;
    }

    let decimals = BigNumber(10).pow(18);
    let result = BigNumber(amountToStake).multiply(decimals);
    // console.log(result - allowanceValue)
    if (allowanceValue > amountToStake) {
      onPresentConfirmModal();
    } else {
      const tx = await tokenContract.populateTransaction.approve(
        contract.address,
        result.toString()
      );
      setTxHash(tx.toString)
    
      let signer = contract.signer;

      let trans = await signer.sendTransaction(tx);
      // console.log(trans)
       setPendingTx(true);
     
      // setTransaction(tx);
      onPresentConfirmModal();

      toastSuccess(
        t("Approval transaction sent. You can stake after the transaction is mined.")
      );
    }
  };

  const [onPresentConfirmModal] = useModal(
    <ConfirmStakingModal
      onConfirm={handleStake}
      receipt={pendingTx? t('Pending') : t('Success')}
      clientMessage={t("Your spending approval is being confirmed. ")}
      onAcceptChanges={function (): void {
        throw new Error(t("Function not implemented."));
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
        <Statistics status={loading} />

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
                <h4>{t("STAKE SOSX")}</h4>
              </div>
              <p className="mb-4">
               { t("Become a DAOX member while receiving daily rewards")}
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
                  onClick={handleSubmit}>
                  {activateStake ? t('STAKE')  : t('APPROVE')  }
                    </button>
              </div>
            </div>
          </div>

          <div className="card d-flex flex-column mt-4">
            <div className="card-body">
              <div className="d-flex align-items-center mt-2 mb-2">
                <img src="images/prize-pool-icon.png" className="title-icon" />
                <h4>{t("RETURN CALCULATOR")}</h4>
              </div>
              <p>{t("Investment Return Estimator")}</p>
              <div className=" mt-4 ">
                <div className="d-flex h-100 justify-content-between mt-3 mb-3">
                  <div>
                    <div className="d-flex w-auto m-auto">
                      <h3>{estimateDaoLevel > 0 ? (estimateDaoLevel == 1 ? 6.00 : estimateDaoLevel == 2 ? 9.00 : 12.00) : 0} %</h3>
                    </div>
                    <p className="success mb-0 main-pink pt-2">{t("Reward ")}% </p>
                  </div>
                  <div>
                    <div className="d-flex w-auto m-auto">
                      <h3>Lv {estimateDaoLevel}</h3>
                    </div>
                    <p className="success main-pink mb-0 pt-2">{t("DAO Level")}</p>
                  </div>
                  <div>
                    <div className="d-flex w-auto m-auto">
                      <h3>{stakingInterest}</h3>
                    </div>
                    <p className="success mb-0 main-pink pt-2">
                      {t("Estimate yearly Return")}
                    </p>
                  </div>
                </div>
              </div>
              <button onClick={handleClaimReward}
                className="btn mx-auto btn-primary btn-lg mt-3"
                type="button">
                {t("CLAIM REWARD")}
              </button>
            </div>
          </div>
        </div>

        <DaoMemebrship  />

        <UserStaking  status={loading}/>

      
  </div>
  );
}
