import { Avatar as AvatarMui, Box, Card, styled } from '@mui/material';

export const ProfileContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  padding: '2rem',
  gap: '5rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '3rem'
  }
}));

export const ProfileCard = styled(Card)(({ theme }) => ({
  height: '30rem',
  width: '25rem',
  [theme.breakpoints.down('md')]: {
    margin: 'auto'
  }
}));

export const Avatar = styled(AvatarMui)({
  margin: 'auto',
  height: '5rem',
  width: '5rem'
});

export const InfoContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem'
});

export const LastBuys = styled(Box)({});
