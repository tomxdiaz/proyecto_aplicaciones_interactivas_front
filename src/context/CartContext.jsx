import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [] });

  return (
    <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
