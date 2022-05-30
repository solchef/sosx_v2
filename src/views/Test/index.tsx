import { useEffect, useState } from "react";
import Step1 from "./components/steps/step1";
import Step2 from "./components/steps/step2";
import Step3 from "./components/steps/step3";
import ConnectWalletButton from "components/ConnectWalletButton";
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useMediaPredicate } from "react-media-hook";
import { useTranslation } from "contexts/Localization";

const SocialMining = () => {
  const [step, setStep] = useState(1);
  const { account } = useActiveWeb3React();
  const { t } = useTranslation();



  const manageStepShow = () => {
    switch (step) {
      case 1:
     
        return <Step1 />;
      case 2:
        return <Step2  />;
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

      {/* Guides are displayed here below */}
      <div className="d-flex flex-column align-items-center">
        {manageStepShow()}


        <div className="d-flex justify-content-between mt-4">
     
          {(step !== 1 && step !== 3 ) && (
            <button
              className="btn btn-outline-primary pr-4 pl-4 mr-2 mb-3"
              onClick={() => setStep(step - 1)}
            >
              {t('Back')}
            </button>
          )}

          {(step == 1) && !account ? <ConnectWalletButton className="btn btn-primary  pr-3 pl-3 mr-3 mb-3 " />
            : <button
              className="btn   pr-3 pl-3  btn-primary mr-3 mb-3"
              onClick={() => setStep(step == 3 ? 1 : step + 1)}
              >
                {step == 3 ? t("Send") : t("Continue")}


            </button>}

        </div>

      </div>


      </div>

    </>
  );
};

export default SocialMining;
