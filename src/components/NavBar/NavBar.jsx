import React from 'react';
import { Avatar, NavBarContainer } from './NavBar.styles';

const NavBar = () => {
  return (
    <NavBarContainer>
      <img style={{ height: '100%' }} src={'../../../public/logo.jpg'} />
      <Avatar />
    </NavBarContainer>
  );
};

export default NavBar;
