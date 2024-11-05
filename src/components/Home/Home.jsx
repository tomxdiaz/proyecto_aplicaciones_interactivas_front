import React from 'react';
import { useEffect, useState } from 'react';
import ProductGrid from '../Product/ProductGrid';
import productService from '../../services/productService';

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
