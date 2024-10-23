import { styled } from '@mui/material/styles';
import { Box, Card, CardActionArea, CardMedia, IconButton } from '@mui/material';

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

export const CustomCardIconsSection = styled(Box)({
  position: 'absolute',
  top: 0,
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.2rem'
});

export const CustomWishListIconButton = styled(IconButton)({});
