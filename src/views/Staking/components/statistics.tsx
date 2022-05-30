import { useEffect, useState, useLayoutEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSosxContract, useStakingContract } from "hooks/useContract";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import useToast from "hooks/useToast";
import { getDaoLevel } from "views/Games/hooks/getDaoLevel";
import { useMediaPredicate } from "react-media-hook";

export default function Statistics(props) {
  const [price, setPrice] = useState(Number);
  const [marketCap, setMarketCap] = useState(Number);
  const contract = useStakingContract();
  const { account } = useActiveWeb3React();
  const tokenContract = useSosxContract();
  const [totalAmountStaked, setTotalAmountStaked] = useState(0);
  const [numberOfActiveStake, setNumberOfActiveStake] = useState(0);

  const [level, setLevel] = useState(0);

  const getSOSXPrice = async () => {
    const getSOSXValue = await axios.get(
      "https://api.pancakeswap.info/api/v2/tokens/0xeE52def4a2683E68ba8aEcDA8219004c4aF376DF",
      {}
    );
    setPrice(parseFloat(getSOSXValue.data.data.price));
    setMarketCap(parseFloat(getSOSXValue.data.data.price_BNB));
  };

  const stakingDetails = async () => {
    contract.getTotalStakeAmount().then((stakeAmount) => {
      let amount = Number(stakeAmount / 10 ** 18);
      setTotalAmountStaked(amount);
      let level = getDaoLevel(amount);

      // alert(level)
      setLevel(level);
    });

    contract.getStakeCount().then((activeStakes) => {
      setNumberOfActiveStake(Number(activeStakes));
    });
  };

  useEffect(() => {
    getSOSXPrice();
    stakingDetails();
  }, [stakingDetails]);
	const biggest1500 = useMediaPredicate("(min-width: 1500px)");

  return (
    <>
  

<div className="stake-amount" style={{flex: "1 1 17%", gap: "20px", maxWidth: "100%"}}>
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="flex-row d-flex justify-content-between w-100 ml-auto mr-0 align-items-center">
                                <div className="data-content">
                                    <div className="d-flex align-items-end">
                                        <h2 className="mb-3 main-pink">{totalAmountStaked}</h2>
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
                <div className="rate-amount" style={{flex: "1 1 17%", gap: "20px", maxWidth: "100%"}}>
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="flex-row d-flex justify-content-between w-100 ml-auto mr-0 align-items-center">
                                <div className="data-content">
                                    <div className="d-flex align-items-end">
                                        <h2 className="mb-3 main-pink">{numberOfActiveStake}</h2>
                                    </div>
                                    <div className="">
                                        <div className="">
                                            <h4>ACTIVE STAKES</h4>
                                        </div>
                                        <p className="mb-0">Active Stakes Count</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="stake-amount" style={{flex: "1 1 17%", gap: "20px", maxWidth: "100%"}}>
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="flex-row d-flex justify-content-between w-100 ml-auto mr-0 align-items-center">
                                <div className="data-content">
                                    <div className="d-flex align-items-end">
                                        <h2 className="mb-3 main-pink">29%</h2>
                                    </div>
                                    <div className="">
                                        <div className="">
                                            <h4>STAKING APY</h4>
                                        </div>
                                        <p className="mb-0">Period Staking Rewards %</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><div className="price-box" style={{flex: "1 1 17%"}}>
                    <div className="card h-100 datarow justify-content-between">
                        <div className="card-body">
                            <div className="flex-row d-flex flex-wrap justify-content-between w-100 align-items-center">
                                <div className="data-content">
                                    <div className="d-flex align-items-end">
                                        <h2 className="mb-3 main-pink">{props.reward}</h2>
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
