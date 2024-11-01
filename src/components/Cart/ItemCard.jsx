import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Button } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      {/* Imagen del producto */}
      <CardMedia
        component="img"
        sx={{ width: 100, height: 100 }}
        image={item.images.length ? item.images[0] : '/placeholder.jpg'} // Ruta de placeholder si no hay imagen
        alt={item.title}
      />
      
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography variant="h6">{item.title}</Typography>
        <Typography variant="body2" color="text.secondary">{item.description}</Typography>
        <Typography variant="body2" color="text.secondary">Precio: ${item.price}</Typography>
        <Typography variant="body2" color="text.secondary">Stock: {item.stock}</Typography>
      </CardContent>

      {/* Controles de cantidad */}
      <div>
        <IconButton color="primary">
          <Add />
        </IconButton>
        <Typography variant="body2" display="inline">{item.quantity}</Typography>
        <IconButton color="primary">
          <Remove />
        </IconButton>
      </div>

      {/* Botón de eliminar */}
      <IconButton color="secondary">
        <Delete />
      </IconButton>
    </Card>
  );
};

export default ItemCard;
