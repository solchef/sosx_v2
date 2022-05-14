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

  const [displayLevel, setDisplayLevel] = useState(1);
  const biggerThan1500 = useMediaPredicate("(min-width: 1500px)");

  return (
    <div className={`col-12 ${biggerThan1500 && "col-xl-3"}`}>
    <div className="row h-100 ">
      <div className="col-12 h-100 ">
        <div className=" backgroun-dark m-3 h-100 rounded overflow-hidden">
          <div className="align-items-start border-0 justify-content-start">
            <div>
              <h4 className="fs-20">Ranking</h4>
              <span className="fs-12  font-weight-bold text-white text-nowrap">
                SOSX Top DAO Members
              </span>
            </div>
          </div>
          <ul className="nav3 nav-rank nav3-tabs butten nav3-justified">
            <li className="nav3-item ">
              <a
                className={
                  displayLevel === 1
                    ? `nav3-link active pl-1 pr-1  pb-2 font-weight-bold text-white rounded text-nowrap`
                    : "nav3-link  pl-1 pr-1  pb-2 font-weight-bold text-white rounded text-nowrap"
                }
                onClick={() => setDisplayLevel(1)}
              >
                Level 1
              </a>
            </li>
            <li className="nav3-item">
              <a
                className={
                  displayLevel === 2
                    ? `nav3-link active pl-1 pr-1  pb-2 font-weight-bold text-white rounded text-nowrap`
                    : "nav3-link  pl-1 pr-1  pb-2 font-weight-bold text-white rounded text-nowrap"
                }
                onClick={() => setDisplayLevel(2)}
              >
                Level 2
              </a>
            </li>
            <li className="nav3-item">
              <a
                className={
                  displayLevel === 3
                    ? `nav3-link active pl-1 pr-1  pb-2 font-weight-bold text-white rounded text-nowrap`
                    : "nav3-link  pl-1 pr-1  pb-2 font-weight-bold text-white rounded text-nowrap"
                }
                onClick={() => setDisplayLevel(3)}
              >
                Level 3
              </a>
            </li>
          </ul>

          <div className={``}>
            {props.voters
              .sort((b, a) => a.amount - b.amount)
              .map((voter, i) => (
                <span key={i}>
                  {voter.level == displayLevel && (
                    <a className="blueprint-header-display trader-display">
                      <div className="d-flex align-items-center">
                        <span className="text-white mr-3 fs-16 font-w600">
                          {i + 1}.
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
                    </a>
                  )}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>


    {/*end Ranking*/}
  </div>
  
    )
}

export default Ranking
