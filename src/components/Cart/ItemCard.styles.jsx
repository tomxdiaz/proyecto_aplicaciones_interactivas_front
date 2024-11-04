import { styled } from '@mui/material/styles';
import {
  Typography,
  Button,
  Container,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  IconButton,
  CardContent
} from '@mui/material';
import { COLORS } from '../../utils/constants';

export const CustomCard = styled(Card)({
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  flexWrap: 'nowrap',
  backgroundColor : COLORS.grey
  
});

export const CustomCardImage = styled(CardMedia)({
  width: '15%',
  aspectRatio: '1',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  objectFit: 'cover',
  marginRight: '16px',
});

export const CustomCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  padding: '16px',
});

export const QuantityButton = styled(Button)({
  variant : 'outlined',
  fontWeight: 'bold',
  fontSize: '16px' ,
  color: 'black'
});

export const QuantityBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent : 'center',
  justifyItems: 'center',
  alignItems: 'center',
  padding: '8px',
  margin: '5px' ,
  border: '1px solid black'
});

