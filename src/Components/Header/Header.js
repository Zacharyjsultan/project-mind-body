import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Header() {
  // eslint-disable-next-line no-console

  return (
    <header>
      <div className="header-title">
        <NavLink className="home-link" to="/home">
          <div>
            <h2 className="desk">Desk</h2>
          </div>
          <div>
            <h2 className="jockey">Jockey</h2>
          </div>
        </NavLink>
      </div>

      <div className="nav-links">
        <div>
          <NavLink to="/home/mind">
            <Button variant="text" className="header-btn" size="large">
              Mind
            </Button>
          </NavLink>
        </div>
        <div>
          <NavLink to="/home/body">
            <Button variant="text" className="header-btn" size="large">
              Body
            </Button>
          </NavLink>
        </div>
        <div>
          <NavLink to="/home/creators">
            <Button variant="text" className="header-btn" size="large">
              Creators
            </Button>
          </NavLink>
        </div>
      </div>
      <div className="desk-container">
        <img className="desk-icon" src={require('./desk.png')} />
      </div>
    </header>
  );
}
