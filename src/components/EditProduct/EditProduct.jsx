import React, { useState } from 'react';
import { FormButton } from '../FormInput/FormButton/FormButton';
import { TextInput } from '../FormInput/TextInput/TextInput';
import {
  ButtonContainer,
  FormContainer,
  ManageProductContainer
} from './EditProduct.styles';
import { Key } from '@mui/icons-material';
import { FormInput } from '../FormInput/FormInput';

export const ManageProduct = () => {
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
  };

  const titles = [
    { label: 'Titulo', type: 'text', state: 'title' },
    { label: 'Descripcion', type: 'text', state: 'description' },
    { label: 'Precio', type: 'number', state: 'price' },
    { label: 'Informacion adicional', type: 'text', state: 'aditionalInfo' },
    { label: 'Stock', type: 'number', state: 'stock' },
    { label: 'Destacado', type: 'chip', state: 'featured' },
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
