import { useEffect, useState } from "react";
import { Modal, ModalHeader } from "react-bootstrap";
import PrizePool from "./PrizePool";
import useStage from "hooks/useStage";

const TimerDisplay = () => {
  const [showRules, setshowRules] = useState(false);
  const handleCloseRules = () => setshowRules(false);
  const handleshowRules = () => setshowRules(true);
  const { stage, days, hour, min, sec } = useStage();

  const [lastRound, setLastRound] = useState(Number);

  const pad = (num) => {
    return ("0" + num).slice(-2);
  };

  const stages = [
    {
      stage: 1,
      action: "SUBMIT CHALLENGES",
      participationText: "ONLY LEVEL 2 & 3 CAN PARTICIPATE",
    },
    {
      stage: 2,
      action: "VOTE TOP 3 CHALLENGES",
      participationText: "LEVEL 1, 2 & 3 CAN PARTICIPATE",
    },
    {
      stage: 3,
      action: "VOTE FINAL CHALLENGE",
      participationText: "ONLY LEVEL  3 CAN PARTICIPATE",
    },
    {
      stage: 4,
      action: "COMPLETE THE CHALLENGE AND SUBMIT A VIDEO",
      participationText: "ANYONE CAN PARTICIPATE",
    },
  ];

  return (
    <>
      {stage != 4 && (
        <div className="card timer-card mb-3">
          <div className="card-body">
            <div className="d-flex align-items-center mb-2">
              <img
                src="images/submission-date-icon.png"
                className="title-icon"
              />
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
                    <span className=" main-pink m-0">{pad(days)}</span>
                    Days
                  </p>
                  <p className="li d-flex align-self-baseline">
                    <span>:</span>
                  </p>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <p className="li ">
                    <span className=" main-pink m-0">{pad(hour)}</span>
                    Hours
                  </p>
                  <p className="li d-flex align-self-baseline">
                    <span>:</span>
                  </p>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <p className="li ">
                    <span className=" main-pink m-0">{pad(min)}</span>
                    Minutes
                  </p>
                  <p className="li d-flex align-self-baseline">
                    <span>:</span>
                  </p>
                </div>
                <p className="li">
                  <span className=" main-pink m-0">{pad(sec)}</span>
                  Seconds
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="card timer-card mb-3">
        <div className="card-body">
          <div className="steps">
            <ul className="progressbar mb-4 ">
              <li style={{ width: "27%" }} className="active">
                CREATE
              </li>
              <li className={stage !== 1 && "active"}>TOP 3 VOTE</li>
              <li className={(stage === 3 || stage === 4) && "active"}>
                FINAL VOTE
              </li>
              <li className={stage === 4 && "active"}>SUBMIT VIDEO</li>
            </ul>
          </div>
          <div className="d-flex align-items-baseline">
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
            <h4>GAME STAGE {stages[stage - 1].stage}</h4>
          </div>
          <div className="d-flex align-items-center">
            <h4 className="subtitle">{stages[stage - 1].action}</h4>
          </div>
          <div className="d-flex align-items-center">
            <h4
              className="subtitle"
              style={{ color: "#c6ca12", marginTop: "10px" }}
            >
              {stages[stage - 1].participationText}
            </h4>
          </div>
          <div className="d-flex align-items-center mt-4">
            <a href="#" onClick={handleshowRules}>
              Click here for details rules
            </a>
          </div>
        </div>
      </div>

      <PrizePool />

      <Modal show={showRules} onHide={handleCloseRules} centered size="lg">
        <div className="modal-content" style={{ textAlign: "left" }}>
          <div
            className="text-dark modal-header"
            style={{
              background: "rgb(17, 17, 23)",
              borderRadius: "10px 10px 0px 0px",
            }}
          >
            Rules
            <a
              href="#"
              className="pull-right text-white"
              onClick={handleCloseRules}
            >
              <i className="fa fa-close" />
            </a>
          </div>
          <div
            className="modal-body"
            style={{
              background: "rgb(17, 17, 23)",
              borderRadius: "0px 0px 10px 10px",
            }}
          >
            <h3>
              What is the craziest thing you would do on camera for money?
            </h3>
            <p>
              The First person to complete created and voted challenge by the
              SOSX DAOX members and submit the video on socialx.io wins the
              prize pool!
            </p>
            <h3 className="mt-5">DAOX Membership</h3>
            <p>
              Challenge creation and voting are exclusive to DAOX members. The
              only requirement to become a member is you must stake SOSX. The
              more you stake, the higher your DAOX Level. Each level allowed you
              to create or vote for the challenge in OX Games.
            </p>
            <p>
              SOSX is purchasable on our swap. Once you've staked your SOSX, you
              can connect your wallet to the game and submit your challenge. For
              more info on purchasing and staking your SOSX tokens, visit our
              FAQ Page.
            </p>
            <p>
              <strong>Level 1</strong>
              <br />
              Staking 1 - 99,999 SOSX
            </p>
            <ul>
              <li>Vote for the top 3 Challenge</li>
            </ul>
            <p />
            <p>
              <strong>Level 2</strong>
              <br />
              Staking 100,000 - 999,999 SOSX
            </p>
            <ul>
              <li>Vote for top 3 Challenge</li>
              <li>Create Challenges </li>
            </ul>
            <p />
            <p>
              <strong>Level 3</strong>
              <br />
              Staking 1,000,000 SOSX or more
            </p>
            <ul>
              <li>Vote for top 3 Challenge</li>
              <li>Create Challenges </li>
              <li>Final Challenge vote</li>
            </ul>
            <p />
            <h3 className="mt-5">
              STAGE 1 - 8H
              <br />
              Challenges Submissions
            </h3>
            <p>
              Level 2 and 3 DAOX members get the honour to create the most
              insane challenge imaginable for others (or themselves) to
              accomplish in exchange for money. The challenge creation period
              only last 8 hours and needs to follow these four simple rules.
            </p>
            <ul>
              <li>Challenges must be accomplishable within a few hours.</li>
              <li>Challenges cannot be location or gender-specific. </li>
              <li>
                Challenges cant be designed to harm, kill, or intentionally lead
                to death.
              </li>
            </ul>
            <p>
              When creating a challenge, please be very specific about the
              rules. If one detail is missed, the submission is automatically
              disqualified. Also, to assure the authenticity of all submitted
              videos. We also suggest adding arbitrary rules like they must wear
              a red hoody or have SOSX marked on their forehead to ensure the
              video's authenticity.{" "}
            </p>
            <h3 className="mt-5">
              STAGE 2 - 8H
              <br />
              Vote for top 3 challenges
            </h3>
            <p>
              All DAO members have 8 hours to place a single vote on their
              favourite challenge. Connect your DAO-associated wallet and press
              the "submit your vote" button on the XO game page. From there, you
              can browse all challenges submitted and place your vote. Once the
              8-hour clock is completed, the top 3 challenges will go for a
              final vote on stage 3.
            </p>
            <h3 className="mt-5">
              STAGE 3 - 8H
              <br />
              Final challenge vote
            </h3>
            <p>
              Finally, Level 3 DAO members get to select today's challenge from
              the early voted top 3. Once the countdown reaches another 8 hours,
              the challenge will be announced to the public.
            </p>
            <h3 className="mt-5">
              STAGE 4 <br />
              Challenge Video Submission
            </h3>
            <p>
              A new challenge is now public, and the race is on since the first
              successful submission that follows all rules wins the prize pool.
              If one mistake, one direction is missed, the submission is
              automatically rejected, giving the following submission a chance
              to win.{" "}
            </p>
            <ol>
              <li>Video must be uploaded to youtube or TikTok.</li>
              <li>Share your video on your social media.</li>
              <li>Submit the URL on SocialX. </li>
            </ol>
            <p>Video must include the following:</p>
            <ol>
              <li>You must state in the video, "SocialX paid me to do it."</li>
              <li>Socialx.io must be mentioned in the info</li>
              <li>Video must be uploaded on your social media.</li>
            </ol>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TimerDisplay;
