import React from 'react'
import styles from './CSS/Users.module.css'

const UserBlock = ({user, follower, index})=>{
    return (
        <div className={styles.userBlock}>
            <div className={styles.userName}>{user.name}</div>
            <div className={styles.userBlockIn}>
                <span className={styles.userLeftBlock}><img className={styles.userImage} src={user.src} alt="Foto"/><button onClick={()=>follower(index)} className={user.followed === 'followed'? styles.userButton : styles.userButton + ' ' + styles.userButtonUn}>{user.followed}</button></span>
                <span className={styles.userRightBlock}><span className={styles.userSlogan}>{user.slogan}</span><span className={styles.userCity}>{user.city}</span></span>
            </div>
        </div>
    )
}

export default UserBlock