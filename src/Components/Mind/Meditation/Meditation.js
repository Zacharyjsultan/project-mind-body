import { Button } from '@mui/material';
import React, { useContext } from 'react';
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
