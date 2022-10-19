import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Journal from './Journal/Journal';
import JournalList from './Journal/JournalList';
import './Mind.css';
import { Button } from '@mui/material';
import Meditation from './Meditation/Meditation';

export default function Mind() {
  return (
    <div className="mind-main">
      <div className="journal-path">
        <div className="journal-image-container">
          <img className="meditation-img" src={require('./journal.png')} />
        </div>
        <div className="journal-redirect">
          <NavLink className="mind-links" to="/home/journal">
            <Button variant="outlined">Make a journal entry</Button>
          </NavLink>
          <NavLink className="mind-links" to="/home/journal/list">
            <Button variant="outlined">Previous journal entries</Button>
          </NavLink>
        </div>
      </div>
      <div className="meditation-path">
        <div className="med-image-container">
          <img className="meditation-img" src={require('./meditation.png')} />
        </div>
        <div className="meditation-redirect">
          <NavLink className="mind-links" to="/home/meditation">
            <Button variant="outlined">Meditate</Button>
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
