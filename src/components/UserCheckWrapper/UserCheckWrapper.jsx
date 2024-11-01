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
  const { setUser } = useUser();
  const { setWishList } = useWishList();

  useEffect(() => {
    if (sessionStorage.getItem('token') != 'null') {
      try {
        userService.getUserData().then(userData => {
          setUser(userData);
        });

        wishListService.getUserWishList().then(userWishList => {
          setWishList(userWishList);
        });
      } catch (error) {
        setUser(null);
        setWishList([]);
        localStorage.setItem('token', null);
      }
    }
  }, [setUser, setWishList]);

  return <>{children}</>;
};

export default UserCheckWrapper;
