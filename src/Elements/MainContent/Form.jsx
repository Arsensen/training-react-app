import React from 'react'
import { createRef } from 'react'

function Form({store, idt}){
    let textarea = createRef()
    function handler(event){
        event.preventDefault()
        let newValue ={type: `ADD_${idt.toUpperCase()}`}
        store.dispatch(newValue)
        textarea.current.value = ''
    }

    function handler2(event){
        store.dispatch({type: `UPDATE_NEW_${idt.toUpperCase()}`, title: event.target.value, id: new Date() })
    }

    return(
        <form onSubmit={handler}>
            <textarea ref={textarea} onChange={handler2} />
            <button>post</button>
        </form>
    )
}

export default Form