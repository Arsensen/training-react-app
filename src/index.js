import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';

//Вынести все наслоения внутри рендера в контейнерную компоненту и импортировать сюда

export default ReactDOM.render(
        <AppContainer />,
        document.getElementById('root')
)

serviceWorker.unregister();
