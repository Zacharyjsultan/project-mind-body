import React, { useState, useEffect } from 'react';
import './ProdTimer.css';

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let seconds = 0;
          setSeconds(seconds);
          setMinutes(minutes);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds, minutes]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="prod-timer">
      <p>Pomodoro</p>
      {minutes === 0 && <select
        value={minutes}
        onChange={(e) => {
          setMinutes(e.target.value);
        }}
      >
        {' '}
        <option value={0}>Off</option>
        <option value={5}>Five</option>
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
      </select>}

      <div className="pomodoro">
        <div className="small-timer">
          {timerMinutes}:{timerSeconds}
        </div>
      </div>
    </div>
  );
}
