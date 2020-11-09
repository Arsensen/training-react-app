import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import UserBlock from './UserBlock'
import styles from './CSS/Users.module.css'
import { unfollow, pages } from '../../Fetchers/fetchData'
import { compose } from 'redux'
import { hocLogin } from '../../hocLogin'

const Users = ({adder, users, serverUnfollow})=> {
        const [pages, setPages] = useState([1, 2, 3, 4, 5])
    
        function right(last){
            if(last === 100) return
            let array = []
            for(let i = last+1; i<=last+5; i++){
                array.push(i)
            }
            setPages(array)
        }
    
        function left(first){
            if(first === 1) return
            let array = []
            for(let i = first-5; i<=first-1; i++){
                array.push(i)
            }
            setPages(array)
        }
    
        useEffect(()=> {adder(pages[0])}
        , [pages, adder])
    
        return(
            <React.Fragment>
                <h2>Users</h2>
                <div className={styles.pages}>
                    <button onClick={()=>{left(pages[0])}}>left</button>
                    {pages.map((num => <span onClick={()=>{adder(num)}} className={users.count === num ? styles.checkedPage : ''} key={num}>{num}</span>))}
                    <button onClick={()=>{right(pages[4])}}>right</button>
                </div>
                <div>
                    {users.users.map((user, index)=>{
                        return (<UserBlock key={user.name} index={index} user={user} serverUnfollow={serverUnfollow}/>)
                    })}
                </div>
            </React.Fragment>
        )
}

const mapState = (state)=>{
    return {
        users: {...state.users},
        authorized: state.profile.authorized
    }
}

const mapDispatch = (dispatch)=>{
    return {
            adder: (count)=> { dispatch(pages(count)) },
            serverUnfollow: (user, index)=> dispatch(unfollow(user, index))
        }
    }

export default compose(
    connect(mapState, mapDispatch),
    hocLogin)(Users)