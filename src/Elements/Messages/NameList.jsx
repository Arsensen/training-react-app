import React, { memo, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { compose } from 'redux'
import { getNamesSelector } from './Reselect-Test'

const NameList = memo(({names, nameChanger}) =>{
    let [count, setCount] = useState(4)
    return ( 
    <>
        <ul>
            { names.map(person=>{
                return <li key={person.id}><NavLink to={`/messages/${person.id}`}>{person.name}</NavLink></li>
            })}
        </ul>
        <button onClick={()=>{nameChanger(count); setCount(c=>c+1)}}>Reselect-Test</button>
    </>
    )    
}, (prevProps, nextProps)=> prevProps.names === nextProps.names ? true: false
)

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


export default compose(
    connect(mapStateToProps, mapDispatchToProps)
) ( NameList )