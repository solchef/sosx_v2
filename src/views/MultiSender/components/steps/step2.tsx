import { useGetBnbBalance } from "hooks/useTokenBalance";
import { formatBigNumberToFixed } from "utils/formatBalance";
import NavMining from "../../NavMining";

const Step2 = (props: {data, addressesCount, totalBNB, amountCheck}) => {  
  return (
      <>
      <  NavMining step="1" />

      <div className="card h-100 mt-1 w-100" style={{ minHeight: "500px" }} >

        <table style={{ maxWidth: '100%' }} className="ranking-header fs-12 p-4 mt-0 table">
          <tbody >
            <tr  > <td style={{ border: 'none' }} colSpan={3} >  <h4  >List of recipients</h4></td></tr>

            <tr>
              <th className="fs-16 font-weight-normal">Address</th>
              <th className="fs-16 font-weight-normal">Amount</th>
            </tr>
          </tbody>

          <tbody>
            {props.data.map(((d, i) =>
            <tr className=" text-nowrap mt-4">
              {console.log(d)}
            <td className="fs-16  text-white font-weight-normal" style={{ border: 'none' }}>
              {d[0]}
            </td>
            <td className="text-white fs-16 font-weight-normal" style={{ border: 'none' }}>
              {d[1]} BNB
            </td>
            </tr>
            ))}
            
            <tr  > <td style={{ border: 'none' }} colSpan={3} >  <h4 className="mt-5">Summary</h4></td></tr>
            <tr className=" text-nowrap mt-4">
              <td className="fs-16 font-weight-normal" style={{ border: 'none' }}>
                <p className="p-0 m-0 text-white">  {props.addressesCount}</p>
                <span className="p-0 m-0 text-white"> Total number of addresses</span>


              </td>
              <td className="fs-16 font-weight-normal" style={{ border: 'none' }}>
                <p className="p-0 m-0 text-white">  {props.totalBNB} BNB</p>
                <span className="p-0 m-0 text-white"> number of tokens to be sent</span>
              </td>
            </tr>
            <tr className=" text-nowrap mt-4">
              <td className="fs-16 font-weight-normal" style={{ border: 'none' }}>
                <p className="p-0 m-0 text-white">  1</p>
                <span className="p-0 m-0 text-white">Total number of transactions needed</span>


              </td>
              <td className="fs-16 font-weight-normal" style={{ border: 'none' }}>
                <p className="p-0 m-0 text-white">  0 BNB</p>
                <span className="p-0 m-0 text-white"> number of tokens to be sent</span>
              </td>
            </tr>
            <tr className=" text-nowrap mt-4">
              <td className="fs-16 font-weight-normal" style={{ border: 'none' }}>
                <p className="p-0 m-0 text-white"> 0.0152 BNB <i className="fa-solid fa-circle-question"></i></p>
                <span className="p-0 m-0 text-white"> Your token balance</span>


              </td>
              <td className="fs-16 font-weight-normal" style={{ border: 'none' }}>
                <p className="p-0 m-0 text-white">  0 BNB</p>
                <span className="p-0 m-0 text-white"> Your BNB balance</span>
              </td>
            </tr>
          </tbody>
        </table>



      </div>
        {props.amountCheck ? 
      <div className="card  mt-3 w-100" >
          <p className="main-pink m-0 p-0">Insufficient BNB balance, Please have at least {props.totalBNB+0.0152} BNB</p>
      </div>
          : ""
        }
    </>
    )
};

export default Step2;
