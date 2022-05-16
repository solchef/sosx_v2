import { Box, Button, Flex, Heading, ProposalIcon } from "@pancakeswap/uikit";
import styled from "styled-components";
import { useTranslation } from "contexts/Localization";
import Container from "components/Layout/Container";
import Link from "next/link";
import DesktopImage from "./DesktopImage";
import Masonry from "react-masonry-css";
import { cleanNumber } from "utils/amount";
import { useState, useEffect } from "react";
import { useMediaPredicate } from "react-media-hook";
import { useDaoStakingContract, useSosxContract } from "hooks/useContract";
import ConnectWalletButton from "components/ConnectWalletButton";
import useActiveWeb3React from "hooks/useActiveWeb3React";

const StyledRanking = styled(Box)`
  background: ${({ theme }) => theme.colors.gradients.bubblegum};
  padding-bottom: 32px;
  padding-top: 32px;
`;

const StyledList = styled.ol`
  li {
    list-style-type: decimal;
  }
`;

const Ranking = (props) => {
  const { t } = useTranslation();
  const [displayLevel, setDisplayLevel] = useState(1);
  const contract = useDaoStakingContract();
  const [voters, setVoters] = useState([]);
  const [count, setCount] = useState(1);
  const { account } = useActiveWeb3React();

  const loadDaoLevels = async () => {
    let daoList = await contract.getAllAccount();
    daoList = [...new Set(daoList)];
    let voters = [];
    for (let i = 0; i < daoList.length; i++) {
      // if(voters.findIndex(vt => vt.address == daoList[i]) != -1){
      let voter_address = daoList[i];
      let total_stake = await contract.getVoterTotalStakeAmount(voter_address);
      total_stake = Number(total_stake / 10 ** 18);
      let data = {
        address: voter_address,
        amount: total_stake,
        level: await getLevel(total_stake),
      };
      // if (voter_address == account) {setCurrentLevel(data.level)};
      // alert(data.level)
      voters.push(data);

      // }
    }

    setVoters(voters);
  };

  useEffect(() => {
    loadDaoLevels();
  }, []);

  const getLevel = (amount) => {
    if (
      amount >= process.env.NEXT_PUBLIC_LEVEL1 &&
      amount < process.env.NEXT_PUBLIC_LEVEL2
    ) {
      return 1;
    }

    if (
      amount >= process.env.NEXT_PUBLIC_LEVEL2 &&
      amount < process.env.NEXT_PUBLIC_LEVEL3
    ) {
      return 2;
    }

    if (amount >= process.env.NEXT_PUBLIC_LEVEL3) {
      return 3;
    }
  };

  const incrementCounter = () => {};

  return (
    <div className="card h-100 w-100" style={{ minHeight: "800px" }}>
      <div className="d-flex align-items-center mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 239 116"
          style={{
            // @ts-ignore
            enableBackground: "new 0 0 239 116",
            width: "40px",
            fill: "#ff00cc",
            marginRight: "10px",
          }}
          xmlSpace="preserve"
        >
          <path d="M58,0C25.97,0,0,25.97,0,58c0,32.03,25.97,58,58,58s58-25.97,58-58C116,25.97,90.03,0,58,0z M58,90.78  c-18.11,0-32.78-14.68-32.78-32.78c0-18.11,14.68-32.78,32.78-32.78S90.78,39.89,90.78,58C90.78,76.11,76.11,90.78,58,90.78z"></path>
          <g>
            <path
              className="st0"
              d="M151.87,48.3l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23   c5.27,5.27,5.27,13.82,0,19.09l0,0C165.69,53.57,157.14,53.57,151.87,48.3z"
            ></path>
            <path
              className="st0"
              d="M215.27,112.05l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23   c5.27,5.27,5.27,13.82,0,19.09l0,0C229.09,117.32,220.55,117.32,215.27,112.05z"
            ></path>
            <path
              className="st0"
              d="M126.64,92.96l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09l-25.23,25.23   c-5.27,5.27-13.82,5.27-19.09,0l0,0C121.37,106.77,121.37,98.23,126.64,92.96z"
            ></path>
            <path
              className="st0"
              d="M190.73,29.21l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09L209.82,48.3   c-5.27,5.27-13.82,5.27-19.09,0l0,0C185.46,43.03,185.46,34.48,190.73,29.21z"
            ></path>
          </g>
        </svg>

        <h4>DAOX MEMBERS</h4>
      </div>
      <p>
        To become member, visit <Link href="/daostaking/">STAKING DAO</Link>
      </p>
      <div className="d-flex justify-content-between mt-3">
        <button
          type="submit"
          onClick={() => setDisplayLevel(1)}
          className={`font-weight-bold btn  text-nowrap ${
            displayLevel === 1 ? " btn-primary" : ""
          }`}
        >
          {" "}
          Level 1
        </button>
        <button
          type="submit"
          onClick={() => setDisplayLevel(2)}
          className={`font-weight-bold btn  text-nowrap ${
            displayLevel === 2 ? " btn-primary" : ""
          }`}
        >
          {" "}
          Level 2
        </button>
        <button
          type="submit"
          onClick={() => setDisplayLevel(3)}
          className={`font-weight-bold btn  text-nowrap ${
            displayLevel === 3 ? " btn-primary" : ""
          }`}
        >
          {" "}
          Level 3
        </button>
      </div>

      <div className="mt-3">
        <StyledList>
          {voters.length > 0 ? (
            voters
              .sort((b, a) => a.amount - b.amount)

              .map((voter, i) => (
                <>
                  {voter.level == displayLevel && (
                    <li key={i}>
                      <a className="blueprint-header-display trader-display">
                        <div className="d-flex align-items-center">
                          <span className="text-white mr-3 fs-16 font-w600">
                            {/* {() => setCount(count+1)} */}
                          </span>
                          <img
                            className="blueprint-img-sm rounded-circle"
                            src="https://app.hedgeboard.io/userprofiles/default.png"
                            alt="profile"
                          />
                          <div className="ml-1">
                            <span className=" card-small-text text-white trader-name">
                              {voter.address.replace(/(.{10})..+/, "$1…")}
                            </span>
                          </div>
                        </div>
                        <span> {cleanNumber(voter.amount + "")} </span>
                        {/* {count ++} */}
                      </a>
                    </li>
                  )}
                </>
              ))
          ) : (
            <>
              {!account ? (
                <>
                  <ConnectWalletButton />
                </>
              ) : (
                <div className="mx-auto text-center">Data Loading</div>
              )}
            </>
          )}
        </StyledList>
      </div>
    </div>
  );
};

export default Ranking;
