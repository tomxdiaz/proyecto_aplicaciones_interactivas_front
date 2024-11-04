import { MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { InputContainer, Label } from '../FormInput.styles';
import { EmptyMenuItem, Select } from './FormSelect.styles';

export const FormSelect = ({
  label,
  state,
  handleChange,
  defaultMsg = null,
  options
}) => {
  const [value, setvalue] = useState('');

  const handleSelectChange = event => {
    setvalue(event.target.value);
    handleChange(state, event.target.value);
  };

  return (
    <InputContainer>
      <Label>{label}</Label>
      <Select disableUnderline onChange={handleSelectChange} value={value}>
        {options.length ? (
          options.map(option => <MenuItem value={option}>{option}</MenuItem>)
        ) : (
          <EmptyMenuItem value={'null'}>
            {`--- ${defaultMsg ?? 'No se encontraron opciones'} ---`}
          </EmptyMenuItem>
        )}
      </Select>
    </InputContainer>
  );
};
