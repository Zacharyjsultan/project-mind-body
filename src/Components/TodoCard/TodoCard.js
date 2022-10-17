import React from 'react';
import './TodoCard.css';


export default function TodoCard({ todo, handleComplete }) {

  return (
    <div className="todo-card">
      <input type="checkbox" onChange={handleComplete} />
      <h4>{todo}</h4>
    </div>
  );
}
