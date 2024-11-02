import React from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import MustLogin from '../components/Authenticate/MustLogin';

export const EditProductPage = () => {
  const { id } = useParams();
  const { user } = useUser();

  return (
    <MustLogin user={user}>
      {/* <EditProduct /> */}
      <>ID: {id}</>
    </MustLogin>
  );
};
