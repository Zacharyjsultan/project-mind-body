import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { authUser } from '../../services/auth';
import { useUser } from '../../context/UserContext';
import Header from '../Header/Header';
import './Auth.css';
import { Button, TextField } from '@mui/material';
import { createProfile } from '../../services/profiles';
import { useHistory } from 'react-router-dom';

export default function Auth() {
  const { type } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useUser();
  const [fullName, setfullName] = useState('');
  const [username, setUsername] = useState('');
  const history = useHistory();

  const clickHandler = async () => {
    if (type === 'sign-up') {
      const userResp = await authUser(email, password, type);
      setUser(userResp);
      setEmail('');
      setPassword('');
      history.push('/auth/create-profile');
    } else {
      const userResp = await authUser(email, password, type);
      setUser(userResp);
      setEmail('');
      setPassword('');
      history.push('/landing');
    }
  };

  const handleProfile = async () => {
    await createProfile(fullName, username, user.id);
    history.push('/landing');
  };

  // if (user) {
  //   return <Redirect to="/landing" />;
  // }

  if (type === 'create-profile') {
    return (
      <div className="auth-body">
        <div className="auth-main">
          <div className="input-container">
            <div className="input-form">
              <div className="email-container">
                <TextField
                  // id="outlined-basic"
                  label="Full name"
                  variant="outlined"
                  value={fullName}
                  onChange={(e) => setfullName(e.target.value)}
                />
              </div>

              <div className="password-container">
                <TextField
                  // id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="submit-button">
              <Button
                variant="contained"
                className="auth-button"
                type="button"
                onClick={handleProfile}
              >
                Create Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-body">
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
              <TextField
                // id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="password-container">
              <TextField
                // id="outlined-basic"
                label="Password"
                variant="outlined"
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
