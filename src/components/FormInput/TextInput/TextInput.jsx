import React from 'react';
import { InputContainer, Label } from '../FormInput.styles';
import { Input } from './TextInput.styles';

export const TextInput = ({ label, state, handleChange }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        disableUnderline
        onChange={event => {
          handleChange(state, event.target.value);
        }}
      />
    </InputContainer>
  );
};
