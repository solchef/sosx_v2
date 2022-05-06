import Link from 'next/link'

export default function Voting() {

    return (
        <div className="container-fluid">
            <p className='p-2'><i className="fa-solid fa-arrow-left"></i>  <Link href='/votechallenge'> Back   </Link>     </p>
            <div className="ml-2 row">
                <div className="col-12 col-lg-8">
                    <div className='text-muted font-weight-bold'>
                        <h1 className='font-weight-bold'>CAKE Staking Proposal</h1>
                        <div className='p-3 d-flex'>
                            <img className='mr-2' width='25px' height='25px' src='images/btc.png' />
                            <p>             PancakeSwap
                                by
                                0x3799...4861</p>
                        </div>
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


                            <a href="#" className="btn btn-primary font-weight-bold "><i className="fa-solid fa-check-to-slot pr-2"></i>Vote This Challenge</a>

                        </div>
                    </div>


                </div>
                <div className="col-12 col-lg-4">
                    <div className="row">
                        <div className="card border col-11">
                            <h5 className=" border-bottom font-weight-bold p-1">Information</h5>


                            <div className="row p-1">
                                <div className="col-6">Strategie(s)	</div>
                                <div className="col-6">Jacob 	</div>
                            </div>
                            <div className="row p-1">
                                <div className="col-6">Strategie(s)	</div>
                                <div className="col-6">Jacob 	</div>
                            </div>
                            <div className="row p-1">
                                <div className="col-6">Strategie(s)	</div>
                                <div className="col-6">Jacob 	</div>
                            </div>
                            <div className="row p-1">
                                <div className="col-6">Strategie(s)	</div>
                                <div className="col-6">Jacob 	</div>
                            </div>


                        </div>
                    </div>
                    <div className="row">
                        <div className="card border col-11">
                            <h5 className="font-weight-bold ">Current results
                            </h5>
                            <div className="row p-2">
                                <div className="col-6">The Votes	</div>
                                <div className="col-6">1000 	</div>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="card border col-11">
                            <h5 className="card-header font-weight-bold ">Votes</h5>
                            

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
        </div>
    )
}