import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './Productivity.css';
import Todos from '../ToDos/Todos';

export default function Productivity() {
  const { user } = useContext(UserContext);

  return (
    <div className="productivity-main">
      <div className="greeting">
        <div>Hello {user.email}</div>
      </div>
      <div className="todo-section">
        <Todos />
      </div>
    </div>
  );
}
