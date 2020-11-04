import {createSelector} from 'reselect'

const selector = (state)=> state.names

export const getNamesSelector = createSelector(
    selector,
    (names)=>{
        console.log('i am inside selector') 
        console.log(names)
        return names
    }
)

const messSelect = (state)=> state.messages.cache

export const getMessSelector= createSelector(
    messSelect,
    (state)=>{ 
        if(state.length > 3){
            let termState = state.pop()
            state.unshift(termState)
        }
        return state
    }
)