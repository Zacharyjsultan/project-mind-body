import React from 'react';
import './JournalCard.css';

export default function JournalCard({ grateful, today, affirmation, occurrence, improvement }) {
  return (
    <div className="journal-card">
      <h3>{grateful}</h3>
      <h3>{today}</h3>
      <h3>{affirmation}</h3>
      <h3>{occurrence}</h3>
      <h3>{improvement}</h3>
    </div>
  );
}
