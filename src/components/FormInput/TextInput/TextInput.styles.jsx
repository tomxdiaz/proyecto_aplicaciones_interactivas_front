import { Box, styled, Input as InputMui, TextField, FormLabel } from '@mui/material';

export const InputContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px 0',
  width: '100%',
  margin: 'auto'
});

export const Input = styled(InputMui)({
  border: '2px solid black',
  height: '2rem',
  borderRadius: '10px'
});

export const Label = styled(FormLabel)({
  color: '#b83c1d',
  fontWeight: 'bold'
});
