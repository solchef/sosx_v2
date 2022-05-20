import { cleanNumber } from "utils/amount";

export default function userStaking(props) {

  return (
    <>
      <div style={{ flex: "1 1 30%" }}>
        <div className="card d-flex flex-column h-100">
          <div className="card-body">
            <div className="d-flex align-items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                width="503.379px"
                height="503.379px"
                viewBox="0 0 503.379 503.379"
                style={{
                  width: "30px",
                  fill: "rgb(255, 0, 204)",
                  marginRight: "10px",
                  height: "30px",
                }}
                xmlSpace="preserve"
              >
                <g>
                  <path d="M458.091,128.116v326.842c0,26.698-21.723,48.421-48.422,48.421h-220.92c-26.699,0-48.421-21.723-48.421-48.421V242.439   c6.907,1.149,13.953,1.894,21.184,1.894c5.128,0,10.161-0.381,15.132-0.969v211.594c0,6.673,5.429,12.104,12.105,12.104h220.92   c6.674,0,12.105-5.432,12.105-12.104V128.116c0-6.676-5.432-12.105-12.105-12.105H289.835c0-12.625-1.897-24.793-5.297-36.315   h125.131C436.368,79.695,458.091,101.417,458.091,128.116z M159.49,228.401c-62.973,0-114.202-51.229-114.202-114.199   C45.289,51.229,96.517,0,159.49,0c62.971,0,114.202,51.229,114.202,114.202C273.692,177.172,222.461,228.401,159.49,228.401z    M159.49,204.19c49.618,0,89.989-40.364,89.989-89.988c0-49.627-40.365-89.991-89.989-89.991   c-49.626,0-89.991,40.364-89.991,89.991C69.499,163.826,109.87,204.19,159.49,204.19z M227.981,126.308   c6.682,0,12.105-5.423,12.105-12.105s-5.423-12.105-12.105-12.105h-56.386v-47.52c0-6.682-5.423-12.105-12.105-12.105   s-12.105,5.423-12.105,12.105v59.625c0,6.682,5.423,12.105,12.105,12.105H227.981z M367.697,224.456h-131.14   c-6.682,0-12.105,5.423-12.105,12.105c0,6.683,5.423,12.105,12.105,12.105h131.14c6.685,0,12.105-5.423,12.105-12.105   C379.803,229.879,374.382,224.456,367.697,224.456z M367.91,297.885h-131.14c-6.682,0-12.105,5.42-12.105,12.105   s5.423,12.105,12.105,12.105h131.14c6.685,0,12.104-5.42,12.104-12.105S374.601,297.885,367.91,297.885z M367.91,374.353h-131.14   c-6.682,0-12.105,5.426-12.105,12.105c0,6.685,5.423,12.104,12.105,12.104h131.14c6.685,0,12.104-5.42,12.104-12.104   C380.015,379.778,374.601,374.353,367.91,374.353z"></path>
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

              <h4>STAKING LOG</h4>
            </div>
            <p></p>
            <p className="mb-4">Keep track of your investments activities.</p>
            <p></p>
            <div
              className="d-flex pt-0 px-4  mt-0 ranking-header"
              style={{ justifyContent: "space-between", borderTop: " none" }}
            >
              <div className="header-item">Date</div>
              <div className="header-item">Action</div>
              <div className="header-item">Staking</div>
            </div>
            <div
              className="tab-bg"
              style={{
                height: "430px",
                overflow: "auto",
                paddingRight: "5px",
              }}>
                {props.stakelist.map((stake, i) => 
                  <div
                    className="rank-item mt-3 d-flex px-4 pt-4 mt-0"
                    style={{ justifyContent: "space-between" }}>
                    <div className="header-item">{stake.stakeDate}</div>
                    <div className="header-item">Staked</div>
                    <div className="header-item"> {cleanNumber(stake.amount.toFixed(2))}</div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>    </>
  );
}
