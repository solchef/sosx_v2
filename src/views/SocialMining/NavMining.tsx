import Link from "next/link";
import router, { useRouter } from "next/router";

const NavMining = () => {
    console.log(router.pathname)
    return (

        <div className="ml-5 d-flex justify-content-center align-items-center">
            <div id="steps">
                <Link href="/x-mining">
                    <div className={`step ${router.pathname === '/x-mining' ? 'active' : 'done'} `} data-desc="Steps">1</div>
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
        </div>


    )

}

export default NavMining