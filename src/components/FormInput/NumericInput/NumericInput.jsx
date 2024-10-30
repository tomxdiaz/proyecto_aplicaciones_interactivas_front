import React, { useState } from 'react';
import { InputContainer, Label } from '../FormInput.styles';
import { Input } from './NumericInput.styles';

export const NumericInput = ({ label, state, handleChange }) => {
  const [value, setValue] = useState(0);

  const handleNumericChange = newValue => {
    if (newValue >= 0) {
      setValue(newValue);
      handleChange(state, newValue);
    }
  };

  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        disableUnderline
        onChange={event => {
          handleNumericChange(event.target.value);
        }}
        type='number'
        value={value}
      />
    </InputContainer>
  );
};
