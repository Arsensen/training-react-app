import React from 'react'


function Posts({post, image}){
    return(<li>
                    <span>
                        {image}
                        <span>{post.title}</span>
                    </span>
            </li>)
}

export default Posts