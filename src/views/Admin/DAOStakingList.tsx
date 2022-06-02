import useActiveWeb3React from "hooks/useActiveWeb3React";
import { useDaoStakingContract } from "hooks/useContract";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { cleanNumber } from "utils/amount";
import { getDaoLevel } from "views/Games/hooks/getDaoLevel";


export default function DAOStakingList () {
    const [displayLevel, setDisplayLevel] = useState(1);
    const contract = useDaoStakingContract();
    const [voters, setVoters] = useState([]);
    const { account } = useActiveWeb3React();
    const [loading, setLoading] = useState<boolean>();
    const { t } = useTranslation();
    
    const loadDaoLevels = async (data) => {
        setLoading(true);
        const level1 = [];
        let daoList = data;
        daoList = [...new Set(daoList)];
        let voters = [];
        for (let i = 0; i < daoList.length; i++) {
          let voter_address = daoList[i];
          let total_stake = await contract.getVoterTotalStakeAmount(voter_address);
          total_stake = total_stake / 10 ** 18;
          let data = {
            address: voter_address,
            amount: total_stake,
          };
        level1.push(data);
          voters.sort((b, a) => a.amount - b.amount);
    
          voters.push(data);
        }
        level1.sort((b, a) => a.amount - b.amount);
        if (displayLevel === 1) setVoters(level1);
        setLoading(false);
      };
    
      useEffect(() => {
        contract.getAllAccount().then((daolist) => {
          loadDaoLevels(daolist);
    
        })
      }, [displayLevel, account]);
    return (
        <>
         <div className="card">
         <div className="d-flex align-items-center mb-2">
                      <h4>DAO Stakers</h4>
                    </div>

      <div className="tab-bg">

        <table style={{ maxWidth: '100%' }} className="ranking-header fs-12 p-4 mt-0 table">

          <tr className="jsx-e5e2ca7965fa437a">
            <th className="fs-16 font-weight-normal">Rank</th>
            <th className="fs-16 font-weight-normal text-center">Wallet</th>
            <th className="fs-16 font-weight-normal">Staking</th>
          </tr>

          <tbody>
            {voters.length > 0 ? (
              voters.map((voter, i) => 
         
                  <tr className=" text-nowrap mt-4" key={i} style={{ borderColor: '#1e2124' }}>
                    <td className="fs-16 border-0 text-white font-weight-normal" > {i + 1}</td>
                    <td className="fs-16 border-0 text-white font-weight-normal text-center" >  {voter.address}</td>
                    <td className="fs-16 border-0 text-white font-weight-normal" >{cleanNumber(voter.amount + "")}</td>
                  </tr>
            
              )
            ) : !account ? (
              <tr className=" text-nowrap mt-4">
            
                <td colSpan={3} className="fs-16 text-white text-center font-weight-normal" style={{ border: 'none' }} >
                 {t("You need to be connected")}
                </td>
          
              </tr>

            ) : loading ? (
              <tr className=" text-nowrap mt-4">
           
                <td colSpan={3} className="fs-16 text-white text-center font-weight-normal" style={{ border: 'none' }} >
                  {t("Loading Data")}
                </td>
               
              </tr>
            ) : (
              <tr className=" text-nowrap mt-4">
              
                <td colSpan={3} className="fs-16 text-white text-center font-weight-normal" style={{ border: 'none' }} >
                  {t("No one is on Level")} {displayLevel}
                </td>
              
              </tr>
            )}
          </tbody>
        </table>
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