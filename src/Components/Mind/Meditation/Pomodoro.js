import React, { useState, useEffect } from 'react';
import './Pomodoro.css';

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(5);
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
          let minutes = displayMessage ? 24 : 5;
          let seconds = 59;

          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds, minutes, displayMessage]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div>
      <select
        value={minutes}
        onChange={(e) => {
          setMinutes(e.target.value);
        }}
      >
        <option value={5}>Five</option>
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
      </select>
      <div className="pomodoro">
        <div className="message">
          {displayMessage && <div>Break time! New session starts in:</div>}
        </div>
        <div className="timer">
          {timerMinutes}:{timerSeconds}
        </div>
      </div>
    </div>
  );
}
