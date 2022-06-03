import { useEffect, useState, useLayoutEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDaoStakingContract, useSosxContract } from "hooks/useContract";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import useToast from "hooks/useToast";
import { getDaoLevel } from "views/Games/hooks/getDaoLevel";
import { useMediaPredicate } from "react-media-hook";

export default function Statistics({
  totalAmountStaked,
  reward,
  setTotalAmountStaked,
  withdrawned,
}) {
  const [price, setPrice] = useState(Number);
  const [marketCap, setMarketCap] = useState(Number);
  const contract = useDaoStakingContract();
  const { account } = useActiveWeb3React();
  const tokenContract = useSosxContract();
  const [numberOfActiveStake, setNumberOfActiveStake] = useState(0);

  const [level, setLevel] = useState(0);

  const stakingDetails = async () => {
    contract.getTotalStakeAmount().then((stakeAmount) => {
      let amount = Number(stakeAmount / 10 ** 18);
      setTotalAmountStaked(amount);
      let level = getDaoLevel(amount - withdrawned);

      // alert(level)
      setLevel(level);
    });

    contract.getStakeCount().then((activeStakes) => {
      setNumberOfActiveStake(Number(activeStakes));
    });
  };

  useEffect(() => {
    stakingDetails();
  }, [stakingDetails, account]);

  const biggest1500 = useMediaPredicate("(min-width: 1500px)");

  return (
    <>
      <div
        style={{
          flex: `${biggest1500 ? " 1 1 17%" : " 1 1 40%"}`,
          gap: "20px",
          maxWidth: "100%",
        }}
        className="stake-amount"
      >
        <div className="card h-100">
          <div className="card-body">
            <div className="flex-row d-flex justify-content-between w-100   ml-auto mr-0 align-items-center">
              <div className="data-content">
                <div className="d-flex  align-items-end">
                  <h2 className="mb-3 main-pink">
                    {" "}
                    {totalAmountStaked - withdrawned}{" "}
                  </h2>
                </div>
                <div className="">
                  <div className="">
                    <h4>STAKED SOSX</h4>
                  </div>
                  <p className="mb-0">Actively staking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          flex: `${biggest1500 ? " 1 1 17%" : " 1 1 40%"}`,
          gap: "20px",
          maxWidth: "100%",
        }}
        className="rate-amount"
      >
        <div className="card h-100">
          <div className="card-body">
            <div className="flex-row d-flex justify-content-between w-100   ml-auto mr-0 align-items-center">
              <div className="data-content">
                <div className="d-flex  align-items-end">
                  <h2 className="mb-3 main-pink">
                    {level !== 0
                      ? level == 1
                        ? 6.0
                        : level == 2
                        ? 9.0
                        : 12.0
                      : 0}
                    {/* {`${'%'}`} */}
                  </h2>
                </div>
                <div className="">
                  <div className="">
                    <h4>DAILY APY</h4>
                  </div>
                  <p className="mb-0">Daily Staking Rewards %</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          flex: `${biggest1500 ? " 1 1 17%" : " 1 1 40%"}`,
          gap: "20px",
          maxWidth: "100%",
        }}
        className="dao-box"
      >
        <div className="card h-100 datarow justify-content-between">
          <div className="card-body">
            <div className="flex-row d-flex justify-content-between w-100   ml-auto mr-0 align-items-center">
              <div className="data-content">
                <div className="d-flex align-items-end">
                  <h2 className="mb-3 main-pink">LEVEL {level}</h2>
                </div>
                <div className="">
                  <div className="">
                    <h4>DAOX MEMBERSHIP</h4>
                  </div>
                  <p className="mb-0">Create, vote and final pick.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          flex: `${biggest1500 ? " 1 1 17%" : " 1 1 40%"}`,
          gap: "20px",
          maxWidth: "100%",
        }}
        className="price-box"
      >
        <div className="card h-100 datarow justify-content-between">
          <div className="card-body">
            <div className="flex-row d-flex flex-wrap justify-content-between w-100 align-items-center">
              <div className="data-content">
                <div className="d-flex align-items-end">
                  <h2 className="mb-3 main-pink">{reward > 0 ? reward : 0}</h2>
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
    </>
  );
}
