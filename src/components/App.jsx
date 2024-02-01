import { Navigate, Route, Routes } from 'react-router-dom';
import Register from 'Pages/RegisterPage/Register';
import Login from 'Pages/LoginPage/Login';
import Contacts from 'Pages/ContsctsPage/Contacts';
import Navigation from './Navigation/Navigation';
import HomePage from 'Pages/HomePage/HomePage';


export const App = () => {

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