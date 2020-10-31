import React from 'react';
/* import Form from '../MainContent/Form' */
import List from '../MainContent/List'
import NameList from './NameList'
import MCSS from './CSS/Messages.module.css'
import { Route } from 'react-router-dom'
import ContainerToForm from '../../Container/containerToForm'
import { hocLogin } from '../../hocLogin'
import { connect } from 'react-redux';
import { compose } from 'redux';

function Messages({messageState, names}){
    return(
                <div className={MCSS.messages}>
                    <div className={MCSS.nameList}>
                        <Route path='/messages' component={NameList.bind(null, {names})}></Route>
                    </div>
                    <div className={MCSS.messageList}>
                        <ContainerToForm from={'MESSAGE'} />
                        <List state={messageState} />
                    </div>
                </div>   
    )
}

let mapState =(state)=>{
    return {
        names: [...state.names],
        messageState: [...state.messages.cache],
        authorized: state.profile.authorized
    }
}

export default compose(
    connect(mapState),
    hocLogin)(Messages)