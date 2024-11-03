import React from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import MustLogin from '../components/Authenticate/MustLogin';
import { ManageProduct } from '../components/ManageProduct/ManageProduct';

export const EditProductPage = () => {
  const { id } = useParams();
  const { user } = useUser();

  return (
    <MustLogin user={user}>
      <ManageProduct id={id} />
    </MustLogin>
  );
};
