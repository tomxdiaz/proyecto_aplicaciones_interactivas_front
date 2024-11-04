import React, { useState } from 'react';
import { Switch } from './FormSwitch.styles';
import { InputContainer, Label } from '../FormInput.styles';

export const FormSwitch = ({ label, state, handleChange, value }) => {
  const [checked, setChecked] = useState(value);

  const handleChecked = event => {
    setChecked(event.target.checked);
    handleChange(state, event.target.checked);
  };

  return (
    <InputContainer>
      <Label>{label}</Label>
      <Switch checked={checked} onChange={handleChecked} />
    </InputContainer>
  );
};
