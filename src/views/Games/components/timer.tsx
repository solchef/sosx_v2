import { Box, Button, Flex, Heading, ProposalIcon } from "@pancakeswap/uikit";
import styled from "styled-components";
import { useTranslation } from "contexts/Localization";
import Container from "components/Layout/Container";
import Link from "next/link";
import DesktopImage from "./DesktopImage";
import Masonry from "react-masonry-css";
import { cleanNumber } from "utils/amount";
import { useEffect, useState } from "react";
import { useMediaPredicate } from "react-media-hook";
import axios from "axios";
import { CloseButton, Modal, ModalHeader } from "react-bootstrap";
import { useDaoStakingContract } from "hooks/useContract";




const TimerDisplay = (props) => {
  const { t } = useTranslation();
  const [price, setPrice] = useState(Number);
  const [donateAmount, setDonateAmount] = useState(0);
  const [showDonate, setShowDonate] = useState(false);
  const handleCloseDonate = () => setShowDonate(false);
  const handleShowDonate = () => setShowDonate(true);
  const contract = useDaoStakingContract();
  

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

  const pad = (num) => {
    return ("0"+num).slice(-2);
}

    const handleSubmitDonate = () => {



    }

  return (
    <div className="flex-direction-column flex-wrap flex-row d-flex">
      <div className="card w-100" style={{marginBottom:"20px"}}>
        <div className="d-flex align-items-center mb-2">
          <img src="images/submission-date-icon.png" className="title-icon" />
          <h4>TIME REMAINING</h4>
        </div>

        {props.stage == 1 &&   <p>The challenge submission stage is in effect.</p>}
        {props.stage == 2 &&   <p>The challenge voting stage is in effect.</p>}
        {props.stage == 3 &&   <p>The challenge final voting stage is in effect.</p>}
        {props.stage == 4 &&   <p>The challenge upload stage is in effect.</p>}
      

        <div className="clock mt-4">
          <div
            className="d-flex m-auto w-100"
            id="countdown"
            style={{ justifyContent: "center" }}
          >
            <div className="d-flex justify-content-start align-items-center">
              <p className="li ">
                <span className=" main-pink m-0">{pad(props.hours)}</span>Hours
              </p>
              <p className="li d-flex align-self-baseline">
                <span>:</span>
              </p>
            </div>
            <div className="d-flex justify-content-start align-items-center">
              <p className="li ">
                <span className=" main-pink m-0">{pad(props.minutes)}</span>Minutes
              </p>
              <p className="li d-flex align-self-baseline">
                <span>:</span>
              </p>
            </div>
            <p className="li">
              <span className=" main-pink m-0">{pad(props.seconds)}</span>Seconds
            </p>
          </div>
        </div>
      </div>

      <div className="card w-100 prize-pool">
        <div className="d-flex flex-column mb-3">
          <div className="d-flex mb-2 align-items-center">
            <img src="images/prize-pool-icon.png" className="title-icon" />
            <h4>PRIZE POOL</h4>
          </div>
          <p>
            Feel free to <a href="#" onClick={handleShowDonate}>donate</a> to the prize pool.
          </p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h2 className="main-pink">$1,000.00</h2>
          <p className="main-pink">{Number(price.toFixed(0))} SOSX </p>
        </div>
      </div>

      <Modal show={showDonate} onHide={handleCloseDonate} centered >
        <ModalHeader className="text-dark" style={{background:"#111117"}}>
          Donate
          {/* <CloseButton /> */}
          <a href="#" onClick={handleCloseDonate} className="pull-right text-white"><i className="fa fa-close"></i></a>
        </ModalHeader>

        <div className="modal-body" style={{background:"#111117"}}>
          <form 
          // onSubmit={handleSubmitDonate}
          >

            <div className="form-group">
                 <input className="input1" placeholder="Amount Contributing in SOSX" required type="text" onChange={(e) => setDonateAmount(Number(e.target.value))}/>
            </div>
            <div className=" rounded p-2">
              <button className="btn btn-primary ">Donate to Prize Pool</button>
            </div>
          </form>
        </div>
      </Modal>
      
    </div>
  );
};

export default TimerDisplay;
