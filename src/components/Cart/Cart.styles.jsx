import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const CustomContainer = styled(Box)({
  width: '90%',
  maxWidth: '800px',
  display: 'flex',
  flexDirection: 'column',
  margin: '2rem 0'
});

export const CustomCartBox = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  margin: '1rem 0'
});

export const CustomCartBar = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between'
});

export const CartContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

export const CartActions = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '20px'
  }
}));

export const CustomLink = styled(Link)({
  textDecoration: 'none'
});

export const CustomButton = styled(Button)(({ theme }) => ({
  textTransform: 'none'
}));
