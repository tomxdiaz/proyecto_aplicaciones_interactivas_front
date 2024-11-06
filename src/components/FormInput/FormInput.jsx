import React from 'react';
import { TextInput } from './TextInput/TextInput';
import { NumericInput } from './NumericInput/NumericInput';
import { FormSwitch } from './FormSwitch/FormSwitch';
import { FormSelect } from './FormSelect/FormSelect';
import { ImageInput } from './ImageInput/ImageInput';

export const FormInput = ({
  label,
  state,
  handleChange,
  type,
  defaultMsg = null,
  options = [],
  value
}) => {
  const FormTypes = {
    text: (
      <TextInput
        key={`Manage-product-formInput-${label}`}
        label={label}
        state={state}
        handleChange={handleChange}
        value={value}
      />
    ),
    number: (
      <NumericInput
        key={`Manage-product-formInput-${label}`}
        label={label}
        state={state}
        handleChange={handleChange}
        value={value}
      />
    ),
    switch: (
      <FormSwitch
        key={`Manage-product-formInput-${label}`}
        label={label}
        state={state}
        handleChange={handleChange}
        value={value}
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
        value={value}
      />
    ),
    image: (
      <ImageInput
        key={`Manage-product-formInput-${label}`}
        state={state}
        handleChange={handleChange}
        images={value}
      />
    )
  };
  return FormTypes[type] ?? FormTypes['text'];
};
