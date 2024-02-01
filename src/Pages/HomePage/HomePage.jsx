import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './Home.module.css'

const HomePage = () => {
    return (
        <div>
            <h1 className={css.title}>Welcome to <span className={css.phone_book}>Phone Book</span></h1>
            <ul className={css.list}>
                <li><NavLink to='/register' className={css.register_btn}>Sing up</NavLink></li>
                <li><NavLink to='/login'  className={css.register_btn}>Login</NavLink></li>
            </ul>
            
        </div>
    )
}

export default HomePage
