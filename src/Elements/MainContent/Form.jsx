import React from 'react'
import { createRef } from 'react'

function Form({store, handler, handler2, clear}){
    let textarea = createRef()
    return(
        <form onSubmit={(event)=>{
            handler(event);
            clear(textarea)
            }}>
            <textarea ref={textarea} onChange={handler2} />
            <button>post</button>
        </form>
    )
}

export default Form