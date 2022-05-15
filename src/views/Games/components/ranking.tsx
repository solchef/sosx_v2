import { Box, Button, Flex, Heading, ProposalIcon } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/Layout/Container'
import Link from 'next/link'
import DesktopImage from './DesktopImage'
import Masonry from "react-masonry-css";
import { cleanNumber } from 'utils/amount'
import { useState, useEffect } from 'react'
import { useMediaPredicate } from 'react-media-hook'
import { useDaoStakingContract, useSosxContract } from "hooks/useContract";


const StyledRanking = styled(Box)`
  background: ${({ theme }) => theme.colors.gradients.bubblegum};
  padding-bottom: 32px;
  padding-top: 32px;
`

const StyledList = styled.ol`
  

  li{
    list-style-type: decimal;
  }
`

const Ranking = (props) => {
  const { t } = useTranslation()
  const [displayLevel, setDisplayLevel] = useState(1);
  const contract = useDaoStakingContract();
  const [voters, setVoters] = useState([]);
  const [count, setCount] = useState(1);



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
        level: getLevel(total_stake),
      };
      // if (voter_address == account) {setCurrentLevel(data.level)};
      // console.log(data)
      // alert(data.level)
      voters.push(data);

      // }
    }
    // await server.files.write("/levels/level.json", JSON.stringify(voters), {
    //   create: true,
    // });
    setVoters(voters);

  };

  useEffect(() => {
     loadDaoLevels()
  },[props])

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

   const incrementCounter = () => {


   }


  return (
    <div className="card">
      <div className="align-items-start border-0 justify-content-start">
        <div>
          <h4 className="fs-20">Ranking</h4><span className="fs-12 font-weight-bold text-white text-nowrap">SOSX Top DAO
            Members</span>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-3">
      <button onClick={() => setDisplayLevel(1)} type="submit" className={`font-weight-bold btn  text-nowrap 
      ${displayLevel === 1 ?' btn-primary':''}`}
      > Level 1</button>
      <button onClick={() => setDisplayLevel(2)} type="submit" className={`font-weight-bold btn  text-nowrap 
      ${displayLevel === 2 ?' btn-primary':''}`}
      > Level 2</button>
      <button onClick={() => setDisplayLevel(3)} type="submit" className={`font-weight-bold btn text-nowrap 
      ${displayLevel === 3 ?' btn-primary':''}`}
      > Level 3</button>
      </div>
      <div className='mt-3'>
      <StyledList>
        {voters
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
          ))}
          </StyledList>
      </div>
    </div>









  )
}

export default Ranking
