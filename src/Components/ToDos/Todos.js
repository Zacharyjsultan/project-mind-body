import React from 'react';
import TextField from '@mui/material/TextField';
import './Todos.css';
import TodoCard from '../TodoCard/TodoCard';

export default function Todos({ todos, loading, handleCreateTodo, description, setDescription, handleComplete, handleDelete }) {



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
