import React from 'react';
import { useState } from 'react';
import { fetchStretches } from '../../../services/stretches';
import TextField from '@mui/material/TextField';
import './Stretches.css';
import { Button } from '@mui/material';

export default function Stretches() {
  const [stretches, setStretches] = useState([]);
  const [search, setSearch] = useState('');

  const searchStretches = async () => {
    const resp = await fetchStretches(search);
    setStretches(resp);
  };

  return (
    <div className="stretches-body">
      <div className="stretches-input">
        <TextField
          id="outlined-basic"
          label="Search stretches"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="stretch-search"
        />

        <Button onClick={searchStretches} className="stretch-btn" variant="outlined">
          Search
        </Button>
      </div>
      <div className="stretches-container">
        {stretches.map((stretch, idx) => (
          <div key={idx} className="stretches-container">
            <h3>{stretch.name}</h3>
            <p>{stretch.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
