import { } from 'react'

export default function Voting() {

    return (
        <div className="voting container-fluid">
            <div className="row">
                <div className="col-8">
                    <div className='text-muted font-weight-bold h4'>
                        <h1 className='h1 font-weight-bold'>CAKE Staking Proposal</h1>

                        <p>I propose that for over 500 CAKE staked in any syrup Pool 100 CAKE needs to<br />
                            be staked in the Locked CAKE Pool.<br />
                            For example:<br />
                            ● 501 to 1000 staked then 100 staked to the Locked Pool<br />
                            ● 1001 to 1500 staked then 200 staked to the Locked Pool<br />
                            ● 1501 to 2000 staked then 300 staked to the Locked Pool and so on.....<br />
                            The CAKE staked in the Locked Pool needs to be locked for at least 10 weeks.</p>
                        <p>Benefit is it will help stabilize the price of CAKE and would be fair to all participants.</p>

                    </div>

                    <div className="row pb-5 pt-5">
                        <div className=" col-11">
                        

                                <a href="#" className="btn btn-primary w-25 font-weight-bold "><i className="fa-solid fa-check-to-slot pr-2"></i>Vote This Challenge</a>

                        </div>
                    </div>

                    <div className="row pt-1">
                        <div className="card border col-11">
                            <h5 className="card-header font-weight-bold ">Votes</h5>
                            <div className="card-body">

                                <table className="table font-weight-bold ">
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className='text-white text-right'>Jacob</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td className='text-white text-right'>Jacob</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td className='text-white text-right'>Jacob</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>



                </div>
                <div className="col-4">
                    <div className="row">
                        <div className="card border col-12">
                            <h5 className="card-header font-weight-bold ">Information</h5>
                            <div className="card-body">

                                <table className="table font-weight-bold ">
                                    <tbody>

                                        <tr >
                                            <th className='border-bottom-0' scope="row">Strategie(s)</th>
                                            <td className='text-white text-right border-bottom-0'>Jacob</td>
                                        </tr>
                                        <tr >
                                            <th className='border-bottom-0' scope="row">IPFS</th>
                                            <td className='text-white text-right border-bottom-0'>#Qmdmrk5</td>
                                        </tr>
                                        <tr >
                                            <th className='border-bottom-0' scope="row">Voting system</th>
                                            <td className='text-white text-right border-bottom-0'>May 5, 2022, 11:00 AM</td>
                                        </tr>
                                        <tr >
                                            <th className='border-bottom-0' scope="row">Start date</th>
                                            <td className='text-white text-right border-bottom-0'>May 5, 2022, 11:00 AM
                                            </td>
                                        </tr>
                                        <tr >
                                            <th className='border-bottom-0' scope="row">End date</th>
                                            <td className='text-white text-right border-bottom-0'>May 5, 2022, 11:00 AM
                                            </td>
                                        </tr>
                                        <tr >
                                            <th className='border-bottom-0' scope="row">Snapshot</th>
                                            <td className='text-white text-right border-bottom-0'>May 5, 2022, 11:00 AM
                                            </td>
                                        </tr>
                                    </tbody>


                                </table>

                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="card border col-12">
                            <h5 className="card-header font-weight-bold ">Current results
                            </h5>
                            <div className="card-body">



                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}