import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import {data} from '../../Fetchers/fetchData'

class HeaderContainer extends React.Component{
    render(){
        return (
            <>
                <Header setProfile ={this.props.setProfile}/>
            </>
        )
    }
}


let mapToState = (state)=>{
    return {
        profile: state.profile
    }
}

let mapToDispatch = (dispatch)=>{
    return {
        setProfile: ()=>data().then(profile=> dispatch({type: 'ADD_PROFILE', profile}))
    }
}

const HeaderConnect = connect(mapToState, mapToDispatch)(HeaderContainer)

export default HeaderConnect