import React, { memo } from 'react'
import Posts from './Posts'

const List = memo(({state, image})=>{
    console.log(this)
    return state.length ? (<ul>{state.map((post, index)=> {
        return <Posts post={post} image={image} key={index+1}/>})}</ul>) : <p>No Posts!</p>
})

export default List