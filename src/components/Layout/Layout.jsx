import React from 'react';
import { Main, Section } from './Layout.styles';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <Main>
      <NavBar />
      <Section>{children}</Section>
      <Footer />
    </Main>
  );
};

export default Layout;
