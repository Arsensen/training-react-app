import React from 'react'
import { connect } from 'react-redux'
import UserBlock from './UserBlock'
import styles from './CSS/Users.module.css'
import { unfollow, pages } from '../../Fetchers/fetchData'
import { compose } from 'redux'
import { hocLogin } from '../../hocLogin'

class Users extends React.Component{
    
    render(){
        let pages = [1, 2, 3, 4, 5, 6]

        return(
            <React.Fragment>
                <h2>Users</h2>
                <div className={styles.pages}>
                    {pages.map((num => <span onClick={()=>{this.props.changeCount(num); this.props.adder(num)}} className={this.props.userStore.count === num? styles.checkedPage: ''} key={num+'page'}>{num}</span>))}
                </div>
                <div>
                    {this.props.userStore.users.map((user, index)=>{
                        return (<UserBlock key={user.name + Math.random()} index={index} userStore={this.props.userStore} user={user} follower={this.props.follower} serverUnfollow={this.props.serverUnfollow}/>)
                    })}
                </div>
            </React.Fragment>
        )
    }
}

const mapState = (state)=>{
    return {
        userStore: {...state.users},
        authorized: state.profile.authorized
    }
}

const mapDispatch = (dispatch)=>{
    return {
            follower: (index)=>dispatch({type: 'CHANGE_FOLLOW', index: index}),
            adder: (count)=> { dispatch(pages(count)) },
            changeCount: (num)=>dispatch({type: 'CHANGE_COUNT', count: num}),
            serverUnfollow: (id, callback, followed, userStore)=> dispatch(unfollow(id, callback, followed, userStore))
        }
    }

export default compose(
    connect(mapState, mapDispatch),
    hocLogin)(Users)