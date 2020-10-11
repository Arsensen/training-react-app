import React from 'react'
import List from './List'
/* import Form from './Form' */
import ContainerToForm from '../../Container/containerToForm.jsx'
import Styles from './CSS/MainContent.module.css'
import Context from '../../Context'


function MainContent(){
    let image = <img src="https://i.pinimg.com/736x/98/2b/01/982b012530231e444573cc35bdeed3cd.jpg" alt="Profile foto"/>
    return(
        <Context.Consumer>
            {store => {
                return (
                    <div className={Styles.mcontent}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr4bGrRqA-Pdyvoda4yCcYMkjB4X__sPnSPQ&usqp=CAU" alt="main foto"/>
                        <div>
                            <div>
                                <img src="https://i.pinimg.com/736x/98/2b/01/982b012530231e444573cc35bdeed3cd.jpg" alt="Profile foto"/>
                                <span>
                                    <span>Ellie, 23</span><br/>
                                    <span>Genoa, Italy</span><br/>
                                    <span>Seekin' for the greatest moment in my life</span>
                                </span>
                            </div>
                        </div>
                        {/* <Form store={store} idt='post'/> */}
                        <ContainerToForm />
                        <List store = {store} idt='post' image={image}/>
                    </div>)
            }
            }
        </Context.Consumer>
    )
}

export default MainContent