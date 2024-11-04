import React, { useEffect, useState } from 'react';
import productService from '../../services/productService';
import { useUser } from '../../context/UserContext';

const ProductDetail = ({ id }) => {
  const [product, setProduct] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    productService.getProductById(id).then(product => {
      setProduct(product);
    });
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ProductDetail;
