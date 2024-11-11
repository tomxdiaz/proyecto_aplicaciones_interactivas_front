import { Box, styled } from '@mui/material';

export const CustomFooter = styled('footer')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  padding: theme.spacing(2, 0),
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
}));

export const CustomFooterColumn = styled(Box)(({ theme }) => ({
  width: '30%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center'
}));
