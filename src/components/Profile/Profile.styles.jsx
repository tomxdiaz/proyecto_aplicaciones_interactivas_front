import { Avatar as AvatarMui, Box, Card, IconButton, styled } from '@mui/material';

export const ProfileContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem',
  gap: '3rem'
}));

export const ProfileCardContainer = styled(Box)({
  width: '30.8rem'
});

export const ProfileCard = styled(Card)(({ theme }) => ({
  height: '30rem',
  width: '25rem',
  margin: 'auto'
}));

export const Avatar = styled(AvatarMui)({
  margin: 'auto',
  height: '5rem',
  width: '5rem'
});

export const InfoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'raw',
  gap: '3rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  }
}));

export const EditButton = styled(IconButton)({
  padding: '10px',
  float: 'inline-end'
});
