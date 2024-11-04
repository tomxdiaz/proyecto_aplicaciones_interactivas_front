import React from 'react';
import { Button } from './FormButton.styles';

export const FormButton = ({ text, handleClick = () => {} }) => {
  return <Button onClick={handleClick}>{text}</Button>;
};
