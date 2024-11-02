import React from 'react';
import { useUser } from '../context/UserContext';
import MustLogin from '../components/Authenticate/MustLogin';

export const ProfilePage = () => {
  const { user } = useUser();

  return (
    <MustLogin user={user}>
      <></>
    </MustLogin>
  );
};
