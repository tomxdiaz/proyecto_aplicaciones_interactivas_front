import React from 'react';
import MustLogin from '../components/Authenticate/MustLogin';
import { useUser } from '../context/UserContext';
import { EditProfile } from '../components/EditProfile/EditProfile';

export const EditProfilePage = () => {
  const { user } = useUser();

  return (
    <MustLogin user={user}>
      <EditProfile user={user} />
    </MustLogin>
  );
};
