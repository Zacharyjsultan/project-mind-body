import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Landing.css';

export default function Landing() {
  const { user } = useContext(UserContext);
  return (
    <div id="container">
      <img
        className="mountains"
        src="http://res.cloudinary.com/oscartbeamish/image/upload/v1504853272/jasper-van-der-meij-104066_mjwzc8.jpg"
      />
      <div id="text-container">
        <NavLink to="/home" className="enter-link">
          <div className="enter-container">
            <p className="enter">Enter {user.email}</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
