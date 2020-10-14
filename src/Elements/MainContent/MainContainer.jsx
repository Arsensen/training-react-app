import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import MainContent from './MainContent'




function mapState(store){
    return {
        profileState: {...store.profile},
        postState: {...store.posts}
    }
}

function mapDispatch(dispatch){
    return{
        addProfile: (profile)=>{dispatch({type: 'ADD_PROFILE', profile})}
    }
}

let connected = connect(mapState, mapDispatch)( withRouter(MainContent) )

export default connected