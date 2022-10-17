import React from 'react';
import useTodos from '../../hooks/useTodos';
import './TodoCard.css';
import { toggleComplete } from '../../services/todos';

export default function TodoCard({ todo, id }) {
  const { todos, setTodos } = useTodos();

  const handleComplete = async () => {
    const updatedTodo = await toggleComplete(todo);
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => (prevTodo.id === id ? updatedTodo : prevTodo))
    );
  };

  return (
    <div className="todo-card">
      <input type="checkbox" onChange={handleComplete} />
      <h4>{todo}</h4>
    </div>
  );
}
