import React, { useState } from 'react';
import { Typography, Box, CardActionArea, IconButton } from '@mui/material';
import {
  CustomCard,
  CustomCardImage,
  CustomCardContent,
  QuantityButton,
  QuantityBox
} from './ItemCard.styles';
import { COLORS } from '../../utils/constants';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import cartService from '../../services/cartService';
import { useCart } from '../../context/CartContext';

const ItemCard = ({ item }) => {
  const { setCart } = useCart();
  const { product } = item;

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
    <CustomCard>
      {/* <CardActionArea> */}
      <CustomCardContent>
        <CustomCardImage image={product.images[0]} />
        <Box
          style={{
            display: 'flex',
            gap: '20px',
            margin: '0 20px',
            minWidth: '500px'
          }}>
          <Typography gutterBottom variant='h6' sx={{ color: 'text.primary' }}>
            {product.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {product.description}
          </Typography>
          <Typography variant='h6'>${product.price}</Typography>
        </Box>
        <QuantityBox>
          <QuantityButton
            onMouseDown={e => e.stopPropagation()}
            onClick={removeProductFromCart}>
            {'-'}
          </QuantityButton>
          <Typography>{item.quantity}</Typography>
          <QuantityButton
            onMouseDown={e => e.stopPropagation()}
            onClick={addProductToCart}>
            {'+'}
          </QuantityButton>
        </QuantityBox>
        <Box style={{ minWidth: '100px', justifyItems: 'center' }}>
          <Typography>Sub Total</Typography>
          <Typography variant='h6'>
            ${(product.price * item.quantity).toFixed(2)}
          </Typography>
        </Box>
        <IconButton
          onMouseDown={e => e.stopPropagation()}
          onClick={removeItemFromCart}>
          <DeleteForeverIcon style={{ fill: COLORS.red }} fontSize='large' />
        </IconButton>
        {/* <IconButton onMouseDown={e => e.stopPropagation()} onClick={modifyItem}>
          <CheckCircleIcon style={{ fill: COLORS.green }} fontSize='large' />
        </IconButton> */}
      </CustomCardContent>
      {/* </CardActionArea> */}
    </CustomCard>
  );
};
export default ItemCard;
