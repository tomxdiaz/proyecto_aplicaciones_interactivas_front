import { Avatar, NavBarContainer } from './NavBar.styles';

export const NavBar = () => {
  return (
    <NavBarContainer>
      <img style={{ height: '100%' }} src={'../../../public/logo.jpg'} />
      <Avatar />
    </NavBarContainer>
  );
};
