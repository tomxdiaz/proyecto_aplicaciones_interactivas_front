import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';

export const CustomContainer = styled(Container)({
  width: '90%',
  maxWidth: '600px',
  margin: '20px auto',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)'
});

export const CustomForm = styled('form')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

export const CustomFormActions = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem'
});
