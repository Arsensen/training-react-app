import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


function Navbar({navbar}){
    return(
        <div className='navbar'>
            <ul>
                {navbar.map(elem => <li key={elem.name}><NavLink to={`/${elem.name}`}>{elem.name}</NavLink></li>)}
            </ul>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        navbar: state.navbar
    }
}

export default connect(mapStateToProps)(Navbar)