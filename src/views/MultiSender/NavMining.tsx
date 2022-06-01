
const NavMining = ({step}) => {
  return (
    <div className="mx-auto d-flex justify-content-center mt-5 mb-3 align-items-center">
      <div id="steps">
    
          <div
            className={`step ${step === "0" ? "active" : "done"} `}
            data-desc="Prepare"
          >
            1
          </div>

 
          <div
            className={`step ${
              step === "1" ? "active" : ""
            } ${step === "3" ? "done" : ""} ${
              step === "2" ? "done" : ""
            }`}
            data-desc="Confirm"
          >
            2
          </div>

  
          <div
            className={`step ${
              step === "2" ? "active" : ""
            } ${step === "3" ? "done" : ""}`}
            data-desc="Send"
          >
            3
          </div>
   
      
      </div>
      <style jsx>{`
        @media (max-width: 576px) {
          .step:nth-child(n + 2):before {
            width: 27px !important;
            transform: translate(-34px, 8px) !important;
          }
        }
        .step:nth-child(n + 2):before {
          width: 75px;
          height: 3px;
          display: block;
          background-color: white;
          transform: translate(-97px, 8px);
          content: "";
        }
        .step {
          width: 25px;
          height: 25px;
          background-color: #444444;
          display: inline-block;
          border: 4px solid;
          border-color: transparent;
          border-radius: 50%;
          color: #6e6e6e;
          font-weight: 600;
          text-align: center;
          line-height: 12px;
          margin-right: 10px;
          font-size: 17px;
        }

        .step:after {
          width: 150px;
          display: block;
          transform: translate(-67px, 18px);
          color: #818698;
          content: attr(data-desc);
          font-weight: 400;
          font-size: 13px;
        }
        .step:first-child {
          padding-top: 2px;
          transform: translate(10px, -5px);
        }
        .step.done {
          background-color: #ff00cc !important;
          color: white !important;
        }
        .step.done:before {
          background: #ff00cc;
        }
      `}</style>
    </div>
  );
};

export default NavMining;
