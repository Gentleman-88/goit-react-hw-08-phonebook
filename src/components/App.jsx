import { Navigate, Route, Routes } from 'react-router-dom';
import Register from 'Pages/RegisterPage/Register';
import Login from 'Pages/LoginPage/Login';
import Contacts from 'Pages/ContactsPage/Contacts';
import Navigation from './Navigation/Navigation';
import HomePage from 'Pages/HomePage/HomePage';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { apiRefreshUser } from '../services/api';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const [isRefreshComplete, setIsRefreshComplete] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(apiRefreshUser());
        setIsRefreshComplete(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  if (!isRefreshComplete) {
    return <Loader/>;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path='/register' element={
          <RestrictedRoute>
            <Register />
          </RestrictedRoute>} />
        <Route path='/login' element={
          <RestrictedRoute>
            <Login />
          </RestrictedRoute>
        } />
        <Route path='/contacts' element={
          <PrivateRoute>
            <Contacts />
          </PrivateRoute>
        } />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};