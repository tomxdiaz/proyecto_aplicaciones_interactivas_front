import { styled } from '@mui/material/styles';
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Box,
  IconButton
} from '@mui/material';

export const CustomCard = styled(Card)(({ theme }) => ({
  height: '200px',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    maxWidth: '300px',
    flexDirection: 'column'
  }
}));

export const CustomCardActionArea = styled(CardActionArea)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  flex: 1,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  }
}));

export const CustomCardContent = styled(CardContent)({
  flex: 1
});

export const CustomCardImage = styled(CardMedia)(({ theme }) => ({
  height: '100%',
  aspectRatio: '1',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 'auto'
  }
}));

export const ActionsBox = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  alignItems: 'center',
  gap: '20px'
}));

export const DeleteButton = styled(IconButton)(({ theme }) => ({
  width: 'auto',
  alignSelf: 'flex-end'
}));

export const QuantityBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
}));
