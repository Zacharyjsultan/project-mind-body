import React from 'react';

import './TodoCard.css';


export default function TodoCard({ todo, handleComplete, id, complete }) {

  return (
    <div className="todo-card">
      <input type="checkbox" onClick={() => handleComplete(id, complete)} />
      <h4>{todo}</h4>
    </div>
  );
}
