import React from 'react';
import { useUser } from '../context/UserContext';
import MustLogin from '../components/Authenticate/MustLogin';
import LastSearches from '../components/Searches/LastSearches';

export const LastSearchesPage = () => {
  const { user } = useUser();

  return (
    <MustLogin user={user}>
      <LastSearches />
    </MustLogin>
  );
};
