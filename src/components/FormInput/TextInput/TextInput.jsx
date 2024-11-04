import React, { useState } from 'react';
import { InputContainer, Label } from '../FormInput.styles';
import { Input } from './TextInput.styles';

export const TextInput = ({ label, state, handleChange, value }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = event => {
    setInputValue(event.target.value);
    handleChange(state, event.target.value);
  };

  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input disableUnderline value={inputValue} onChange={handleInputChange} />
    </InputContainer>
  );
};
