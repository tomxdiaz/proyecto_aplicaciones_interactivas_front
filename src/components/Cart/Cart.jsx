import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import cartService from '../../services/cartService';
import ItemCard from './ItemCard';

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const data = await cartService.getCart();
        console.log(data);
        setItems(data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    fetchCartItems();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Carrito de Compras</Typography>
      console.log(items)
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Cart;
