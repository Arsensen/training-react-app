import React from 'react';
import Form from '../MainContent/Form'
import List from '../MainContent/List'
import NameList from './NameList'
import MCSS from './CSS/Messages.module.css'
import { BrowserRouter, Route } from 'react-router-dom'



function Messages({store}){
    debugger
    const names = store.getState().names
    /* React.useState([{name: 'Arty', id: 1}, {name: 'Leo', id: 2}, {name: 'Mary', id: 3}]) */
    
    return( 
        <BrowserRouter>       
        <div className={MCSS.messages}>
            <div className={MCSS.nameList}>
                <Route path='/messages' component={NameList.bind(this, {names, key:names.id})}></Route>
            </div>
            <div className={MCSS.messageList}>
                <Form store={store} idt='message'/>
                <List store={store} idt='message'/>
            </div>    
        </div>
        </BrowserRouter>
    )
}

export default Messages