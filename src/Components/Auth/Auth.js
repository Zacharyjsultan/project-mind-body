import { useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { authUser } from '../../services/auth';
import { useUser } from '../../context/UserContext';
import Header from '../Header/Header';

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
    return <Redirect to="/home" />;
  }
  return (
    <div>
      <Header />
      <NavLink to="/auth/sign-in">
        <button>Sign in</button>
      </NavLink>
      <NavLink to="/auth/sign-up">
        <button>Sign up</button>
      </NavLink>
      <div>
        <div className="form-controls">
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-controls">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="auth-button" type="button" onClick={clickHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}
