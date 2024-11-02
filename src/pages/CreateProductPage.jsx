import React from 'react';
import { useUser } from '../context/UserContext';
import MustLogin from '../components/Authenticate/MustLogin';
import { ManageProduct } from '../components/ManageProduct/ManageProduct';

export const CreateProductPage = () => {
  const { user } = useUser();

  return (
    <MustLogin user={user}>
      <ManageProduct />
    </MustLogin>
  );
};
