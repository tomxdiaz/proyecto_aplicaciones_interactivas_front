import { Box, Button, styled } from '@mui/material';

export const CustomContainer = styled(Box)(({ theme }) => ({
  width: '90%',
  maxWidth: '800px',
  display: 'flex',
  flexDirection: 'column',
  margin: '2rem 0'
}));

export const LastSearchesActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'flex-end'
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  textTransform: 'none'
}));
