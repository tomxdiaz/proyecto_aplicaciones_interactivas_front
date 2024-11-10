import { TextField } from '@mui/material';
import React, { useState } from 'react';

export const Input = ({
  label,
  value,
  state,
  type = 'text',
  handleChange,
  disabled = false
}) => {
  const [inputValue, setInputvalue] = useState(value ?? '');

  const changeValue = (_, changeValue) => {
    setInputvalue(changeValue);
    handleChange(state, value);
  };

  return (
    <TextField
      label={label}
      defaultValue={value}
      value={inputValue}
      type={type}
      fullWidth
      margin='normal'
      onChange={changeValue}
      disabled={disabled}
    />
  );
};
