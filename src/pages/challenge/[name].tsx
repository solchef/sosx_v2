<<<<<<< HEAD:src/views/Games/Voting/index.tsx
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
=======
import { useRouter } from "next/router";
>>>>>>> 2628ba9c72dd443025a995e0488c67507a6c804d:src/pages/challenge/[name].tsx

export default function Challenge() {
    const router = useRouter()
    const { name } = router.query
    return (
<<<<<<< HEAD:src/views/Games/Voting/index.tsx
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

=======
        <div className="voting container-fluid">
            <div className="row">
                <div className="col-9">
                    <div className='text-muted font-weight-bold h4'>
                        <h1 className='h1 font-weight-bold'>{name}</h1>

                        <p>I propose that for over 500 CAKE staked in any syrup Pool 100 CAKE needs to<br />
                            be staked in the Locked CAKE Pool.<br />
                            For example:<br />
                            ● 501 to 1000 staked then 100 staked to the Locked Pool<br />
                            ● 1001 to 1500 staked then 200 staked to the Locked Pool<br />
                            ● 1501 to 2000 staked then 300 staked to the Locked Pool and so on.....<br />
                            The CAKE staked in the Locked Pool needs to be locked for at least 10 weeks.</p>
                        <p>Benefit is it will help stabilize the price of CAKE and would be fair to all participants.</p>
>>>>>>> 2628ba9c72dd443025a995e0488c67507a6c804d:src/pages/challenge/[name].tsx

                    </div>

                    <div className="row pb-5 pt-5">
                        <div className=" col-11">
                        

                                <a href="#" className="btn btn-primary w-25 font-weight-bold "><i className="fa-solid fa-check-to-slot pr-2"></i>Vote This Challenge</a>

                        </div>
                    </div>

                    <div className="row pt-1">
                        <div className="card border col-11">
                            <h5 className="card-header font-weight-bold ">Votes</h5>
<<<<<<< HEAD:src/views/Games/Voting/index.tsx


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


=======
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
                <div className="col-3">
                    <div className="row">
                        <div className="card border col-12">
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
                    <div className="row pt-5">
                        <div className="card border col-12">
                            <h5 className="card-header font-weight-bold ">Current results
                            </h5>
                            <div className="card-body">



                            </div>
>>>>>>> 2628ba9c72dd443025a995e0488c67507a6c804d:src/pages/challenge/[name].tsx
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}