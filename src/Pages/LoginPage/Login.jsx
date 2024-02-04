import React from 'react';
import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../../services/api';

import css from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch(apiLoginUser(formData));
    e.currentTarget.reset();
  };

  return (
    <div>
      <h1 className={css.title}>Login</h1>
      <form onSubmit={onSubmit} className={css.log_in}>
        <label className={css.label}>Email: </label>
        <input
          type="text"
          name="userEmail"
          placeholder="yourmail@gmail.com"
          className={css.input}
          required
        />
        <label className={css.label}>Password: </label>
        <input
          type="text"
          name="userPassword"
          placeholder="•••••••"
          minLength={7}
          className={css.input}
          required
        />
        <button type="submit" className={css.login_btn}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
