import { MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { InputContainer, Label } from '../FormInput.styles';
import { EmptyMenuItem, Select } from './FormSelect.styles';

export const FormSelect = ({
  label,
  state,
  handleChange,
  defaultMsg = null,
  options,
  value = ''
}) => {
  const [inputValue, setInputvalue] = useState(value);

  const handleSelectChange = event => {
    setInputvalue(event.target.value);
    handleChange(state, event.target.value);
  };

  useEffect(() => setInputvalue(value), [value]);

  return (
    <InputContainer>
      <Label>{label}</Label>
      <Select onChange={handleSelectChange} value={inputValue}>
        {options.length ? (
          options.map((option, index) => (
            <MenuItem value={option} key={`FormInput-Select-${label}-${index}`}>
              {option}
            </MenuItem>
          ))
        ) : (
          <EmptyMenuItem value={'null'}>
            {`--- ${defaultMsg ?? 'No se encontraron opciones'} ---`}
          </EmptyMenuItem>
        )}
      </Select>
    </InputContainer>
  );
};
