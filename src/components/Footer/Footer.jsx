import React from 'react';
import { CustomFooter, CustomFooterColumn, FooterGroup } from './Footer.styles';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <CustomFooter>
      <FooterGroup>
        <Typography variant='h6'>Materia:</Typography>
        <CustomFooterColumn>
          <Typography>Aplicaciones Interactivas</Typography>
        </CustomFooterColumn>
      </FooterGroup>
      <FooterGroup>
        <Typography variant='h6'>Docentes:</Typography>
        <CustomFooterColumn>
          <Typography>Horacio Brizuela</Typography>
          <Typography>Santiago Yanzon</Typography>
        </CustomFooterColumn>
      </FooterGroup>
      <FooterGroup>
        <Typography variant='h6'>Integrantes:</Typography>
        <CustomFooterColumn>
          <Typography>Santiago Lopez</Typography>
          <Typography>Tomas Diaz</Typography>
          <Typography>Patricio Plem</Typography>
        </CustomFooterColumn>
      </FooterGroup>
    </CustomFooter>
  );
};

export default Footer;
