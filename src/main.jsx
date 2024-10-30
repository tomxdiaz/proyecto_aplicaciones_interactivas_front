import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { UserProvider } from './context/UserContext.jsx';
import { WishListProvider } from './context/WishListContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
      <WishListProvider>
        <App />
      </WishListProvider>
    </UserProvider>
  </BrowserRouter>
);
