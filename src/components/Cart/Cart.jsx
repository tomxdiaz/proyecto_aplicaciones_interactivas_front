import React, { useEffect, useState } from 'react';
import cartService from '../../services/cartService';
import ItemCard from './ItemCard';
import ItemGrid from './ItemGrid.styles';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cart, setCart } = useCart();

  const refreshCart = () => {
    cartService.getItems().then(data => {
      setCart(data);
    });
  };
  
  useEffect(() => {
    console.log(cart);
    refreshCart();
  }, []);

  return (
    <ItemGrid>
      {cart.items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </ItemGrid>
  );
};

export default Cart;
