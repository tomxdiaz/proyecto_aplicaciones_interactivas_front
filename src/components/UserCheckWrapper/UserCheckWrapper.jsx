import React, { useEffect } from 'react';
import userService from '../../services/userService';
import { useUser } from '../../context/UserContext';
import wishListService from '../../services/wishListService';
import { useWishList } from '../../context/WishListContext';

// interface UserCheckWrapperProps {
//   children: React.ReactNode;
//   isAuthenticated: boolean;
// }

const UserCheckWrapper = ({ children }) => {
  const { setUser, setLoadingUser } = useUser();
  const { setWishList } = useWishList();

  useEffect(() => {
    setLoadingUser(true);

    const token = sessionStorage.getItem('token');

    if (token) {
      try {
        userService.getUserData().then(userData => {
          setUser(userData);
        });

        wishListService.getUserWishList().then(userWishList => {
          setWishList(userWishList);
        });

        setLoadingUser(false);
      } catch (error) {
        setUser(null);
        setWishList([]);
        sessionStorage.removeItem('token');

        setLoadingUser(false);
      }
    }

    setLoadingUser(false);
  }, [setUser, setWishList, setLoadingUser]);

  return <>{children}</>;
};

export default UserCheckWrapper;
