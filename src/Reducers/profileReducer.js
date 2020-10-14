
let initialState = {
    photo: "https://i.pinimg.com/736x/98/2b/01/982b012530231e444573cc35bdeed3cd.jpg",
    name: 'Ellie'
}

const usersReducer = (state = initialState, action)=>{
    let newState ={...state}
    if(action.type === 'ADD_PROFILE'){
        newState = {...action.profile}
    }
    return newState
}

export default usersReducer