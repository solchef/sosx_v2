import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
export default function Test() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (<>


    <div className="container-fluid">
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>



      <Modal dialogClassName="modal-css" show={show} onHide={handleClose}>
      <Modal.Header
          className="card border-bottom">
          Select the Stake Entry
          {/* <CloseButton /> */}
          <a href="#" onClick={handleClose} className="text-white">
            <i className="fa fa-close"></i>
          </a>
        </Modal.Header>
        <div className="card">
          <div className="d-flex mb-4 justify-content-between">
            <div className="fs-18 font-weight-bold main-pink">Date</div>
            <div className="fs-18 font-weight-bold main-pink">1.000</div>
            <div className="fs-18 font-weight-bold main-pink"><i className="fa fa-chevron-down"></i></div>
          </div>
          {/* style={{display: 'none'}} */}
          <div >
            <div className="d-flex justify-content-between">
              <div>
                <div className="d-flex mb-3 flex-column">
                  <span className="fs-14 mb-1">Amount Staked:
                  </span>
                  <span className="fs-14 text-success">1.000 SOSX
                  </span>
                </div>
                <div className="d-flex mb-3 flex-column">
                  <span className="fs-14 mb-1">Date Staked:
                  </span>
                  <span className="fs-14 text-success">5/15/2022, 11:34:40 PM
                  </span>
                </div>
                <div className="d-flex mb-3 flex-column">
                  <span className="fs-14 mb-1">Withdrawed:
                  </span>
                  <span className="fs-14 text-success">No</span>
                </div>
              </div>
              <div>
                <div className="d-flex mb-3 flex-column">
                  <span className="fs-14 mb-1">Rewards Gained:
                  </span>
                  <span className="fs-14 text-success">1.000 SOSX
                  </span>
                </div>
                <div className="d-flex mb-3 flex-column">
                  <span className="fs-14 mb-1">Duration Elapsed:
                  </span>
                  <span className="fs-14 text-success">0 Days
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <button className="btn btn-primary bg-success border-0">CLAIM
                REWARDS</button>
              <button className="btn btn-primary border-0">UNSTAKE</button>
            </div>
          </div>
        </div>
      </Modal>
      <style jsx global>{`
          .modal-css::before {
              content: "";
              width: 102%;
              height: 102%;
              border-radius: 10px;
              background-image: linear-gradient( var(--rotate), #ff85d4, #bf24ff, #00fbfe);
              position: absolute;
              z-index: -1;
              top: -1%;
              left: -1%;
              animation: spin 2.5s linear infinite;
          }
          @keyframes spin {
              0% {
                  --rotate: 0deg;
              }
              100% {
                  --rotate: 360deg;
              }
          }
      `}</style>

    </div>
  </>
  )
}