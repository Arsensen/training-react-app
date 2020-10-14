import * as Axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import UserBlock from './UserBlock'
import styles from './CSS/Users.module.css'

class Users extends React.Component{
    
    render(){
        let pages = []
        for(let i = 1; i <= 5; i++){
            pages.push(i)
        }

        return(
            <React.Fragment>
                <h2>Users</h2>
                <div className={styles.pages}>
                    {pages.map((num => <span onClick={()=>{this.props.changeCount(num); this.props.adder(num)}} className={this.props.userStore.count === num? styles.checkedPage: ''} key={num+'page'}>{num}</span>))}
                </div>
                <div>
                    {this.props.userStore.users.map((user, index)=>{
                        return (<UserBlock key={user.name + Math.random()} index={index} user={user} follower={this.props.follower}/>)
                    })}
                </div>
            </React.Fragment>
        )
    }
}

const userstr = (state)=>{
    return {
        userStore: {...state.users}
    }
}

const handlers = (dispatch)=>{
    return {
        follower: (index)=>dispatch({type: 'CHANGE_FOLLOW', index: index}),
        adder: (count)=> {
            Axios.get('https://social-network.samuraijs.com/api/1.0/users?page=' + count)
                .then((response) => {
                    let arrays = response.data.items
                    let arr = arrays.map((array)=>{
                        return {
                            name: array.name,
                            src: array.photos.small || 'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg',
                            slogan: array.status,
                            city: array.country,
                            followed: array.follow ? 'followed' : 'unfollowed',
                            id: array.id
                        }
                    })
                    dispatch({type: 'GET_USERS', users: arr})
                })
            },
        changeCount: (num)=>{dispatch({type: 'CHANGE_COUNT', count: num})}
        }
    }

const connectedUser = connect(userstr, handlers)(Users)

export default connectedUser