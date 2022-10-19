import { useContext, useEffect } from 'react';

import { useState } from 'react';
import { UserContext } from '../context/UserContext';

import { createTodo, getTodos } from '../services/todos';

function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [description, setDescription] = useState('');
  const { user } = useContext(UserContext);
  const owner = user.id;

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await getTodos();

        setTodos(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleCreateTodo = async (e) => {
    e.preventDefault();
    
    await createTodo(description);
    const todosArr = await getTodos();

    const userTodos = todosArr.filter((todo) => owner === todo.user_id);

    setTodos(userTodos);
    setDescription('');
  };

  return { todos, loading, error, setTodos, handleCreateTodo, description, setDescription };
}

export default useTodos;
