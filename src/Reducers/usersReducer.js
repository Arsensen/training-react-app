const CHANGE_FOLLOW = 'CHANGE_FOLLOW'


const initialState = [{name: 'Peter', src: 'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg', slogan: 'I am god!', city: 'Kaliningrad', followed: 'followed'}, {name: 'Mark', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8REzjJ8iUCBZiUhOLISFwIiQF9-lqmIKRbQ&usqp=CAU', slogan: 'I am shit!', city: 'Odessa', followed: 'unfollowed'},
{name: 'Sveta', src: 'https://cdn.footballua.tv/i/image_650x360/uploads/football-media/image/5e1/362/b16/5e1362b169dc4_.jpeg', slogan: 'I am slut!', city: 'Kazan', followed: 'unfollowed'}, {name: 'Leonard', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/President_Vladimir_Putin.jpg/300px-President_Vladimir_Putin.jpg', slogan: 'I am gay!', city: 'Saint-Petersberg', followed: 'followed'}, {name: 'Peter', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8REzjJ8iUCBZiUhOLISFwIiQF9-lqmIKRbQ&usqp=CAU', slogan: 'I am god!', city: 'Kaliningrad', followed: 'followed'}]

const usersReducer = (state = initialState, action)=>{
    let newState = state
    if(action.type === CHANGE_FOLLOW){
        newState = [...state]
        newState[action.index].followed = state[action.index].followed === 'followed'? 'unfollowed': 'followed'
    } else if(action.type === 'ADD_USER'){
        newState = [...state, {...action.users}]
    }
    return newState
}

export default usersReducer