import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchStretches } from '../../../services/stretches';

export default function Stretches() {
  const [stretches, setStretches] = useState([]);
  const [search, setSearch] = useState('');

  console.log('search', search);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('/.netlify/functions/fetch-stretch');
      console.log(resp.body);
      const data = await resp.json();
      setStretches(data);
    };
    fetchData();
  }, []);

  const searchStretches = async () => {
    const resp = await fetchStretches(search);
    // const data = await resp.json();
    setStretches(resp);
  };

  return (
    <div>
      <label>Search for a stretch</label>  
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {stretches.map((stretch) => (
        <div key={stretch}>{stretch.instructions}</div>
      ))}
      <button onClick={searchStretches}>Search</button>
    </div>
  );
}
