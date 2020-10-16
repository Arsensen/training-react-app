import React from 'react'
import List from './List'
/* import Form from './Form' */
import ContainerToForm from '../../Container/containerToForm.jsx'
import Styles from './CSS/MainContent.module.css'
import * as Axios from 'axios'

class MainContent extends React.Component{
    
    componentDidMount(){
        if(!this.props.match.params.userID) return
        Axios.get( 'https://social-network.samuraijs.com/api/1.0/profile/' + this.props.match.params.userID)
            .then(response=>{
                this.props.addProfile({photo: response.data.photos.large, name: response.data.fullName})
            })
    }


    render(){
        let image = <img src={this.props.profileState.photo || 'https://avatars.mds.yandex.net/get-pdb/245485/8bd99b4a-58f7-418d-a8d7-77c4372ef967/s1200'} alt="Profile foto"/>
        return (
            <div className={Styles.mcontent}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr4bGrRqA-Pdyvoda4yCcYMkjB4X__sPnSPQ&usqp=CAU" alt="main foto"/>
                <div>
                    <div>
                        {image}
                        <span>
                            <span>{this.props.profileState.name}, 23</span><br/>
                            <span>Genoa, Italy</span><br/>
                            <span>Seekin' for the greatest moment in my life</span>
                        </span>
                    </div>
                </div>
                <ContainerToForm />
                <List postState = {this.props.postState} idt='post' image={image}/>
            </div>)
    }
}

export default MainContent