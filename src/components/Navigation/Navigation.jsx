import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import css from './Navigation.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserData, selectUserIsLoading, selectUserIsLoggedIn } from '../../Redux/auth/AuthSlice.selectors'
import { apiLogoutUser } from 'services/api'

const Navigation = () => {

    const userData = useSelector(selectUserData)
    const isLoggedin = useSelector(selectUserIsLoggedIn)
    const isLoading = useSelector(selectUserIsLoading)

    const dispatch = useDispatch()

    const userEmail = userData?.email ?? "Could't get user email";

    const handleLogOut = () => {
        dispatch(apiLogoutUser())
    }

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
                        <span className={css.user_box}>
                            <p className={css.user_email}>{userEmail}</p>
                        <button
                            className={css.btn_logout}
                                onClick={handleLogOut}
                                disabled={isLoading}
                            type='button'>
                            Log out
                            </button>
                        </span>
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
