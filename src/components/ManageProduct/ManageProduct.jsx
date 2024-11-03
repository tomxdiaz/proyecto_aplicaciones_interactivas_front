import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../pages/routes';
import { FormButton } from '../FormInput/FormButton/FormButton';
import { FormInput } from '../FormInput/FormInput';
import {
  ButtonContainer,
  FormContainer,
  ManageProductContainer
} from './ManageProduct.styles';

export const ManageProduct = ({ id = null }) => {
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
        {titles.map(({ label, state, type, defaultMsg, options }) => {
          return (
            <FormInput
              key={`Manage-product-formInput-${label}`}
              label={label}
              state={state}
              type={type}
              handleChange={handleChange}
              defaultMsg={defaultMsg}
              options={options}
            />
          );
        })}
        <ButtonContainer>
          <Link to={ROUTES.HOME.path}>
            <FormButton text='Cancelar' />
          </Link>
          <FormButton text='Guardar' />
        </ButtonContainer>
      </FormContainer>
    </ManageProductContainer>
  );
};
