import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { createTodo } from '../../services/todos';
import useTodos from '../../hooks/useTodos';
import Button from '@mui/material/Button';

export default function Todos() {
  const { todos } = useTodos();
  const [newTodo, setNewTodo] = useState('');

  const handleCreateTodo = async () => {
    await createTodo(newTodo);
  };

  return (
    <div>
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
        <Button variant="outlined" onClick={handleCreateTodo}>
          Add todo
        </Button>
      </div>
      <div className="todo-list">
        {todos.map((todo) => {
          return <input key={todo.id} type="radio" name={todo.todo}></input>;
        })}
      </div>
    </div>
  );
}
