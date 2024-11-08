import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { UserProvider } from './context/UserContext.jsx';
import { WishListProvider } from './context/WishListContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import UserCheckWrapper from './components/UserCheckWrapper/UserCheckWrapper.jsx';
import { createTheme, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from './context/SnackbarContext.jsx';

const theme = createTheme({});

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SnackbarProvider>
      <UserProvider>
        <CartProvider>
          <WishListProvider>
            <UserCheckWrapper>
              <ThemeProvider theme={theme}>
                <App />
              </ThemeProvider>
            </UserCheckWrapper>
          </WishListProvider>
        </CartProvider>
      </UserProvider>
    </SnackbarProvider>
  </BrowserRouter>
);
