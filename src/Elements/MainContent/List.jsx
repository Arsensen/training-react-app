import React from 'react'
import Posts from './Posts'

function List({state, image}){
    return state.length ? (<ul>{state.map((post, index)=> {
        return <Posts post={post} index={index} image={image} key={index+1}/>}).reverse()}</ul>) : <p>No Posts!</p>
}

export default List