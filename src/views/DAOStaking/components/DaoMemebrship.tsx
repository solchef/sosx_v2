import { useMediaPredicate } from "react-media-hook";

export default function DaoMemebrship() {
  return (
    <div className="card d-flex flex-column justify-content-between h-100">
      <div className="card-body">
        <div className="d-flex align-items-center mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 297.334 297.334"
            style={{
              // @ts-ignore
              enableBackground: "new 0 0 297.334 297.334",
              width: "30px",
              fill: "rgb(255, 0, 204)",
              marginRight: "10px",
            }}
            xmlSpace="preserve"
          >
            <g>
              <path d="M255.5,0h-213c-4.418,0-8.333,3.582-8.333,8v223c0,2.923,1.76,5.612,4.324,7.017l106.583,58.334   c1.196,0.655,2.561,0.983,3.884,0.983c1.323,0,2.667-0.328,3.864-0.983l106.344-58.334c2.564-1.404,4.001-4.094,4.001-7.017V8   C263.167,3.582,259.918,0,255.5,0z M247.167,226.261l-98.5,53.952l-98.5-53.952V16h197V226.261z"></path>
              <polygon points="215.167,209.092 215.167,171.5 148.751,206.5 82.167,171.5 82.167,209.001 148.75,245.334  "></polygon>
              <polygon points="215.167,153.438 215.167,115.846 148.751,150.846 82.167,115.846 82.167,153.347 148.75,189.68  "></polygon>
              <polygon points="122.753,115.683 149.499,96.263 176.247,115.723 166.032,84.33 192.778,65 159.718,65 149.499,33.557 139.282,65    106.222,65 132.968,84.336  "></polygon>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
          <h4>DAOX MEMBERSHIP</h4>
        </div>
        <p>SocialX Exclusive DAO Community</p>
        <p className="mb-4 mt-4">
          DAOX members get to control the OX Games. Depending on their levels,
          DAOs can create/vote challenges. Each membership level is reflected on
          how much SOSX they are staking. The OXGames is in your hands; what
          will you do with that kind of power?
        </p>
        <div className="mb-3">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex flex-column align-items-start">
              <h4 className="main-pink mb-2 ">DAOX Level 1</h4>
              <p style={{ fontWeight: "bold", marginBottom: "10px!important" }}>
                Staking 1 - 99,999 SOSX
              </p>
              <p className="text-nowrap ">Can vote for top 3 challenge</p>
            </div>
            <div className="d-flex flex-column justify-content-between align-items-center">
              <span
                className=" mr-3 mb-3 main-pink"
                style={{
                  fontFamily: "digital-7",
                  fontSize: "60px",
                  color: "rgb(255, 0, 204)",
                }}
              >
                6%
              </span>
              <span
                className="mt-2"
                style={{ fontSize: "15px", color: "rgb(255, 0, 204)" }}
              >
                *EST. APY
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div className="mb-3">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex flex-column align-items-start">
              <h4 className="main-pink mb-2 ">DAOX Level 2</h4>
              <p style={{ fontWeight: "bold", marginBottom: "10px!important" }}>
                Staking +100,000 SOSX
              </p>
              <p className="text-nowrap ">
                Can vote for top 3 challenge
                <br />+ Can create challenges
              </p>
            </div>
            <div className="d-flex flex-column justify-content-between align-items-center">
              <span
                className=" mr-3 mb-3 main-pink"
                style={{
                  fontFamily: "digital-7",
                  fontSize: "60px",
                  color: "rgb(255, 0, 204)",
                }}
              >
                9%
              </span>
              <span
                className="mt-2"
                style={{ fontSize: "15px", color: "rgb(255, 0, 204)" }}
              >
                *EST. APY
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex flex-column align-items-start">
              <h4 className="main-pink mb-2 ">DAOX Level 3</h4>
              <p style={{ fontWeight: "bold", marginBottom: "10px!important" }}>
                Staking +1,000,000 SOSX
              </p>
              <p className="text-nowrap mb-0">
                Can vote for top 3 challenge
                <br />
                + Can create challenges
                <br />+ Can vote in Final Challenge
              </p>
            </div>
            <div className="d-flex flex-column justify-content-between align-items-center">
              <span
                className=" mr-3 mb-3 main-pink"
                style={{
                  fontFamily: "digital-7",
                  fontSize: "60px",
                  color: "rgb(255, 0, 204)",
                }}
              >
                12%
              </span>
              <span
                className="mt-2"
                style={{ fontSize: "15px", color: "rgb(255, 0, 204)" }}
              >
                *EST. APY
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
