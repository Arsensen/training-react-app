import React from 'react'
import { NavLink } from 'react-router-dom'

function NameList({names}){
    return ( 
        <ul>
            { names.map(person=>{
            return <li key={person.id}><NavLink to={`/messages/${person.id}`}>{person.name}</NavLink></li>
            })}
        </ul>)
}

export default NameList