import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ROUTES, { getRoute } from '../../pages/routes';
import { FormButton } from '../FormInput/FormButton/FormButton';
import { FormInput } from '../FormInput/FormInput';
import {
  ButtonContainer,
  FormContainer,
  ManageProductContainer
} from './ManageProduct.styles';
import { CustomCardImage } from '../Product/ProductCard.styles';
import { Box, Button } from '@mui/material';

export const ManageProduct = ({ id = null }) => {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: 0.0,
    aditionalInfo: '',
    stock: 0,
    featured: false,
    category: '',
    images: []
  });

  const handleChange = (prop, value) => {
    const newProd = { ...product };
    newProd[prop] = value;
    setProduct(newProd);
  };
  useEffect(() => console.log('prod: ', product), [product]);

  const titles = [
    { label: 'Imagen', type: 'image', state: 'image', images: product.images },
    { label: 'Titulo', state: 'title' },
    { label: 'Descripcion', state: 'description' },
    { label: 'Precio', type: 'number', state: 'price' },
    { label: 'Informacion adicional', state: 'aditionalInfo' },
    { label: 'Stock', type: 'number', state: 'stock' },
    { label: 'Destacado', type: 'switch', state: 'featured' },
    {
      label: 'Categoria',
      type: 'select',
      state: 'category',
      options: ['a', 'b', 'c'],
      defaultMsg: 'No se encontraron categorías'
    }
  ];

  return (
    <ManageProductContainer>
      <FormContainer>
        {titles.map(({ label, state, type, defaultMsg, options, images }) => {
          return (
            <FormInput
              key={`Manage-product-formInput-${label}`}
              label={label}
              state={state}
              type={type}
              handleChange={handleChange}
              defaultMsg={defaultMsg}
              options={options}
              images={images}
            />
          );
        })}
        <ButtonContainer>
          <Link to={getRoute(ROUTES.HOME)}>
            <FormButton text='Cancelar' />
          </Link>
          <FormButton text='Guardar' />
        </ButtonContainer>
      </FormContainer>
    </ManageProductContainer>
  );
};
