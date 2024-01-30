import { Navigate, Route, Routes } from 'react-router-dom';
import Register from 'Pages/Register';
import Login from 'Pages/Login';
import Contacts from 'Pages/Contacts';
import Navigation from './Navigation/Navigation';
import HomePage from 'Pages/HomePage';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';

export const App = () => {

  return (
    <Navigation>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </Navigation>
  );
}