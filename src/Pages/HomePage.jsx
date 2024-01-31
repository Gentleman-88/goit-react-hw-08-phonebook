import React from 'react'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            Hello
            <NavLink to='/register'>Sing up</NavLink>
        </div>
    )
}

export default HomePage
