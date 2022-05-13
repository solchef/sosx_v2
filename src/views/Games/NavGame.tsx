import Link from "next/link";
import router, { useRouter } from "next/router";

const NavGame = () => {
  return (
    <div className="ml-1 d-flex justify-content-center align-items-center">
      <div id="steps">
        <Link href="/createchallenge">
          <div
            className={`step ${
              router.pathname === "/createchallenge" ? "active" : "done"
            } `}
            data-desc="Create Challenge"
          >
            1
          </div>
        </Link>
        <Link href="/votechallenge">
          <div
            className={`step ${
              router.pathname === "/votechallenge" ? "active" : ""
            } ${router.pathname === "/thechallenge" ? "done" : ""}`}
            data-desc="Vote Challenge"
          >
            2
          </div>
        </Link>
        <Link href="/thechallenge">
          <div
            className={`step ${
              router.pathname === "/thechallenge" ? "active" : ""
            } `}
            data-desc="The Challenge"
          >
            4
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavGame;
