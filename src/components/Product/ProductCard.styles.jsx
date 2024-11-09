import { styled } from '@mui/material/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  IconButton,
  CardContent
} from '@mui/material';

export const CustomCard = styled(Card)({
  width: '100%',
  maxWidth: '300px',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
});

export const CustomCardActionArea = styled(CardActionArea)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  flex: 1
});

export const CustomCardContent = styled(CardContent)({
  flex: 1
});

export const CustomCardImage = styled(CardMedia)({
  width: '100%',
  aspectRatio: '1',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
});

export const CustomCardIconsSection = styled(CardActions)({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 0
});

export const CustomCardIconButton = styled(IconButton)({
  backgroundColor: 'white',
  padding: '10px'
});
