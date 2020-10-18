const CHANGE_FOLLOW = 'CHANGE_FOLLOW'


const initialState = {
    users: [],
    count: 0,
    isFetching: false
}

const usersReducer = (state = initialState, action)=>{
    let newState = state
    if(action.type === CHANGE_FOLLOW){
        newState = {...state}
        newState.users[action.index].followed = state.users[action.index].followed === 'followed'? 'unfollowed': 'followed'
    } else if(action.type === 'ADD_USER'){
        newState = [...state, {...action.users}]
    }
    else if(action.type === 'GET_USERS'){
        newState.users = [...action.users]
    }
    else if(action.type==='CHANGE_COUNT'){
        newState.count = action.count
    }
    else if(action.type === 'CHANGE_FETCHING'){
        newState.isFetching = action.isFetching
    }
    return newState
}

export default usersReducer