import useActiveWeb3React from "hooks/useActiveWeb3React";
import { useState } from "react";
import Challenges from "./Challenges";
import DAOStakingList from "./DAOStakingList";
import SocialMining from "./SocialMining";
import StakingList from "./StakingList";
import Submissions from "./Submissions";


export default function Admin() {
  const [section, setSection] = useState(1);
  const { account } = useActiveWeb3React();
  const showSections  = () => {
    switch (section) {
      case 1:
        return <Challenges />
      case 2:
        return <Submissions />
      case 3:
        return <StakingList />
      case 4:
        return <DAOStakingList />
      case 5:
        return <SocialMining />
      default: 1
    }
  }
  const allowedWallets = [
    "0x0c8978Ee5fb8481d9d2a76F6a0495fc785748618", 
    "0x82E4BBE89C62063eCe92423F56A016fEE715eF3a", 
    "0xa208F7C6CaFe9aE6b1af11588c72BEdCFE786f46"
  ]
  return (
    <>
    {!allowedWallets.includes(account) ? (
     <div
          className="container-fluid "
          style={{ gap: "20px" }}
        >
    <div className="card h-100" style={{ minHeight: "500px" }}>
          <h4>Admin Panel</h4>
      <div className="d-flex align-items-center mb-2">
      <div
        className="d-flex justify-content-left mt-4"
        style={{ justifyContent: "start" }}
      >
        <button
          type="submit"
          onClick={() => setSection(1)}
          className={`font-weight-bold btn  text-nowrap ${section === 1 ? " btn-primary" : ""
            }`}
        >
          {" "}
          Challenges
        </button>
        <button
          type="submit"
          onClick={() => setSection(2)}
          className={`font-weight-bold btn  text-nowrap ${section === 2 ? " btn-primary" : ""
            }`}
        >
          {" "}
          Submissions
        </button>
        <button
          type="submit"
          onClick={() => setSection(3)}
          className={`font-weight-bold btn  text-nowrap  ${section === 3 ? " btn-primary" : ""
            }`}
        >
          {" "}
          Staking List
        </button>
        <button
          type="submit"
          onClick={() => setSection(4)}
          className={`font-weight-bold btn  text-nowrap  ${section === 4 ? " btn-primary" : ""
            }`}
        >
          {" "}
          DAO List
        </button>
        <button
          type="submit"
          onClick={() => setSection(5)}
          className={`font-weight-bold btn  text-nowrap  ${section === 5 ? " btn-primary" : ""
            }`}
        >
          {" "}
          Social Mining
        </button>
      </div>
        </div>
      {showSections()}
      </div>
      </div>
      ) : (
        <p>You don't authorized to be here</p>
      )}
    </>
    
  );
}
