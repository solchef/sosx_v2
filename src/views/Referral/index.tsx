import { useState } from "react";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import fetch from "isomorphic-unfetch";
import GameGuide from "./guide";
import Header from "./components/Header";
import REFERRAL from "./components/REFERRAL";
import Mining from "./components/Mining";
import Staking from "./components/Staking";
import { useMediaPredicate } from "react-media-hook";
export default function Referral({ datasocial }) {
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
  let response = await fetch(`https://testbed.socialx.io/api/social_mining`);
  // extract the data
  let data = await response.json();
  return {
    props: {
      datasocial: data["message"],
    },
  };
}
