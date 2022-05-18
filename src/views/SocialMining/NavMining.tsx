import Link from "next/link";
import router, { useRouter } from "next/router";

const NavMining = () => {
    console.log(router.pathname)
    return (

       
        <div className="mx-auto d-flex justify-content-center mt-5 mb-3 align-items-center">
            <div id="steps">
                <Link href="/x-mining">
                    <div className={`step ${router.pathname === '' ? 'active' : 'done'} `} data-desc="Steps">1</div>
                </Link>
                <Link href="/socialmining-s1">

                    <div className={`step ${router.pathname === '/socialmining-s1' ? 'active' : ''} ${router.pathname === '/socialmining-s3' ? 'done' : ''} ${router.pathname === '/socialmining-s2' ? 'done' : ''}`} data-desc="Copy">2</div>
                </Link>
                <Link href="/socialmining-s2">
                    <div className={`step ${router.pathname === '/socialmining-s2' ? 'active' : ''} ${router.pathname === '/socialmining-s3' ? 'done' : ''}`} data-desc="Affiliate">3</div>
                </Link>
                <Link href="/socialmining-s3">
                    <div className={`step ${router.pathname === '/socialmining-s3' ? 'active' : ''} `} data-desc="Redeem">4</div>
                </Link>
            </div>
            <style jsx>{`
        @media (max-width: 576px){
        .step:nth-child(n+2):before {
            width: 27px !important;
            transform: translate(-34px, 8px) !important;
        }}
        .step:nth-child(n+2):before {
            width: 75px;
            height: 3px;
            display: block;
            background-color: white;
            transform: translate(-97px, 8px);
            content: "";
        }
        .step {
            width: 25px;
            height: 25px;
            background-color: #444444;
            display: inline-block;
            border: 4px solid;
            border-color: transparent;
            border-radius: 50%;
            color: #6e6e6e;
            font-weight: 600;
            text-align: center;
            line-height: 12px;
            margin-right: 10px;
            font-size: 17px;
        }
      
        .step:after {
            width: 150px;
            display: block;
            transform: translate(-67px, 18px);
            color: #818698;
            content: attr(data-desc);
            font-weight: 400;
            font-size: 13px;
            cursor: pointer !important;
        }
        .step:first-child {
            padding-top:2px;
            transform: translate(10px,-5px);
        }
        .step.done{
            background-color:#ff00cc  !important;
            color:white  !important;
        }
        .step.done:before {
            background: #ff00cc;
        }
      `}</style>
        </div>
                        // <ul className="nav nav-tabs nav-justified mt-5 mb-3" style={{marginTop:"100px"}}>
                        //             <li className="nav-item   text-white">
                        //             <Link href="/x-mining" className={`nav-link btn-primary ${router.pathname === '/' && 'active'}`}>Steps</Link>
                        //             </li>
                        //             <li className="nav-item">
                        //             <Link href="/socialmining-s1" className={`nav-link ${router.pathname === '/socialmining-s1' && 'active'}`}>Copy</Link>
                        //             </li>
                        //             <li className="nav-item">
                        //             <Link href="/socialmining-s2" className={`nav-link ${router.pathname === '/socialmining-s2' && 'active'}`}>Affiliate</Link>
                        //             </li>
                        //             <li className="nav-item">
                        //             <Link href="/socialmining-s3" className={`nav-link ${router.pathname === '/socialmining-s3'  && 'active'}`}>Redeem</Link>
                        //     </li>
                        // </ul>

    )

}

export default NavMining