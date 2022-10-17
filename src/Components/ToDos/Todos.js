import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { toggleComplete, createTodo, getTodos } from '../../services/todos';
import './Todos.css';

import Button from '@mui/material/Button';
import TodoCard from '../TodoCard/TodoCard';

export default function Todos({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState('');

  const handleCreateTodo = async () => {
    await createTodo(newTodo);
    const todosArr = await getTodos();
    setTodos(todosArr);
  };

  const handleComplete = async (todo) => {
    const updatedTodo = await toggleComplete(todo);
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => (prevTodo.id === todo.id ? updatedTodo : prevTodo))
    );
  };

  return (
    <div className="todo-main">
      <h2>Todos</h2>
      <div className="todo-input">
        <TextField
          id="outlined-basic"
          label="Add a todo..."
          variant="outlined"
          className="title"
          margin="dense"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        ></TextField>
        <Button variant="outlined" className="add-todo-btn" onClick={handleCreateTodo}>
          Add todo
        </Button>
      </div>
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoCard key={todo.id} {...todo} handleComplete={handleComplete(todo)} />
        ))}
      </div>
    </div>
  );
}
