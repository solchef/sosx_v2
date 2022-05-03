import Link from "next/link";
import router, { useRouter } from "next/router";

const NavGame =()=>{


  

    return (

        <ul className="nav nav-tabs d-flex flex-nowrap nav-justified mb-3">


        <li className="nav-item">
          <Link href="/createchallenge">
            <a className={`nav-link ${router.pathname == '/createchallenge'? 'active' :''} rounded`}>Create Challenge</a>

          </Link>
        </li>


        <li className="nav-item">
          <Link href="/votechallenge">
            <a className={`nav-link ${ router.pathname ==  '/votechallenge'? 'active' :''} rounded`}>Vote Challenge</a>

          </Link>
        </li>


        <li className="nav-item">
          <Link href="/thechallenge">
            <a className={`nav-link ${router.pathname == '/thechallenge' ? 'active' :''} rounded`}>The Challenge</a>

          </Link>
        </li>
      </ul>

    )

}

export default NavGame