import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, element: Element, ...rest }) => {
  return isAuthenticated ? <Route {...rest} element={<Element isAuthenticated={isAuthenticated} />} /> : <Navigate to="/login" />;
};

export default PrivateRoute;