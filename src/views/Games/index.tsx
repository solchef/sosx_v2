import { } from 'react'

export default function Referral() {
  
  return (
    <div className="content-body">
    <div className="row bg-pink p-3">
      <div className="col-md-2" />
      <div className="col-md-3">
        <div className="feature-box">
          <div className="feature-icon">
            <img src="images/prize-pool-icon-white.png" style={{width: '100%'}} />
          </div>
          <div className="feature-text">
            <span className="text-white fs-14 font-weight-bold">Prize Pool</span>
            <h3 className="fs-40 font-weight-bold">$1,000.00</h3>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="feature-box">
          <div className="feature-text">
            <span className="text-white fs-22 font-weight-bold">The Challenge will End soon</span>
            <h3 className="fs-12">Send your video now! and win the prize pool money!</h3>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="feature-box">
          <div className="feature-text">
            <button className="btn btn-white">Upload Video Here</button>
          </div>
        </div>
      </div>
    </div>
    {/* row */}
    <div className="container">
      <div className="row">
        <div className="col-sm-4 mb-3 mt-3">
          <span className="game-timer unactive">06:00:00</span>
          <a href="#">
            <div className="card2 overflow-hidden ">
              <img src="images/create-challenge-img.png" />
            </div>
          </a>
        </div>
        <div className="col-sm-4 mb-3 mt-3">
          <span className="game-timer unactive">06:00:00</span>
          <a href="#">
            <div className="card2 overflow-hidden ">
              <img src="images/vote-challenge-img.png" />
            </div>
          </a>
        </div>
        <div className="col-sm-4 mb-3 mt-3">
          <span className="game-timer unactive">06:00:00</span>
          <a href="#">
            <div className="card2 overflow-hidden ">
              <img src="images/the-challenge-img.png" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}
