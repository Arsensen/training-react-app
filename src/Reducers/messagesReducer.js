const ADD_MESSAGE = 'ADD_MESSAGE';

let initialPosts = {
    cache: [{title: 'hi-hi'}, {title: "what's up?"}, {title: 'answer, you, shit!'} ]
}

const messagesReducer = (state = initialPosts, action)=>{
    let newState = {...state}
    if(action.type === ADD_MESSAGE){
        let newMessage = {
                    title: action.title
        }
        newState.cache = [...state.cache, newMessage]
    }
    return newState
}

export default messagesReducer