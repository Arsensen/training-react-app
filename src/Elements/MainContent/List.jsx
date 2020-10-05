import React from 'react'
import Posts from './Posts'

function List({store, idt, image}){
    let func;
    debugger
    idt === 'post'? func=store.getState().posts : func = store.getState().messages
    return func.length ? (<ul>{func.map((post, index)=> {
        return <Posts post={post} index={index} image={image} key={post.id}/>}).reverse()}</ul>) : <p>No Posts!</p>
}

export default List