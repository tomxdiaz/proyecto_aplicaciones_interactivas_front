import React from 'react';
import { NavBar } from '../NavBar';
import { Main, Section } from './Layout.styles';
export const Layout = ({ children }) => {
  return (
    <Main>
      <NavBar></NavBar>
      <Section>{children}</Section>
    </Main>
  );
};
