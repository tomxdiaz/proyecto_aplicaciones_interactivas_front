import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/Product/ProductDetail';

export const ProductDetailPage = () => {
  const { id } = useParams();
  return <ProductDetail id={id} />;
};
