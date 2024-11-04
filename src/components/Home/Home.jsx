import React from 'react';
import { useEffect, useState } from 'react';
import ProductGrid from '../Product/ProductGrid';
import productService from '../../services/productService';
import { useCart } from '../../context/CartContext';
import { useUser } from '../../context/UserContext';
import cartService from '../../services/cartService';
const Home = () => {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useCart();
  const { user } = useUser();

  const refreshProducts = () => {
    productService.getAllProducts().then(data => {
      setProducts(data);
    });
  };

  const refreshCart = () => {
    cartService.getItems().then(data => {
      setCart(data);
    });
  };

  useEffect(() => {
    refreshProducts();
    // si hago if (User) en el F5 no carga
    if (sessionStorage.getItem('token')) {
      refreshCart();
    }
  }, []);

  return <ProductGrid products={products} />;
};

export default Home;
