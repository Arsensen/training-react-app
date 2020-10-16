import React from 'react'
import { NavLink } from 'react-router-dom'


function Header({setProfile}){
    return(
        <div className='header'>
            <img src="https://cdn.dribbble.com/users/60166/screenshots/14000017/lion_logo_2x.jpg" alt="Some foto"/>
            <NavLink to='/profile' onClick={setProfile}>Login</NavLink>
        </div>
    )
}

export default Header