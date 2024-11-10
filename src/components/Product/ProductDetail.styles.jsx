import { Box, Button, IconButton, styled } from '@mui/material';

export const ProductDetailContainer = styled(Box)(({ theme }) => ({
  width: '85%',
  display: 'flex',
  flexDirection: 'row',
  maxWidth: '1000px',
  padding: '4rem 0',
  gap: '1rem',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    maxWidth: '600px'
  }
}));

export const ProductDetailImageContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  aspectRatio: '1/1',
  [theme.breakpoints.down('lg')]: {
    width: '100%'
  }
}));

export const ProductDetailImage = styled('img')(({ theme }) => ({
  height: '100%',
  width: '100%',
  objectFit: 'cover'
}));

export const ProductInfoContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '0 2rem',
  [theme.breakpoints.down('lg')]: {
    width: '100%'
  }
}));

export const ProductDetailActions = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between' ,
  marginTop: 'auto' ,
  marginBottom: '1rem'  
});

export const ProductDetailIconButton = styled(IconButton)({
  alignSelf: 'flex-end',
  padding: '10px'
});

export const ProductDetailQuantityBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'
});

export const ProductDetailCartButton = styled(Button)({
  textTransform: 'none',
  minWidth: '40px'
});
