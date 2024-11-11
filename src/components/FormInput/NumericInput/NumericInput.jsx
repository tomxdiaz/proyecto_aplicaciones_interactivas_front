import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

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
    <TextField
      label={label}
      value={inputValue}
      onChange={event => handleNumericChange(event.target.value)}
      fullWidth
      type='numeric'
      margin='normal'
      autoComplete='new-password'
    />
  );
};
