import { useEffect, useState } from "react";
import Link from "next/link";

export default function Referral() {

  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("05/15/2022 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="game-top">

        <div className="row p-2 d-flex justify-content-between">
          <div className="p-1">
            <p className="font-w700">The Game Starts In</p>
            <div className="clock">
              <div id="countdown">
                <p className="li"><span >{days}</span>days</p>
                <p className="li"><span >{hours}</span>Hours</p>
                <p className="li"><span >{minutes}</span>Minutes</p>
                <p className="li"><span >{seconds}</span>Seconds</p>
              </div>
            </div>
          </div>


          <div className="p-2">
            <p className="font-w700">Prize Pool</p>
            <h1>$1,000</h1>
          </div>

          <div className="p-2">
            <p className="font-w700">The Challenge Will End Soon</p>
            <p>Send your video now! and win the prize pool money!
            </p>
            <button className="btn btn-white">Upload Video Here</button>
          </div>


        </div>

      </div>

      <div className="container-fluid height-game">
        <div className="row mobile-hide-card">
          <div className="col-sm-4 pb-3 pt-3">
            <Link href="/createchallenge">
              <a>
                <div className="card2 h-100 w-100 overflow-hidden ">
                  <img src="images/create-challenge-img.png" />
                </div>
              </a>
            </Link>
          </div>

          <div className="col-sm-4 pb-3 pt-3">
            <Link href="/votechallenge">

              <a>
                <div className="card2 h-100 w-100 overflow-hidden ">
                  <img src="images/vote-challenge-img.png" />
                </div>
              </a>
            </Link>
          </div>

          <div className="col-sm-4 pb-3 pt-3">
            <Link href="/thechallenge">
              <a>
                <div className="card2 h-100 w-100 overflow-hidden ">
                  <img src="images/the-challenge-img.png" />
                </div>
              </a>
            </Link>
          </div>
        </div>

        <div className="row mobile-show-card">
          <div className="col-sm-12 mb-1 mt-1">
            <Link href="/createchallenge">
              <a>
                <div className="card2">
                  <img src="images/create-challenge-img-mob.png" />
                </div>
              </a>
            </Link>
          </div>

          <div className="col-sm-12 mb-1 mt-1">
            <Link href="/votechallenge">

              <a>
                <div className="card2">
                  <img src="images/vote-challenge-img-mob.png" />
                </div>
              </a>
            </Link>
          </div>

          <div className="col-sm-12 mb-1 mt-1">
            <Link href="/thechallenge">
              <a>
                <div className="card2">
                  <img src="images/the-challenge-img-mob.png" />
                </div>
              </a>
            </Link>
          </div>
        </div>

      </div>


    </>
  )
}
