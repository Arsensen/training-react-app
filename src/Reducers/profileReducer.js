
let initialState = {
    users:{
        photo: "https://i.pinimg.com/736x/98/2b/01/982b012530231e444573cc35bdeed3cd.jpg",
        name: 'Ellie'
    },
    authorized: true
}

const usersReducer = (state = initialState, action)=>{
    let newState ={...state}
    if(action.type === 'ADD_PROFILE'){
        newState.users = {...action.profile}
    }
    else if(action.type === 'AUTHORIZED'){
        newState.authorized = true
    }
    else if(action.type === 'UNAUTHORIZED'){
        newState.authorized = false
    }
    return newState
}

export default usersReducer