import React from 'react'
import { useDispatch } from 'react-redux'
import { apiLoginUser } from '../services/api'

const Login = () => {

  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault()

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    }

    dispatch(apiLoginUser(formData))
  }


  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={onSubmit}>
        <label>Email: </label>
        <input type="text"
          name='userEmail'
          placeholder='yourmail@gmail.com'
          required
        />
        <label>Password: </label>
        <input type="text"
          name='userPassword'
          minLength={7}
          required
        />
        <button type='submit'>Sign in</button>
      </form>
    </div>
  )
}

export default Login
