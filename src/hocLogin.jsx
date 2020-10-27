import React from 'react'
import Login from './Elements/Login/Login'

export const hocLogin =(Component)=> (props)=>{
    return !props.authorized? <Login /> : <Component {...props} />
}