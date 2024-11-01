import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { UserProvider } from './context/UserContext.jsx';
import { WishListProvider } from './context/WishListContext.jsx';
import UserCheckWrapper from './components/UserCheckWrapper/UserCheckWrapper.jsx';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({});

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
      <WishListProvider>
        <UserCheckWrapper>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </UserCheckWrapper>
      </WishListProvider>
    </UserProvider>
  </BrowserRouter>
);
