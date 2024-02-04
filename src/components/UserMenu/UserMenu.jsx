import { selectUserData } from 'Redux/auth/AuthSlice.selectors';
import React from 'react';
import { useSelector } from 'react-redux';

const UserMenu = () => {
  const userData = useSelector(selectUserData());

  return (
    <div>
      <p>{userData.email}</p>
      <button>Logout</button>
    </div>
  );
};

export default UserMenu;
