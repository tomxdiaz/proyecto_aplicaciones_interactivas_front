import React, { useEffect } from 'react';
import userService from '../../services/userService';
import { useUser } from '../../context/UserContext';
import wishListService from '../../services/wishListService';
import { useWishList } from '../../context/WishListContext';
import cartService from '../../services/cartService';
import { useCart } from '../../context/CartContext';
import { useSnackbar } from '../../context/SnackbarContext';

// interface UserCheckWrapperProps {
//   children: React.ReactNode;
//   isAuthenticated: boolean;
// }

const UserCheckWrapper = ({ children }) => {
  const { setUser } = useUser();
  const { setWishList } = useWishList();
  const { setCart } = useCart();
  const { openSnackbar } = useSnackbar();

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
        setCart({ items: [] });
        sessionStorage.removeItem('token');
        openSnackbar('Error al obtener el usuario y sus datos', 'error');
      }
    }
  }, [setUser, setWishList, setCart, openSnackbar]);

  return <>{children}</>;
};

export default UserCheckWrapper;
