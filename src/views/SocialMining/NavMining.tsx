import Link from "next/link";
import router, { useRouter } from "next/router";

const NavMining = () => {
    console.log(router.pathname)
    return (

        // <div className="mx-auto d-flex justify-content-center align-items-center">
        //     <div id="steps">
        //         <Link href="/x-mining">
        //             <div className={`step ${router.pathname === '' ? 'active' : 'done'} `} data-desc="Steps">1</div>
        //         </Link>
        //         <Link href="/socialmining-s1">

        //             <div className={`step ${router.pathname === '/socialmining-s1' ? 'active' : ''} ${router.pathname === '/socialmining-s3' ? 'done' : ''} ${router.pathname === '/socialmining-s2' ? 'done' : ''}`} data-desc="Copy">2</div>
        //         </Link>
        //         <Link href="/socialmining-s2">
        //             <div className={`step ${router.pathname === '/socialmining-s2' ? 'active' : ''} ${router.pathname === '/socialmining-s3' ? 'done' : ''}`} data-desc="Affiliate">3</div>
        //         </Link>
        //         <Link href="/socialmining-s3">
        //             <div className={`step ${router.pathname === '/socialmining-s3' ? 'active' : ''} `} data-desc="Redeem">4</div>
        //         </Link>
        //     </div>
        // </div>
                        <ul className="nav nav-tabs nav-justified mt-5 mb-3" style={{marginTop:"100px"}}>
                                    <li className="nav-item   text-white">
                                    <Link href="/x-mining" className={`nav-link btn-primary ${router.pathname === '/' && 'active'}`}>Steps</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link href="/socialmining-s1" className={`nav-link ${router.pathname === '/socialmining-s1' && 'active'}`}>Copy</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link href="/socialmining-s2" className={`nav-link ${router.pathname === '/socialmining-s2' && 'active'}`}>Affiliate</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link href="/socialmining-s3" className={`nav-link ${router.pathname === '/socialmining-s3'  && 'active'}`}>Redeem</Link>
                            </li>
                        </ul>

    )

}

export default NavMining