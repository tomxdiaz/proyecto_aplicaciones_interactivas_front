import React from 'react';
import { Button, DeleteIcon } from './FormDeleteButton.styles';

export const FormDeleteButton = ({ text, handleClick = () => {} }) => {
  return (
    <Button onClick={handleClick}>
      {text}
      <DeleteIcon fontSize='small' />
    </Button>
  );
};
