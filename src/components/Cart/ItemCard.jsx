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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import cartService from '../../services/cartService';
import { useCart } from '../../context/CartContext';

const ItemCard = ({ item }) => {
  const { setCart } = useCart();
  const [count, setCount] = useState(item.quantity);
  const { product } = item;

  const refreshCart = () => {
    cartService.getItems().then(data => {
      setCart(data);
    });
  };

  const handleIncrement = () => {
    if (count === product.stock) {
      return;
    }
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };

  const removeItemFromCart = () => {
    cartService.removeItemFromCart(product).then(res => {
      refreshCart();
    });
  };

  const modifyItem = () => {
    const itemData = {
      product: product,
      quantity: count
    };
    cartService.modifyItem(itemData);
  };

  console.log(item);
  return (
    <CustomCard>
      <CardActionArea>
        <CustomCardContent>
          <CustomCardImage image={product.images[0]} />
          <Box style={{ margin: '0 20px', minWidth: '500px' }}>
            <Typography gutterBottom variant='h6' sx={{ color: 'text.primary' }}>
              {product.title}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {product.description}
            </Typography>
            <Typography variant='h6'>${product.price}</Typography>
          </Box>
          <QuantityBox>
            <QuantityButton onClick={handleDecrement}>-</QuantityButton>
            <QuantityButton>{count}</QuantityButton>
            <QuantityButton onClick={handleIncrement}>+</QuantityButton>
          </QuantityBox>
          <Box style={{ minWidth: '100px', justifyItems: 'center' }}>
            <Typography>subTotal</Typography>
            <Typography variant='h6'>
              ${(product.price * count).toFixed(2)}
            </Typography>
          </Box>
          <IconButton
            onMouseDown={e => e.stopPropagation()}
            onClick={removeItemFromCart}>
            <DeleteForeverIcon style={{ fill: COLORS.red }} fontSize='large' />
          </IconButton>
          <IconButton onMouseDown={e => e.stopPropagation()} onClick={modifyItem}>
            <CheckCircleIcon style={{ fill: COLORS.green }} fontSize='large' />
          </IconButton>
        </CustomCardContent>
      </CardActionArea>
    </CustomCard>
  );
};
export default ItemCard;
