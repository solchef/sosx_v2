import styled from "styled-components";
import Link from "next/link";
import { cleanNumber } from "utils/amount";
import { useState, useEffect } from "react";
import { useDaoStakingContract } from "hooks/useContract";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { getDaoLevel } from "../hooks/getDaoLevel";

const StyledList = styled.ol`
  li {
    list-style-type: decimal;
  }
`;

const Ranking = (props) => {
  const [displayLevel, setDisplayLevel] = useState(1);
  const contract = useDaoStakingContract();
  const [voters, setVoters] = useState([]);
  const [allVoters, setAllVoter] = useState([]);
  const { account } = useActiveWeb3React();
  const [loading, setLoading] = useState<boolean>();

  const loadDaoLevels = async (data) => {
    setLoading(true);
    const level1 = [];
    const level2 = [];
    const level3 = [];
    let daoList = data;
    daoList = [...new Set(daoList)];
    let voters = [];
    for (let i = 0; i < daoList.length; i++) {
      let voter_address = daoList[i];
      let total_stake = await contract.getVoterTotalStakeAmount(voter_address);
      total_stake = total_stake / 10 ** 18;
      let data = {
        address: voter_address,
        amount: total_stake,
        level: await getDaoLevel(total_stake),
      };
      if (data.level === 1) level1.push(data);
      if (data.level === 2) level2.push(data);
      if (data.level === 3) level3.push(data);
      voters.push(data);
      setAllVoter(voters);
    }

    voters.sort((b, a) => a.amount - b.amount);
    if (displayLevel === 1) setVoters(level1);
    if (displayLevel === 2) setVoters(level2);
    if (displayLevel === 3) setVoters(level3);
    setLoading(false);
  };

  useEffect(() => {
    contract.getAllAccount().then((daolist) => {
      loadDaoLevels(daolist);
    });
    sortData();
  }, [props.stage]);

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

  return (
    <div className="card h-100" style={{ minHeight: "500px" }}>
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
          className={`font-weight-bold btn  text-nowrap ${displayLevel === 1 ? " btn-primary" : ""
            }`}
        >
          {" "}
          Level 1
        </button>
        <button
          type="submit"
          onClick={() => setDisplayLevel(2)}
          className={`font-weight-bold btn  text-nowrap ${displayLevel === 2 ? " btn-primary" : ""
            }`}
        >
          {" "}
          Level 2
        </button>
        <button
          type="submit"
          onClick={() => setDisplayLevel(3)}
          className={`font-weight-bold btn  text-nowrap  ${displayLevel === 3 ? " btn-primary" : ""
            }`}
        >
          {" "}
          Level 3
        </button>
      </div>

      <div className="jsx-e5e2ca7965fa437a tab-bg">

        <table style={{ maxWidth: '100%' }} className="jsx-e5e2ca7965fa437a ranking-header fs-12 p-4 mt-0 table">

          <tr className="jsx-e5e2ca7965fa437a">
            <th className="fs-16 font-weight-normal">Rank</th>
            <th className="fs-16 font-weight-normal text-center">Wallet</th>
            <th className="fs-16 font-weight-normal">Staking</th>
          </tr>

          <tbody>
            {voters.length > 0 ? (
              voters.map((voter, i) => {
                return (
                  <tr key={i} style={{ borderColor: '#1e2124' }}>
                    <td className="jsx-e5e2ca7965fa437a fs-16 font-weight-normal" > {i + 1}</td>
                    <td className="jsx-e5e2ca7965fa437a fs-16 font-weight-normal" >  {voter.address.replace(/(.{10})..+/, "$1…")}</td>
                    <td className="jsx-e5e2ca7965fa437a fs-16 font-weight-normal" >{cleanNumber(voter.amount + "")}</td>
                  </tr>
                );
              })
            ) : !account ? (
              <tr className=" text-nowrap mt-4">
                <td className="jsx-e5e2ca7965fa437a fs-16 font-weight-normal" style={{ border: 'none' }}>
                </td>
                <td className="jsx-e5e2ca7965fa437a fs-16 font-weight-normal" style={{ border: 'none' }} >
                  You need to be connected to view the Level {displayLevel}
                </td>
                <td className="jsx-e5e2ca7965fa437a fs-16 font-weight-normal" style={{ border: 'none' }}>
                </td>
              </tr>

            ) : loading ? (
              <tr className=" text-nowrap mt-4">
                <td className="jsx-e5e2ca7965fa437a fs-16 font-weight-normal" style={{ border: 'none' }}>
                </td>
                <td className="jsx-e5e2ca7965fa437a fs-16 font-weight-normal" style={{ border: 'none' }} >
                  Loading Data
                </td>
                <td className="jsx-e5e2ca7965fa437a fs-16 font-weight-normal" style={{ border: 'none' }}>
                </td>
              </tr>
            ) : (
              <tr className=" text-nowrap mt-4">
                <td className="jsx-e5e2ca7965fa437a fs-16 font-weight-normal" style={{ border: 'none' }}>
                </td>
                <td className="jsx-e5e2ca7965fa437a fs-16 font-weight-normal" style={{ border: 'none' }} >
                  No one is on Level {displayLevel}
                </td>
                <td className="jsx-e5e2ca7965fa437a fs-16 font-weight-normal" style={{ border: 'none' }}>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <style jsx>{`
       tbody tr:last-child td{
        border-bottom: none;
      }
      `}</style>
      </div>
    </div>
  );
};

export default Ranking;
