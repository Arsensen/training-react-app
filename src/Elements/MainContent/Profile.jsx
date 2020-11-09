import React from 'react'
import List from './List'
import Form from './Form'
import Styles from './CSS/MainContent.module.css'
import { useEffect } from 'react'

const MainContent =({getID, match, profileState, postState})=>{
    useEffect(getID.bind(null, match.params.userID), [match.params.userID])
    let image = <img src={profileState.photo || 'https://avatars.mds.yandex.net/get-pdb/245485/8bd99b4a-58f7-418d-a8d7-77c4372ef967/s1200'} alt="Profile foto"/>
    return (
            <div className={Styles.mcontent}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr4bGrRqA-Pdyvoda4yCcYMkjB4X__sPnSPQ&usqp=CAU" alt="main foto"/>
                <div>
                    <div>
                        {image}
                        <span>
                            <span>{profileState.name}, 23</span><br/>
                            <span>Genoa, Italy</span><br/>
                            <span>Seekin' for the greatest moment in my life</span>
                        </span>
                    </div>
                </div>
                <Form from={'POST'} className={Styles.form} />
                <List state = {postState} image={image}/>
            </div>
            )
}

export default MainContent