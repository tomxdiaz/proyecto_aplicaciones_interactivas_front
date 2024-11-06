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

export const CustomListContainer = styled(Box)({
  width: '100%',
  maxWidth: '800px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
});

export const CustomListBar = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around'
});

export const CustomList = styled(Box)({
  width: '100%',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px'
});

export const CustomLink = styled(Link)({
  textDecoration: 'none'
});

export const CustomButton = styled(Button)(({ theme }) => ({
  textTransform: 'none'
}));

export const CustomEmptyList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

export const CustomCard = styled(Card)(({ theme }) => ({
  height: '300px',
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
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  }
}));

export const CustomCardContent = styled(CardContent)({
  height: '100%',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '4px 20px'
});

export const CustomDeleteButton = styled(IconButton)(({ theme }) => ({
  alignSelf: 'flex-end'
}));

export const CustomProductInfo = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '10px'
}));

export const CustomCardImage = styled(CardMedia)(({ theme }) => ({
  height: '100%',
  aspectRatio: '1',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 'auto'
  }
}));

export const CustomActions = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center'
  }
}));
