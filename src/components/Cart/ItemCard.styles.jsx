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
  width: '80%',
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
  backgroundColor: COLORS.yellow
});

export const CustomCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  padding: '16px',
  backgroundColor: COLORS.red
});