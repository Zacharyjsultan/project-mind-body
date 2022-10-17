import { useEffect } from 'react';
import { useState } from 'react';

import { getTodo } from '../services/todos';

function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async (id) => {
      setLoading(true);
      try {
        const data = await getTodo(id);

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
