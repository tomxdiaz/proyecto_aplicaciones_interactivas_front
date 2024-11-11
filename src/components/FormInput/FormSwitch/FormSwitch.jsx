import React, { useState } from 'react';
import { InputContainer, Label } from '../FormInput.styles';
import { Switch, Typography } from '@mui/material';

export const FormSwitch = ({ label, state, handleChange, value }) => {
  const [checked, setChecked] = useState(value);

  const handleChecked = event => {
    setChecked(event.target.checked);
    handleChange(state, event.target.checked);
  };

  return (
    <InputContainer>
      <Typography>
        {label}
        <Switch checked={checked} onChange={handleChecked} />
      </Typography>
    </InputContainer>
  );
};
