import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import {logout} from '../../Fetchers/fetchData'

class HeaderContainer extends React.Component{
    render(){
        return (
            <>
                <Header resetProfile ={this.props.resetProfile}/>
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
        resetProfile: ()=> dispatch( logout() )
    }
}

const HeaderConnect = connect(mapToState, mapToDispatch)(HeaderContainer)

export default HeaderConnect