import React from 'react'
import Posts from './Posts'

function List({store, idt, image}){
    let func;
    idt === 'post'? func=store.getState().posts.cache : func = store.getState().messages.cache
    return func.length ? (<ul>{func.map((post, index)=> {
        return <Posts post={post} index={index} image={image} key={post.id}/>}).reverse()}</ul>) : <p>No Posts!</p>
}

export default List