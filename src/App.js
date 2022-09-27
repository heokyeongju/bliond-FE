import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { atom, useRecoilState } from 'recoil';
import { Main, Login, Events, Question, Poll, Oauth2 } from './pages';
import {UserAtom} from "./recoil/UserAtom";

const App = () => {
  const [userInfo, setUserInfo] = useRecoilState(UserAtom);
  const [user, setUser] = useState(0);
  useEffect(() => {
    const jwt = localStorage.getItem('accessToken');
    (async () => {
      const { data } = await axios.get('/api/v1/member', {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      });
      setUserInfo(data.data[0])
    })();
  }, []);
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/member/login" element={<Login />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/event/:id/questions" element={<Question />} />
        <Route exact path="/event/:id/polls" element={<Poll />} />
        <Route exact path="/oauth2/redirect" element={<Oauth2 />} />
      </Routes>
    </div>
  );
};
export default App;
