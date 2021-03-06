import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './CSS/Users.module.css'

const UserBlock = ({user, serverUnfollow, index})=>{
    
    return (
        <div className={styles.userBlock}>
            <div className={styles.userName}>{user.name}</div>
            <div className={styles.userBlockIn}>
                <span className={styles.userLeftBlock}>
                    <NavLink to={'/profile/'+ user.id}>
                        <img className={styles.userImage} src={user.src} alt="Foto"/>
                    </NavLink>
                    <button onClick={()=>{serverUnfollow(user, index)}} className={user.followed === 'followed'? styles.userButton : styles.userButton + ' ' + styles.userButtonUn}>{user.followed}</button>
                </span>
                <span className={styles.userRightBlock}>
                    <span className={styles.userSlogan}>{user.slogan}</span>
                    <span className={styles.userCity}>{user.city}</span>
                </span>
            </div>
        </div>
    )
}

export default UserBlock