import React from 'react';
import List from '../MainContent/List'
import NameList from './NameList'
import MCSS from './CSS/Messages.module.css'
import { Route } from 'react-router-dom'
import Form from '../MainContent/Form'
import { hocLogin } from '../../hocLogin'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getMessSelector } from './Reselect-Test';

function Messages({messageState}){
    
    return(
                <div className={MCSS.messages}>
                    {console.log(this)}
                    {console.log('MESSSAGEEEEEE')}
                    <div className={MCSS.nameList}>
                        <Route path='/messages' component={NameList}></Route>
                    </div>
                    <div className={MCSS.messageList}>
                        <Form from={'MESSAGE'} />
                        <List state={messageState} />
                    </div>
                </div>   
    )
}

let mapState =(state)=>{
    return {
        messageState: getMessSelector(state),
        authorized: state.profile.authorized
    }
}

export default compose(
    connect(mapState),
    hocLogin)(Messages)