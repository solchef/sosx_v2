import { Box, Button, Flex, Heading, ProposalIcon } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/Layout/Container'
import Link from 'next/link'
import DesktopImage from './DesktopImage'
import Masonry from "react-masonry-css";
import { cleanNumber } from 'utils/amount'
import { useEffect, useState } from 'react'
import { useMediaPredicate } from 'react-media-hook'
import axios from 'axios'

const StyledRanking = styled(Box)`
  background: ${({ theme }) => theme.colors.gradients.bubblegum};
  padding-bottom: 32px;
  padding-top: 32px;
`

const TimerDisplay = (props) => {
  const { t } = useTranslation()
  const [price, setPrice] = useState(Number);
  const [displayLevel, setDisplayLevel] = useState(1);
  const biggerThan1500 = useMediaPredicate("(min-width: 1500px)");

  const getSOSXPrice = async () => {
    const getSOSXValue = await axios.get(
      "https://api.pancakeswap.info/api/v2/tokens/0xeE52def4a2683E68ba8aEcDA8219004c4aF376DF",
      {}
    );
    setPrice(1000 / parseFloat(getSOSXValue.data.data.price));
  };
  useEffect(() => {
    getSOSXPrice();
  }, []);

  return (
   
                <div
                className={`d-flex flex-column flex-sm-row flex-xl-column justify-content-between m-3`}
              >
                <div
                  className={`d-flex flex-column  backgroun-dark p-4 m-0 rounded`}
                >
                  <div className="d-flex align-items-center">
                    <img
                      src="images/submission-date-icon.png"
                      width="20px"
                      height="20px"
                    />
                    <span className="text-white fs-18 ml-2">
                      TIME REMAINING{" "}
                    </span>
                  </div>
                  <p className="fs-12 text-muted">
                    To submit a video competing the stage
                  </p>
                  <div className="clock ">
                    <div
                      className="d-flex justify-content-start"
                      id="countdown"
                    >
                      <div className="d-flex justify-content-start align-items-center">
                        <p className="li pr-2 pl-2 pb-0">
                          <span className=" main-pink m-0">{props.hours}</span>
                          Hours
                        </p>
                        <p className="li">
                          <span className="">:</span>
                        </p>
                      </div>
                      <div className="d-flex justify-content-start align-items-center">
                        <p className="li pr-2 pl-2 pb-0">
                          <span className=" main-pink m-0">{props.minutes}</span>
                          Minutes
                        </p>
                        <p className="li">
                          <span className="">:</span>
                        </p>
                      </div>
                      <p className="li pr-2 pl-2 pb-0">
                        <span className=" main-pink m-0">{props.seconds}</span>
                        Seconds
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`backgroun-dark m-0 p-4 rounded`}>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column">
                      <div className="d-flex pb-1 align-items-center">
                        <img
                          src="images/prize-pool-icon.png"
                          width="24px"
                          height="24px"
                        />

                        <span className="text-white fs-18 ml-2 ">
                          PRIZE POOL
                        </span>
                      </div>
                      <span className="text-muted pb-2  fs-10">
                        Really want this challenge <br /> to be done? Donate
                        to pool
                      </span>
                    </div>
                    <div className="">
                      <span className=" fs-22  pb-3 font-weight-bold main-pink">
                        $ 1,000.00
                      </span>
                      <br />
                      <span className=" fs-10  pb-3 font-weight-bold main-pink">
                        {Number(price.toFixed(0))} SOSX
                      </span>
                    </div>
                  </div>
                </div>
              </div>
  
    )
}

export default TimerDisplay
