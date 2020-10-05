const ADD_POST = 'ADD_POST';
/* const UPDATE_NEW_POST = 'UPDATE_NEW_POST'; */

let initialPosts = [{title: 'HHHHHHHHHHHHHHHHHHHHHHHHHHHHH', id: 222222}, {title: 'HHHHHHHHdsddddddddddddddddsssss', id: 333333}]

const postsReducer = (state = initialPosts, action)=>{
    debugger
    if(action.type === ADD_POST){
        debugger
        let newPost = {
            title: action.title,
            id: action.id
        }
        state.push(newPost)
    }
    return state
}

export default postsReducer