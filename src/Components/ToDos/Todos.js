import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { createTodo, getTodos } from '../../services/todos';

import Button from '@mui/material/Button';

export default function Todos({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState('');

  const handleCreateTodo = async () => {
    await createTodo(newTodo);
    const todosArr = await getTodos();
    setTodos(todosArr);
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
          return (
            <div key={todo.id}>
              <input type="checkbox"></input>
              {todo.todo}
            </div>
          );
        })}
      </div>
    </div>
  );
}
