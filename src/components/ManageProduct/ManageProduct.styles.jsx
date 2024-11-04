import { Box, styled } from '@mui/material';

export const ManageProductContainer = styled(Box)({
  padding: '1rem',
  margin: 'auto',
  height: '100%'
});

export const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid black',
  borderRadius: '10px',
  width: '40rem',
  padding: '1rem 15%',
  maxHeight: '100%',
  overflowY: 'auto'
});

export const ButtonContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '1rem 5rem'
});
