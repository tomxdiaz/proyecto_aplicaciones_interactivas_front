import { styled } from '@mui/material/styles';
import { Card, CardActionArea, CardMedia } from '@mui/material';

export const CustomCard = styled(Card)({
  width: '100%',
  maxWidth: '300px',
  display: 'flex'
});

export const CustomCardContent = styled(CardActionArea)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative'
});

export const CustomCardImage = styled(CardMedia)({
  width: '100%',
  aspectRatio: '1',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
});
