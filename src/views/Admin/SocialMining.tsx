import { useTranslation } from "contexts/Localization";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { cleanNumber } from "utils/amount";
import  Link  from "next/link";


export default function SocialMining () {
    const [socialData, setSocialData] = useState<any[]>([]);
    const { account } = useActiveWeb3React();
    const [loading, setLoading] = useState<boolean>();
    const { t } = useTranslation();
    const router = useRouter()

    useEffect(() => {
      loadAccountsData()
    }, [])

    const loadAccountsData = async () => {
      let response = await fetch("/api/posts", {
        method: "GET",
      }).then(res => res.json()).then(data => setSocialData(data.message))
      };

    console.log(socialData)
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
                    <td className="fs-16 font-weight-normal" >  {data.email}</td>
                    <td className="fs-16 font-weight-normal" >  {data.url}</td>
                    <td className="fs-16 font-weight-normal" >  {data.address}</td>
                    <td className="fs-16 font-weight-normal" >{cleanNumber(data.amount + "")}</td>
                    <td className="fs-16 font-weight-normal" >{data.created_at}</td>
                    <td className="fs-16 font-weight-normal" >{data.reward_status.toString()}</td>
                  </tr>
            
              )
              
            )
            : !account ? (
              <tr className=" text-nowrap mt-4">
                <td className="fs-16 font-weight-normal" style={{ border: 'none' }}>
                </td>
                <td className="fs-16 font-weight-normal" style={{ border: 'none' }} >
                 {t("You need to be connected")}
                </td>
                <td className="fs-16 font-weight-normal" style={{ border: 'none' }}>
                </td>
              </tr>

            ) : loading ? (
              <tr className=" text-nowrap mt-4">
                <td className="fs-16 font-weight-normal" style={{ border: 'none' }}>
                </td>
                <td className="fs-16 font-weight-normal" style={{ border: 'none' }} >
                  {t("Loading Data")}
                </td>
                <td className="fs-16 font-weight-normal" style={{ border: 'none' }}>
                </td>
              </tr>
            ) : (
              <tr className=" text-nowrap mt-4">
                <td className="fs-16 font-weight-normal" style={{ border: 'none' }}>
                </td>
                <td className="fs-16 font-weight-normal" style={{ border: 'none' }} >
                  {t("No data")}
                </td>
                <td className="fs-16 font-weight-normal" style={{ border: 'none' }}>
                </td>
              </tr>
            )}
          </tbody>
        </table>
            <Link className="font-weight-bold btn  text-nowrap  btn-primary" href={{
                pathname: '/multisender',
                
                
            }} 
                
            >
                MuliSend
            </Link>
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