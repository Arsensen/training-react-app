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
        if(response.resultCode) return
        dispatch({type: 'ADD_PROFILE', profile: {
            name: response.data.data.login,
            photo: undefined
        }})
        dispatch({type: 'AUTHORIZED'})
        dispatch({type: 'ADD_WARNING', message: null})
    })
    .catch(err=>console.log(err))

const fetchCaptcha =()=> async (dispatch)=>{
    let response = await instance.get('security/get-captcha-url')
    response.status === 200 && dispatch({type: 'ADD_CAPTCHA', urlCaptcha: response.data.url})
}

export const login = ({email, password, rememberMe, captcha})=>(dispatch)=>{
    instance.post('auth/login', {email, password, rememberMe, captcha})
        .then(
            response=>{
                if(response.data.resultCode === 1 || response.data.resultCode === 10) dispatch(fetchCaptcha())
                if(response.data.resultCode) return dispatch({type: 'ADD_WARNING', message: response.data.messages[0]})
                dispatch(data())
            }
        )
        .catch(err=>console.log(err))
}

export const logout = ()=>(dispatch)=>{
    instance.delete('auth/login')
            .then(response=>{
                response.data.resultCode === 0 && dispatch({type: 'UNAUTHORIZED'})
            })
            .catch(err=>console.log(err))
}

export const unfollow = (user, index)=> async (dispatch, getState)=> {
    if(getState().users.isFetching) return
    dispatch({type: 'CHANGE_FETCHING', isFetching: true})
    try{
        let response = await (user.followed ==='followed'? instance.delete('follow/' + user.id , {}) : instance.post('follow/' + user.id, {}))
        !response.data.resultCode && dispatch({ type: 'CHANGE_FOLLOW', index: index })
    }catch(err){
        console.log('Autorization problems')
        console.log(err)
    }
    finally{
        dispatch({type: 'CHANGE_FETCHING', isFetching: false})
    }
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
                    dispatch({type: 'GET_USERS', users: arr, count})
                })
    
}

export const fetchID = (id)=>(dispatch)=>{
    if(!id) return
    debugger
    instance.get( 'profile/' + id)
        .then(response=>{
                dispatch({type: 'ADD_PROFILE', profile: {photo: response.data.photos.large, name: response.data.fullName, id: response.data.UserId}})
            }
        )
}