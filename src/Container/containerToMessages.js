import { connect } from 'react-redux'
import Form from '../Elements/MainContent/Form'


const handlerWrap =(dispatch)=>{
    return {
    
        handler: (event) => {
            event.preventDefault()
            dispatch({type: `ADD_MESSAGE`})
        },

        handler2: function handler2(event){
            if(event.target.value.trim())
            dispatch({type: `UPDATE_NEW_MESSAGE`, title: event.target.value, id: new Date() })
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