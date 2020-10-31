const ADD_POST = 'ADD_POST';

let initialPosts = {
    cache: [{title: 'Если в качестве аргумента mapDispatchToProps используется объект, то каждая функция в объекте будет воспринята в качестве генератора действий Redux и обёрнута в вызов метода хранилища dispatch(), что позволит вызывать его напрямую. Получившийся в результате объект с генераторами действий, dispatchProps, будет объединён со свойствами компонента.', id: 222222}, 
    {title: 'В следующем примере показан пример конструирования аргумента mapDispatchToProps, представляющего собой объект с генераторами действий, а так же то, как генераторы могут быть использованы в виде свойств компонента React.', id: 333333}]
}

const postsReducer = (state = initialPosts, action)=>{
    let newState = {...state}
    if(action.type === ADD_POST){
        let newPost = {
            title: action.title,
            id: action.id
        }
    newState.cache = [...state.cache, newPost]
    }
    return newState
}

export default postsReducer