import { Box, FormLabel, styled } from '@mui/material';

export const InputContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px 0',
  width: '100%',
  margin: 'auto'
});

export const Label = styled(FormLabel)({
  color: '#b83c1d',
  fontWeight: 'bold'
});
