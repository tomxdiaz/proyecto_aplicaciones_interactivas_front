import React, { useEffect, useState } from 'react';
import cartService from '../../services/cartService';
import ItemCard from './ItemCard';
import ItemGrid from './ItemGrid.styles';
import { Box } from '@mui/material';
import { useCart } from '../../context/CartContext';
import { Card } from '@mui/material';

const Cart = () => {
  const { cart, setCart } = useCart();

  const refreshCart = () => {
    cartService.getItems().then(data => {
      setCart(data);
    });
  };

  const emptyCart = () => {
    cartService.emptyCart().then(res => {
      refreshCart();
    });
  };

  const confirmCart = () => {
    alert('Tanto no avance jajajaj');
  };

  useEffect(() => {
    console.log(cart);
    refreshCart();
  }, []);

  return (
    <Box>
      <ItemGrid>
        {cart.items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </ItemGrid>
      <Card
        style={{
          display: 'flex',
          minWidth: '50%',
          alignContent: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
          alignItems: 'center',
          justifySelf: 'center'
        }}>
        <button onClick={emptyCart}>Empty Cart</button>
        <h2 style={{ marginInline: '1px' }}>Total: ${cart.totalPrice}</h2>
        <button onClick={confirmCart}>Confirm Cart</button>
      </Card>
    </Box>
  );
};

export default Cart;
