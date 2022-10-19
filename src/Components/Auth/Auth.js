import { useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { authUser } from '../../services/auth';
import { useUser } from '../../context/UserContext';
import Header from '../Header/Header';
import './Auth.css';
import { Button } from '@mui/material';

export default function Auth() {
  const { type } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useUser();

  const clickHandler = async () => {
    const userResp = await authUser(email, password, type);

    setUser(userResp);
    setEmail('');
    setPassword('');
  };
  // set redirect
  if (user) {
    return <Redirect to="/landing" />;
  }
  return (
    <div className="auth-body">
      <Header />
      <div className="auth-main">
        <div className="input-container">
          <div className="auth-nav">
            <NavLink to="/auth/sign-in" className="auth-link">
              <Button variant="outlined" className="auth-button">
                Sign in
              </Button>
            </NavLink>
            <NavLink to="/auth/sign-up" className="auth-link">
              <Button variant="outlined" className="auth-button">
                Sign up
              </Button>
            </NavLink>
          </div>

          <div className="input-form">
            <div className="email-container">
              <label>Email</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="password-container">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="submit-button">
            <Button
              variant="contained"
              className="auth-button"
              type="button"
              onClick={clickHandler}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
