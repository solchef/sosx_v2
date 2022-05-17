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

export default function DaoMemebrship() {
  const contract = useDaoStakingContract();
  const { account } = useActiveWeb3React();
  const tokenContract = useSosxContract();
  const [referralAddress, setReferralAddress] = useState("");
  const [totalAmountStaked, setTotalAmountStaked] = useState(0);
  const [numberOfActiveStake, setNumberOfActiveStake] = useState(0);
  const [hasReferral, setHasReferral] = useState(false);

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

    contract.getStakeCount().then((activeStakes) => {
      setNumberOfActiveStake(Number(activeStakes));
    });
  };

  useEffect(() => {
    stakingDetails();
  });

 

  return (


    <div style={{ flex: " 2 1 30%", minWidth: "450px" }}>
    <div className="card d-flex flex-column justify-content-between h-100">
      <div className="card-body">
        <div className="d-flex align-items-center mb-2">
          <h4>DAOX MEMBERSHIP</h4>
        </div>
        <p className="mb-3">
          DAOX members get to decide the rules for each challenge.
          Depending on their levels, DAOs can participate, vote and create
          challenges. Each membership level is reflected on how much SOSX
          they are staking and offers different types of voting/creating
          privilege. The OXGames are in their hands; what will they do
          with that kind of power?
        </p>
        <div className="p-2 mb-3">
          <div className="d-flex align-items-center justify-content-between">
            <h2 className=" mr-3 main-pink">
              6%{" "}
              <span style={{ fontSize: "15px", color: "#ff00cc" }}>
                *EST. APY
              </span>
            </h2>
            <div className="d-flex flex-column align-items-end">
              <span className="main-pink">DAO Level 1</span>
              <h4 style={{ fontSize: "30px" }}>1 - 99,999</h4>
              <p>Voting rights on Challenges</p>
            </div>
          </div>
        </div>
        <hr />
        <div className=" p-2 mb-3">
          <div className="d-flex align-items-center justify-content-between">
            <h2 className=" mr-3 main-pink">
              {" "}
              10%{" "}
              <span style={{ fontSize: "15px", color: " #ff00cc" }}>
                *EST. APY
              </span>
            </h2>
            <div className="d-flex flex-column align-items-end">
              <span className="main-pink">DAO Level 2</span>
              <h4 style={{ fontSize: "30px" }}>1,000,000+</h4>
              <p>Voting + Creating Challenges</p>
            </div>
          </div>
        </div>
        <hr />
        <div className=" p-2">
          <div className="d-flex align-items-center justify-content-between">
            <h2 className=" mr-3 main-pink">
              <h2 className=" mr-3 main-pink">
                {" "}
                10%{" "}
                <span style={{ fontSize: "15px", color: " #ff00cc" }}>
                  *EST. APY
                </span>
              </h2>
            </h2>
            <div className="d-flex flex-column align-items-end">
              <span className="main-pink">DAO Level 3</span>
              <h4 style={{ fontSize: "30px", letterSpacing: "3px" }}>
                1,000,000+
              </h4>
              <p>Create, vote and final pick</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    // <div className="card d-flex flex-column h-100 ">
    //   <div className="card-header border-0 p-0">
    //     <h4 className="fs-18">DAO Staking Summary</h4>
    //   </div>

    //   <div className="card-body flex-column d-flex justify-content-between">
    //     <div className="pt-4">
    //       <div className="d-flex justify-content-between">
    //         <p className="success mb-0 fs-12">Total SOSX Staked</p>
    //         <h4 className="mb-0 font-w600  fs-24 pb-3">
    //           {cleanNumber(totalAmountStaked / 10 ** 18 + "")}
    //         </h4>
    //       </div>

    //       <div className="d-flex justify-content-between">
    //         <p className="success mb-0 fs-12">Your DAO Level</p>
    //         <h4 className="mb-0 font-w600  fs-24 pb-3">
    //           {totalAmountStaked ? getLevel(totalAmountStaked / 10 ** 18) : 0}
    //         </h4>
    //       </div>

    //       <hr />
    //       <h5>DAO Membership</h5>
    //       <br />
    //       <div className="d-flex justify-content-between">
    //         <h6 className=" mb-0 fs-12">
    //           Level 1 : Stake between 1 and 100,000 SOSX
    //         </h6>
    //       </div>
    //       <br />
    //       <div className="d-flex justify-content-between">
    //         <h6 className=" mb-0 fs-12">
    //           Level 2 : Stake between 100,000 and 1,000,000 SOSX
    //         </h6>
    //       </div>

    //       <br />
    //       <div className="d-flex justify-content-between">
    //         <h6 className=" mb-0 fs-12">
    //           Level 3 : Stake above 1,000,000 SOSX
    //         </h6>
    //       </div>
    //     </div>
    //     <hr />
    //     <h6 className=" mb-0 fs-12 ">
    //       Staking for voting tokens also earn you interest. You can unstake at
    //       any time.
    //     </h6>
    //   </div>
    //   <div className="card-footer pt-0 mx-auto foot-card  border-0">

    //   </div>
    // </div>
  );
}
