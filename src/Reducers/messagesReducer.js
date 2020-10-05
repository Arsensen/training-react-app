const ADD_MESSAGE = 'ADD_MESSAGE';


let initialPosts = [{title: 'hi-hi', id: 1}, {title: "what's up?", id: 2}, {title: 'answer, you, shit!', id: 3} ]

const messagesReducer = (state = initialPosts, action)=>{
    if(action.type === ADD_MESSAGE){
        let newMessage = {
            title: action.title,
            id: action.id
        }
        state.push(newMessage)
    }
    return state
}

export default messagesReducer