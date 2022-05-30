import { useState } from "react";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import fetch from "isomorphic-unfetch";
import GameGuide from "./guide";
import Header from "./components/Header";
import REFERRAL from "./components/Referral";
import ReferralList from "./components/ReferralList";
import Summary from "./components/Summarry";
import useToast from "hooks/useToast";
import { useTranslation } from "contexts/Localization";
export default function Referral({ datasocial }) {
  const { account } = useActiveWeb3React();
  const [referralCount, setReferralCount] = useState(0);
  const [viewReferralReward, setViewReferralReward] = useState(0);
  const [viewMiningReward, setViewMiningReward] = useState(0);
  const { toastError } = useToast();
  const { t } = useTranslation();

  const handleWithdrawReward = () => {
    toastError(t("rewards are unavailable at the moment, Try again later"));
  };
  return (
    <div
      className="container-fluid d-flex flex-wrap flex-column flex-sm-row flex-direction-row-reverse"
      style={{ gap: "20px" }}
    >
      <Header
        referralCount={referralCount}
        viewReferralReward={viewReferralReward}
      />
      <REFERRAL account={account} />
      <Summary
        viewReferralReward={viewReferralReward}
        viewMiningReward={viewMiningReward}
        setViewMiningReward={setViewMiningReward}
        handleWithdrawReward={handleWithdrawReward}
        account={account}
      />
      <ReferralList
        setViewReferralReward={setViewReferralReward}
        viewReferralReward={viewReferralReward}
        referralCount={referralCount}
        setReferralCount={setReferralCount}
        account={account}
        datasocial={datasocial}
      />
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
