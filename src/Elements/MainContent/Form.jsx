import React from 'react'

function Form({store, idt}){
    let newValue;
    function handler(event){
        event.preventDefault()
        if(newValue.title.trim()){
            store.dispatch(newValue)
            
        }
    }

    function handler2(event){
        let type;
        if(idt === 'post'){
            type = 'ADD_POST'
        }
        else{
            type = 'ADD_MESSAGE'
        }
        newValue = {type: type, title: event.target.value, id: new Date()}
    }

    return(
        <form onSubmit={handler}>
            <textarea placeholder='Write here' onChange={handler2} />
            <button>post</button>
        </form>
    )
}

export default Form