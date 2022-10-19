import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

import Header from '../Header/Header';

import Journal from '../Mind/Journal/Journal';
import JournalList from '../Mind/Journal/JournalList';

import Body from '../Body/Body';

import Mind from '../Mind/Mind';
import Productivity from '../Productivity/Productivity';
import './Home.css';
import useTodos from '../../hooks/useTodos';

export default function Home() {
  const { user } = useContext(UserContext);
  const { loading } = useTodos();

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="home-main">
      <Header />
      <Productivity />

      <div className="home-components">
        <Switch>
          {/* <Route exact path="/home" component={Landing} /> */}
          <Route path="/home/mind" component={Mind} />
          <Route path="/home/body" component={Body} />

          <Route path="/home/journal/list" component={JournalList} />
          <Route path="/home/journal" component={Journal} />
        </Switch>
      </div>
    </div>
  );
}
