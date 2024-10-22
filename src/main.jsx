import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Home.jsx';
import { Layout } from './components/Layout/Layout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <Home></Home>
    </Layout>
  </StrictMode>
);
