import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export default function Header() {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    
  }

  return (
    <div>
      <h2>HEADER</h2>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
