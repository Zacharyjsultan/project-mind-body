import React, { useState, useEffect } from 'react';
import './Pomodoro.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const handleTime = (event) => {
    setMinutes(event.target.value);
  };

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
  }, [seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={minutes}
        label="time"
        onChange={(e) => handleTime(e.target.value)}
      >
        <MenuItem value={5}>Five</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
      </Select>
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
