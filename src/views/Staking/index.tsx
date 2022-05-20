import { useCallback, useEffect, useState } from "react";
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
import Statistics from "./components/statistics";
import { formatFixedNumber } from "utils/formatBalance";

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
    if (amountToStake < 1) {
      toastError("You must stake a minimum of 1 token");
      return;
    }

    if (amountToStake > balance) {
      toastError(
        `Insufficient balance. Your wallet balance is ${balance} you need  ${(
          amountToStake - balance
        ).toFixed(3)} more SOSX to stake that amount. `
      );
      return;
    }
    console.log(allowanceValue, amountToStake)
    let decimals = BigNumber(10).pow(18);
    let result = BigNumber(amountToStake).multiply(decimals);
    if (allowanceValue > amountToStake) {
      onPresentConfirmModal();
    } else {
      const tx = await tokenContract.populateTransaction.approve(
        contract.address,
        result.toString()
      );

      let signer = contract.signer;

      let trans = await signer.sendTransaction(tx);
      setPendingTx(true);

      onPresentConfirmModal();

      toastSuccess(
        "Approval transaction sent. You can stake after the transaction is mined."
      );
    }
  };

  const handleConfirmDismiss = useCallback(() => {
      listUserStaking();
  }, []);

  const [onPresentConfirmModal] = useModal(
    <ConfirmStakingModal
      onConfirm={handleStake}
      receipt={pendingTx ? "Pending" : "Success"}
      clientMessage={"Your spending approval is being confirmed. "}
      onAcceptChanges={function (): void {
        throw new Error("Function not implemented.");
      }}
      customOnDismiss={handleConfirmDismiss}
    />,
    true,
    true,
    "ConfirmStakingModal"
  );
  const biggest1500 = useMediaPredicate("(min-width: 1500px)");

  return (
    <>
      <div
        className="container-fluid d-flex flex-wrap flex-column flex-sm-row flex-direction-row-reverse"
        style={{ gap: "20px" }}
      >
        <Statistics />
        <div style={{ flex: "2 1 30%", maxWidth: "100%" }}>
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
                Stake SOSX and gain rewards
              </p>
              <div className="bg-input mb-3 py-2 px-3 rounded mt-4">
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    <input
                      type="number"
                      className="form-control fs-28"
                      onChange={(e) => handleAmountChange(e)}
                      required
                      // defaultValue={0}
                      placeholder="0.00"
                    />{" "}
                  </span>
                  <h3 className=" pt-3 pb-3 " style={{ color: " #8e8e8e" }}>
                    SOSX
                  </h3>
                </div>
              </div>

              <div className="bg-input mb-3 py-2 px-3 rounded mt-4">
                <div className="d-flex justify-content-between align-items-center">
                  <span>

                  <select
                        className="form-control fs-28"
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
                    {/* <input
                      type="text"
                      className="form-control fs-28"
                      required
                      value="0"
                    />{" "} */}
                  </span>
                  <h3 className=" pt-3 pb-3 " style={{ color: " #8e8e8e" }}>
                    MONTHS
                  </h3>
                </div>
              </div>
             
              <button
                className="btn mr-1 btn-primary btn-lg mt-2"
                type="button"
                onClick={handleSubmit}
              >
                STAKE SOSX
              </button>
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
                      <h3> {stakingClass == 1
                            ? 29
                            : stakingClass == 2
                            ? 64
                            : 145}%</h3>
                    </div>
                    <p className="success mb-0 main-pink pt-2 fs-14">
                      Reward %{" "}
                    </p>
                  </div>
                  <div>
                    <div className="d-flex w-auto m-auto">
                      <h3>{stakingClass == 1
                            ? 3
                            : stakingClass == 2
                            ? 6
                            : 12} Months</h3>
                    </div>
                    <p className="success main-pink mb-0 pt-2 fs-14">
                      Duration
                    </p>
                  </div>
                  <div>
                    <div className="d-flex w-auto m-auto">
                      <h3>{stakingInterest} SOSX</h3>
                    </div>
                    <p className="success mb-0 main-pink pt-2 fs-14">
                      Estimate yearly Return
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                    
       <UserStakingLogs/>

      </div>

   
    </>
  );
}
