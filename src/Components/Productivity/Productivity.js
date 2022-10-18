import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './Productivity.css';
import Todos from '../ToDos/Todos';
import useTodos from '../../hooks/useTodos';
import Pomodoro from '../Pomodoro/Pomodoro';
import { Button } from '@mui/material';

export default function Productivity() {
  const { user } = useContext(UserContext);
  const { todos, setTodos } = useTodos();

  return (
    <div className="productivity-main">
      <div className="greeting">
        <div>Hello {user.email}</div>
      </div>
      <div className="todo-section">
        <Todos todos={todos} setTodos={setTodos} />
      </div>
      <div className="pomodoro-section">
        <Pomodoro />
      </div>
      <div className="signout">
        <img src={require('./logout.png')} className="logout-icon" />
        <Button variant="outlined" className="signout-btn">
          Signout
        </Button>
      </div>
    </div>
  );
}
