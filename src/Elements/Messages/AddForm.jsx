import React from 'react'



function AddForm({setState, added}){
    let reference = React.createRef()
    let [addNames, setNames] = React.useState([])
    
    
    function handler(){
        setNames(addNames.concat([<div>{reference.current.value}</div>]))
        setState(added.concat([<div>{reference.current.value}</div>]))
        reference.current.value = ''
    }
    
    return(
        <div>
            {addNames}
            <form onSubmit={(event)=> event.preventDefault()}>
                <textarea ref={reference}></textarea>
                <button onClick={handler}></button>
            </form>
        </div>
    )
}

export default AddForm