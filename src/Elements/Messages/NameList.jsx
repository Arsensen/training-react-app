import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getNamesSelector } from './Reselect-Test'

function NameList({names, nameChanger}){
    return ( 
    <>
        <ul>
            { names.map(person=>{
                return <li key={person.id}><NavLink to={`/messages/${person.id}`}>{person.name}</NavLink></li>
            })}
        </ul>  
        <button onClick={()=>nameChanger(0)}>Reselect-Test</button>
    </>
    )    
}

const mapStateToProps = (state)=>{
    return{
        names: getNamesSelector(state)
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        nameChanger: (count)=>dispatch({type: 'NAME_CHANGE', name: 'Crab', count})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NameList)