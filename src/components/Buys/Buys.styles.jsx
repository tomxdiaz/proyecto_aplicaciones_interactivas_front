import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const CustomBuysBox = styled(Box)({
  width: '100%',
  maxWidth: '800px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',

  margin: '1rem 0'
});

export const CustomLink = styled(Link)({
  textDecoration: 'none'
});

export const CustomButton = styled(Button)(({ theme }) => ({
  textTransform: 'none'
}));
