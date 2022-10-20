import React, { useEffect, useState } from 'react';
import './Timer.css';

// export default function Timer() {

//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);


//   const deadline = Date.now() + 5;
//   deadline.toString();

//   const getTime = () => {
//     const time = Date.parse(deadline.toString()) - Date.now();

//     setMinutes(Math.floor((time / (1000 / 60) % 60)));
//     setSeconds(Math.floor((time / (1000) % 60)));
//   };

//   useEffect(() => {
//     const interval = setInterval(() => getTime(deadline), 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="timer">{minutes}: {seconds}</div>
//   );
// }

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? 24 : 4;
          let seconds = 59;

          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="pomodoro">
      <div className="message">
        {displayMessage && <div>Break time! New session starts in:</div>}
      </div>
      <div className="timer">
        {timerMinutes}:{timerSeconds}
      </div>
    </div>
  );
}