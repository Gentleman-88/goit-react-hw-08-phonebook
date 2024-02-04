import {
  selectUserIsLoggedIn,
  selectUserIsRefreshing,
} from '../../Redux/auth/AuthSlice.selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  const isRefreshing = useSelector(selectUserIsRefreshing);

  return !isLoggedIn && !isRefreshing ? <Navigate to="/" replace /> : children;
};

export default PrivateRoute;
