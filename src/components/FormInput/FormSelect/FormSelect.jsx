import React from 'react';
import { InputContainer, Label } from '../FormInput.styles';

export const FormSelect = ({ label, state, handleChange }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
    </InputContainer>
  );
};
