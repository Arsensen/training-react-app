import Axios from 'axios'

const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{
        "API-KEY": "1901d692-4339-43f9-a372-3ef79acae891"
    }
})

export const data = ()=> instance.get('auth/me').then(response=>{
    return {
        name: response.data.data.login,
        photo: undefined
    }
})

export const unfollow = (id, callback)=> {
    instance.post('follow/' + id , {}).then(response=>{
        !response.data.resultCode && callback()
    })
}