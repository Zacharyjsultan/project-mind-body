import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Body from '../Body/Body';
import Header from '../Header/Header';


import Mind from '../Mind/Mind';
import Productivity from '../Productivity/Productivity';
import './Home.css';

export default function Home() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return <div className="home-main">
    <Header />
    <Productivity />
    <Switch>
      <Route path="/home/mind" component={Mind} />
      <Route path="/home/body" component={Body} />
    </Switch>
    
  </div>;
}
