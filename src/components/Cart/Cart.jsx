import React from 'react';
import cartService from '../../services/cartService';
import { Box } from '@mui/material';
import { useCart } from '../../context/CartContext';
import CartItemCard from './CartItemCard';

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
    <Box>
      <Box>
        {cart.items.map(item => (
          <CartItemCard key={item.id} item={item} />
        ))}
      </Box>
      <Box>
        <button onClick={emptyCart}>Empty Cart</button>
        <h2>Total: ${Number(cart.totalPrice).toFixed(2)}</h2>
        <button onClick={confirmCart}>Confirm Cart</button>
      </Box>
    </Box>
  );
};

export default Cart;
