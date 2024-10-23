import React from 'react';
import { Main, Section } from './Layout.styles';
import NavBar from '../NavBar/NavBar';

const Layout = ({ children }) => {
  return (
    <Main>
      <NavBar />
      <Section>{children}</Section>
    </Main>
  );
};

export default Layout;
