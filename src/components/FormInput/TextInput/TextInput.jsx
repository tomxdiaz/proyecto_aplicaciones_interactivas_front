import React from 'react';
import { FormLabel } from '@mui/material';
import { Input, InputContainer, Label } from './TextInput.styles';

export const TextInput = ({ label }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input disableUnderline />
    </InputContainer>
  );
};
