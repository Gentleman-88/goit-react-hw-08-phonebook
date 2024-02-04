import React from 'react';
import { useDispatch } from 'react-redux';
import { apiRegisterUser } from '../../services/api';
import css from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };

    dispatch(apiRegisterUser(formData));
    e.currentTarget.reset();
  };

  return (
    <div>
      <h1 className={css.title}>Sign In</h1>
      <form onSubmit={onSubmit} className={css.sign_in}>
        <label className={css.label}>Name: </label>
        <input
          type="text"
          name="userName"
          placeholder="Name"
          minLength={2}
          required
          className={css.input}
        />
        <label className={css.label}>Email: </label>
        <input
          type="text"
          name="userEmail"
          placeholder="yourmail@gmail.com"
          required
          className={css.input}
        />
        <label className={css.label}>Password: </label>
        <input
          type="text"
          name="userPassword"
          placeholder="•••••••"
          minLength={7}
          required
          className={css.input}
        />
        <button type="submit" className={css.register_btn}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
