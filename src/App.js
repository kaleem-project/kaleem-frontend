import React, {Component} from 'react';
import Sign from './Sign/Sign';
// import classes from './App.css';
import MainPage from './MainPage/MainPage';
import Chat from './Chat/Chat';
import Room from './Room/Room';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/room" element={<Room />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
