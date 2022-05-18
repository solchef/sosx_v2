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
import web3 from "web3";

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
  const [allVoters, setAllVoter] = useState([]);
  const { account } = useActiveWeb3React();
  const [loading, setLoading] = useState<boolean>();

  const loadDaoLevels = async () => {
    setLoading(true);
    const level1 = [];
    const level2 = [];
    const level3 = [];
    let daoList = await contract.getAllAccount();
    daoList = [...new Set(daoList)];
    let voters = [];
    for (let i = 0; i < daoList.length; i++) {
      // if(voters.findIndex(vt => vt.address == daoList[i]) != -1){
      let voter_address = daoList[i];
      let total_stake = await contract.getVoterTotalStakeAmount(voter_address);
      total_stake = total_stake/(10 ** 18);
      let data = {
        address: voter_address,
        amount: total_stake,
        level: await getLevel(total_stake),
      };
      // if (voter_address == account) {setCurrentLevel(data.level)};
      // alert(data.level)
      if (data.level === 1) level1.push(data);
      if (data.level === 2) level2.push(data);
      if (data.level === 3) level3.push(data);
      voters.push(data);
      setAllVoter(voters);
      // }
    }

    voters.sort((b, a) => a.amount - b.amount);
    if (displayLevel === 1) setVoters(level1);
    if (displayLevel === 2) setVoters(level2);
    if (displayLevel === 3) setVoters(level3);
    setLoading(false);
  };

  useEffect(() => {
    loadDaoLevels();
    sortData();
  }, [account]);

  useEffect(() => {
    sortData();
  }, [displayLevel]);

  const sortData = () => {
    const currentLevel = [];
    for (let x = 0; x < allVoters.length; x++) {
      const element = allVoters[x];
      if (element.level === displayLevel) currentLevel.push(element);
    }
    setVoters(currentLevel);
  };
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
    <div className="card h-100 w-100" style={{ minHeight: 500 }}>
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
      <div
        className="d-flex justify-content-left mt-4"
        style={{ justifyContent: "start" }}
      >
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
          className={`font-weight-bold btn  text-nowrap  ${
            displayLevel === 3 ? " btn-primary" : ""
          }`}
        >
          {" "}
          Level 3
        </button>
      </div>

      <div className="tab-bg">
        <div
          className="d-flex p-4 mt-0 ranking-header"
          style={{
            justifyContent: "space-between",
            // marginTop: "0px!important",
          }}
        >
          <div className="header-item" style={{ width: "40px" }}>
            Rank
          </div>
          <div
            className="header-item"
            style={{ width: "55px", textAlign: "center" }}
          >
            Wallet
          </div>
          <div className="header-item">Staking</div>
        </div>
        <StyledList>
          {voters.length > 0 ? (
            voters.map((voter, i) => {
              return (
                <span key={i}>
                  <div
                    className="rank-item mt-3 d-flex px-4 pt-4 mt-0"
                    style={{
                      justifyContent: "space-between",
                      marginTop: "0px!important",
                      display: "flex",
                    }}
                  >
                    <div
                      className="header-item"
                      style={{ width: "40px", textAlign: "center" }}
                    >
                      {i + 1}
                    </div>
                    <div
                      className="header-item"
                      style={{ width: "160px", textAlign: "left" }}
                    >
                      {voter.address.replace(/(.{10})..+/, "$1…")}
                    </div>
                    <div className="header-item">
                      {cleanNumber(voter.amount + "")}
                    </div>
                  </div>
                </span>
              );
            })
          ) : !account ? (
            <div className="mx-auto text-center">
              You need to be connected to view the Level {displayLevel}
            </div>
          ) : loading ? (
            <div className="mx-auto text-center">Loading Data</div>
          ) : (
            <div className="mx-auto text-center">
              No one is on Level {displayLevel}
            </div>
          )}
        </StyledList>
      </div>
    </div>
  );
};

export default Ranking;
