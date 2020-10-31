import { connect } from 'react-redux'
import Form from '../Elements/MainContent/Form'

//type

const handlerWrap =(dispatch)=>{
    return {
        submitter: (event, from) => {
            event.preventDefault()
            dispatch({type: `ADD_${from}`})
        },

        changer: (event, from)=>{
            if(!event.target.value.trim()) return
            dispatch({type: `UPDATE_NEW_${from}`, title: event.target.value, id: new Date() })
        },

        clear: (textarea)=>{
            textarea.current.value = ''
        }
    }
}

export default connect(null, handlerWrap)(Form)