import {createStore, combineReducers} from 'redux'
import navbarReducer from './Reducers/navbarReducer'
import postsReducer from './Reducers/postsReducer'
import messagesReducer from './Reducers/messagesReducer'
import namesReducer from './Reducers/namesReducer'

const reducersBatch = combineReducers({
    navbar: navbarReducer,
    posts: postsReducer,
    messages: messagesReducer,
    names: namesReducer
})

const store = createStore(reducersBatch)

export default store
window.store = store