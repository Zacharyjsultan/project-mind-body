import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './Productivity.css';
import Todos from '../ToDos/Todos';
import useTodos from '../../hooks/useTodos';

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
    </div>
  );
}
