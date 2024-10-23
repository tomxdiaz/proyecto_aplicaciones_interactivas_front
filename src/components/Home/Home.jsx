import { useEffect, useState } from 'react';
import productService from '../../services/productService';
import ProductGrid from '../Product/ProductGrid';
import React from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);

  const refreshProducts = () => {
    productService.getAllProducts().then(data => {
      setProducts(data);
    });
  };

  useEffect(() => {
    refreshProducts();
  }, []);

  return <ProductGrid products={products} />;
};

export default Home;
