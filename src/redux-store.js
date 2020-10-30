import {createStore, combineReducers, applyMiddleware} from 'redux'
import navbarReducer from './Reducers/navbarReducer'
import postsReducer from './Reducers/postsReducer'
import messagesReducer from './Reducers/messagesReducer'
import namesReducer from './Reducers/namesReducer'
import usersReducer from './Reducers/usersReducer'
import profileReducer from './Reducers/profileReducer'
import thunk from 'redux-thunk'
import formReducer from './Reducers/formReducer'



const reducersBatch = combineReducers({
    navbar: navbarReducer,
    posts: postsReducer,
    messages: messagesReducer,
    names: namesReducer,
    users: usersReducer,
    profile: profileReducer,
    finalForm: formReducer
})

const store = createStore(reducersBatch, applyMiddleware(thunk))

export default store
window.store = store