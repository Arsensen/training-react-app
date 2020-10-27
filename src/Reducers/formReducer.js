const initialState = {}

const formReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'UPDATE_SUBMITTED_FORM':
            let newState = {...action.form}
            return newState
        default:
            return state
    }
}



export default formReducer