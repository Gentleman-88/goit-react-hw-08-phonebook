import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import css from './Navigation.module.css'

const Navigation = () => {
    return (
        <div>
        <header className={css.header}>
            <NavLink to="/contacts" className={css.btn}>
                Contacts
            </NavLink>
            <button className={css.btn_logout}>Log out</button>
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
