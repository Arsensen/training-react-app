const store = {
    subscriber(Render){
        this.Render = Render
    },

    _state: {
        navBar: [ {name: 'profile'}, {name: 'messages'}, {name: 'news'}, {name: 'groups'}, {name: 'options'} ],
        posts: [{title: 'HHHHHHHHHHHHHHHHHHHHHHHHHHHHH', id: 222222}, {title: 'HHHHHHHHdsddddddddddddddddsssss', id: 333333}],
        messages: [{title: ['hi-hi', "what's up?", 'answer, you, shit!'], id: 1}]
    },
    
    addState(type, object){
        if(type === 'nav'){
            this._state.navBar.push(object)
        }else if(type === 'post'){
            this._state.posts.push(object)
        }else if(type === 'message'){
            this._state.messages.push(object)
        }
        this.Render(this);
    },

    getState(type){
        if(type === 'nav'){
            return this._state.navBar
        }else if(type === 'post'){
            return this._state.posts
        }else if(type === 'message'){
            return this._state.messages
        }
    }
}

export default store
