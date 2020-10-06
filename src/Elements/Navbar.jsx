import React from 'react'
import { NavLink } from 'react-router-dom'



function Navbar({store}){
    return(
        <div className='navbar'>
            <ul>
                {store.getState().navbar.map(elem => <li key={elem.name}><NavLink to={`/${elem.name}`}>{elem.name}</NavLink></li>)}
            </ul>
        </div>
    )
}

export default Navbar