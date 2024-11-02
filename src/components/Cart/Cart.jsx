import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import cartService from '../../services/cartService';
import ItemCard from './ItemCard';
import ProductCard from '../Product/ProductCard';
import ItemGrid from './ItemGrid.styles';

const Cart = () => {
  const [items, setItems] = useState([]);

  const refreshItems = () => {
    cartService.getItems().then(data => {
      setItems(data.items);
    });
  };

  useEffect(() => {
    refreshItems();
      console.log(items);
  }, []);

  return (
    <ItemGrid>
        {items.map(item => (
            <ItemCard key={item.id} item={item} />
        ))}
    </ItemGrid>
  );
};

export default Cart;

