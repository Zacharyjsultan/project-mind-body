import React from 'react';
import useTodos from '../../hooks/useTodos';
import './TodoCard.css';
import { toggleComplete } from '../../services/todos';

export default function TodoCard({ todo, handleComplete, id, complete }) {
  const { todos, setTodos } = useTodos();

  return (
    <div className="todo-card">
      <input type="checkbox" onClick={() => handleComplete(id, complete)} />
      <h4>{todo}</h4>
    </div>
  );
}
