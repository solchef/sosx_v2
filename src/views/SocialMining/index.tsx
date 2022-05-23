import { useEffect, useState } from "react";
import {
  setCookies,
  getCookie,
  checkCookies,
  removeCookies,
} from "cookies-next";
import Step0 from "./mini";
import Step1 from "./SocialminingS1";
import Step2 from "./SocialminingS2";
import Step3 from "./SocialminingS3";

const GameGuide = () => {
  const [showGuide, setshowGuide] = useState(false);
  const handleCloseGuide = () => setshowGuide(false);
  const handleStartGuide = () => setshowGuide(true);
  const [showGameGuide, setShowGameGuide] = useState(false);
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState('');


  useEffect(() => {
    checkGuideShow();

  }, []);

  const checkGuideShow = () => {
    let status = checkCookies("referral_guide");
    // alert(status)
    if (status) {
      let cookieVal = getCookie("referral_guide");
      if (cookieVal == "play") {
        handleStartGuide();
      } else {
        //oxgame steps wont play
        setShowGameGuide(false);
      }
    } else {
      setCookies("referral_guide", "play");
      setShowGameGuide(true);
    }
  };

  const pauseGuideShow = () => {
    removeCookies("referral_guide");
    setCookies("referral_guide", "pause");
    setShowGameGuide(false);
  };

  const manageStepShow = () => {
    switch (step) {
      case 0:
        return <Step0 />;
        case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
        // return <Step1 />;
        break
    }

  };

  return (
    <>



        {/* Guides are displayed here below */}
    <div className="d-flex flex-column align-items-center">
    {manageStepShow()}


<div className="flex justify-content-between">
  {step !== 0 && (
    <button
    className="btn btn-outline-primary mr-2 mb-3"
      onClick={() => setStep(step - 1)}
    >
      Back
    </button>
  )}
  <button
     className="btn btn-primary mr-3 mb-3"
    onClick={() => setStep(step == 3 ? 1 : step + 1)}
  >
    {step == 3 ? "Reset" : "Continue"}
    
  </button>
</div>

    </div>
    

        

    </>
  );
};

export default GameGuide;
