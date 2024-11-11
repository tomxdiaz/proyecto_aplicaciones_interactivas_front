import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { InputContainer, Label } from '../FormInput.styles';
import { EmptyMenuItem } from './FormSelect.styles';

export const FormSelect = ({
  label,
  state,
  handleChange,
  defaultMsg = null,
  options,
  value = ''
}) => {
  const [inputValue, setInputvalue] = useState('');

  const handleSelectChange = event => {
    setInputvalue(event.target.value);
    handleChange(state, event.target.value);
  };

  useEffect(() => setInputvalue(value), [value]);

  return (
    <FormControl fullWidth>
      <InputLabel id={`formInput-${label}`}>{label}</InputLabel>
      <Select
        labelId={`formInput-${label}`}
        label={label}
        onChange={handleSelectChange}
        value={inputValue}>
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
    </FormControl>
  );
};
