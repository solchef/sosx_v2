import { useEffect, useState } from "react";
import { useStakingContract } from "hooks/useContract";

const ReferralList = ({ account, datasocial, referralCount, setReferralCount, viewReferralReward, setViewReferralReward }) => {
  const tabs = [{ name: "staking" },{ name: "mining" }];
  const [tab, setTab] = useState(tabs[0]);
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
  }, [ referralCount]);



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
            // console.log(data)
            total = +Number(reward / 10 ** 18).toFixed(2);
            referralData.push(data);
            setReferrals(referrals => [...referrals, data])
            setViewReferralReward(total);

          });
        }

      })
      .catch((err) => {
      });
  };

  return (

    <div style={{ flex: '1 1 40%',order:'7',maxWidth:'100%' }}>
      <div className="card h-100">
        <div className="card-body mb-3">
          <div className="d-flex align-items-center mb-2"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 239 116" xmlSpace="preserve" style={{ width: '40px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }}>
            <path d="M58,0C25.97,0,0,25.97,0,58c0,32.03,25.97,58,58,58s58-25.97,58-58C116,25.97,90.03,0,58,0z M58,90.78 c-18.11,0-32.78-14.68-32.78-32.78c0-18.11,14.68-32.78,32.78-32.78S90.78,39.89,90.78,58C90.78,76.11,76.11,90.78,58,90.78z">
            </path>
            <g>
              <path className="st0" d="M151.87,48.3l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C165.69,53.57,157.14,53.57,151.87,48.3z">
              </path>
              <path className="st0" d="M215.27,112.05l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C229.09,117.32,220.55,117.32,215.27,112.05z">
              </path>
              <path className="st0" d="M126.64,92.96l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09l-25.23,25.23 c-5.27,5.27-13.82,5.27-19.09,0l0,0C121.37,106.77,121.37,98.23,126.64,92.96z">
              </path>
              <path className="st0" d="M190.73,29.21l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09L209.82,48.3 c-5.27,5.27-13.82,5.27-19.09,0l0,0C185.46,43.03,185.46,34.48,190.73,29.21z">
              </path>
            </g>
          </svg>
            <h4>

              {tab.name == "list" ? "REFERRAL LIST" : tab.name == "mining" ? "SOCIAL MINING" : "STAKING"}

            </h4>
          </div>
          <p className="mb-4">



            All your referral friends in one place.
          </p>


          <div
            className="d-flex justify-content-left mt-4"
            style={{ justifyContent: "start" }}
          >
            <button style={{
              borderRadius: '10px 10px 0 0',
              marginRight: '2px'
            }}
              type="submit"
              onClick={(e) => { toggleTab(e, "staking"); setDisplayLevel(1) }}
              className={`font-weight-bold btn  text-nowrap ${displayLevel === 1 ? " btn-primary" : ""
                }`}
            >
              {" "}
              Staking 
            </button>
            <button style={{
              borderRadius: '10px 10px 0 0',
              marginRight: '2px'
            }}
              type="submit"
              onClick={(e) => { toggleTab(e, "mining"), setDisplayLevel(2) }}
              className={`font-weight-bold btn  text-nowrap ${displayLevel === 2 ? " btn-primary" : ""
                }`}
            >
              {" "}
              Social Mining 
            </button>
          </div>

          <div className="tab-bg">
      
            {tab.name == "mining" &&

              <table style={{ maxWidth: '100%' }} className="ranking-header fs-12 p-4 mt-0 table">

            <tr className="jsx-e5e2ca7965fa437a">
                  <th className="fs-14 font-weight-normal">Wallet Address</th>
                  <th className="fs-14 font-weight-normal text-center">Mining Rewards</th>
                  <th className="fs-14 font-weight-normal">Total Earned</th>
                </tr>

                <tbody>
                  {socialData.length > 0 ? (
                    resultsoc.map((ref) => (

                      <tr className="" style={{ borderColor: 'rgb(30, 33, 36)' }}>
                        <td className="text-white">{ref.address.replace(/(.{13})..+/, "$1…")}</td>
                        <td className="text-white">0</td>
                        <td className="text-white">0</td>
                        <td className="text-white">0</td>
                      </tr>
                    ))
                  ) : (
                    <tr className=" mt-4">
                      <td colSpan={4} className="text-white fs-12" style={{ border: 'none' }} >
                        Data not available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            }
            {tab.name == "staking" &&

              <table style={{ maxWidth: '100%' }} className="ranking-header fs-12 p-4 mt-0 table">

                <tr className="jsx-e5e2ca7965fa437a">
                  <th className="fs-14 font-weight-normal">Wallet Address</th>
                  <th className="fs-14 font-weight-normal text-center">Staking Rewards</th>
                  <th className="fs-14 font-weight-normal">Total Earned</th>
                </tr>

                <tbody>
                  {referralCount > 0 ? (
                    referrals.map((ref) => (

                      <tr className="" style={{ borderColor: 'rgb(30, 33, 36)' }}>
                        <td className="text-white">{ref.address.replace(/(.{13})..+/, "$1…")}</td>
                        <td className="text-white">{ref.amount}</td>
                        <td className="text-white">{ref.amount}</td>
                      </tr>
                    ))
                  ) : (
                    <tr className=" mt-4">
                      <td colSpan={3} className="text-white fs-12" style={{ border: 'none' }} >
                        Data not available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            }
            <style jsx>{`
       tbody tr:last-child td{
        border-bottom: none;
      }
      `}</style>
          </div>

        </div>
      </div>
    </div>
  )

}

export default ReferralList