import { Box, Button, Card, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ItemBox = styled(Box)({
  width: '90%',
  maxWidth: '800px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0.5rem 0',
  margin: '0.3rem 1rem'
});

export const CustomCardImage = styled(CardMedia)(({ theme }) => ({
  height: '100%',
  width: '150px',
  objectFit: 'cover',
  borderRadius: '5px',
  margin: '0 0.5rem',
  aspectRatio: '1',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 'auto'
  }
}));
