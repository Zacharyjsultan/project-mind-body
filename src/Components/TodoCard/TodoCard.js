import React from 'react';
import useTodos from '../../hooks/useTodos';
import './TodoCard.css';
import { toggleComplete } from '../../services/todos';

export default function TodoCard({ todo }) {
  const { todos, setTodos } = useTodos();

  const handleComplete = async (todo) => {
    const updatedTodo = await toggleComplete(todo);
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => (prevTodo.id === todo.id ? updatedTodo : prevTodo))
    );
  };

  return (
    <div className="todo-card">
      <input type="checkbox" />
      <h4>{todo}</h4>
    </div>
  );
}
