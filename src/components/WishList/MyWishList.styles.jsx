import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  styled
} from '@mui/material';
import { Link } from 'react-router-dom';

export const CustomContainer = styled(Box)({
  width: '90%',
  maxWidth: '800px',
  display: 'flex',
  flexDirection: 'column',
  margin: '2rem 0'
});

export const CustomWishListBar = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between'
});

export const WishListContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  margin: '1rem 0'
});

export const CustomLink = styled(Link)({
  textDecoration: 'none'
});

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

export const CustomIconButton = styled(IconButton)(({ theme }) => ({
  alignSelf: 'flex-start',
  [theme.breakpoints.down('md')]: {
    alignSelf: 'flex-end'
  }
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  textTransform: 'none'
}));

CustomButton;
