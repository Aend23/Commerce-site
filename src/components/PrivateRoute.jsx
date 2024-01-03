// PrivateRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContex';
import App from '../App';

const PrivateRoute = ({}) => {
  const { token } = useAuth();
  return token ? <App /> : <Navigate to="/login" />;
};

export default PrivateRoute;
