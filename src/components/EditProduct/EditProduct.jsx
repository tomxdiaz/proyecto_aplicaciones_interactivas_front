import React from 'react';
import {
  ButtonContainer,
  EditProductContainer,
  FormContainer
} from './EditProduct.styles';
import { TextInput } from '../FormInput/TextInput/TextInput';
import { FormButton } from '../FormInput/FormButton/FormButton';

export const EditProduct = () => {
  return (
    <EditProductContainer>
      <FormContainer>
        <TextInput label='Titulo' />
        <TextInput label='Descripcion' />
        <TextInput label='Precio' />
        <TextInput label='InformacionAdicional' />
        <TextInput label='Stock' />
        <TextInput label='Destacado' />
        <TextInput label='Categoria' />
        <ButtonContainer>
          <FormButton text='Cancelar' />
          <FormButton text='Guardar' />
        </ButtonContainer>
      </FormContainer>
    </EditProductContainer>
  );
};
