import { Box, Button, Flex, Heading, ProposalIcon } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/Layout/Container'
import Link from 'next/link'
import DesktopImage from './DesktopImage'
import Masonry from "react-masonry-css";
import { cleanNumber } from 'utils/amount'
import { useState } from 'react'
import { useMediaPredicate } from 'react-media-hook'

const StyledRanking = styled(Box)`
  background: ${({ theme }) => theme.colors.gradients.bubblegum};
  padding-bottom: 32px;
  padding-top: 32px;
`

const Ranking = (props) => {
  const { t } = useTranslation()
  let count = 1;
  const [displayLevel, setDisplayLevel] = useState(1);
  const biggerThan1500 = useMediaPredicate("(min-width: 1500px)");

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
      <div>
        {props.voters
          .sort((b, a) => a.amount - b.amount)
          .map((voter, i) => (
            <span key={i}>
            
              {voter.level == displayLevel && (
                <a className="blueprint-header-display trader-display">
                  <div className="d-flex align-items-center">
                    <span className="text-white mr-3 fs-16 font-w600">
                      {()=> {count ++}}
                      {count}
                    </span>
                    <img
                      className="blueprint-img-sm rounded-circle"
                      src=" https://app.hedgeboard.io/userprofiles/default.png"
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
              )}
            </span>
          ))}
      </div>
    </div>









  )
}

export default Ranking
