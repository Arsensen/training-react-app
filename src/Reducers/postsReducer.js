const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

let initialPosts = {
    cache: [{title: 'HHHHHHHHHHHHHHHHHHHHHHHHHHHHH', id: 222222}, {title: 'HHHHHHHHdsddddddddddddddddsssss', id: 333333}],
    valueTimed: {title: 'VALUE FOR A TIME', id: 445466}
}

const postsReducer = (state = initialPosts, action)=>{
    let newState = {...state}
    debugger
    if(action.type === ADD_POST){
        if(state.valueTimed.title){
            newState.cache = [...state.cache, {...state.valueTimed}]
            newState.valueTimed = ''
        }
    } else if(action.type === UPDATE_NEW_POST){
        let newPost = {
                    title: action.title,
                    id: action.id
                }
        newState.valueTimed = newPost
    }
    return newState
}

export default postsReducer