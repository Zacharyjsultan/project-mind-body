import { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { authUser, getUser } from '../../services/auth';

export default function Auth() {
  const { type } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, setUser } = getUser();

  const clickHandler = async () => {
    const userResp = await authUser(email, password, type);

    setUser(userResp);
    setEmail('');
    setPassword('');
  };
  // set redirect
  if (user) {
    return <Redirect to="/todos" />;
  }
  return (
    <div>
      <div className="form-controls">
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-controls">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="auth-button">Submit</button>
    </div>
  );
}
