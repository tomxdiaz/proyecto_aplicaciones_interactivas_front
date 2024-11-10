import React from 'react';
import MustLogin from '../components/Authenticate/MustLogin';
import { useUser } from '../context/UserContext';

export const EditProfilePage = () => {
  const { user } = useUser();

  return (
    <MustLogin user={user}>
      <></>
    </MustLogin>
  );
};
