import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './Home.module.css'
import { useSelector } from 'react-redux'
import { selectUserIsLoggedIn } from '../../Redux/auth/AuthSlice.selectors'

const HomePage = () => {

    const isLoggedin = useSelector(selectUserIsLoggedIn)

    return (
        <div>
            <h1 className={css.title}>Welcome to <span className={css.phone_book}>Phone Book</span></h1>
            {!isLoggedin ? (
                <>
                    <ul className={css.list}>
                <li><NavLink to='/register' className={css.register_btn}>Sing up</NavLink></li>
                <li><NavLink to='/login'  className={css.register_btn}>Login</NavLink></li>
            </ul>
                </>
            ):(
            <>
                <NavLink to='/contacts' className={css.my_contacts_btn}>My contacts</NavLink>
            </>
            )}
        </div>
    )
}

export default HomePage
