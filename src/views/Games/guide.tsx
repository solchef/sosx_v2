import { useEffect, useState } from "react";
import { Modal, ModalFooter, ModalHeader } from "react-bootstrap";
import {
  setCookies,
  getCookie,
  checkCookies,
  removeCookies,
} from "cookies-next";
import Step1 from "./components/steps/step1";
import Step2 from "./components/steps/step2";
import Step3 from "./components/steps/step3";
import Step4 from "./components/steps/step4";

const GameGuide = () => {
  const [showGuide, setshowGuide] = useState(false);
  const handleCloseGuide = () => setshowGuide(false);
  const handleStartGuide = () => setshowGuide(true);
  const [showGameGuide, setShowGameGuide] = useState(false);
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState('');


  useEffect(() => {
    checkGuideShow();
          
  }, []);

  const checkGuideShow = () => {
    let status = checkCookies("oxgame_guide");
    // alert(status)
    if (status) {
      let cookieVal = getCookie("oxgame_guide");
      if (cookieVal == "play") {
        handleStartGuide();
      } else {
        //oxgame steps wont play
        setShowGameGuide(false);
      }
    } else {
      setCookies("oxgame_guide", "play");
      setShowGameGuide(true);
    }
  };

  const pauseGuideShow = () => {
    removeCookies("oxgame_guide");
    setCookies("oxgame_guide", "pause");
    setShowGameGuide(false);
  };

  const manageStepShow = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
        // return <Step1 />;
        break
    }

  };

  return (
    <>
    
      <Modal show={showGuide} centered>
        <ModalHeader
          className="text-dark"
          style={{ background: "#111117", borderRadius: "10px 10px 0px 0px" }}
        >
         OXGAME GUIDE
          {/* <CloseButton /> */}
          <a
            href="#"
            onClick={handleCloseGuide}
            className="pull-right text-white"
          >
            <i className="fa fa-close"></i>
          </a>
        </ModalHeader>

        <div
          className="modal-body"
          style={{ background: "#111117", borderRadius: "0px 0px 10px 10px" }}
        >
          {/* Guides are displayed here below */}
          {manageStepShow()}

          <div className="d-flex justify-content-between">
          <div>
            <input type="checkbox" onChange={() => pauseGuideShow()} />
            <label className="label mt-3">Dont show again?</label>
          </div>

            <div className="flex justify-content-between">
              {step !== 1 && (
                <button
                  className="btn btn-secondary btn-sm m-2"
                  onClick={() => setStep(step - 1)}
                >
                  Back
                </button>
              )}
              <button
                className="btn btn-primary btn-sm m-2"
                onClick={() => setStep(step == 4 ? 1 : step + 1)}
              >
                {step == 4 ? "Start Over" : "NEXT"}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default GameGuide;
