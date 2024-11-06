import React from 'react';
import cartService from '../../services/cartService';
import { Box, Button, Typography } from '@mui/material';
import { useCart } from '../../context/CartContext';
import CartItemCard from './CartItemCard';
import {
  CartActions,
  CartContainer,
  CustomButton,
  CustomCartBar,
  CustomCartBox,
  CustomContainer,
  CustomLink
} from './Cart.styles';
import ROUTES, { getRoute } from '../../pages/routes';

const Cart = () => {
  const { cart, setCart } = useCart();

  const refreshCart = () => {
    cartService.getUserCart().then(data => {
      setCart(data);
    });
  };

  const emptyCart = () => {
    cartService.emptyCart().then(res => {
      refreshCart();
    });
  };

  const confirmCart = () => {
    cartService.confirmCart().then(res => {
      refreshCart();
    });
  };

  return (
    <CustomContainer>
      <CustomCartBar>
        <Typography variant='h4'>Carrito</Typography>
        <CustomButton onClick={emptyCart}>Vaciar</CustomButton>
      </CustomCartBar>
      <CustomCartBox>
        {cart.items.length ? (
          <>
            <CartContainer>
              {cart.items.map(item => (
                <CartItemCard key={item.id} item={item} />
              ))}
            </CartContainer>
            <CartActions>
              <Typography variant='h6'>
                Total: ${Number(cart.totalPrice).toFixed(2)}
              </Typography>
              <Button onClick={confirmCart}>Confirmar carrito</Button>
            </CartActions>
          </>
        ) : (
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Typography textAlign={'center'} variant='h4'>
              Oops, parece que no tienes productos en el carrito
            </Typography>
            <CustomLink to={getRoute(ROUTES.HOME)}>
              <CustomButton>
                <Typography>Explorar productos</Typography>
              </CustomButton>
            </CustomLink>
          </Box>
        )}
      </CustomCartBox>
    </CustomContainer>
  );
};

export default Cart;
