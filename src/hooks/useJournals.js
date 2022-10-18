import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../context/UserContext';
import { getJournals } from '../services/journal';

export default function useJournals() {
  const [journals, setJournals] = useState([]);
  const { user } = useContext(UserContext);
  
  useEffect(() => {
    const fetchJournals = async () => {
      const data = await getJournals(user.id);
      setJournals(data);
    };
    fetchJournals();
  }, [user.id]);

  return { journals, setJournals };
}
