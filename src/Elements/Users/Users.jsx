import * as Axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import UserBlock from './UserBlock'

class Users extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <h2>Users</h2>
                <div>
                    {this.props.userStore.map((user, index)=>{
                        return (<UserBlock key={user.name + Math.random()} index={index} user={user} follower={this.props.follower}/>)
                    })}
                    <button onClick={()=>{this.props.adder()}}>adder</button>
                </div>
            </React.Fragment>
        )
    }
}

/* const Users = ({userStore, follower})=>{
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
} */

const userstr = (state)=>{
    return {
        userStore: [...state.users]
    }
}

const handlers = (dispatch)=>{
    return {
        follower: (index)=>dispatch({type: 'CHANGE_FOLLOW', index: index}),
        adder: ()=> {
            Axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response) => {
                    let arrays = response.data.items
                    arrays.map((array)=>
                        dispatch({type: 'ADD_USER', users: {
                            name: array.name,
                            src:'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg',
                            slogan: array.status,
                            city: array.country,
                            followed: array.follow ? 'followed' : 'unfollowed'
                        }})
                    )
                    
                })
            }
        }
    }

const connectedUser = connect(userstr, handlers)(Users)

export default connectedUser