import React from 'react';
import { TextInput } from './TextInput/TextInput';
import { NumericInput } from './NumericInput/NumericInput';
import { FormSwitch } from './FormSwitch/FormSwitch';
import { FormSelect } from './FormSelect/FormSelect';

export const FormInput = ({
  label,
  state,
  handleChange,
  type,
  defaultMsg = null,
  options = []
}) => {
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
    ),
    switch: (
      <FormSwitch
        key={`Manage-product-formInput-${label}`}
        label={label}
        state={state}
        handleChange={handleChange}
      />
    ),
    select: (
      <FormSelect
        key={`Manage-product-formInput-${label}`}
        label={label}
        state={state}
        handleChange={handleChange}
        defaultMsg={defaultMsg}
        options={options}
      />
    )
  };
  return FormTypes[type] ?? FormTypes['text'];
};
