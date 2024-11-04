import React from 'react';
import { Switch } from './FormSwitch.styles';
import { InputContainer, Label } from '../FormInput.styles';

export const FormSwitch = ({ label, state, handleChange }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Switch onChange={event => handleChange(state, event.target.checked)} />
    </InputContainer>
  );
};
