import * as serviceWorker from './serviceWorker';
import store from './redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Context from './Context'


let Render = (data) => {
  return ReactDOM.render(
    <React.StrictMode>
      <Context.Provider value={store}>
        <App state ={data} store={store}/>
      </Context.Provider>
    </React.StrictMode>,
  document.getElementById('root')
)}
debugger

Render(store.getState())

store.subscribe(() => {
  let state = store.getState()
  Render(state)
  }
)

export default Render

serviceWorker.unregister();
