import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { toggleComplete, getTodos, deleteTodo } from '../../services/todos';
import './Todos.css';
import TodoCard from '../TodoCard/TodoCard';

export default function Todos({ todos, setTodos, loading, handleCreateTodo, description, setDescription }) {

  const handleComplete = async (id, complete) => {
    const updatedTodo = await toggleComplete(id, complete);
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => (prevTodo.id === id ? updatedTodo : prevTodo))
    );
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(todos);
      setTodos(await getTodos());
      setDescription('');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="todo-main">
      <h2>Todos</h2>
      <form onSubmit={(e)=>handleCreateTodo(e)}>
        <div className="todo-input">
          <TextField
            id="outlined-basic"
            label="Add a todo..."
            variant="outlined"
            className="title"
            margin="dense"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></TextField>
        </div>
      </form>

      <div className="todo-list">
        {todos.map((todo) => (
          <TodoCard key={todo.id} {...todo} handleComplete={handleComplete} />
        ))}
      </div>
      <div>
        {todos.some((todo) => todo.complete) && (
          <button className="tasks-delete" onClick={handleDelete}>
            DELETE
          </button>
        )}
      </div>
    </div>
  );
}
