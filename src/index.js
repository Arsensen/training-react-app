import * as serviceWorker from './serviceWorker';
import store from './redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import Context from './Context';

//Вынести все наслоения внутри рендера в контейнерную компоненту и импортировать сюда

let Render = ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Context.Provider value={store}>
        {console.log('render')}
        <App state ={store.getState()} store={store}/>
        </Context.Provider>
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
)

export default Render

serviceWorker.unregister();
