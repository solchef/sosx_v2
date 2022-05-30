import NavMining from "../../NavMining";

export default function Test() {

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
                        placeholder={"Addresses with Amounts"}
                      />
                    </div>
                  </div>



                </div>
<p className="text-white">                The address and amount are separated by commas
</p>
              </div>

            </div>

          </form>
        </div>
      </div>
    </>
  )
}