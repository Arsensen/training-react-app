const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

let initialPosts = {
    cache: [{title: 'Если в качестве аргумента mapDispatchToProps используется объект, то каждая функция в объекте будет воспринята в качестве генератора действий Redux и обёрнута в вызов метода хранилища dispatch(), что позволит вызывать его напрямую. Получившийся в результате объект с генераторами действий, dispatchProps, будет объединён со свойствами компонента.', id: 222222}, 
    {title: 'В следующем примере показан пример конструирования аргумента mapDispatchToProps, представляющего собой объект с генераторами действий, а так же то, как генераторы могут быть использованы в виде свойств компонента React.', id: 333333}],
    valueTimed: {title: 'VALUE FOR A TIME', id: 445466}
}

const postsReducer = (state = initialPosts, action)=>{
    let newState = {...state}
    if(action.type === ADD_POST){
        if(state.valueTimed.title){
            newState.cache = [...state.cache, {...state.valueTimed}]
            newState.valueTimed = ''
        }
    } else if(action.type === UPDATE_NEW_POST){
        let newPost = {
                    title: action.title,
                    id: action.id
                }
        newState.valueTimed = newPost
    }
    return newState
}

export default postsReducer