import { useState } from 'react';
import GameGuide from "./guide";

export default function Test() {

  return (<>
    <div className="container-fluid d-flex flex-wrap flex-column flex-sm-row flex-direction-row-reverse" style={{ gap: '20px' }}>
      <div style={{ flex: '1 1 23%' }}>
        <div className="card h-100">
          <div className="card-body">
            <div className="flex-row d-flex justify-content-between w-100 ml-auto mr-0 align-items-center">
              <div>
                <div>
                  <h4>Total Friends

                  </h4>
                </div>
                <p className="mb-0">0</p>
              </div>
              <div>
                <div>
                  <h4>Total Earned
                  </h4>
                </div>
                <p className="mb-0">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: '1 1 23%' }}>
        <div className="card h-100">
          <div className="card-body">
            <div className="flex-row d-flex justify-content-between w-100 ml-auto mr-0 align-items-center">
              <div>
                <div>
                  <h4>Mining Friends
                  </h4>
                </div>
                <p className="mb-0">0</p>
              </div>
              <div>
                <div>
                  <h4>Mining Earned
                  </h4>
                </div>
                <p className="mb-0">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: '1 1 23%' }}>
        <div className="card h-100">
          <div className="card-body">
            <div className="flex-row d-flex justify-content-between w-100 ml-auto mr-0 align-items-center">
              <div>
                <div>
                  <h4>Staking Friends
                  </h4>
                </div>
                <p className="mb-0">0</p>
              </div>
              <div>
                <div>
                  <h4>Staking Earned
                  </h4>
                </div>
                <p className="mb-0">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ flex: '1 1 30%' }}>
        <div className="card d-flex flex-column">
          <div className="card-body mb-3">
            <div className="d-flex align-items-center mb-2"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 239 116" xmlSpace="preserve" style={{ width: '40px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }}>
              <path d="M58,0C25.97,0,0,25.97,0,58c0,32.03,25.97,58,58,58s58-25.97,58-58C116,25.97,90.03,0,58,0z M58,90.78 c-18.11,0-32.78-14.68-32.78-32.78c0-18.11,14.68-32.78,32.78-32.78S90.78,39.89,90.78,58C90.78,76.11,76.11,90.78,58,90.78z">
              </path>
              <g>
                <path className="st0" d="M151.87,48.3l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C165.69,53.57,157.14,53.57,151.87,48.3z">
                </path>
                <path className="st0" d="M215.27,112.05l-25.23-25.23c-5.27-5.27-5.27-13.82,0-19.09l0,0c5.27-5.27,13.82-5.27,19.09,0l25.23,25.23 c5.27,5.27,5.27,13.82,0,19.09l0,0C229.09,117.32,220.55,117.32,215.27,112.05z">
                </path>
                <path className="st0" d="M126.64,92.96l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09l-25.23,25.23 c-5.27,5.27-13.82,5.27-19.09,0l0,0C121.37,106.77,121.37,98.23,126.64,92.96z">
                </path>
                <path className="st0" d="M190.73,29.21l25.23-25.23c5.27-5.27,13.82-5.27,19.09,0l0,0c5.27,5.27,5.27,13.82,0,19.09L209.82,48.3 c-5.27,5.27-13.82,5.27-19.09,0l0,0C185.46,43.03,185.46,34.48,190.73,29.21z">
                </path>
              </g>
            </svg>
              <h4>My Referral Link</h4>
            </div>
            <p className="mb-4">Become a DAOX member while receiving daily rewards</p>
            <div className="bg-input mb-3 py-2 px-3 rounded mt-4">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className=" pt-3 pb-3 " style={{ color: 'rgb(142, 142, 142)' }}>** Connect to Refer **</h3>
              </div>
            </div>
            <div className="d-flex justify-content-between"><button className="btn mr-1 btn-primary btn-lg mt-2" type="button">Copy</button></div>
          </div>

        </div>
        <div className="card d-flex flex-column mt-4">
          <div className="card-body">
            <div className="font-weight-bold align-items-center d-flex justify-content-between ">
              <div className="d-flex flex-column align-items-center">
                <h4 className="fs-18 font-weight-bold">You will get</h4>
                <h3 style={{ fontFamily: 'digital-7' }} className="text-success">35%</h3>
              </div>
              <i className="fa-solid fs-28 text-success fa-angles-right"></i>
              <div>
                <p className="text-muted">Social Mining</p>
                <h3 style={{ fontFamily: 'digital-7' }}> 25%</h3>
              </div>
              <div>
                <p className="text-muted">Staking </p>
                <h3 style={{ fontFamily: 'digital-7' }}> 10%</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: '1 1 30%' }}>
        <div className="card d-flex flex-column justify-content-between h-100">
          <div className="card-body">
            <div className="d-flex align-items-center mb-0"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 297.334 297.334" style={{ width: '30px', fill: 'rgb(255, 0, 204)', marginRight: '10px' }} xmlSpace="preserve">
              <g>
                <path d="M255.5,0h-213c-4.418,0-8.333,3.582-8.333,8v223c0,2.923,1.76,5.612,4.324,7.017l106.583,58.334   c1.196,0.655,2.561,0.983,3.884,0.983c1.323,0,2.667-0.328,3.864-0.983l106.344-58.334c2.564-1.404,4.001-4.094,4.001-7.017V8   C263.167,3.582,259.918,0,255.5,0z M247.167,226.261l-98.5,53.952l-98.5-53.952V16h197V226.261z">
                </path>
                <polygon points="215.167,209.092 215.167,171.5 148.751,206.5 82.167,171.5 82.167,209.001 148.75,245.334  ">
                </polygon>
                <polygon points="215.167,153.438 215.167,115.846 148.751,150.846 82.167,115.846 82.167,153.347 148.75,189.68  ">
                </polygon>
                <polygon points="122.753,115.683 149.499,96.263 176.247,115.723 166.032,84.33 192.778,65 159.718,65 149.499,33.557 139.282,65    106.222,65 132.968,84.336  ">
                </polygon>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
            </svg>
              <h4>Instructure</h4>
            </div>
            <p>SocialX Community
            </p>
            <p className="mb-4 mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ullam, vitae, velit nemo commodi, architecto ad asperiores repellat dolores quidem eligendi ratione fugit assumenda modi explicabo sapiente totam saepe atque.</p>

            <hr />
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex flex-column align-items-start">
                  <h4 className="main-pink mb-2 ">Social Mining Referral
                  </h4>
                  <button className="btn mr-1 btn-primary btn-lg mt-2" type="button">Connect wallet</button>

                </div>
                <div className="d-flex flex-column justify-content-between align-items-center">
                  <img
                    src="images/swapcoin-referral.svg"
                    className="pb-2 pl-2 pr-2 pt-1 referral-rewards"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex flex-column align-items-start">
                  <h4 className="main-pink mb-2 ">Staking Referral</h4>
                  <button className="btn mr-1 btn-primary btn-lg mt-2" type="button">Connect wallet</button>

                </div>
                <div className="d-flex flex-column justify-content-between align-items-center">
                  <img
                    src="images/swapcoin-referral.svg"
                    className="pb-2 pl-2 pr-2 pt-1 referral-rewards"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: '1 1 30%' }}>
        <div className="card d-flex flex-column h-100">
          <div className="card-header">
            <div style={{ flex: '2 auto' }}>
              <div className="jsx-e5e2ca7965fa437a d-flex align-items-center mb-2"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="503.379px" height="503.379px" viewBox="0 0 503.379 503.379" xmlSpace="preserve" className="jsx-e5e2ca7965fa437a" style={{ width: '30px', fill: 'rgb(255, 0, 204)', marginRight: '10px', height: '30px' }}>
                <g className="jsx-e5e2ca7965fa437a">
                  <path d="M458.091,128.116v326.842c0,26.698-21.723,48.421-48.422,48.421h-220.92c-26.699,0-48.421-21.723-48.421-48.421V242.439 c6.907,1.149,13.953,1.894,21.184,1.894c5.128,0,10.161-0.381,15.132-0.969v211.594c0,6.673,5.429,12.104,12.105,12.104h220.92 c6.674,0,12.105-5.432,12.105-12.104V128.116c0-6.676-5.432-12.105-12.105-12.105H289.835c0-12.625-1.897-24.793-5.297-36.315 h125.131C436.368,79.695,458.091,101.417,458.091,128.116z M159.49,228.401c-62.973,0-114.202-51.229-114.202-114.199 C45.289,51.229,96.517,0,159.49,0c62.971,0,114.202,51.229,114.202,114.202C273.692,177.172,222.461,228.401,159.49,228.401z M159.49,204.19c49.618,0,89.989-40.364,89.989-89.988c0-49.627-40.365-89.991-89.989-89.991 c-49.626,0-89.991,40.364-89.991,89.991C69.499,163.826,109.87,204.19,159.49,204.19z M227.981,126.308 c6.682,0,12.105-5.423,12.105-12.105s-5.423-12.105-12.105-12.105h-56.386v-47.52c0-6.682-5.423-12.105-12.105-12.105 s-12.105,5.423-12.105,12.105v59.625c0,6.682,5.423,12.105,12.105,12.105H227.981z M367.697,224.456h-131.14 c-6.682,0-12.105,5.423-12.105,12.105c0,6.683,5.423,12.105,12.105,12.105h131.14c6.685,0,12.105-5.423,12.105-12.105 C379.803,229.879,374.382,224.456,367.697,224.456z M367.91,297.885h-131.14c-6.682,0-12.105,5.42-12.105,12.105 s5.423,12.105,12.105,12.105h131.14c6.685,0,12.104-5.42,12.104-12.105S374.601,297.885,367.91,297.885z M367.91,374.353h-131.14 c-6.682,0-12.105,5.426-12.105,12.105c0,6.685,5.423,12.104,12.105,12.104h131.14c6.685,0,12.104-5.42,12.104-12.104 C380.015,379.778,374.601,374.353,367.91,374.353z" className="jsx-e5e2ca7965fa437a" />
                </g>
                <g className="jsx-e5e2ca7965fa437a" />
                <g className="jsx-e5e2ca7965fa437a" />
                <g className="jsx-e5e2ca7965fa437a" />
                <g className="jsx-e5e2ca7965fa437a" />
                <g className="jsx-e5e2ca7965fa437a" />
                <g className="jsx-e5e2ca7965fa437a" />
                <g className="jsx-e5e2ca7965fa437a" />
                <g className="jsx-e5e2ca7965fa437a" />
                <g className="jsx-e5e2ca7965fa437a" />
                <g className="jsx-e5e2ca7965fa437a" />
                <g className="jsx-e5e2ca7965fa437a" />
                <g className="jsx-e5e2ca7965fa437a" />
                <g className="jsx-e5e2ca7965fa437a" />
                <g className="jsx-e5e2ca7965fa437a" />
                <g className="jsx-e5e2ca7965fa437a" />
              </svg>
                <h4 className="jsx-e5e2ca7965fa437a">STAKING LOG</h4>
              </div>
              <p className="jsx-e5e2ca7965fa437a mb-0">Your Staking Activities</p>
            </div>
          
          </div>
          <div className="jsx-e5e2ca7965fa437a card-body">
            <table className="jsx-e5e2ca7965fa437a  fs-12 p-4 mt-0 table " style={{ maxWidth: '100%' }}>
              <tbody className="ranking-header">
                <tr className="jsx-e5e2ca7965fa437a">
                  <th className="jsx-e5e2ca7965fa437al">Wallet Address</th>
                  <th className="jsx-e5e2ca7965fa437a text-left">Mining Rewards</th>
                  <th className="jsx-e5e2ca7965fa437a">Staking Rewards</th>
                  <th className="jsx-e5e2ca7965fa437a">Total Earned</th>
                </tr>
              </tbody>
              <tbody className="jsx-e5e2ca7965fa437a">
                <tr className="jsx-e5e2ca7965fa437a" style={{ borderColor: 'rgb(30, 33, 36)' }}>
                  <td className="jsx-e5e2ca7965fa437a text-white">0</td>
                  <td className="jsx-e5e2ca7965fa437a text-white">0</td>
                  <td className="jsx-e5e2ca7965fa437a text-white">0</td>
                  <td className="jsx-e5e2ca7965fa437a text-white">0</td>
                </tr>
                <tr className="jsx-e5e2ca7965fa437a" style={{ borderColor: 'rgb(30, 33, 36)' }}>
                  <td className="jsx-e5e2ca7965fa437a text-white">0</td>
                  <td className="jsx-e5e2ca7965fa437a text-white">0</td>
                  <td className="jsx-e5e2ca7965fa437a text-white"> 0</td>
                  <td className="jsx-e5e2ca7965fa437a text-white"> 0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <GameGuide />

  </>
  )
}