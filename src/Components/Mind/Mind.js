import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Journal from './Journal/Journal';
import JournalList from './Journal/JournalList';

export default function Mind() {
  return (
    <div>
      <Switch>
        <Route path="/home/mind/journal/list" component={JournalList} />
        <Route path="/home/mind/journal" component={Journal} />
      </Switch>
    </div>
  );
}
