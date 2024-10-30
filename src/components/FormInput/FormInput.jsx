import React from 'react';
import { TextInput } from './TextInput/TextInput';
import { NumericInput } from './NumericInput/NumericInput';

export const FormInput = ({ label, state, handleChange, type }) => {
  const FormTypes = {
    text: (
      <TextInput
        key={`Manage-product-formInput-${label}`}
        label={label}
        state={state}
        handleChange={handleChange}
      />
    ),
    number: (
      <NumericInput
        key={`Manage-product-formInput-${label}`}
        label={label}
        state={state}
        handleChange={handleChange}
      />
    )
  };
  return FormTypes[type] ?? FormTypes['text'];
};
