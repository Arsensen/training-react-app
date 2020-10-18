import React from 'react';
/* import Form from '../MainContent/Form' */
import List from '../MainContent/List'
import NameList from './NameList'
import MCSS from './CSS/Messages.module.css'
import { Route } from 'react-router-dom'
import Context from '../../Context';
import ContainerToMessage from '../../Container/containerToMessages'
import { hocLogin } from '../../hocLogin'
import { connect } from 'react-redux';
import { compose } from 'redux';

function Messages(){
    return( 
        <Context.Consumer>
            {store =>(
                <div className={MCSS.messages}>
                    <div className={MCSS.nameList}>
                        <Route path='/messages' component={NameList.bind(this, {names: store.getState().names, key:store.getState().names.id})}></Route>
                    </div>
                    <div className={MCSS.messageList}>
                        <ContainerToMessage />
                        {/* <Form store={store} idt='message'/> */}
                        <List store={store} idt='message'/>
                    </div>
                </div>)
            }       
        </Context.Consumer>
    )
}

let mapState =(state)=>{
    return {
        authorized: state.profile.authorized
    }
}

export default compose(
    connect(mapState),
    hocLogin)(Messages)