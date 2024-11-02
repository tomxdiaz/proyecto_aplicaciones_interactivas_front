import React from 'react';
import MyWishList from '../components/WishList/MyWishList';
import { useUser } from '../context/UserContext';
import MustLogin from '../components/Authenticate/MustLogin';

export const MyWishListPage = () => {
  const { user } = useUser();

  return (
    <MustLogin user={user}>
      <MyWishList />
    </MustLogin>
  );
};
