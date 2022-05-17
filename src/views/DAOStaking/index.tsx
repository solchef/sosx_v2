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
import UserStaking from "./components/userStaking";
import ConfirmStakingModal from "./components/ConfirmStakingModal";
import { useModal } from "@pancakeswap/uikit";
import Statistics from "./components/statistics";
import StakingSummary from "./components/stakingsummary";

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
  const [allowanceValue, setAllowanceValue] = useState(0);
  const [activateStake, setActivatestake] = useState(true);
  const [loading, setLoading] = useState(false);
  const [pendingTx, setPendingTx] = useState(false);
  const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
  const biggest1400 = useMediaPredicate("(max-width: 1400px)");




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

    let decimals = new BigNumber(10).pow(18);

    let result = new BigNumber(_amountToStake).multiply(decimals);

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

    // this.setState({stakingInterest:interest})
    // console.log(_amountToStake);
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
    // alert('ss')
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

      console.log(trans);
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
      //   customOnDismiss={handleConfirmDismiss}
    />,
    true,
    true,
    "ConfirmStakingModal"
  );

  return (
    <>
      <div
        className={`${biggerThan1400 && "container"} ${
          biggest1400 && "container-fluid"
        }`}>
            <Statistics/>
        <div className="row">
          <div className="col-xl-4 ">
            <div className="card d-flex flex-column  h-100">
              <div className="card-header border-0 pl-0 pt-0">
                <h4 className="fs-18 ">Stake SOSX for DAO Level</h4>
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
                    <span className="text-white fs-18">SOSX</span>
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
                              ? 0.06
                              : Number(e.target.value) == 2
                              ? 0.09
                              : 0.12;
                          const n = 12;
                          setStakingInterest(
                            Number(compoundInterest(p, t, r, n))
                          );
                        }}
                      >
                        <option value={1}>Level 1 DAO </option>
                        <option value={2}>Level 2 DAO </option>
                        <option value={3}>Level 3 DAO </option>
                      </select>
                    </span>
                    {/* <span className="text-white fs-18">Months</span> */}
                  </div>
                </div>
                <div className="bg-dark p-3 rounded">
                  <div className="d-flex justify-content-between">
                    <div className="small2">
                      <div className="success mr-1">Reward Interest: </div>
                      <div className="d-flex align-items-center">
                        <div className="text-white fs-14">
                          {" "}
                          {stakingClass == 1 ? 6 : stakingClass == 2 ? 9 : 12}%
                        </div>
                      </div>
                    </div>
                    <div className="small2">
                      <div className="success mr-1">Estimated </div>
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

              {account ? (
                <>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn btn-primary  btn-lg w-100 text-nowrap "
                    //   disabled={insufficientBalance || activateStake}
                  >
                    {loading ? "Staking..." : "Stake"}
                  </button>
                </>
              ) : (
                <ConnectWalletButton />
              )}
            </div>
          </div>

          <div className="col-xl-4">
                <StakingSummary/>
          </div>

          <div className="col-xl-4">
            <UserStaking />
          </div>
        </div>
      </div>
    </>
  );
}
