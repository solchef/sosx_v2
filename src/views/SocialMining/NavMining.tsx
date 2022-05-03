import Link from "next/link";
import router, { useRouter } from "next/router";

const NavMining = () => {




    return (

        <ul className="nav2 nav2-tabs nav2-justified mb-3">
        <li className="nav2-item">
            <Link href="/x-mining">

                <a className={`nav2-link rounded ${ router.pathname == '/x-mining'? 'active nav-content' :'' }`}>Steps</a>
            </Link>

        </li>
        <li className="nav2-item">
            <Link href="/socialmining-s1">

                <a className={`nav2-link rounded ${ router.pathname == '/socialmining-s1'? 'active nav-content' :'' }`}>Copy</a>
            </Link>

        </li>
        <li className="nav2-item">
            <Link href="/socialmining-s2">

                <a className={`nav2-link rounded ${ router.pathname == '/socialmining-s2'? 'active nav-content' :'' }`}>Affiliate</a>
            </Link>

        </li>
        <li className="nav2-item">
            <Link href="/socialmining-s3">

                <a className={`nav2-link rounded ${ router.pathname == '/socialmining-s3'? 'active nav-content' :'' }`}>Redeem</a>
            </Link>
        </li>
    </ul>


    )

}

export default NavMining