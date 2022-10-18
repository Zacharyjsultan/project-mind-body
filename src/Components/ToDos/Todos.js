import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { toggleComplete, createTodo, getTodos, deleteTodo } from '../../services/todos';
import './Todos.css';

// import Button from '@mui/material/Button';
import TodoCard from '../TodoCard/TodoCard';
// import useTodos from '../../hooks/useTodos';

export default function Todos({ todos, setTodos }) {
  const [description, setDescription] = useState('');

  const handleCreateTodo = async () => {
    await createTodo(description);
    const todosArr = await getTodos();
    setTodos(todosArr);
  };

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

  return (
    <div className="todo-main">
      <h2>Todos</h2>
      <form onSubmit={handleCreateTodo}>
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
          {/* <Button variant="outlined" className="add-todo-btn" >
            Add todo
          </Button> */}
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
