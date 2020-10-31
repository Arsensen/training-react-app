import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import {logout} from '../../Fetchers/fetchData'

const HeaderContainer=({resetProfile})=>{
        return <Header resetProfile ={resetProfile}/>
}

let mapToDispatch = (dispatch)=>{
    return {
        resetProfile: ()=> dispatch( logout() )
    }
}

const HeaderConnect = connect(null, mapToDispatch)(HeaderContainer)

export default HeaderConnect