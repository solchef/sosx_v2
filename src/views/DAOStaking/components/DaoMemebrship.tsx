import { useMediaPredicate } from "react-media-hook";

export default function DaoMemebrship() {
	const biggest1500 = useMediaPredicate("(min-width: 1500px)");

  return (


    <div style={{ flex: `${biggest1500? ' 1 1 30%':' 1 1 30%' }`,gap:'20px', maxWidth:'100%' }}>
    <div className="card d-flex flex-column justify-content-between h-100">
      <div className="card-body">
        <div className="d-flex align-items-center mb-2">
          <h4>DAOX MEMBERSHIP</h4>
        </div>
        <p className="mb-3">
          DAOX members get to decide the rules for each challenge.
          Depending on their levels, DAOs can participate, vote and create
          challenges. Each membership level is reflected on how much SOSX
          they are staking and offers different types of voting/creating
          privilege. The OXGames are in their hands; what will they do
          with that kind of power?
        </p>
        <div className="p-2 mb-3">
          <div className="d-flex align-items-center justify-content-between">
           <div className="d-flex flex-column justify-content-between align-items-center">
           <span style={{fontFamily: 'digital-7', fontSize: "60px", color: "#ff00cc" }} className=" mr-3 mb-3 main-pink">
              6%{" "}
             
            </span>
             <span className="mt-2" style={{ fontSize: "15px", color: "#ff00cc" }}>
                *EST. APY
              </span>
           </div>
            <div className="d-flex flex-column align-items-end">
              <span className="main-pink">DAO Level 1</span>
              <h4 style={{ fontSize: "30px" }}>1 - 99,999</h4>
              <p className="text-nowrap ">Voting rights on Challenges</p>
            </div>
          </div>
        </div>
        <hr />
        <div className=" p-2 mb-3">
          <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column justify-content-between align-items-center">
           <span style={{fontFamily: 'digital-7', fontSize: "60px", color: "#ff00cc" }} className=" mr-3 mb-3 main-pink">
              9%{" "}
             
            </span>
             <span className="mt-2" style={{ fontSize: "15px", color: "#ff00cc" }}>
                *EST. APY
              </span>
           </div>
            <div className="d-flex flex-column align-items-end">
              <span className="main-pink">DAO Level 2</span>
              <h4 style={{ fontSize: "30px" }}>1,000,000+</h4>
              <p className="text-nowrap ">Voting + Creating Challenges</p>
            </div>
          </div>
        </div>
        <hr />
        <div className=" p-2">
          <div className="d-flex align-items-center justify-content-between">
          <div style={{transform: 'translateX(-15px)'}} className="d-flex flex-column justify-content-between align-items-center">
           <span style={{ fontFamily: 'digital-7', fontSize: "60px", color: "#ff00cc" }} className=" mr-3 mb-3 main-pink">
              12%
             
            </span>
             <span className="mt-2" style={{ fontSize: "15px", color: "#ff00cc" }}>
                *EST. APY
              </span>
           </div>
         
            <div className="d-flex flex-column align-items-end">
              <span className="main-pink">DAO Level 3</span>
              <h4 style={{ fontSize: "30px" }}>
                1,000,000+
              </h4>
              <p className="text-nowrap ">Create, vote and final pick</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   
  );
}
