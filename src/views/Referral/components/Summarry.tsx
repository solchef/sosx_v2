import ConnectWalletButton from "components/ConnectWalletButton";

const Summary = ({account,viewReferralReward, viewMiningReward, handleWithdrawReward})=>{

    return (
        <div style={{ flex: '1 1 25%',order:'6' ,maxWidth:'100%'}}>

        <div className="card d-flex flex-column">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <img src="images/prize-pool-icon.png" className="title-icon" />
              <h4>SOCIAL MINING REFERRAL</h4>
            </div>
            <p>SOCIAL MINING REFERRAL</p>
            <div className=" mt-4 ">
              <div className="d-flex h-100 justify-content-between mt-3">
                {account ? (
                  <>
                    <div>
                      <div className="d-flex w-auto m-auto">
                        <h3> {viewMiningReward} SOSX</h3>
                      </div>
                      <p className="success mb-0 fs-13 main-pink pt-2">Rewards are sent to your wallet.</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button
                      disabled
                        className="btn mr-1 btn-primary btn-lg mt-2"
                        type="button"
                      >
                        Withdraw
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="d-flex w-auto m-auto">
                        <h3>{viewMiningReward} SOSX</h3>
                      </div>
                      <p className="success mb-0 fs-13 main-pink pt-2">AVAILABLE</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <ConnectWalletButton
                        className="btn mr-1 btn-primary btn-lg mt-2"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>


        <div className="card d-flex flex-column mt-4">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <img src="images/prize-pool-icon.png" className="title-icon" />
              <h4>STAKING REFERRAL</h4>
            </div>
            <p>Staking Referral</p>
            <div className=" mt-4 ">
              <div className="d-flex h-100 justify-content-between mt-3">
                {account ? (
                  <>
                    <div>
                      <div className="d-flex w-auto m-auto">
                        <h3>{viewReferralReward} SOSX</h3>
                      </div>
                      <p className="success mb-0 fs-13 main-pink pt-2">AVAILABLE</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button
                      onClick={handleWithdrawReward}
                        className="btn mr-1 btn-primary btn-lg mt-2"
                        type="button">
                        Withdraw
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="d-flex w-auto m-auto">
                        <h3>{viewReferralReward} SOSX</h3>
                      </div>
                      <p className="success mb-0 fs-13 main-pink pt-2">AVAILABLE</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <ConnectWalletButton
                        className="btn mr-1 btn-primary btn-lg mt-2"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    }
    
    export default Summary