import React from 'react';
import './Journal.css';
import { useState } from 'react';

import { createJournalEntry } from '../../../services/journal';
import { NavLink } from 'react-router-dom';

export default function Journal() {
  const [grateful, setGrateful] = useState('');
  const [today, setToday] = useState('');
  const [affirmation, setAffirmation] = useState('');
  const [occurrence, setOccurrence] = useState('');
  const [improvement, setImprovement] = useState('');

  const handleSubmit = async () => {
    await createJournalEntry({
      grateful,
      today,
      affirmation,
      occurrence,
      improvement,
    });
  };

  return (
    <>
      <NavLink to="/journal/list">Journal List</NavLink>

      <div className="journal-entry">
        <h1>Journal</h1>
        <label className="journal-labels">I am grateful for...</label>
        <input
          className="journal-inputs"
          value={grateful}
          onChange={(e) => setGrateful(e.target.value)}
        />

        <p></p>
        <div>
          <label className="journal-labels">What would make today great?</label>
          <input
            className="journal-inputs"
            value={today}
            onChange={(e) => setToday(e.target.value)}
          ></input>
        </div>
        <p></p>
        <div>
          <label className="journal-labels">Daily affirmation. I am...</label>
          <input
            className="journal-inputs"
            value={affirmation}
            onChange={(e) => setAffirmation(e.target.value)}
          ></input>
        </div>
        <p></p>
        <div>
          <label className="journal-labels">Three amazing things that happened today...</label>
          <input
            className="journal-inputs"
            value={occurrence}
            onChange={(e) => setOccurrence(e.target.value)}
          ></input>
        </div>
        <p></p>
        <div>
          <label className="journal-labels">How could I have made today even better?</label>
          <input
            className="journal-inputs"
            value={improvement}
            onChange={(e) => setImprovement(e.target.value)}
          ></input>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}
