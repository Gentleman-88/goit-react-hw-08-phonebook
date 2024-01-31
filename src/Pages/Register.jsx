import React from 'react'
import { useDispatch } from 'react-redux'
import { apiRegisterUser } from '../services/api'

const Register = () => {

  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault()

    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    }

    dispatch(apiRegisterUser(formData))
  }


  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={onSubmit}>
        <label>Name: </label>
        <input type="text"
          name='userName'
          placeholder='Name'
          minLength={2}
          required
        />
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
        <button type='submit'>Sign up</button>
      </form>
    </div>
  )
}

export default Register
