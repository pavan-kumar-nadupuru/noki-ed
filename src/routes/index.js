import React from 'react';
import { Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';

const routes = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <Navigate to="/404" />,
  },
];

export default routes;