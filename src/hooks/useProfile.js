import { useContext, useEffect } from 'react';
import { useState } from 'react';

import { UserContext } from '../context/UserContext';
import { getProfile } from '../services/profiles';

function useProfile() {
  const [profile, setProfile] = useState({});
  const [profLoading, setProfLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useContext(UserContext);


  useEffect(() => {
    const loadData = async () => {
      setProfLoading(true);
      try {
        const data = await getProfile(user.id);

        setProfile(data);
        setProfLoading(false);
      } catch (e) {
        setError(e.message);
        setProfLoading(false);
      }
    };
    loadData();
  }, [user.id]);
  return { profile, setProfile, profLoading, error };
}

export default useProfile;
