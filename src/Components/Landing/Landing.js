import React, { useContext } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import useProfile from '../../hooks/useProfile';
import './Landing.css';

export default function Landing() {
  const { user } = useContext(UserContext);
  const { profile } = useProfile();

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return (
    <div className="container">
      <div className="hello-user">
        <p>Hello {profile.full_name}, </p>
        <p>Welcome to Desk Jockey</p>
      </div>

      <div className="text-container">
        <NavLink to="/home" className="enter-link">
          <div className="enter-container">
            <p className="enter">Enter</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
