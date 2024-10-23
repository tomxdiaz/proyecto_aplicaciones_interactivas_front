import React from 'react';
import ProductCard from './ProductCard';
import { CustomProductGrid } from './ProductGrid.styles';

const ProductGrid = ({ products }) => {
  return (
    <CustomProductGrid>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </CustomProductGrid>
  );
};

export default ProductGrid;
