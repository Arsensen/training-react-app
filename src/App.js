import React from 'react';
import './App.css';
import Header from './Elements/Header';
import MainContainer from './Elements/MainContent/MainContainer';
import Messages from './Elements/Messages/Messages';
import Navbar from './Elements/Navbar';
import Users from './Elements/Users/Users'
import { BrowserRouter, Route } from 'react-router-dom';


function App({store}) {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Navbar  store = {store} />
      <div className='mcontentCover'>
        <Route exact path='/' component={MainContainer} />
        <Route exact path='/profile' component={MainContainer} />
        <Route path='/profile/:userID' component={MainContainer} />
        <Route path='/messages' component={Messages} />
        <Route path='/users' component={Users} />
      </div>
      <footer className='footer'></footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
