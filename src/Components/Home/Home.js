import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Home.css';

export default function Home() {
  const { user } = useContext(UserContext);

  if (!user) {
    <Redirect to="/auth-sign-in" />;
  }

  return <div className="home-main">Home</div>;
}
