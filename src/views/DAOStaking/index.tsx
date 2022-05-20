import { useCallback, useEffect,useState } from "react";
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
import { Modal, ModalHeader } from "react-bootstrap";

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
  const [activeStakes, setActiveStakes] = useState([]);
  const [allowanceValue, setAllowanceValue] = useState(0);
  const [activateStake, setActivatestake] = useState(true);
  const [showDetails, setShowDetails] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [pendingTx, setPendingTx] = useState(false);
  const [estimateDaoLevel, setEstimateDaoLevel] = useState(0);
  const [transactionState, setTransactionState] = useState(1);
  const [txHash, setTxHash] = useState("");
  const [ahow, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {

    setLoading(false)
    if (account !== undefined) {
      tokenContract.balanceOf(account).then((bal) => {
        let balance = formatFixedNumber(bal, 3, 18)
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
    contract.getStakeCount().then((stakes) => {
      setActiveStakes([]);
      for (let i = 0; i < stakes; i++) {
        contract.getStakeInfo(i).then((stakeInstance) => {
          let stakeAmt = Number(stakeInstance[0] / 10 ** 18);
          let stakeClass = stakeAmt > 100000 ? 2 : stakeAmt > 1000000 ? 3 : 1;
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
          setActiveStakes((activeStakes) => [...activeStakes, instance]);
        });
      }
    });
  };



  const handleAmountChange = async (event) => {
        let _amountToStake = Number(event.target.value);
        let level = getDaoLevel(_amountToStake);
          setEstimateDaoLevel(level)
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

        let result = BigNumber(amountToStake).multiply(decimals);
        setLoading(true);
        let stake = await contract.stakeToken(
          result.toString(),
          "0x0000000000000000000000000000000000000001",
          stakingClass
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

  const handleClaimReward = async () => {
      toastError("Rewards not yet available");
  };

  const handleUnStake = async () => {
    let decimals = BigNumber(10).pow(18);

    let result = BigNumber(amountToStake).multiply(decimals);
    setLoading(true);
    
    const tx = await contract.returnTokens(0);

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
  }, [])

  const handleSubmit = async () => {
    if (amountToStake < 1) {
      toastError("You must stake a minimum of 1 token");
      return;
    }

    if (amountToStake > balance) {
      toastError(`Insufficient balance. Your wallet balance is ${balance} you need  ${(amountToStake - balance).toFixed(3)} more SOSX to stake that amount. `);
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
      setTxHash(tx.toString)
    
      let signer = contract.signer;

      let trans = await signer.sendTransaction(tx);
       setPendingTx(true);
     
      onPresentConfirmModal();

      toastSuccess(
        "Approval transaction sent. You can stake after the transaction is mined."
      );
    }
  };

  const [onPresentConfirmModal] = useModal(
    <ConfirmStakingModal
      onConfirm={handleStake}
      receipt={pendingTx? 'Pending' : 'Success'}
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
      <div
        className="container-fluid d-flex flex-wrap flex-column flex-sm-row flex-direction-row-reverse"
        style={{ gap: "20px" }}
      >
        <Statistics status={loading} />

        <div style={{ flex: `${biggest1500? ' 1 1 30%':' 1 1 30%' }`,gap:'20px', maxWidth:'100%'}}>
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
                  }} >
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
                      className="form-control fs-28"
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
                  {activateStake ? 'STAKE'  : 'APPROVE'  }
                    </button>

                    <button
                  className="btn w-100  mr-1 btn-primary btn-lg mt-2"
                  type="button"
                  onClick={handleShow}>
                  {activateStake ? 'UNSTAKE'  : 'UNSTAKE'  }
                    </button>
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
                      <h3>{estimateDaoLevel > 0 ? (estimateDaoLevel == 1 ? 6.00 : estimateDaoLevel == 2 ? 9.00 : 12.00) : 0} %</h3>
                    </div>
                    <p className="success mb-0 fs-13 main-pink pt-2">Reward % </p>
                  </div>
                  <div>
                    <div className="d-flex w-auto m-auto">
                      <h3>Lv {estimateDaoLevel}</h3>
                    </div>
                    <p className="success fs-13 main-pink mb-0 pt-2">DAO Level</p>
                  </div>
                  <div>
                    <div className="d-flex w-auto m-auto">
                      <h3>{stakingInterest}</h3>
                    </div>
                    <p className="success fs-13 mb-0 main-pink pt-2">
                      Estimate yearly Return
                    </p>
                  </div>
                </div>
              </div>
              <button onClick={handleClaimReward}
                className="btn mx-auto btn-primary btn-lg mt-3"
                type="button">
                CLAIM REWARD
              </button>
            </div>
          </div>
        </div>

        <DaoMemebrship  />

        <UserStaking  status={loading} stakelist={activeStakes}/>

      
      

        <Modal show={ahow} onHide={handleClose} centered>
        <ModalHeader
          className="text-dark"
          style={{ background: "#111117", borderRadius: "10px 10px 0px 0px" }}
        >
          Select the Stake Entry to UNSTAKE
          {/* <CloseButton /> */}
          <a
            href="#"
            onClick={handleClose}
            className="pull-right text-white" >
            <i className="fa fa-close"></i>
          </a>
        </ModalHeader>

        <div
          className="modal-body"
          style={{ background: "#111117", borderRadius: "0px 0px 10px 10px" }}
        >
              
              {activeStakes.map((stake, i) => 
                <>
                  <ul
                    className="token-balance-list mb-2 mt-2"
                    onClick={() => {
                      showDetails == i ? setShowDetails(-1) : setShowDetails(i);
                    }}
                  >
                    <li>
                      <span className="justify-content-between success fs-12">
                        Level{" "}
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
                            {(stake.periodElapsed / (24 * 60)).toFixed(0)} Days
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
     
                      </ul>
                      {!stake.isWithdrawed ? (
                        <ul className="token-balance-list mb-2 mt-2">
                          <li>
                            <span className="justify-content-between success fs-12">
                              <button
                                onClick={() =>
                                  toastSuccess("No claim available")
                                }
                                className="btn btn-success full-width"
                              >
                                CLAIM REWARDS
                              </button>
                            </span>
                          </li>
                          <li>
                            <span className="justify-content-between success fs-12">
                              <button
                                onClick={() => handleUnStake(i)}
                                className="btn btn-primary"
                              >
                                UNSTAKE
                              </button>
                            </span>
                          </li>
                        </ul>
                      ) : (
                        <p></p>
                      )}

                  </div>
              </div>
            </>
              )}
        </div>
      </Modal>
  </div>
  );
}
