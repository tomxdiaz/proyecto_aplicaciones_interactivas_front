import { Typography } from '@mui/material';
import React from 'react';
import { CardInfoContainer } from './CardInfo.styles';

export const CardInfo = ({ label, value }) => {
  return (
    <CardInfoContainer>
      <Typography variant='h6'>{label}</Typography>
      <Typography>{value}</Typography>
    </CardInfoContainer>
  );
};