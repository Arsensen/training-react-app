import React from 'react';
import './App.css';
import HeaderContainer from './Elements/Header/HeaderContainer';
import Profile from './Elements/MainContent/ProfileContainer';
import Messages from './Elements/Messages/Messages';
import Navbar from './Elements/Navbar';
import Users from './Elements/Users/Users';
import Login from './Elements/Login/Login';
import { BrowserRouter, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <HeaderContainer />
      <Navbar />
      <div className='mcontentCover'>
        <Route path='/login' component={Login} />
        <Route exact path='/' component={Profile} />
        <Route exact path='/profile' component={Profile} />
        <Route path='/profile/:userID' component={Profile} />
        <Route path='/messages' component={Messages} />
        <Route path='/users' component={Users} />
      </div>
      <footer className='footer'></footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
