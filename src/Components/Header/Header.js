import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Header() {
  // eslint-disable-next-line no-console

  return (
    <header>
      <div className="header-title">
        <h2>Desk Jockey</h2>
      </div>

      <div className="nav-links">
        <div>
          <NavLink to="/home/mind">
            <Button variant="outlined">Mind</Button>
          </NavLink>
        </div>
        <div>
          <NavLink to="/home/body">
            <Button variant="outlined">Body</Button>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
