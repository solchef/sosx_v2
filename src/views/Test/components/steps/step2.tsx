import NavMining from "../../NavMining";

const Step2 = () => {
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

            <tr className=" text-nowrap mt-4">
              <td className="fs-16  text-white font-weight-normal" style={{ border: 'none' }}>
                0x684a4e50de4ff380e70db03d7b61a4111395326a
              </td>
              <td className="text-white fs-16 font-weight-normal" style={{ border: 'none' }}>
             12 BNB
              </td>
            </tr>
            <tr className=" text-nowrap mt-4">
              <td className="text-white fs-16 font-weight-normal" style={{ border: 'none' }}>
                0x684a4e50de4ff380e70db03d7b61a4111395326a
              </td>
              <td className="text-white fs-16 font-weight-normal" style={{ border: 'none' }}>
             12 BNB
              </td>
            </tr>
            <tr className=" text-nowrap mt-4">
              <td className="text-white fs-16 font-weight-normal" style={{ border: 'none' }}>
                0x684a4e50de4ff380e70db03d7b61a4111395326a
              </td>
              <td className="text-white fs-16 font-weight-normal" style={{ border: 'none' }}>
             12 BNB
              </td>
            </tr>
            <tr  > <td style={{ border: 'none' }} colSpan={3} >  <h4 className="mt-5">Summary</h4></td></tr>
            <tr className=" text-nowrap mt-4">
              <td className="fs-16 font-weight-normal" style={{ border: 'none' }}>
                <p className="p-0 m-0 text-white">  1</p>
                <span className="p-0 m-0 text-white"> Total number of addresses</span>


              </td>
              <td className="fs-16 font-weight-normal" style={{ border: 'none' }}>
                <p className="p-0 m-0 text-white">  12 BNB</p>
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
      <div className="card  mt-3 w-100" >
        <p className="main-pink m-0 p-0">Insufficient BNB balance, Please have at least 11.015198 BNB</p>
</div>
    </>
  );
};

export default Step2;
