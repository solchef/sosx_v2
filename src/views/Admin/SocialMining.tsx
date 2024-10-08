import { useTranslation } from "contexts/Localization";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { cleanNumber } from "utils/amount";
import  Link  from "next/link";
import useToast from "hooks/useToast";
import { signMessage } from "utils/web3React";
import useWeb3Provider from "hooks/useActiveWeb3React";


export default function SocialMining () {
    const [socialData, setSocialData] = useState<any[]>([]);
    const { account } = useActiveWeb3React();
    const [loading, setLoading] = useState<boolean>(true);
    const { t } = useTranslation();
    const { toastSuccess, toastError } = useToast()
    const { library, connector } = useWeb3Provider();

    useEffect(() => {
      loadAccountsData()
    }, [])

    const loadAccountsData = async () => {
      await fetch("/api/posts", {
        method: "GET",
      }).then(res => res.json()).then(data => setSocialData(data.message))
      setLoading(false);
      };

    const walletToSend = []
    const createDataArray = () => {
      socialData.forEach(wallet => {
        walletToSend.push({
          address: wallet.address,
          amount: wallet.amount
        })
      })
    }
    createDataArray()
    const sendRewards = async () => {
      try {
        for (let i = 0; i < walletToSend.length; i++) {
          fetch("/api/posts", {
            method: "PUT",
            body: walletToSend[i].address
          })
        }
        
        const sig = await signMessage(connector, library, account, '');

        if (sig) {
          toastSuccess("Updated")
          loadAccountsData()
        }
      } catch (err) {
        toastError("Failed")
      }
    }

    return (
        <>
         <div className="card">
         <div className="d-flex align-items-center mb-2">
                      <h4>DAO Stakers</h4>
                    </div>

      <div className="tab-bg">

        <table style={{ maxWidth: '100%' }} className="ranking-header fs-12 p-4 mt-0 table">

          <tr className="jsx-e5e2ca7965fa437a">
            <th className="fs-16 font-weight-normal">E-mail</th>
            <th className="fs-16 font-weight-normal">URL</th>
            <th className="fs-16 font-weight-normal">Wallet Address</th>
            <th className="fs-16 font-weight-normal">Amount</th>
            <th className="fs-16 font-weight-normal">Created At</th>
            <th className="fs-16 font-weight-normal">Status</th>
          </tr>

          <tbody>
            {socialData.length > 0 ? (
              socialData.map((data, i) => 
         
                  <tr className=" text-nowrap mt-4" key={i} style={{ borderColor: '#1e2124' }}>
                    <td className="fs-16 border-0 text-white font-weight-normal" >  {data.email}</td>
                    <td className="fs-16 border-0 text-white font-weight-normal" >  {data.url}</td>
                    <td className="fs-16 border-0 text-white font-weight-normal" >  {data.address}</td>
                    <td className="fs-16 border-0 text-white font-weight-normal" >{cleanNumber(data.amount + "")}</td>
                    <td className="fs-16 border-0 text-white font-weight-normal" >{data.created_at}</td>
                    <td className="fs-16 border-0 text-white font-weight-normal" >{data.reward_status.toString()}</td>
                  </tr>
            
              )
              
            )
            : !account ? (
              <tr className=" text-nowrap mt-4">
            
                <td colSpan={6} className="fs-16 text-white text-center font-weight-normal" style={{ border: 'none' }} >
                 {t("You need to be connected")}
                </td>
             
              </tr>
            ) : loading ? (
              <tr className=" text-nowrap mt-4">
             
                <td colSpan={6} className="fs-16  text-white text-center font-weight-normal" style={{ border: 'none' }} >
                  {t("Loading Data")}
                </td>
             
              </tr>
            ) : (
              <tr className=" text-nowrap mt-4">
                <td colSpan={6} className="fs-16 text-white text-center font-weight-normal" style={{ border: 'none' }} >
                  {t("No data")}
                </td>
              </tr>
            )}
          </tbody>
        </table>
              <button onClick={sendRewards} className="font-weight-bold btn  text-nowrap  btn-primary" type="submit">Send Rewards</button>
        <style jsx>{`
       tbody tr:last-child td{
        border-bottom: none;
      }
      `}</style>
      </div>
      </div>
        </>
    )
}