import Link from "next/link";
import router, { useRouter } from "next/router";

const NavGame =()=>{


  

    return (

        <ul className="nav nav-tabs d-flex justify-content-around flex-nowrap nav-justified nav-game-color mb-3">


        <li className="nav2-item">
          <Link href="/createchallenge">
            <a className={`nav-link ${router.pathname == '/createchallenge'? 'active nav-content' :''} rounded`}>Create Challenge</a>

          </Link>
        </li>


        <li className="nav2-item">
          <Link href="/votechallenge">
            <a className={`nav-link ${ router.pathname ==  '/votechallenge'? 'active nav-content' :''} rounded`}>Vote Challenge</a>

          </Link>
        </li>


        <li className="nav2-item">
          <Link href="/thechallenge">
            <a className={`nav-link ${router.pathname == '/thechallenge' ? 'active nav-content' :''} rounded`}>The Challenge</a>

          </Link>
        </li>
      </ul>

    )

}

export default NavGame