import React, { useContext } from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

import Header from '../Header/Header';

import Journal from '../Mind/Journal/Journal';
import JournalList from '../Mind/Journal/JournalList';

import Body from '../Body/Body';

import Mind from '../Mind/Mind';
import Productivity from '../Productivity/Productivity';
import './Home.css';
import useTodos from '../../hooks/useTodos';

import Creators from '../Creators/Creators';

export default function Home() {
  const { user } = useContext(UserContext);
  const { loading } = useTodos();
  const { component } = useParams();

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
      {!component && (
        <div className="home-flex">
          <h2 className="slogan">Your productivity hub.</h2>
          {/* <div className="video-container">
            <video
              src={require('./code-hands.mp4')}
              width="1000"
              height="500"
              // controls="controls"
              autoPlay={true}
              loop
            />
          </div> */}
        </div>
      )}

      <div className="home-components">
        <Switch>
          {/* <Route exact path="/home" component={Landing} /> */}
          <Route path="/home/mind" component={Mind} />
          <Route path="/home/body" component={Body} />
          <Route path="/home/creators" component={Creators} />

          <Route path="/home/journal/list" component={JournalList} />
          <Route path="/home/journal" component={Journal} />
        </Switch>
      </div>
    </div>
  );
}
