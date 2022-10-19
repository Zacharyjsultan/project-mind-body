import { useContext, useEffect } from 'react';

import { useState } from 'react';
import { UserContext } from '../context/UserContext';

import { createTodo, deleteTodo, getTodos, toggleComplete } from '../services/todos';

function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [description, setDescription] = useState('');
  const { user } = useContext(UserContext);

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

    const userTodos = todosArr.filter((todo) => user.id === todo.user_id);

    setTodos(userTodos);
    setDescription('');
  };

  const handleComplete = async (id, complete) => {
    const updatedTodo = await toggleComplete(id, complete);
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => (prevTodo.id === id ? updatedTodo : prevTodo))
    );
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(todos);
      setTodos(await getTodos());
      setDescription('');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

  return {
    todos,
    loading,
    error,
    setTodos,
    handleCreateTodo,
    description,
    setDescription,
    handleComplete,
    handleDelete,
  };
}

export default useTodos;
