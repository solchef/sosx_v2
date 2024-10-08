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
import web3 from "web3";
import { cleanNumber } from "utils/amount";
import { useTranslation } from 'contexts/Localization';

const BorderCard = styled.div`
  border: solid 1px ${({ theme }) => theme.colors.cardBorder};
  border-radius: 16px;
  padding: 16px;
`;

export default function UserStakingLogs(props) {
  const contract = useStakingContract();
  const { account } = useActiveWeb3React();
  const tokenContract = useSosxContract();
  const [balance, setUserBalace] = useState(0);
  const { toastError, toastSuccess } = useToast();
  const [activeStakes, setActiveStakes] = useState([]);
  const [showDetails, setShowDetails] = useState(-1);
  const [loadingData, setLoadingData] = useState(false);
  const { t } = useTranslation();
  
  const handleUnstake = async (stakeID) => {
    const unstake = await contract.returnTokens(stakeID);

    if (unstake) {
      toastSuccess(
        t("Successfully sent unstake SOSX transaction, Check balance in your wallet")
      );
    }
  };

  const showStakingLog = async () => {
    await listUserStaking();
  };

  const listUserStaking = async () => {
    contract.getStakeCount().then((stakes) => {
      let list = [];
      let count = 1;
      setActiveStakes([]);
      for (let i = 0; i < stakes; i++) {
        contract.getStakeInfo(i).then((stakeInstance) => {
          contract.calculatePeriods(i).then((period) => {
            contract.getCurrentStakeClass(i).then((stakeClass) => {
              let stakeAmt = Number(stakeInstance[0] / 10 ** 18);
              let instance = {
                stakeID: i,
                amount: stakeAmt,
                isWithdrawed: Boolean(stakeInstance[1]),
                stakeDate: new Date(stakeInstance[2] * 1000).toLocaleString(
                  "en-US",
                  { timeZone: "America/New_York" }
                ),
                referral: stakeInstance[3],
                rewardAmount: calculateInterest(12, stakeAmt, period),
                penalty: Number(stakeInstance[5]),
                stakingClass: Number(stakeClass),
                periodElapsed: period / (24 * 60),
              };
              list.push(instance);
              setActiveStakes((activeStakes) => [...activeStakes, instance]);
            });
          });
        });
        count++;
      }
    });
  };

  const calculateInterest = (timeLocked, amount, periods) => {
    let t = periods / (24 * 60) / 360;
    let r = timeLocked == 1 ? 0.29 : timeLocked == 2 ? 0.64 : 1.45;
    let n = 12;
    let p = amount;
    let amt = p * Math.pow(1 + r / n, n * t);
    // amt = amt.toFixed(3);
    const interest = (amt - p).toFixed(2);

    return interest;
  };

  const loadUI = async () => {
    setLoadingData(true);
    await listUserStaking();
    setLoadingData(false);
  };

  useEffect(() => {
    loadUI();
  }, []);

  return (
    <div className="card d-flex flex-column h-100">
      <div className="card-header">
        <div style={{ flex: "2 auto" }}>
          <div className="jsx-e5e2ca7965fa437a d-flex align-items-center mb-2">
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
              xmlSpace="preserve"
              className="jsx-e5e2ca7965fa437a"
              style={{
                width: "30px",
                fill: "rgb(255, 0, 204)",
                marginRight: "10px",
                height: "30px",
              }}
            >
              <g className="jsx-e5e2ca7965fa437a">
                <path
                  d="M458.091,128.116v326.842c0,26.698-21.723,48.421-48.422,48.421h-220.92c-26.699,0-48.421-21.723-48.421-48.421V242.439 c6.907,1.149,13.953,1.894,21.184,1.894c5.128,0,10.161-0.381,15.132-0.969v211.594c0,6.673,5.429,12.104,12.105,12.104h220.92 c6.674,0,12.105-5.432,12.105-12.104V128.116c0-6.676-5.432-12.105-12.105-12.105H289.835c0-12.625-1.897-24.793-5.297-36.315 h125.131C436.368,79.695,458.091,101.417,458.091,128.116z M159.49,228.401c-62.973,0-114.202-51.229-114.202-114.199 C45.289,51.229,96.517,0,159.49,0c62.971,0,114.202,51.229,114.202,114.202C273.692,177.172,222.461,228.401,159.49,228.401z M159.49,204.19c49.618,0,89.989-40.364,89.989-89.988c0-49.627-40.365-89.991-89.989-89.991 c-49.626,0-89.991,40.364-89.991,89.991C69.499,163.826,109.87,204.19,159.49,204.19z M227.981,126.308 c6.682,0,12.105-5.423,12.105-12.105s-5.423-12.105-12.105-12.105h-56.386v-47.52c0-6.682-5.423-12.105-12.105-12.105 s-12.105,5.423-12.105,12.105v59.625c0,6.682,5.423,12.105,12.105,12.105H227.981z M367.697,224.456h-131.14 c-6.682,0-12.105,5.423-12.105,12.105c0,6.683,5.423,12.105,12.105,12.105h131.14c6.685,0,12.105-5.423,12.105-12.105 C379.803,229.879,374.382,224.456,367.697,224.456z M367.91,297.885h-131.14c-6.682,0-12.105,5.42-12.105,12.105 s5.423,12.105,12.105,12.105h131.14c6.685,0,12.104-5.42,12.104-12.105S374.601,297.885,367.91,297.885z M367.91,374.353h-131.14 c-6.682,0-12.105,5.426-12.105,12.105c0,6.685,5.423,12.104,12.105,12.104h131.14c6.685,0,12.104-5.42,12.104-12.104 C380.015,379.778,374.601,374.353,367.91,374.353z"
                  className="jsx-e5e2ca7965fa437a"
                />
              </g>
              <g className="jsx-e5e2ca7965fa437a" />
              <g className="jsx-e5e2ca7965fa437a" />
              <g className="jsx-e5e2ca7965fa437a" />
              <g className="jsx-e5e2ca7965fa437a" />
              <g className="jsx-e5e2ca7965fa437a" />
              <g className="jsx-e5e2ca7965fa437a" />
              <g className="jsx-e5e2ca7965fa437a" />
              <g className="jsx-e5e2ca7965fa437a" />
              <g className="jsx-e5e2ca7965fa437a" />
              <g className="jsx-e5e2ca7965fa437a" />
              <g className="jsx-e5e2ca7965fa437a" />
              <g className="jsx-e5e2ca7965fa437a" />
              <g className="jsx-e5e2ca7965fa437a" />
              <g className="jsx-e5e2ca7965fa437a" />
              <g className="jsx-e5e2ca7965fa437a" />
            </svg>
            <h4 className="jsx-e5e2ca7965fa437a">STAKING LOG</h4>
          </div>
          <p className="jsx-e5e2ca7965fa437a mb-0">Your Staking Activities</p>
        </div>
        <div style={{ flex: "0 120px" }}>
          <button
            className="btn mr-1 btn-primary btn-lg mt-2"
            type="button"
            onClick={props.onActionModal}
          >
            UNSTAKE
          </button>
        </div>
      </div>
      <div className="jsx-e5e2ca7965fa437a card-body">
        <table
          className="jsx-e5e2ca7965fa437a  fs-12 p-4 mt-0 table "
          style={{ maxWidth: "100%" }}
        >
          <tbody className="ranking-header">
            <tr className="jsx-e5e2ca7965fa437a">
              <th className="jsx-e5e2ca7965fa437al">Date</th>
              {/* <th className="jsx-e5e2ca7965fa437a text-left">Action</th> */}
              <th className="jsx-e5e2ca7965fa437a text-left">Lock</th>
              <th className="jsx-e5e2ca7965fa437a text-left">Age</th>
              <th className="jsx-e5e2ca7965fa437a">Amount</th>
            </tr>
          </tbody>
          <tbody className="jsx-e5e2ca7965fa437a">
            {activeStakes.map((stake, i) => (
              <tr
                className="jsx-e5e2ca7965fa437a"
                style={{ borderColor: "rgb(30, 33, 36)" }}
              >
                <td className="jsx-e5e2ca7965fa437a text-white">
                  {stake.stakeDate}
                </td>
                {/* <td className="jsx-e5e2ca7965fa437a text-white">Staked</td> */}
                <th className="jsx-e5e2ca7965fa437a text-left">
                  {stake.stakingClass == 1 ? 3 : stake.stakingClass == 2 ? 6 : 12} M
                </th>
                <td className="jsx-e5e2ca7965fa437a text-left">
                  {stake.periodElapsed.toFixed(0)} D
                </td>
                <td className="jsx-e5e2ca7965fa437a text-left">
                  {" "}
                  {stake.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
