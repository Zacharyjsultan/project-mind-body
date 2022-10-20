import React, { useEffect, useState } from 'react';
import './Timer.css';

export default function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


  const deadline = 'October, 31, 2022';

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / (1000 / 60) % 60)));
    setSeconds(Math.floor((time / (1000) % 60)));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">{hours}: {minutes}: {seconds}</div>
  );
}

// export default function Pomodoro() {
//   const [minutes, setMinutes] = useState(25);
//   const [seconds, setSeconds] = useState(0);
//   const [displayMessage, setDisplayMessage] = useState(false);

//   useEffect(() => {
//     let interval = setInterval(() => {
//       clearInterval(interval);

//       if (seconds === 0) {
//         if (minutes !== 0) {
//           setSeconds(59);
//           setMinutes(minutes - 1);
//         } else {
//           let minutes = displayMessage ? 24 : 4;
//           let seconds = 59;

//           setSeconds(seconds);
//           setMinutes(minutes);
//           setDisplayMessage(!displayMessage);
//         }
//       } else {
//         setSeconds(seconds - 1);
//       }
//     }, 1000);
//   }, [minutes, seconds, displayMessage]);

//   const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
//   const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

//   return (
//     <div className="pomodoro">
//       <div className="message">
//         {displayMessage && <div>Break time! New session starts in:</div>}
//       </div>
//       <div className="timer">
//         {timerMinutes}:{timerSeconds}
//       </div>
//     </div>
//   );
// }