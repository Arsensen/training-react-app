import React from 'react'

function Form({store, idt}){
    function handler(event){
        event.preventDefault()
        debugger
        let newValue ={type: `ADD_${idt.toUpperCase()}`}
        store.dispatch(newValue)
    }

    function handler2(event){
        debugger
        store.dispatch({type: `UPDATE_NEW_${idt.toUpperCase()}`, title: event.target.value, id: new Date() })
    }

    return(
        <form onSubmit={handler}>
            <textarea  onChange={handler2} />
            <button>post</button>
        </form>
    )
}

export default Form