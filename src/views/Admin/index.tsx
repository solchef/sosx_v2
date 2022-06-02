import useActiveWeb3React from "hooks/useActiveWeb3React";
import { useState } from "react";
import Challenges from "./Challenges";
import DAOStakingList from "./DAOStakingList";
import SocialMining from "./SocialMining";
import StakingList from "./StakingList";
import Submissions from "./Submissions";
import styles from "./styles/index.module.css";


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
    "0xa208F7C6CaFe9aE6b1af11588c72BEdCFE786f46",
    "0x4460ad75A9051a9E061d869d8f05f23B66f19303"
  ]
  return (
    <>
    {allowedWallets.includes(account) ? (
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
    <button onClick={() => setSection(1)} className={`${styles.custom} ${styles.btn12} position-relative ml-3 mr-3 font-weight-bold  ${section === 1 ? styles.btnclick : ""} `}><span className={styles.spann}>Challenges</span><span>Challenges</span></button>
    <button onClick={() => setSection(2)} className={`${styles.custom} ${styles.btn12} mr-3 position-relative font-weight-bold  ${section === 2 ? styles.btnclick : ""} `}><span className={styles.spann}>Submissions</span><span>Submissions</span></button>
    <button onClick={() => setSection(3)} className={`${styles.custom} ${styles.btn12} mr-3 position-relative font-weight-bold  ${section === 3 ? styles.btnclick : ""} `}><span className={styles.spann}>Staking List</span><span>Staking List</span></button>
    <button onClick={() => setSection(4)} className={`${styles.custom} ${styles.btn12} mr-3 position-relative font-weight-bold  ${section === 4 ? styles.btnclick : ""} `}><span className={styles.spann}>DAO List</span><span> DAO List</span></button>
    <button onClick={() => setSection(5)} className={`${styles.custom} ${styles.btn12} mr-3 position-relative font-weight-bold  ${section === 5 ? styles.btnclick : ""} `}><span className={styles.spann}>Social Mining</span><span> Social Mining</span></button>

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
