import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const ProtectedRoute = ({ children, path }) => {
  const [cookies] = useCookies(['ageConfirmation']);
  const location = useLocation();

  // Check if the current route matches the protected path and if ageConfirmation is false
  if (location.pathname!== '/' &&!cookies.ageConfirmation) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;