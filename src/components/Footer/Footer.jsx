import React from 'react';
import { CustomFooter, CustomFooterColumn } from './Footer.styles';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <CustomFooter>
      <CustomFooterColumn>
        <Typography variant='h6'>Materia:</Typography>
        <Typography>Aplicaciones Interactivas</Typography>
      </CustomFooterColumn>
      <CustomFooterColumn>
        <Typography variant='h6'>Docentes:</Typography>
        <Typography>Horacio Brizuela</Typography>
        <Typography>Santiago Yanzon</Typography>
      </CustomFooterColumn>
      <CustomFooterColumn>
        <Typography variant='h6'>Integrantes:</Typography>
        <Typography>Santiago Lopez</Typography>
        <Typography>Tomas Diaz</Typography>
        <Typography>Patricio Plem</Typography>
      </CustomFooterColumn>
    </CustomFooter>
  );
};

export default Footer;
