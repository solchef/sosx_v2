import { useState } from "react";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import fetch from "isomorphic-unfetch";
import GameGuide from "./guide";
import Header from "./components/Header";
import REFERRAL from "./components/Referral";
import Mining from "./components/Mining";
import Staking from "./components/Staking";
export default function Referral({ datasocial }) {
  const { account } = useActiveWeb3React();
  const [referralCount, setReferralCount] = useState(0);
  const [viewReferralReward, setViewReferralReward] = useState(0);
  return (
    <div className="container-fluid d-flex flex-wrap flex-column flex-sm-row flex-direction-row-reverse" style={{ gap: '20px' }}>
        <Header referralCount={referralCount} viewReferralReward={viewReferralReward} />
        <REFERRAL account={account} />
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
