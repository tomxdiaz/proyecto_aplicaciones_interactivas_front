import React from 'react';
import Cart from '../components/Cart/Cart';
import { useUser } from '../context/UserContext';
import MustLogin from '../components/Authenticate/MustLogin';

export const CartPage = () => {
  const { user } = useUser();

  return (
    <MustLogin user={user}>
      <Cart />
    </MustLogin>
  );
};
