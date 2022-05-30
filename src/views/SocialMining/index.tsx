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
import ConnectWalletButton from "components/ConnectWalletButton";
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import NavMining from './NavMining';
import { useMediaPredicate } from "react-media-hook";
import { useTranslation } from "contexts/Localization";

const SocialMining = () => {
  const [showGuide, setshowGuide] = useState(false);
  const handleCloseGuide = () => setshowGuide(false);
  const handleStartGuide = () => setshowGuide(true);
  const [showSocialMining, setShowSocialMining] = useState(false);
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState('');
  const { account } = useActiveWeb3React();
  const { t } = useTranslation();

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
        setShowSocialMining(false);
      }
    } else {
      setCookies("referral_guide", "play");
      setShowSocialMining(true);
    }
  };

  const pauseGuideShow = () => {
    removeCookies("referral_guide");
    setCookies("referral_guide", "pause");
    setShowSocialMining(false);
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
        // return <Step0 />;
        break
    }

  };

  const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
	const biggest1400 = useMediaPredicate("(max-width: 1400px)");
  return (
    <>
    <div className={`${biggerThan1400 && "container"} mt-0 ${biggest1400 && "container-fluid"}`} >

      <NavMining step={step}/>

      {/* Guides are displayed here below */}
      <div className="d-flex flex-column align-items-center">
        {manageStepShow()}


        <div className="d-flex justify-content-between mt-4">
          {step !== 0 && (
            <button
              className="btn btn-outline-primary pr-4 pl-4 mr-2 mb-3"
              onClick={() => setStep(step - 1)}
            >
              {t('Back')}
            </button>
          )}

          {(step == 2) && !account ? <ConnectWalletButton className="btn btn-primary  pr-3 pl-3 mr-3 mb-3 " />
            : <button
              className="btn   pr-3 pl-3  btn-primary mr-3 mb-3"
              onClick={() => setStep(step == 3 ? 0 : step + 1)}
            >
              {step == 3 ? t("Reset") : t("Continue")}

            </button>}


        </div>

      </div>


      </div>

    </>
  );
};

export default SocialMining;
