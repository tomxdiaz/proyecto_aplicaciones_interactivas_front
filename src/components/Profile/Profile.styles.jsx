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

export const ProfileCard = styled(Card)({
  height: '30rem',
  width: '25rem'
});

export const Avatar = styled(AvatarMui)({
  margin: 'auto',
  height: '5rem',
  width: '5rem'
});

export const InfoContainer = styled(Box)({
  flexDirection: 'column'
});

export const LastBuys = styled(Box)({});

export const LastSearches = styled(Box)({});

export const LastFarorities = styled(Box)({});
