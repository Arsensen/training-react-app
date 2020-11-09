let initialState = [{name: 'Arty', id: 1}, {name: 'Leo', id: 2}, {name: 'Mary', id: 3}]

const namesReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'NAME_CHANGE':
            let newState = [...state]
            newState.unshift({name: action.name, id: action.count})
            return newState
        default:
            return state
    }
}

export default namesReducer