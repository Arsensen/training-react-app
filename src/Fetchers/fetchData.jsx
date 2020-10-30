import Axios from 'axios'

const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{
        "API-KEY": "1901d692-4339-43f9-a372-3ef79acae891"
    }
})

export const data = ()=> (dispatch)=> instance.get('auth/me')
    .then(response=>{
        dispatch({type: 'ADD_PROFILE', profile: {
            name: response.data.data.login,
            photo: undefined
        }})
        !response.resultCode && dispatch({type: 'AUTHORIZED'})
    }
)

export const login = ({email, password, rememberMe})=>(dispatch)=>{
    instance.post('auth/login', {email, password, rememberMe})
        .then(
            response=>{
                (response.data.resultCode === 0) && dispatch(data())
            }
        )
}

export const logout = ()=>(dispatch)=>{
    instance.delete('auth/login')
            .then(response=>{
                response.data.resultCode === 0 && dispatch({type: 'UNAUTHORIZED'})
            })
}

export const unfollow = (user, index)=> (dispatch, getState)=> {
    debugger
    if(getState().users.isFetching) return
    dispatch({type: 'CHANGE_FETCHING', isFetching: true})
    let follow = user.followed ==='followed'? instance.delete('follow/' + user.id , {}) : instance.post('follow/' + user.id, {})
    follow.then(response=>{
                !response.data.resultCode && dispatch({ type: 'CHANGE_FOLLOW', index: index })
                dispatch({type: 'CHANGE_FETCHING', isFetching: false})
            })
}


export const pages = (count)=> (dispatch)=> {
        dispatch({type: 'CHANGE_COUNT', count})
        instance.get('users?page=' + count)
                .then((response) => {
                    let arrays = response.data.items
                    let arr = arrays.map((array)=>{
                        return {
                            name: array.name,
                            src: array.photos.small || 'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg',
                            slogan: array.status,
                            city: array.country,
                            followed: array.followed ? 'followed' : 'unfollowed',
                            id: array.id
                        }
                    })
                    dispatch({type: 'GET_USERS', users: arr})
                })
    
}

export const fetchID = (id, addProfile)=>(dispatch)=>{
    if(!id) return
    instance.get( 'profile/' + id)
        .then(response=>{
                dispatch({type: 'ADD_PROFILE', profile: {photo: response.data.photos.large, name: response.data.fullName, id: response.data.UserId}})
            }
        )
}