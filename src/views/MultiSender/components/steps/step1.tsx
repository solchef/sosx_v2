import { useTranslation } from "contexts/Localization";
import { useState } from "react";
import NavMining from "../../NavMining";

export default function Step1() {
  const { t } = useTranslation();
  const [multiSenderValues, setMultiSenderValues] = useState("");

  const data = []
  const handleChangeUpload = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      let inputElement = document.getElementById("story") as HTMLInputElement;
      inputElement.value += e.target.result;
      setMultiSenderValues(String(e.target.result));
    };
  };

  const valid = () => {
    const lines = multiSenderValues.trim().split(/\r\n|\r|\n/).length;
    const accounts = multiSenderValues.split("\n");
    const acc = accounts.map((line) => line.trim().split(",")[0]);
    const value = accounts.map((line) => line.trim().split(",")[1]);
    data.push({
      acc, value
    })
    console.log(data)
  }
  return (
    <>
      <  NavMining step="0" />

      <div className="card w-100 h-100 mt-1">

        <div className="card-body">
          <form id="form" >
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
                        name="story"
                        rows={10}
                        cols={10}
                        placeholder={t("Addresses with Amounts")}
                        value={multiSenderValues}
                        onChange={(e) => setMultiSenderValues(e.target.value)}
                      />
                    </div>
                  </div>



                </div>
                <p className="text-white">{t("The address and amount are separated by commas")}</p>
              </div>

            </div>
          </form>
            <button type="submit" onClick={() => valid()}>Here</button>
        </div>
      </div>
    </>
  )
}