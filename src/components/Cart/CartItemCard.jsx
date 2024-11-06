import React from 'react';
import { Typography, Box, IconButton, Button } from '@mui/material';
import { COLORS } from '../../utils/constants';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import cartService from '../../services/cartService';
import { useCart } from '../../context/CartContext';
import ROUTES, { getRoute } from '../../pages/routes';
import { useNavigate } from 'react-router-dom';
import {
  ActionsBox,
  CustomCard,
  CustomCardActionArea,
  CustomCardContent,
  CustomCardImage,
  DeleteButton,
  QuantityBox
} from './CartItemCard.styles';

const ItemCard = ({ item }) => {
  const { setCart } = useCart();
  const { product } = item;

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

  const goToProductDetail = () => {
    navigate(getRoute(ROUTES.PRODUCTDETAIL, { id: product.id }));
  };

  return (
    <CustomCard>
      <CustomCardActionArea onClick={goToProductDetail}>
        <CustomCardImage image={product.images[0]} />
        <CustomCardContent>
          <Typography variant='h6'>{product.title}</Typography>
          <Typography>{product.description}</Typography>
          <Typography variant='h5'>${product.price}</Typography>
        </CustomCardContent>
      </CustomCardActionArea>
      <ActionsBox>
        <DeleteButton
          onMouseDown={e => e.stopPropagation()}
          onClick={removeItemFromCart}>
          <DeleteForeverIcon style={{ fill: COLORS.red }} fontSize='large' />
        </DeleteButton>
        <QuantityBox>
          <Button
            onMouseDown={e => e.stopPropagation()}
            onClick={removeProductFromCart}>
            {'-'}
          </Button>
          <Typography variant='h6'>{item.quantity}</Typography>
          <Button onMouseDown={e => e.stopPropagation()} onClick={addProductToCart}>
            {'+'}
          </Button>
        </QuantityBox>
        <Box style={{ minWidth: '100px', justifyItems: 'center' }}>
          <Typography>Sub Total</Typography>
          <Typography variant='h6'>
            ${(product.price * item.quantity).toFixed(2)}
          </Typography>
        </Box>
      </ActionsBox>
    </CustomCard>
  );
};
export default ItemCard;
