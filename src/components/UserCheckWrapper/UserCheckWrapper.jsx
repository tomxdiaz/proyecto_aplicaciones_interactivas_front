import React, { useEffect } from 'react';
import userService from '../../services/userService';
import { useUser } from '../../context/UserContext';
import wishListService from '../../services/wishListService';
import { useWishList } from '../../context/WishListContext';
import cartService from '../../services/cartService';
import { useCart } from '../../context/CartContext';

// interface UserCheckWrapperProps {
//   children: React.ReactNode;
//   isAuthenticated: boolean;
// }

const UserCheckWrapper = ({ children }) => {
  const { setUser } = useUser();
  const { setWishList } = useWishList();
  const { setCart } = useCart();

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (token) {
      try {
        userService.getUserData().then(userData => {
          setUser(userData);
        });

        wishListService.getUserWishList().then(userWishList => {
          setWishList(userWishList);
        });

        cartService.getUserCart().then(userCart => {
          setCart(userCart);
        });
      } catch (error) {
        setUser(null);
        setWishList([]);
        sessionStorage.removeItem('token');
      }
    }
  }, [setUser, setWishList, setCart]);

  return <>{children}</>;
};

export default UserCheckWrapper;
