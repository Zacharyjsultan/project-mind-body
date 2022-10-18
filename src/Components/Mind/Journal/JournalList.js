import React from 'react';
import useJournals from '../../../hooks/useJournals';
import JournalCard from './JournalCard';

export default function JournalList() {
  const { journals } = useJournals();

  return (
    <>
      <div className="journal-container">
        {journals.map((journal) => (
          <JournalCard key={journal.id} {...journal} />
        ))}
      </div>
    </>
  );
}
