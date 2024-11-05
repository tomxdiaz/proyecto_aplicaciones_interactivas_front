import React from 'react';
import cartService from '../../services/cartService';
import ItemCard from './ItemCard';
import { Box } from '@mui/material';
import { useCart } from '../../context/CartContext';
import { Card } from '@mui/material';
import { CustomItemGrid } from './ItemGrid.styles';

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
      <CustomItemGrid>
        {cart.items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </CustomItemGrid>
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
        <h2 style={{ marginInline: '1px' }}>
          Total: ${Number(cart.totalPrice).toFixed(2)}
        </h2>
        <button onClick={confirmCart}>Confirm Cart</button>
      </Card>
    </Box>
  );
};

export default Cart;
