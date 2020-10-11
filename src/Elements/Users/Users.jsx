import React from 'react'
import { connect } from 'react-redux'
import UserBlock from './UserBlock'

const Users = ({userStore, follower})=>{
    return (
        <React.Fragment>
            <h2>Users</h2>
            <div>
                {userStore.map((user, index)=>{
                    return (<UserBlock key={user.name + Math.random()} index={index} user={user} follower={follower}/>)
                })}
            </div>
        </React.Fragment>
    )
}

const userstr = (state)=>{
    return {
        userStore: [...state.users]
    }
}

const handlers = (dispatch)=>{
    return {
        follower: (index)=>dispatch({type: 'CHANGE_FOLLOW', index: index})
    }
    
}

const connectedUser = connect(userstr, handlers)(Users)

export default connectedUser