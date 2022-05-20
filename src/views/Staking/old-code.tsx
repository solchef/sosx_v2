<>
<div
  className={`${biggerThan1400 && "container"} ${
    biggest1400 && "container-fluid"
  }`}
>
  <div className="row mb-2">
    <div className="col-sm-3 col-6">
      <div className="card overflow-hidden" style={{ rowGap: "20px" }}>
        <h4>10,000,000,000</h4>
        <span className="pt-1 pb-1">Total supply</span>
      </div>
    </div>
    <div className="col-sm-3 col-6">
      <div className="card overflow-hidden" style={{ rowGap: "20px" }}>
        <h4>${marketCap.toFixed(8)}</h4>
        <span className="pt-1 pb-1">Market Cap</span>
      </div>
    </div>
    <div className="col-sm-3 col-6">
      <div className="card overflow-hidden" style={{ rowGap: "20px" }}>
        <h4>${price.toFixed(8)}</h4>
        <span className="pt-1 pb-1">Price</span>
      </div>
    </div>

    <div className="col-sm-3 col-6">
      <div className="card overflow-hidden" style={{ rowGap: "20px" }}>
        <h4>321139778.950</h4>
        <span className="pt-1 pb-1">Circulating Supply</span>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-xl-4 mb-4">
      <div className="card d-flex flex-column h-100">
        <div className="card-header border-0 pl-0 pt-0">
          <h4 className="fs-18 ">Stake SOSX</h4>
        </div>
        <div className="card-body">
          <div className="bg-dark mb-3 p-3 rounded">
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <input
                  type="text"
                  className="form-control"
                  required
                  onChange={(e) => handleAmountChange(e)}
                  defaultValue={0}
                />
              </span>
              <span className="text-white fs-18">SOSX</span>
            </div>
          </div>
          <div className="bg-dark p-3 mb-3 rounded">
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <select
                  className="form-control  select-special"
                  onChange={(e) => {
                    setStakingClass(Number(e.target.value));

                    const p = amountToStake;
                    const t =
                      Number(e.target.value) == 1
                        ? 0.25
                        : Number(e.target.value) == 2
                        ? 0.5
                        : 1;
                    const r =
                      Number(e.target.value) == 1
                        ? 0.29
                        : Number(e.target.value) == 2
                        ? 0.64
                        : 1.45;
                    const n = 12;
                    setStakingInterest(
                      Number(compoundInterest(p, t, r, n))
                    );
                  }}
                >
                  <option value={1}>3 </option>
                  <option value={2}>6 </option>
                  <option value={3}>12 </option>
                </select>
              </span>
              <span className="text-white fs-18">Months</span>
            </div>
          </div>
          <div className="bg-dark p-3 rounded">
            <div className="d-flex justify-content-between">
              <div className="small2">
                <div className="success mr-1">Reward Interest: </div>
                <div className="d-flex align-items-center">
                  <div className="text-white fs-14">
                    {" "}
                    {stakingClass == 1
                      ? 29
                      : stakingClass == 2
                      ? 64
                      : 145}
                    %
                  </div>
                </div>
              </div>
              <div className="small2">
                <div className="success mr-1">Estimated </div>
                <div className="d-flex align-items-center">
                  <div className="text-white fs-14">
                    {" "}
                    {stakingInterest} SOSX
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer pt-0 foot-card  border-0">
          {account ? (
            <>
              {activateStake ? (
                <div className="d-flex card-footer pt-0 pb-0 foot-card  border-0 justify-content-between">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn btn-primary mr-1 btn-lg w-100 text-nowrap mt-3"
                  >
                    {loading ? "Approving..." : "Approve"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary ml-1 btn-lg w-100 text-nowrap mt-3"
                    disabled
                  >
                    Stake
                  </button>
                </div>
              ) : (
                <div className="d-flex card-footer pt-0 pb-0  foot-card  border-0 justify-content-between">
                  <button
                    type="button"
                    className="btn btn-primary mr-1 btn-lg w-100 text-nowrap mt-3"
                    disabled
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn btn-primary ml-1 btn-lg w-100 text-nowrap mt-3"
                  >
                    {loading ? "Staking.." : "Stake"}
                  </button>
                </div>
              )}
            </>
          ) : (
            <ConnectWalletButton />
          )}
        </div>
      </div>
    </div>

    <div className="col-xl-4 mb-4">
      <div className="card d-flex flex-column h-100">
        <div className="card-header border-0 p-0">
          <h4 className="fs-18">Staking Summary</h4>
        </div>

        <div className="card-body flex-column d-flex justify-content-between">
          <div className="pt-4">
            <div className="d-flex justify-content-between">
              <p className="success mb-0 fs-12">Total SOSX Staked</p>
              <h4 className="mb-0 font-w600  fs-24 pb-3">
                {cleanNumber(totalAmountStaked / 10 ** 18 + "")}
              </h4>
            </div>
            <div className="d-flex justify-content-between">
              <p className="success mb-0 fs-12">Active Stakes</p>
              <h4 className="mb-0 font-w600  fs-24 pb-3">
                {numberOfActiveStake}
              </h4>
            </div>
            <div className="d-flex justify-content-between">
              <p className="success mb-0 fs-12">Has Referral</p>
              <h6 className="mb-0 font-w600  fs-24 pb-2">
                {hasReferral ? "Yes" : <b> No</b>}
              </h6>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <p className="success mb-0 fs-12">Show Archived</p>
            <span className="MuiSwitch-root mb-0 font-w600  fs-24 pb-3">
              <span
                className="MuiButtonBase-root MuiIconButton-root jss5 MuiSwitch-switchBase MuiSwitch-colorSecondary"
                aria-disabled="false"
              >
                <span className="MuiIconButton-label">
                  <input
                    className="jss8 MuiSwitch-input"
                    type="checkbox"
                    defaultValue="false"
                  />
                  <span className="MuiSwitch-thumb" />
                </span>
                <span className="MuiTouchRipple-root" />
              </span>
              <span className="MuiSwitch-track" />
            </span>
          </div>
        </div>
        <div className="card-footer pt-0 mx-auto foot-card  border-0">
          <button type="button" className="btn btn-primary btn-lg mt-5">
            Refresh Summarry
          </button>
        </div>
      </div>
    </div>

    <div className="col-xl-4 mb-4">
      <UserStakingLogs />
    </div>
  </div>
</div>
</>