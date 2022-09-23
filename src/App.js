import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main, Login, Events, Question, Poll } from './pages';

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/member/login" element={<Login />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:id/questions" element={<Question />} />
          <Route path="/event/:id/polls" element={<Poll />} />
        </Routes>
      </div>
    );
  }
}

export default App;
