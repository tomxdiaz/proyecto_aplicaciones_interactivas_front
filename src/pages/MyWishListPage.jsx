import React, { useEffect } from 'react';
import MyWishList from '../components/WishList/MyWishList';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import ROUTES from './routes';

export const MyWishListPage = () => {
  const { user, loadingUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(loadingUser);
    // if (!user && !loadingUser) {
    //   navigate(ROUTES.LOGIN.path);
    // }
  });

  return <MyWishList />;
};
