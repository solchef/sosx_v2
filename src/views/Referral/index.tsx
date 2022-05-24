import { useState } from "react";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import fetch from "isomorphic-unfetch";
import GameGuide from "./guide";
import Header from "./components/Header";
import REFERRAL from "./components/Referral";
import Mining from "./components/Mining";
import Staking from "./components/Staking";
import { useMediaPredicate } from "react-media-hook";
import { useStakingContract } from "hooks/useContract";

export default function Referral({ datasocial }) {

  const contract = useStakingContract();
  const [displayLevel, setDisplayLevel] = useState(1);
  const [socialData, setsocialData] = useState([]);
  const [resultsoc, setResultsoc] = useState(datasocial);
  const toggleTab = (event, type) => {
    event.stopPropagation();
    tabs.map((tabb) => (tabb.name == type ? setTab(tabb) : ""));
  };
  const [referrals, setReferrals] = useState([]);

  useEffect(() => {
    fetchReferral();
    getaccountDetails();
  }, []);



  const getaccountDetails = async () => {
    if (account) {
      let post = {
        viewReferralReward,
        account,
        createdAt: new Date().toDateString,
      };
      // save the post
      let response = await fetch("/api/account", {
        method: "POST",
        body: JSON.stringify(post),
      });

      // get the data
      let data = await response.json();
    }
  };


  const fetchReferral = async () => {
    let countreferrals = await contract.getReferralCount();
    setReferralCount(Number(countreferrals));

    contract
      .getCurrentReferrals()
      .then((result) => {
        if (result.length == 0) {
          result = null;
        }
        let referralData = [];
        let total = 0;

        for (let i = 0; i < referralCount; i++) {
          contract.calculateRewardReferral(result[i]).then((reward) => {
            let data = {
              address: result[i],
              amount: Number(reward / 10 ** 18).toFixed(2),
            };
            total = +Number(reward / 10 ** 18).toFixed(2);
            referralData.push(data);

          });
        }

        setReferrals(referralData);
        setViewReferralReward(total);
      })
      .catch((err) => {
      });
  };


  const { account } = useActiveWeb3React();
  const [referralCount, setReferralCount] = useState(0);
  const [viewReferralReward, setViewReferralReward] = useState(0);
  const biggerThan1400 = useMediaPredicate("(min-width: 576px)");
  return (
    <div className="container-fluid d-flex flex-wrap flex-column flex-sm-row flex-direction-row-reverse" style={{ gap: '20px' }}>

      {biggerThan1400 ? <>
        <Header referralCount={referralCount} viewReferralReward={viewReferralReward} />
        <REFERRAL account={account} />
      </> :
        <>
          <REFERRAL account={account} />
          <Header referralCount={referralCount} viewReferralReward={viewReferralReward} />
        </>
      }
      <Mining viewReferralReward={viewReferralReward} account={account} />
      <Staking setViewReferralReward={setViewReferralReward} viewReferralReward={viewReferralReward} referralCount={referralCount} setReferralCount={setReferralCount} account={account} datasocial={datasocial} />
      <GameGuide />
    </div>
  );
}
export async function getServerSideProps(ctx) {
  // request posts from api
  let response = await fetch(`https://app.socialx.io/api/social_mining`);
  // extract the data
  let data = await response.json();
  return {
    props: {
      datasocial: data["message"],
    },
  };
}
