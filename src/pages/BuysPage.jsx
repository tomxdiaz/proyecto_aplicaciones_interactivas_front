import React from 'react';
import Buys from '../components/Buys/Buys';
import MustLogin from '../components/Authenticate/MustLogin';
import { useUser } from '../context/UserContext';

export const BuysPage = () => {
  const { user } = useUser();
  return (
    <MustLogin user={user}>
      <Buys />
    </MustLogin>
  );
};
