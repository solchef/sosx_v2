import moment from 'moment'
import { useEffect, useState } from 'react';


export const GameRoundTimer = (gameStartTime) => {
    const target = new Date("05/12/2022 13:40:12");


        

        // if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        // 	// setPartyTime(true);
        // 	// setTarget(new Date())
        // }

    // gameStartTime
        //do all computations
        //step  = bla bla





    let roundData = {
        round: 0,
        activeChallenge: 1,
        roundStartTime: gameStartTime ,
        currentStepStartTime: '',
        currentStep: 1

    }
    return roundData

}

const useCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime();
  
    const [countDown, setCountDown] = useState(
      countDownDate - new Date().getTime()
    );
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);
  
      return () => clearInterval(interval);
    }, [countDownDate]);
  
    return getReturnValues(countDown);
  };
  
  const getReturnValues = (countDown) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  
    return [days, hours, minutes, seconds];
  };
  
  export { useCountdown };