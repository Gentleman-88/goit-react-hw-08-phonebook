import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
        <header>
            <NavLink to="/contacts">
                Contacts
            </NavLink>
            <button>Log out</button>
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
