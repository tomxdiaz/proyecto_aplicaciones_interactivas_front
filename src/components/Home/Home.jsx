import React from 'react';
import { useEffect, useState } from 'react';
import ProductGrid from '../Product/ProductGrid';
import productService from '../../services/productService';
import { useSnackbar } from '../../context/SnackbarContext';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { openSnackbar } = useSnackbar();

  useEffect(() => {
    const refreshProducts = () => {
      productService
        .getAllProducts()
        .then(data => {
          setProducts(data);
        })
        .catch(e => {
          openSnackbar('Error al refrescar los productos', 'error');
        });
    };

    refreshProducts();
  }, [openSnackbar]);

  return <ProductGrid products={products} />;
};

export default Home;
