import React from 'react';
import './JournalCard.css';

export default function JournalCard({ grateful, today, affirmation, occurrence, improvement }) {
  return (
    <div className="main">
    
      <div className="journal-card">
        <p>I am grateful for: {grateful}</p>
        <p>What would make today great? {today}</p>
        <p>Daily affirmation. I am {affirmation}</p>
        <p>Three amazing things that happened today: {occurrence}</p>
        <p>How I could have made today even better: {improvement}</p>
      </div>
    </div>
  );
}
