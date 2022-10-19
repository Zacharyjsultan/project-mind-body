import React from 'react';
import { useState } from 'react';
import { fetchStretches } from '../../../services/stretches';

export default function Stretches() {
  const [stretches, setStretches] = useState([]);
  const [search, setSearch] = useState('');

  const searchStretches = async () => {
    const resp = await fetchStretches(search);
    setStretches(resp);
  };

  return (
    <div>
      <label>Search for a stretch</label>  
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {stretches.map((stretch, idx) => (
        <div key={idx}>{stretch.name}{stretch.instructions}</div>
      ))}
      <button onClick={searchStretches}>Search</button>
    </div>
  );
}
