import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import css from './Navigation.module.css'
import { useSelector } from 'react-redux'
import { selectUserIsLoggedIn } from '../../Redux/auth/AuthSlice.selectors'

const Navigation = () => {

    const isLoggedin = useSelector(selectUserIsLoggedIn)

    return (
        <div>
            <header className={css.header}>
                    <NavLink to="/" className={css.btn}>
                        Home
                    </NavLink>
                {isLoggedin && (
                    <>
                        <NavLink to="/contacts" className={css.btn}>
                        Contacts
                        </NavLink>
            <button className={css.btn_logout}>Log out</button>
                    </>
                )}
            </header>
            <main>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    )
}

export default Navigation
