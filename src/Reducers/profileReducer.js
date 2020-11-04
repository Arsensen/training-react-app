
let initialState = {
    users:{
        photo: "https://i.pinimg.com/736x/98/2b/01/982b012530231e444573cc35bdeed3cd.jpg",
        name: 'Ellie'
    },
    authorized: true,
    urlCaptcha: null,
    message: null
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
    else if(action.type === 'ADD_CAPTCHA'){
        newState.urlCaptcha = action.urlCaptcha
    }
    else if(action.type === 'ADD_WARNING'){
        newState.message = action.message
    }
    return newState
}

export default usersReducer