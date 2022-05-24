import { useEffect, useState } from "react";
import axios from "axios";
import { Modal, ModalHeader } from "react-bootstrap";
import { useDaoStakingContract } from "hooks/useContract";
import useToast from "hooks/useToast";

const PrizePool = (props) => {
  const [price, setPrice] = useState(Number);
  const [donateAmount, setDonateAmount] = useState(0);
  const [showDonate, setShowDonate] = useState(false);
  const handleCloseDonate = () => setShowDonate(false);
  const handleShowDonate = () => setShowDonate(true);
  const contract = useDaoStakingContract();
  const { toastError, toastSuccess } = useToast();

  const getSOSXPrice = async () => {
    const getSOSXValue = await axios.get(
      "https://api.pancakeswap.info/api/v2/tokens/0xeE52def4a2683E68ba8aEcDA8219004c4aF376DF",
      {}
    );
    setPrice(1000 / parseFloat(getSOSXValue.data.data.price));
  };
  useEffect(() => {
    getSOSXPrice();
  }, []);

  const pad = (num) => {
    return ("0" + num).slice(-2);
  };

  const handleSubmitDonate = async () => {
    let donate = await contract.oXGamesRewardPool(
      donateAmount + "000000000000000000"
    );
    if (donate) {
      toastSuccess("Thank you for contributing to the reward pool");
    } else {
      toastError("An error has occurred");
    }
  };

  return (
    <>
      <div className="card prize-card">
      <div className="card-body"> 
        <div className="d-flex flex-column mb-0">
          <div className="d-flex mb-2 align-items-center">
            <img src="images/prize-pool-icon.png" className="title-icon" />
            <h4>PRIZE POOL</h4>
          </div>
          <p>
            Feel free to{" "}
            <a href="#" onClick={handleShowDonate}>
              donate
            </a>{" "}
            to the prize pool.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <h2 className="main-pink">$1,500.00</h2>
        </div>
      </div>
      </div>

      <Modal show={showDonate} onHide={handleCloseDonate} centered>
        <ModalHeader
          className="text-dark"
          style={{ background: "#111117", borderRadius: "10px 10px 0px 0px" }}
        >
          Donate
          {/* <CloseButton /> */}
          <a
            href="#"
            onClick={handleCloseDonate}
            className="pull-right text-white"
          >
            <i className="fa fa-close"></i>
          </a>
        </ModalHeader>

        <div
          className="modal-body"
          style={{ background: "#111117", borderRadius: "0px 0px 10px 10px" }}
        >
          <form
          // onSubmit={handleSubmitDonate}
          >
            <div className="form-group">
              <input
                className="input1"
                placeholder="Amount Contributing in SOSX"
                required
                type="text"
                onChange={(e) => setDonateAmount(Number(e.target.value))}
              />
            </div>
            <div className=" rounded p-2">
              <button className="btn btn-primary " onClick={handleSubmitDonate}>
                Donate to Prize Pool
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default PrizePool;
