import { Route, Routes } from 'react-router-dom';
import Register from 'Pages/Register';
import Login from 'Pages/Login';
import Contacts from 'Pages/Contacts';

export const App = () => {

  return (
      <Routes>
        <Route index element={<Register />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
  );
}