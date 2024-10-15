import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

export const CustomProductCard = styled(Card)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '200px',
  padding: '1rem',
}));
