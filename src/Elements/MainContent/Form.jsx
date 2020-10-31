import React from 'react'
import { createRef } from 'react'

function Form({submitter, changer, clear, from}){
    let textarea = createRef()
    debugger
    return(
        <form onSubmit={(event)=>{
            submitter(event, from)
            clear(textarea)
        }}>
            <textarea ref={textarea} onChange={(event)=>changer(event, from)} />
            <button>post</button>
        </form>
    )
}

export default Form