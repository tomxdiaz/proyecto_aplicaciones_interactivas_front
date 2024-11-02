import React, { useState } from 'react';
import { FormButton } from '../FormInput/FormButton/FormButton';
import { FormInput } from '../FormInput/FormInput';
import {
  ButtonContainer,
  FormContainer,
  ManageProductContainer
} from './ManageProduct.styles';

export const ManageProduct = ({ id }) => {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: 0.0,
    aditionalInfo: '',
    stock: 0,
    featured: false,
    category: ''
  });

  const handleChange = (prop, value) => {
    const newProd = { ...product };
    newProd[prop] = value;
    setProduct(newProd);
    console.log('prod: ', newProd);
  };

  const titles = [
    { label: 'Titulo', type: 'text', state: 'title' },
    { label: 'Descripcion', type: 'text', state: 'description' },
    { label: 'Precio', type: 'number', state: 'price' },
    { label: 'Informacion adicional', type: 'text', state: 'aditionalInfo' },
    { label: 'Stock', type: 'number', state: 'stock' },
    { label: 'Destacado', type: 'switch', state: 'featured' },
    { label: 'Categoria', type: '', state: 'category' }
  ];

  return (
    <ManageProductContainer>
      <FormContainer>
        {titles.map(({ label, state, type }) => {
          return (
            <FormInput
              key={`Manage-product-formInput-${label}`}
              label={label}
              state={state}
              type={type}
              handleChange={handleChange}
            />
          );
        })}
        <ButtonContainer>
          <FormButton text='Cancelar' />
          <FormButton text='Guardar' />
        </ButtonContainer>
      </FormContainer>
    </ManageProductContainer>
  );
};
