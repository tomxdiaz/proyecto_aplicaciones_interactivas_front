import { Box, Button, IconButton, styled } from '@mui/material';

export const ProductDetailContainer = styled(Box)(({ theme }) => ({
  width: '90%',
  display: 'flex',
  flexDirection: 'row',
  maxWidth: '1200px',
  padding: '4rem 0',
  gap: '1rem',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    maxWidth: '600px'
  }
}));

export const ProductDetailImagesContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '40%',
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    maxWidth: '475px',
    margin: 'auto'
  }
}));

export const ProductDetailImageContainer = styled(Box)(({ theme }) => ({
  aspectRatio: '1/1',
  [theme.breakpoints.down('lg')]: {
    width: '100%'
  }
}));

export const ProductDetailImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  aspectRatio: '1/1',
  objectFit: 'cover'
}));

export const ProductDetailThumbnailsList = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
  padding: theme.spacing(1),
  gap: theme.spacing(1)
}));

export const ProductDetailThumbnailContainer = styled(Box)(({ theme }) => ({
  aspectRatio: '1/1',
  height: '80px',
  [theme.breakpoints.down('sm')]: {
    height: '60px'
  }
}));

export const ProductDetailThumbnail = styled('img')(({ theme }) => ({
  height: '100%',
  aspectRatio: '1/1',
  objectFit: 'cover',
  cursor: 'pointer'
}));

export const ProductInfoContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '0 2rem',
  [theme.breakpoints.down('lg')]: {
    padding: '0 0.5rem',
    width: '100%'
  }
}));

export const ProductDetailActions = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 'auto',
  marginBottom: '1rem',
  flexWrap: 'wrap'
});

export const ProductDetailIconButton = styled(IconButton)({
  alignSelf: 'flex-end',
  padding: '10px'
});

export const ProductDetailQuantityBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
});

export const ProductDetailCartButton = styled(Button)({
  textTransform: 'none',
  minWidth: '40px'
});
