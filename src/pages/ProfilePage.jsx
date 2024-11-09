import React from 'react';
import { useUser } from '../context/UserContext';
import MustLogin from '../components/Authenticate/MustLogin';
import { Profile } from '../components/Profile/Profile';

export const ProfilePage = () => {
  const { user } = useUser();

  return (
    <MustLogin user={user}>
      <Profile user={user} />
    </MustLogin>
  );
};
