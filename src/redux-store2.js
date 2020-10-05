import Redux from 'redux'
import navbarReducer from './Reducers/navbarReducer'
import postsReducer from './Reducers/postsReducer'
import messagesReducer from './Reducers/messagesReducer'


let reducersBatch = Redux.combineReducers({
    navbar: navbarReducer,
    posts: postsReducer,
    messages: messagesReducer
})

let store = Redux.createStore(reducersBatch)

export default store