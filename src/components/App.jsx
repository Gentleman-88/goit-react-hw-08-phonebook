import { Navigate, Route, Routes } from 'react-router-dom';
import Register from 'Pages/RegisterPage/Register';
import Login from 'Pages/LoginPage/Login';
import Contacts from 'Pages/ContactsPage/Contacts';
import Navigation from './Navigation/Navigation';
import HomePage from 'Pages/HomePage/HomePage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { apiRefreshUser } from '../services/api';


export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(apiRefreshUser())
    
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}