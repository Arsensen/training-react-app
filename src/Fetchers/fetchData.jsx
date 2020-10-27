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
                debugger
                response.data.resultCode === 0 && dispatch({type: 'UNAUTHORIZED'})
            })
}

export const unfollow = (id, callback, followed, userStore)=> (dispatch)=> {
    if(userStore.isFetching) return
    dispatch({type: 'CHANGE_FETCHING', isFetching: true})
    let follow = followed ==='followed'? instance.delete('follow/' + id , {}) : instance.post('follow/' + id , {})
    follow.then(response=>{
                !response.data.resultCode && callback()
                dispatch({type: 'CHANGE_FETCHING', isFetching: false})
            })
}


export const pages = (count)=> (dispatch)=> {
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
                addProfile({photo: response.data.photos.large, name: response.data.fullName})
            }
        )
}