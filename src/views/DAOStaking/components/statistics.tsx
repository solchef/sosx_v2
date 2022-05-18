import {useEffect ,useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDaoStakingContract, useSosxContract } from "hooks/useContract";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import useToast from "hooks/useToast";
import { getDaoLevel } from "views/Games/hooks/getDaoLevel";



export default function Statistics() {
  const [price, setPrice] = useState(Number);
  const [marketCap, setMarketCap] = useState(Number);
  const contract = useDaoStakingContract();
  const { account } = useActiveWeb3React();
  const tokenContract = useSosxContract();
  const [totalAmountStaked, setTotalAmountStaked] = useState(0);
  const [numberOfActiveStake, setNumberOfActiveStake] = useState(0);    
  const [level, setLevel] = useState(1);

        const stakingDetails = async () => {

            contract.getTotalStakeAmount().then((stakeAmount) => {
               let amount = Number(stakeAmount/ (10 ** 18));
                setTotalAmountStaked(amount);
                let level = getDaoLevel(amount);

                // alert(level)
                setLevel(level)
                 
            });

            contract.getStakeCount().then((activeStakes) => {
                setNumberOfActiveStake(Number(activeStakes));
            });

        };

        useEffect(() => {
            stakingDetails();
        }, []);



  return (


    <>
     <div className="stake-amount">
                    <div className="card">
                        <div className="card-body">
                            <div className="flex-row d-flex justify-content-between w-100   ml-auto mr-0 align-items-center" >
                                <div className="data-content">
                                    <div className="d-flex  align-items-end">
                                        <h2 className="mb-3 main-pink"> {totalAmountStaked} SOSX</h2>
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

                <div className="rate-amount">
                    <div className="card">
                        <div className="card-body">
                            <div className="flex-row d-flex justify-content-between w-100   ml-auto mr-0 align-items-center" >
                                <div className="data-content">
                                    <div className="d-flex  align-items-end">
                                        <h2 className="mb-3 main-pink">{level !== 0  ? (level == 1 ? 6.00 : level == 2 ? 9.00 : 12.00) : 0}</h2>
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

                <div className="dao-box">
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

                <div className="price-box">
                    <div className="card h-100 datarow justify-content-between">
                        <div className="card-body">
                            <div className="flex-row d-flex flex-wrap justify-content-between w-100 align-items-center" >
                                <div className="data-content">
                                    <div className="d-flex align-items-end">
                                        <h2 className="mb-3 main-pink">0.0000</h2>
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
