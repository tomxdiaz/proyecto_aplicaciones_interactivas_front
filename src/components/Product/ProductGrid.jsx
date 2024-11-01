import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { CustomProductGrid } from './ProductGrid.styles';
import { useWishList } from '../../context/WishListContext';

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
