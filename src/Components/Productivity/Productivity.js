import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './Productivity.css';
import Todos from '../ToDos/Todos';
import useTodos from '../../hooks/useTodos';
import Pomodoro from '../Pomodoro/Pomodoro';
import { Button } from '@mui/material';
import { signOut } from '../../services/auth';
import { Redirect } from 'react-router-dom';
import useProfile from '../../hooks/useProfile';

export default function Productivity() {
  const { setUser } = useContext(UserContext);
  const {
    todos,
    setTodos,
    loading,
    handleCreateTodo,
    description,
    setDescription,
    handleComplete,
    handleDelete,
  } = useTodos();
  const { profile } = useProfile();

  const handleLogout = async () => {
    await signOut();
    setUser(null);
    return <Redirect to="/auth/sign-in" />;
  };

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="productivity-main">
      <div className="greeting">
        <div>Hello {profile.full_name}</div>
      </div>
      <div className="todo-section">
        <Todos
          todos={todos}
          setTodos={setTodos}
          loading={loading}
          handleCreateTodo={handleCreateTodo}
          description={description}
          setDescription={setDescription}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
      </div>
      <div className="pomodoro-section">
        <Pomodoro />
      </div>
      {/* <div>
        <audio controls autoPlay>
          <source src="rain.mp3" type="audio/mp3" />
        </audio>
      </div> */}
      <div className="signout">
        <img src={require('./logout.png')} className="logout-icon" />
        <Button variant="outlined" className="signout-btn" onClick={handleLogout}>
          Signout
        </Button>
      </div>
    </div>
  );
}
