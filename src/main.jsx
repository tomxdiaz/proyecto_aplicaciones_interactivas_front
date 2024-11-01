import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { UserProvider } from './context/UserContext.jsx';
import { WishListProvider } from './context/WishListContext.jsx';
import UserCheckWrapper from './components/UserCheckWrapper/UserCheckWrapper.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
      <WishListProvider>
        <UserCheckWrapper>
          <App />
        </UserCheckWrapper>
      </WishListProvider>
    </UserProvider>
  </BrowserRouter>
);
