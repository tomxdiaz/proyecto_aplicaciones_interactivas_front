import { styled } from '@mui/material/styles';
import { CardActionArea, CardMedia } from '@mui/material';

export const CustomCardContent = styled(CardActionArea)({
  width: 300,
  height: '100%',
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
