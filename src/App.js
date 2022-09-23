import React, { Component } from 'react';
import { Route, Routes, redirect } from 'react-router-dom';
import { Main, Login, Events, Question, Poll } from './pages';

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/member/login" element={<Login />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/event/:id/questions" element={<Question />} />
          <Route exact path="/event/:id/polls" element={<Poll />} />
        </Routes>
      </div>
    );
  }
}

export default App;
