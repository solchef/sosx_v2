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

const BorderCard = styled.div`
  border: solid 1px ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  padding: 16px;
`;

export default function userStaking(props) {
  const contract = useDaoStakingContract();
  const { account } = useActiveWeb3React();
  const tokenContract = useSosxContract();
  const [balance, setUserBalace] = useState(0);
  const { toastError, toastSuccess } = useToast();
  const [activeStakes, setActiveStakes] = useState([]);
  const [showDetails, setShowDetails] = useState(-1);
  const [loadingData, setLoadingData] = useState(false);
  const [level, setlevel] = useState(false);
  

  const handleUnstake = async (stakeID) => {
    const unstake = await contract.returnTokens(stakeID);

    if (unstake) {
      toastSuccess(
        "Successfully sent unstake SOSX transaction, Check balance in your wallet"
      );
    }
  };


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


  useEffect(() => {
    listUserStaking();
  }, []);

  return (
    <>
      <div style={{ flex: "1 1 45%" }}>
        <div className="card d-flex flex-column h-100">
          <div className="card-body">
            <div className="d-flex align-items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                width="503.379px"
                height="503.379px"
                viewBox="0 0 503.379 503.379"
                style={{
                  width: "30px",
                  fill: "rgb(255, 0, 204)",
                  marginRight: "10px",
                  height: "30px",
                }}
                xmlSpace="preserve"
              >
                <g>
                  <path d="M458.091,128.116v326.842c0,26.698-21.723,48.421-48.422,48.421h-220.92c-26.699,0-48.421-21.723-48.421-48.421V242.439   c6.907,1.149,13.953,1.894,21.184,1.894c5.128,0,10.161-0.381,15.132-0.969v211.594c0,6.673,5.429,12.104,12.105,12.104h220.92   c6.674,0,12.105-5.432,12.105-12.104V128.116c0-6.676-5.432-12.105-12.105-12.105H289.835c0-12.625-1.897-24.793-5.297-36.315   h125.131C436.368,79.695,458.091,101.417,458.091,128.116z M159.49,228.401c-62.973,0-114.202-51.229-114.202-114.199   C45.289,51.229,96.517,0,159.49,0c62.971,0,114.202,51.229,114.202,114.202C273.692,177.172,222.461,228.401,159.49,228.401z    M159.49,204.19c49.618,0,89.989-40.364,89.989-89.988c0-49.627-40.365-89.991-89.989-89.991   c-49.626,0-89.991,40.364-89.991,89.991C69.499,163.826,109.87,204.19,159.49,204.19z M227.981,126.308   c6.682,0,12.105-5.423,12.105-12.105s-5.423-12.105-12.105-12.105h-56.386v-47.52c0-6.682-5.423-12.105-12.105-12.105   s-12.105,5.423-12.105,12.105v59.625c0,6.682,5.423,12.105,12.105,12.105H227.981z M367.697,224.456h-131.14   c-6.682,0-12.105,5.423-12.105,12.105c0,6.683,5.423,12.105,12.105,12.105h131.14c6.685,0,12.105-5.423,12.105-12.105   C379.803,229.879,374.382,224.456,367.697,224.456z M367.91,297.885h-131.14c-6.682,0-12.105,5.42-12.105,12.105   s5.423,12.105,12.105,12.105h131.14c6.685,0,12.104-5.42,12.104-12.105S374.601,297.885,367.91,297.885z M367.91,374.353h-131.14   c-6.682,0-12.105,5.426-12.105,12.105c0,6.685,5.423,12.104,12.105,12.104h131.14c6.685,0,12.104-5.42,12.104-12.104   C380.015,379.778,374.601,374.353,367.91,374.353z"></path>
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

              <h4>STAKING LOG</h4>
            </div>
            <p></p>
            <p className="mb-4">Keep track of your investments activities.</p>
            <p></p>
            <div
              className="d-flex pt-0 px-4  mt-0 ranking-header"
              style={{ justifyContent: "space-between", borderTop: " none" }}
            >
              <div className="header-item">Date</div>
              <div className="header-item">Action</div>
              <div className="header-item">Staking</div>
            </div>
            <div
              className="tab-bg"
              style={{
                height: "430px",
                overflow: "auto",
                paddingRight: "5px",
              }}>
                {props.stakelist.map((stake, i) => 
                  <div
                    className="rank-item mt-3 d-flex px-4 pt-4 mt-0"
                    style={{ justifyContent: "space-between" }}>
                    <div className="header-item">{stake.stakeDate}</div>
                    <div className="header-item">Staked</div>
                    <div className="header-item"> {cleanNumber(stake.amount.toFixed(2))}</div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="card d-flex flex-column h-100">
        <div className="card-header border-0 pb-0">
          <div className="col-3">
            <div className="token-balance-icon mb-3">
              <img
                src="data:image/png;base64,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"
                alt="logo"
                className="sosx-img"
              />
            </div>
          </div>
          <div className="col-9">
            <h4 className="fs-18 pl-3">Staking Log</h4>
          </div>
        </div>
        <div className="card-body">
          {activeStakes.length > 0 ? 
            <>
              <span className="fs-14">Your Stakes</span>
              <ul className="token-balance-list mb-2 mt-2">
                <li>
                  <span className="justify-content-between success fs-12">
                    Stake Level
                  </span>
                </li>
                <li>
                  <span className="success fs-12">Amount</span>
                </li>
                <i className="fa fa-info"></i>
              </ul>

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
                                onClick={() => handleUnstake(i)}
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
            </>
           : (
            <div className="mx-row mt-5 text-center">
              <a href="#" onClick={() => showStakingLog()}>
                Check Logs
              </a>
            </div>
          )}
        </div>
      </div> */}
    </>
  );
}
