import React, { useEffect, useState } from 'react';
import { InputContainer, Label } from '../FormInput.styles';
import { Input } from './NumericInput.styles';

export const NumericInput = ({ label, state, handleChange, value = 0 }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleNumericChange = newValue => {
    if (newValue >= 0) {
      setInputValue(newValue);
      handleChange(state, newValue);
    }
  };

  useEffect(() => setInputValue(value), [value]);

  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        disableUnderline
        onChange={event => {
          handleNumericChange(event.target.value);
        }}
        type='number'
        value={inputValue}
      />
    </InputContainer>
  );
};
