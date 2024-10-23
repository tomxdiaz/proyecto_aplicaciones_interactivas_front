import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ROUTES from './pages/routes/Routes';

const App = () => {
  return (
    <Layout>
      <Routes>
        {Object.entries(ROUTES).map(([name, route]) => {
          return <Route key={name} path={route.path} element={route.element} />;
        })}
      </Routes>
    </Layout>
  );
};

export default App;
