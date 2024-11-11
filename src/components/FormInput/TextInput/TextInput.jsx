import React, { useState } from 'react';
import { InputContainer, Label } from '../FormInput.styles';
import { TextField } from '@mui/material';

export const TextInput = ({ label, state, handleChange, value }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = event => {
    setInputValue(event.target.value);
    handleChange(state, event.target.value);
  };

  return (
    <InputContainer>
      <Label>{label}</Label>
      <TextField value={inputValue} onChange={handleInputChange} />
    </InputContainer>
  );
};
