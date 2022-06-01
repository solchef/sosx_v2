import axios from "axios";
import { useTranslation } from "contexts/Localization";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { useDaoStakingContract } from "hooks/useContract";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { cleanNumber } from "utils/amount";
import  Link  from "next/link";


export default function SocialMining () {
    const [socialData, setSocialData] = useState([]);
    const { account } = useActiveWeb3React();
    const [loading, setLoading] = useState<boolean>();
    const { t } = useTranslation();
    const router = useRouter()

    const data = [
        {wallet: "omar", reward: "3"},
        {wallet: "or", reward: "2"},
    ]

    const send = () => {
        router.push('/multisender', 'url', )
    }
    
    const loadAccountsData = async () => {
        // const data = await fetch("https://app.socialx.io/api/posts")
        // const data = await axios.get("https://app.socialx.io/api/posts", {
        //     headers: {"Access-Control-Allow-Origin": "*"}
        // })
        // console.log(data)
      };
      loadAccountsData() 
    
    return (
        <>
         <div className="card">
         <div className="d-flex align-items-center mb-2">
                      <h4>DAO Stakers</h4>
                    </div>

      <div className="tab-bg">

        <table style={{ maxWidth: '100%' }} className="ranking-header fs-12 p-4 mt-0 table">

          <tr className="jsx-e5e2ca7965fa437a">
            <th className="fs-16 font-weight-normal">Num</th>
            <th className="fs-16 font-weight-normal text-center">Wallet</th>
            <th className="fs-16 font-weight-normal">Reward</th>
          </tr>

          <tbody>
            {data.length > 0 ? (
              data.map((account, i) => 
         
                  <tr className=" text-nowrap mt-4" key={i} style={{ borderColor: '#1e2124' }}>
                    <td className="fs-16 font-weight-normal" > {i + 1}</td>
                    <td className="fs-16 font-weight-normal" >  {account.wallet}</td>
                    <td className="fs-16 font-weight-normal" >{cleanNumber(account.reward + "")}</td>
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