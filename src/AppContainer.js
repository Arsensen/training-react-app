import store from './redux-store'
import React from 'react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import Context from './Context';

//Вынести все наслоения внутри рендера в контейнерную компоненту и импортировать сюда

let AppContainer = () => (
    <React.StrictMode>
      <Provider store={store}>
        <Context.Provider value={store}>
          <App />
        </Context.Provider>
      </Provider>
    </React.StrictMode>
)

export default AppContainer
