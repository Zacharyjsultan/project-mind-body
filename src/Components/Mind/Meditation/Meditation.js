import { Button } from '@mui/material';
import React, { useContext, useState, useRef, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import './Meditation.css';

export default function Meditation() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return (
    <div className="meditation-body">
      <div className="grid-top">
        <NavLink to="/home/mind" className="med-navlink">
          <Button variant="outlined" className="back-button">
            Done meditating
          </Button>
        </NavLink>
      </div>

      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

const Timer = () => {
  const Ref = useRef(null);

  const [timer, setTimer] = useSate('00:00:00');

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) 5 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total, hours, minutes, seconds
    };
  }

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : '0' + hours) + ':' +
        (minutes > 9 ? minutes : '0' + minutes) + ';'
        + (seconds > 9 ? seconds : '0' + seconds)
      )
    }  
  }

  
}