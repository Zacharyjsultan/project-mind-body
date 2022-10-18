import React from 'react';
import useTodos from '../../hooks/useTodos';
import './TodoCard.css';
import { toggleComplete } from '../../services/todos';

export default function TodoCard({ todo }) {
  const { setTodos } = useTodos();

  const handleComplete = async (todo) => {
    const updatedTodo = await toggleComplete(todo);
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => (prevTodo.id === todo.id ? updatedTodo : prevTodo))
    );
  };
  //eslint-disable-next-line no-console
  console.log(handleComplete);


import './TodoCard.css';


export default function TodoCard({ description, handleComplete, id, complete }) {
  return (
    <div className="todo-card">
      <input type="checkbox" onClick={() => handleComplete(id, complete)} />
      <h4>{description}</h4>
    </div>
  );
}


