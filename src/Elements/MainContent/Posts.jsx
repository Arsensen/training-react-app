import React from 'react'


function Posts({post, index, image}){
    return(<li>
                    <span>
                        {image}
                        <strong>{index + 1}</strong>
                        <span>{post.title}</span>
                    </span>
            </li>)
}

export default Posts