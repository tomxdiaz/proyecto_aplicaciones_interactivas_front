import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import cartService from '../../services/cartService';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ActionsBox, QuantityBox } from './Cart.styles';
import MyListItem from '../CustomList/MyListItem';

const ItemCard = ({ cartItem }) => {
  const { setCart } = useCart();
  const { product } = cartItem;

  const navigate = useNavigate();

  const refreshCart = () => {
    cartService.getUserCart().then(data => {
      setCart(data);
    });
  };

  const addProductToCart = () => {
    cartService.addProductToCart(product).then(res => {
      refreshCart();
    });
  };

  const removeProductFromCart = () => {
    cartService.removeProductFromCart(product).then(res => {
      refreshCart();
    });
  };

  const removeItemFromCart = () => {
    cartService.removeItemFromCart(product).then(res => {
      refreshCart();
    });
  };

  return (
    <MyListItem product={product} onRemove={removeItemFromCart}>
      <ActionsBox>
        <Box>
          <Typography>Sub Total</Typography>
          <Typography variant='h6'>
            ${(product.price * cartItem.quantity).toFixed(2)}
          </Typography>
        </Box>
        <QuantityBox
          style={{
            border: cartItem.quantity > product.stock ? '1px solid red' : '',
            borderRadius: '5px'
          }}>
          <Button
            style={{
              minWidth: '40px',
              color: cartItem.quantity > product.stock ? 'red' : ''
            }}
            onMouseDown={e => e.stopPropagation()}
            onClick={e => {
              e.stopPropagation();
              removeProductFromCart();
            }}>
            {'-'}
          </Button>
          <Typography
            variant='h6'
            style={{
              color: cartItem.quantity > product.stock ? 'red' : 'black'
            }}>
            {cartItem.quantity}
          </Typography>
          <Button
            style={{
              minWidth: '40px',
              color: cartItem.quantity > product.stock ? 'red' : ''
            }}
            onMouseDown={e => e.stopPropagation()}
            onClick={e => {
              e.stopPropagation();
              addProductToCart();
            }}>
            {'+'}
          </Button>
        </QuantityBox>
      </ActionsBox>
    </MyListItem>
  );
};
export default ItemCard;
