import React, { useState } from 'react';
import {
  Typography,
  Button,
  Container,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  IconButton,
  CardContent
} from '@mui/material';
import { CustomCard , CustomCardImage , CustomCardContent} from './ItemCard.styles';

const ItemCard = ({ item }) => {
  console.log(item);
  return (
    <CustomCard>
      <CardActionArea>
        <CustomCardContent>
          <CustomCardImage image={item.product.images[0]} />
          <div style={{ margin: '0 20px', minWidth: '600px' }}>
            <Typography gutterBottom variant='h6' sx={{ color: 'text.primary' }}>
              {item.product.title}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {item.product.description}
            </Typography>
          </div>
          <Button>Agregar</Button>
          <Button>Restar</Button>
          <Button>Eliminar</Button>
        </CustomCardContent>
      </CardActionArea>
    </CustomCard>
  );
};
export default ItemCard;
