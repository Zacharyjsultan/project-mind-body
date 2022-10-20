import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Journal from './Journal/Journal';
import JournalList from './Journal/JournalList';
import './Mind.css';

import Meditation from './Meditation/Meditation';

export default function Mind() {
  return (
    <div className="mind-main">
      <div className="ease-mind">
        <h2>Ease your mind</h2>
      </div>
      <div className="meditation-path">
        <div className="med-image-container">
          <NavLink className="mind-links" to="/meditation">
            <h4 className="mind-nav meditate-h4">Take a Break</h4>
            <img className="meditation-img" src={require('./meditation.png')} />
          </NavLink>
        </div>
        <div className="journal-image-container">
          <NavLink className="mind-links" to="/home/journal">
            <h4 className="mind-nav journal-h4">Click to journal</h4>
            <img className="quill-img" src={require('./quill.png')} />
          </NavLink>
        </div>
      </div>

      <Switch>
        <Route path="/home/journal/list" component={JournalList} />
        <Route path="/home/journal" component={Journal} />
        <Route path="/home/meditation" component={Meditation} />
      </Switch>
    </div>
  );
}
