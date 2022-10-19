import React, { useContext } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Body from '../Body/Body';
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Journal from '../Mind/Journal/Journal';
import JournalList from '../Mind/Journal/JournalList';
import Meditation from '../Mind/Meditation/Meditation';

import Mind from '../Mind/Mind';
import Productivity from '../Productivity/Productivity';
import './Home.css';

export default function Home() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return (
    <div className="home-main">
      <Header />
      <Productivity />
      <div className="nav-links">
        <NavLink to="/home/mind">Mind</NavLink>
        <NavLink to="/home/body">Body</NavLink>
      </div>
      <div className="home-components">
        <Switch>
          <Route exact path="/home" component={Landing} />
          <Route path="/home/mind" component={Mind} />
          <Route path="/home/body" component={Body} />
          <Route path="/home/journal/list" component={JournalList} />
          <Route path="/home/journal" component={Journal} />
          {/* <Route path="/home/meditation" component={Meditation} /> */}
        </Switch>
      </div>
    </div>
  );
}
