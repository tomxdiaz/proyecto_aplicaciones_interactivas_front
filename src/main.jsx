import { createRoot } from 'react-dom/client';
import Layout from './components/Layout/Layout.jsx';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
