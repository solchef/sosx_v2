export const Info = (props) => {
  return (
    <div style={{ flex: "1 1 30%", gap: "20px", maxWidth: "100%" }}>
      <div className="card d-flex flex-column justify-content-betwee">
        <div className="card-body">
          <div className="mb-3">
            <div className="d-flex align-items-flex-end justify-content-between">
              <div className="d-flex flex-column align-items-start">
                <h4 className="main-pink mb-2 ">3 MONTHS</h4>
                <p
                  style={{ fontWeight: "bold", marginBottom: "10px!important" }}
                >
                  Lock your SOSX for 3 months
                  <br /> and receive a return of 29%
                </p>
              </div>
              <div className="text-center">
                <h1
                  className="mb-0 main-pink"
                  style={{
                    fontFamily: "digital-7",
                    fontSize: "60px",
                    color: "rgb(255, 0, 204)",
                    lineHeight: "54px",
                  }}
                >
                  29%
                </h1>
                <p
                  className="mt-0"
                  style={{ fontSize: "15px", color: "rgb(255, 0, 204)" }}
                >
                  FIXED APY
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="mb-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex flex-column align-items-start">
                <h4 className="main-pink mb-2 ">6 MONTHS</h4>
                <p
                  style={{ fontWeight: "bold", marginBottom: "10px!important" }}
                >
                  Lock your SOSX for 6 months
                  <br /> and receive a return of 64%
                </p>
              </div>
              <div className="text-center">
                <h1
                  className=" mb-0 main-pink"
                  style={{
                    fontFamily: "digital-7",
                    fontSize: "60px",
                    color: "rgb(255, 0, 204)",
                    lineHeight: "54px",
                  }}
                >
                  64%
                </h1>
                <p
                  className="mt-0"
                  style={{ fontSize: "15px", color: "rgb(255, 0, 204)" }}
                >
                  FIXED APY
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex flex-column align-items-start">
                <h4 className="main-pink mb-2 ">12 MONTHS</h4>
                <p
                  style={{ fontWeight: "bold", marginBottom: "10px!important" }}
                >
                  Lock your SOSX for 12 months
                  <br /> and receive a return of 145%
                </p>
              </div>
              <div className="text-center">
                <h1
                  className="mb-0 main-pink"
                  style={{
                    fontFamily: "digital-7",
                    fontSize: "60px",
                    color: "rgb(255, 0, 204)",
                    lineHeight: "54px",
                  }}
                >
                  145%
                </h1>
                <p
                  className="mt-0"
                  style={{ fontSize: "15px", color: "rgb(255, 0, 204)" }}
                >
                  FIXED APY
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card d-flex flex-column mt-4">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <img src="images/prize-pool-icon.png" className="title-icon" />
            <h4>CLAIM YOUR REWARDS</h4>
          </div>
          <p>Cash in your staking rewards</p>
          <div className=" mt-4 ">
            <div className="d-flex h-100 justify-content-between mt-3">
              <div>
                <div className="d-flex w-auto m-auto">
                  <h3>{props.reward} SOSX</h3>
                </div>
                <p className="success mb-0 fs-13 main-pink pt-2">AVAILABLE</p>
              </div>
              <div className="d-flex justify-content-between">
                <button
                  className="btn mr-1 btn-primary btn-lg mt-2"
                  onClick={props.onActionModal}
                  type="button"
                >
                  CLAIM REWARD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
