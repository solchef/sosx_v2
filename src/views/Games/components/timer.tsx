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
import useToast from "hooks/useToast";

const TimerDisplay = (props) => {
  const { t } = useTranslation();
  const [price, setPrice] = useState(Number);
  const [donateAmount, setDonateAmount] = useState(0);
  const [showDonate, setShowDonate] = useState(false);
  const handleCloseDonate = () => setShowDonate(false);
  const handleShowDonate = () => setShowDonate(true);
  const contract = useDaoStakingContract();
  const { toastError, toastSuccess } = useToast();

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
    return ("0" + num).slice(-2);
  };

  const handleSubmitDonate = async () => {
    let donate = await contract.oXGamesRewardPool(
      donateAmount + "000000000000000000"
    );
    if (donate) {
      toastSuccess("Thank you for contributing to the reward pool");
    } else {
      toastError("An error has occurred");
    }
  };

  return (
    <>
      <div className="card prize-card mb-3">
        <div className="d-flex flex-column mb-0">
          <div className="d-flex mb-2 align-items-center">
            <img src="images/prize-pool-icon.png" className="title-icon" />
            <h4>PRIZE POOL</h4>
          </div>
          <p>
            Feel free to{" "}
            <a href="#" onClick={handleShowDonate}>
              donate
            </a>{" "}
            to the prize pool.
          </p>
        </div>
        <div className="d-flex justify-content-center m-auto w-auto">
          <h2 className="main-pink">$1,000.00</h2>
        </div>
      </div>
      <div className="card timer-card mb-3">
        <div className="d-flex align-items-center mb-2">
          <img src="images/submission-date-icon.png" className="title-icon" />
          <h4>TIME REMAINING</h4>
        </div>
        <p>To complete this stage of the game</p>
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
                <span className=" main-pink m-0">{pad(props.minutes)}</span>
                Minutes
              </p>
              <p className="li d-flex align-self-baseline">
                <span>:</span>
              </p>
            </div>
            <p className="li">
              <span className=" main-pink m-0">{pad(props.hours)}</span>Seconds
            </p>
          </div>
        </div>
      </div>

      {props.stage == 1 && (
        <div className="card timer-card mb-3">
          <div className="d-flex align-items-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 239 116"
              xmlSpace="preserve"
              style={{
                width: "40px",
                fill: "rgb(255, 0, 204)",
                marginRight: "5px",
              }}
            >
              <path d="M58,0C25.97,0,0,25.97,0,58c0,32.03,25.97,58,58,58s58-25.97,58-58C116,25.97,90.03,0,58,0z M58,90.78 c-18.11,0-32.78-14.68-32.78-32.78c0-18.11,14.68-32.78,32.78-32.78S90.78,39.89,90.78,58C90.78,76.11,76.11,90.78,58,90.78z" />
              <g>
                <path
                  className="st0"
                  d="M151.87,48.3l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C165.69,53.57,157.14,53.57,151.87,48.3z"
                />
                <path
                  className="st0"
                  d="M215.27,112.05l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C229.09,117.32,220.55,117.32,215.27,112.05z"
                />
                <path
                  className="st0"
                  d="M126.64,92.96l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09l-25.23,25.23 c-5.27,5.27-13.82,5.27-19.09,0l0,0C121.37,106.77,121.37,98.23,126.64,92.96z"
                />
                <path
                  className="st0"
                  d="M190.73,29.21l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09L209.82,48.3 c-5.27,5.27-13.82,5.27-19.09,0l0,0C185.46,43.03,185.46,34.48,190.73,29.21z"
                />
              </g>
            </svg>
            <h4>GAME STAGE 1</h4>
          </div>
          <div className="d-flex align-items-center">
            <h4 className="subtitle">CHALLENGES SUBMISSIONS</h4>
          </div>
          <div className="d-flex align-items-center">
            <h5 className="subtitle">LEVEL 2-3 DAOX ONLY</h5>
          </div>
          <p className="mt-3">
            DAO Members get to decide the rules for the next game challenge.
            Whoever accomplishes the challenge first wins the prize pool. Please
            include detailed directions for your challenge.
          </p>
          <div className="d-flex align-items-center mt-4 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 239 116"
              xmlSpace="preserve"
              style={{
                width: "40px",
                fill: "rgb(255, 0, 204)",
                marginRight: "5px",
              }}
            >
              <path d="M58,0C25.97,0,0,25.97,0,58c0,32.03,25.97,58,58,58s58-25.97,58-58C116,25.97,90.03,0,58,0z M58,90.78 c-18.11,0-32.78-14.68-32.78-32.78c0-18.11,14.68-32.78,32.78-32.78S90.78,39.89,90.78,58C90.78,76.11,76.11,90.78,58,90.78z" />
              <g>
                <path
                  className="st0"
                  d="M151.87,48.3l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C165.69,53.57,157.14,53.57,151.87,48.3z"
                />
                <path
                  className="st0"
                  d="M215.27,112.05l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C229.09,117.32,220.55,117.32,215.27,112.05z"
                />
                <path
                  className="st0"
                  d="M126.64,92.96l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09l-25.23,25.23 c-5.27,5.27-13.82,5.27-19.09,0l0,0C121.37,106.77,121.37,98.23,126.64,92.96z"
                />
                <path
                  className="st0"
                  d="M190.73,29.21l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09L209.82,48.3 c-5.27,5.27-13.82,5.27-19.09,0l0,0C185.46,43.03,185.46,34.48,190.73,29.21z"
                />
              </g>
            </svg>
            <h4>GAME RULES</h4>
          </div>

          <p style={{ fontWeight: 800, color: "white" }}>
            1- Challenges must be accomplishable within a few hours.
          </p>
          <p style={{ fontWeight: 800, color: "white" }}>
            2- Challenges cannot be location or gender-specific.
          </p>
          <p style={{ fontWeight: 800, color: "white" }}>
            3- Challenges cant be designed to harm, kill, or intentionally lead
            to death.
          </p>
        </div>
      )}

      {props.stage == 2 && (
        <div id="timer-section" style={{ flex: "0 1 335px" }}>
          <div className="card rules-card">
            <div className="d-flex align-items-center mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 239 116"
                xmlSpace="preserve"
                style={{
                  width: "40px",
                  fill: "rgb(255, 0, 204)",
                  marginRight: "5px",
                }}
              >
                <path d="M58,0C25.97,0,0,25.97,0,58c0,32.03,25.97,58,58,58s58-25.97,58-58C116,25.97,90.03,0,58,0z M58,90.78 c-18.11,0-32.78-14.68-32.78-32.78c0-18.11,14.68-32.78,32.78-32.78S90.78,39.89,90.78,58C90.78,76.11,76.11,90.78,58,90.78z"></path>
                <g>
                  <path
                    className="st0"
                    d="M151.87,48.3l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C165.69,53.57,157.14,53.57,151.87,48.3z"
                  ></path>
                  <path
                    className="st0"
                    d="M215.27,112.05l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C229.09,117.32,220.55,117.32,215.27,112.05z"
                  ></path>
                  <path
                    className="st0"
                    d="M126.64,92.96l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09l-25.23,25.23 c-5.27,5.27-13.82,5.27-19.09,0l0,0C121.37,106.77,121.37,98.23,126.64,92.96z"
                  ></path>
                  <path
                    className="st0"
                    d="M190.73,29.21l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09L209.82,48.3 c-5.27,5.27-13.82,5.27-19.09,0l0,0C185.46,43.03,185.46,34.48,190.73,29.21z"
                  ></path>
                </g>
              </svg>
              <h4>GAME STAGE 2</h4>
            </div>
            <div className="d-flex align-items-center">
              <h4 className="subtitle">CHALLENGES VOTING</h4>
            </div>
            <div className="d-flex align-items-center">
              <h5 className="subtitle">ALL DAOX MEMBERS CAN VOTE</h5>
            </div>
            <p className="mt-3">
              It's time to vote for the next game challenge. The top 3
              challenges with the most votes will move forward to the final vote
              on stage 3.{" "}
            </p>
            <p>
              Review all the challenges to the right. For full descriptions, tap
              the DETAILS tab.
            </p>
            <p>
              Place your one vote only by tapping the VOTE button. Vote cannot
              be reversed
            </p>
          </div>
        </div>
      )}

      <Modal show={showDonate} onHide={handleCloseDonate} centered>
        <ModalHeader
          className="text-dark"
          style={{ background: "#111117", borderRadius: "10px 10px 0px 0px" }}
        >
          Donate
          {/* <CloseButton /> */}
          <a
            href="#"
            onClick={handleCloseDonate}
            className="pull-right text-white"
          >
            <i className="fa fa-close"></i>
          </a>
        </ModalHeader>

        <div
          className="modal-body"
          style={{ background: "#111117", borderRadius: "0px 0px 10px 10px" }}
        >
          <form
          // onSubmit={handleSubmitDonate}
          >
            <div className="form-group">
              <input
                className="input1"
                placeholder="Amount Contributing in SOSX"
                required
                type="text"
                onChange={(e) => setDonateAmount(Number(e.target.value))}
              />
            </div>
            <div className=" rounded p-2">
              <button className="btn btn-primary " onClick={handleSubmitDonate}>
                Donate to Prize Pool
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default TimerDisplay;
