import React from 'react';
import cartService from '../../services/cartService';
import { Box, Button, Typography } from '@mui/material';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import { CustomCartActions } from './Cart.styles';
import CustomEmptyListMessage from '../CustomList/CustomEmptyListMessage';
import MyList from '../CustomList/MyList';
import { ListContainer } from '../CustomList/MyList.styles';

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
    <ListContainer>
      {cart.items.length ? (
        <>
          <MyList title={'Carrito'} onEmpty={emptyCart}>
            {cart.items.map(cartItem => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </MyList>
          <CustomCartActions>
            <Typography variant='h6'>
              Total: ${Number(cart.totalPrice).toFixed(2)}
            </Typography>
            <Button onClick={confirmCart}>Confirmar carrito</Button>
          </CustomCartActions>
        </>
      ) : (
        <CustomEmptyListMessage
          message={'Oops, parece que no tienes items en el carrito'}
          buttonMessage={'Explorar productos'}
        />
      )}
    </ListContainer>
  );
};

export default Cart;
