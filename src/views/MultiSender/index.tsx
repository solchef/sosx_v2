import { useState } from "react";
import ConnectWalletButton from "components/ConnectWalletButton";
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useMediaPredicate } from "react-media-hook";
import { useTranslation } from "contexts/Localization";
import NavMining from "./NavMining";
import useToast from "hooks/useToast";
import Web3Utils from 'web3-utils';
import Step2 from "./components/steps/step2";
import Step3 from "./components/steps/step3";
import { formatBigNumberToFixed } from "utils/formatBalance";
import { useGetBnbBalance } from "hooks/useTokenBalance";

const MultiSender = () => {
  const [step, setStep] = useState(1);
  const { account } = useActiveWeb3React();
  const { t } = useTranslation();
  const [multiSenderValues, setMultiSenderValues] = useState("");
  const { toastError } = useToast()
  const [data, setData] = useState<any[]>([])
  const [totalBNB, setTotalBNB] = useState(Number)
  const [totalAddresses, setTotalAddresses] = useState(Number)
  const { balance } = useGetBnbBalance()
  const BNBBalance = Number(formatBigNumberToFixed(balance))
  const amountCheck = BNBBalance > totalBNB+0.0152
  
  const handleChangeUpload = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      let inputElement = document.getElementById("story") as HTMLInputElement;
      inputElement.value += e.target.result;
      setMultiSenderValues(String(e.target.result));
    };
  };

  const hasDuplicates = (array) => {
    const result = new Set(array).size !== array.length;
    return result;
  };
  
  const valid = () => {
    const lines = multiSenderValues.trim().split(/\r\n|\r|\n/).length;
    const accounts = multiSenderValues.split("\n");
    const acc = accounts.map((line) => line.trim().split(",")[0]);
    const value = accounts.map((line) => line.trim().split(",")[1]);
    for (const a of acc) {
      if (!Web3Utils.isAddress(a)) {
        toastError(t("Invalid address"));
        return false;
      }
    }
    for (const v of value) {
      if (v.length === 0 || v === undefined || v === "") {
        toastError(t("All amounts is required"));
        return false;
      }
      if (Number(v) === 0) {
        toastError(t("Amounts can't be zero"));
        return false;
      }
      if (Number.isNaN(Number(v))) {
        toastError(t("Amounts must be numbers"));
        return false;
      }
    }
    const zipped = acc.map((x, i) => [x, value[i]])
    const sum = value.reduce((partialSum, a) => Number(partialSum) + Number(a), 0);
    setTotalBNB(sum)
    setData(zipped)
    setTotalAddresses(acc.length)
    if (hasDuplicates(accounts)) {
      toastError(t("Duplicated Addresses"));
      return false;
    }
    return true
  }

  const manageStepShow = () => {
    switch (step) {
      case 1:
        return (
          <>
          <  NavMining step="0" />
          <div className="card w-100 h-100 mt-1">
            <div className="card-body">
              <form id="form">
                <div>
                  <div
                    className="flex-column d-flex  "
                    style={{ justifyContent: "center" }}
                  >
                    <div
                      className="challenge-form flex-column"
                      style={{ flex: "0 80%" }}
                    >
                      <div>
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span style={{ lineHeight: '1.35rem' }} className="input-group-text">Upload CSV</span>
                            </div>
                            <div className="custom-file">
                              <input
                                type="file"
                                id="csvInput"
                                onChange={handleChangeUpload}
                                className="custom-file-input"
                                accept=".csv, text/csv"
                              />
                              <label className="custom-file-label">
                                Choose .csv only
                              </label>
                            </div>
                          </div>
                        <h4 className="p-2 pb-3 w-100 main-pink text-center m-auto">OR</h4>
                        <div className="bg-input bg-input mb-3 py-2 px-3 rounded ">
                          <textarea
                            id="story"
                            rows={10}
                            cols={10}
                            placeholder={t("Addresses with Amounts")}
                            value={multiSenderValues}
                            onChange={(e) => setMultiSenderValues(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="text-white">{t("The address and amount are separated by commas with new line")}</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
        );
      case 2:
        return <Step2 data={data} addressesCount={totalAddresses} totalBNB={totalBNB} amountCheck={amountCheck} />
      case 3:
        return amountCheck && <Step3 />
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

          {!account ? <ConnectWalletButton className="btn btn-primary  pr-3 pl-3 mr-3 mb-3 " />
            : <button disabled={amountCheck && step == 2}
              className="btn   pr-3 pl-3  btn-primary mr-3 mb-3"
              onClick={() => {
                valid() === true ? setStep(step == 3 ? 1 : step + 1) : ""
              }}
              >
                {step == 3 ? t("Send") : t("Continue")}

            </button>}

        </div>

      </div>


      </div>

    </>
  );
};

export default MultiSender;
