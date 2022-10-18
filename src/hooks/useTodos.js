import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../context/UserContext';

import { getTodos } from '../services/todos';

function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useContext(UserContext);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await getTodos();
        console.log('data', data);
        setTodos(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    loadData();
  }, []);
  return { todos, loading, error, setTodos };
}

export default useTodos;
