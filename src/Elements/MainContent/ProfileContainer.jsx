import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { hocLogin } from '../../hocLogin'
import Profile from './Profile'
import { fetchID } from '../../Fetchers/fetchData'

function mapState(store){
    return {
        profileState: {...store.profile.users},
        postState: [...store.posts.cache],
        authorized: store.profile.authorized
    }
}

function mapDispatch(dispatch){
    return{
        getID: (id)=>{dispatch(fetchID(id))}
    }
}

export default compose(
    connect(mapState, mapDispatch),
    hocLogin,
    withRouter
    )(Profile)