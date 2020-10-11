import { connect } from 'react-redux'
import Form from '../Elements/MainContent/Form'


const handlerWrap =(dispatch)=>{
    return {
    
        handler: (event) => {
            event.preventDefault()
            dispatch({type: `ADD_POST`})
        },

        handler2: function handler2(event){
            dispatch({type: `UPDATE_NEW_POST`, title: event.target.value, id: new Date() })
        },

        clear: function clear(textarea){
            textarea.current.value = ''
        }

    }
}

const storage = (state)=>{
    return {store: state.posts}
}


const connected = connect(storage, handlerWrap)(Form)
export default connected