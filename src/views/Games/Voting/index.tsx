import Link from 'next/link'
import { useState } from "react";

export default function Voting() {
    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        console.log(text.length)
        return (
            <p className="text">
                {isReadMore ? text.slice(0, 600) : text}
                <a style={{ cursor: 'pointer', color: '#ff00cc' }} onClick={toggleReadMore} className="ml-2 read-or-hide">
                    {text.length > text.slice(0, 600).length ? (isReadMore ? "...Read more" : " Show less") : ''}
                </a>
            </p>
        );
    };

    return (
        <div className="container-fluid">
            <p className='p-2'><i className="fa-solid fa-arrow-left"></i>  <Link href='/votechallenge'> Back   </Link>     </p>
            <div className="ml-2 row">
                <div className="col-12 overflow-auto col-lg-8">
                    <div className='text-muted font-weight-bold'>
                        <h1 className='font-weight-bold'>CAKE Staking Proposal</h1>
                        <div className='p-3 d-flex'>
                            <img className='mr-2' width='25px' height='25px' src='images/btc.png' />
                            <p>             PancakeSwap
                                by
                                0x3799...4861</p>
                        </div>
                        <ReadMore>
                            Gelengthlenrer ffdd dfffds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf df  
                            Gelengthlenrer ffdd dfffds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf df  
                            Gelengthlenrer ffdd dfffds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfdssssssssss fdsf df  
                            Gelengthlenrer ffdd dfffds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf df  
                            Gelengthlenrer ffdd dfffds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf df  
                            Gelengthlenrer ffdd dfffds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf df  
                            Gelengthlenrer ffdd dfffds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf df  
                            Gelengthlenrer ffdd dfffds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf df  
                            Gelengthlenrer ffdd dfffds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf df  
                            Gelengthlenrer ffdd dfffds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf df  
                            Gelengthlenrer ffdd dfffds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf dfds fdsf df  
                        </ReadMore>


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