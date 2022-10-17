import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../context/UserContext';
import { createJournalEntry } from '../../../services/journal';

export default function Journal() {
  const { user } = useContext(UserContext);
  const [grateful, setGrateful] = useState('');
  const [today, setToday] = useState('');
  const [affirmation, setAffirmation] = useState('');
  const [occurrence, setOccurrence] = useState('');
  const [improvement, setImprovement] = useState('');

  const handleSubmit = async () => {
    const data = await createJournalEntry({ grateful }, { today }, { affirmation }, { occurrence }, { improvement }, { user });
    console.log('data', data);
    // const todosArr = await getTodos();
    // setTodos(todosArr);
  };

  return (
    <>
      <div>
        <h1>Journal</h1>
        <label>I am grateful for...</label>
        <input value={grateful} onChange={(e) => setGrateful(e.target.value)} />
      </div>
      <div>
        <label>What would make today great?</label>
        <input value={today} onChange={(e) => setToday(e.target.value)}></input>
      </div>
      <div>
        <label>Daily affirmation. I am...</label>
        <input value={affirmation} onChange={(e) => setAffirmation(e.target.value)}></input>
      </div>
      <div>
        <label>Three amazing things that happened today...</label>
        <input value={occurrence} onChange={(e) => setOccurrence(e.target.value)}></input>
      </div>
      <div>
        <label>How could I have made today even better?</label>
        <input value={improvement} onChange={(e) => setImprovement(e.target.value)}></input>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}