import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { hocLogin } from '../../hocLogin'
import MainContent from './MainContent'
import { fetchID } from '../../Fetchers/fetchData'




function mapState(store){
    return {
        profileState: {...store.profile},
        postState: {...store.posts},
        authorized: store.profile.authorized
    }
}

function mapDispatch(dispatch){
    return{
        addProfile: (profile)=>{dispatch({type: 'ADD_PROFILE', profile})},
        getID: (id, addProfile)=>{dispatch(fetchID(id, addProfile))}
    }
}

export default compose(
    connect(mapState, mapDispatch),
    hocLogin,
    withRouter
    )(MainContent)