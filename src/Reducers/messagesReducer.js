const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';

let initialPosts = {
    cache: [{title: 'hi-hi', id: 1}, {title: "what's up?", id: 2}, {title: 'answer, you, shit!', id: 3} ],
    valueTimed: {title: 'Messages is active', id: 202}
}

const messagesReducer = (state = initialPosts, action)=>{
    let newState = {...state}
    if(action.type === ADD_MESSAGE){
        if(state.valueTimed.title){
            newState.cache = [...state.cache, {...state.valueTimed}]
            newState.valueTimed = ''
        }
    } else if(action.type === UPDATE_NEW_MESSAGE){
        let newMessage = {
                    title: action.title,
                    id: action.id
                }
        newState.valueTimed = newMessage
    }
    return newState
}

export default messagesReducer