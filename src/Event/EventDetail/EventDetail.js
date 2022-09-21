import React from 'react';
import EventLayout from '../EventLayout';
import Home from '../Home';
import Question from '../Question';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Poll from '../Poll';

function EventDetail() {
  return (
    <div>
      <EventLayout></EventLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/event" element={<Home />}></Route>
          <Route path="/event/1/questions" element={<Question />}></Route>
          <Route path="/event/1/polls" element={<Poll />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default EventDetail;
