import React from 'react';
import useJournals from '../../../hooks/useJournals';
import JournalCard from './JournalCard';
import './JournalCard.css';

export default function JournalList() {
  const { journals } = useJournals();

  return (
    <>
      <div className="journal-list">
        {journals.map((journal) => (
          <JournalCard key={journal.id} {...journal} />
        ))}
      </div>
    </>
  );
}
