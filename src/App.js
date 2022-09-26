import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { atom, useRecoilState } from 'recoil';
import { Main, Login, Events, Question, Poll, Oauth2 } from './pages';

const App = () => {
  const user = atom({
    key: 'userInfo',
    default: null,
  });
  const [userInfo, setUserInfo] = useRecoilState(user);
  const [userF, setUserF] = useState('a');

  const getUser = async () => {
    const jwt = localStorage.getItem('accessToken');
    console.log('before : ' + jwt);
    if (jwt) {
      try {
        const response = await axios.get('/api/v1/member', {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        });
        console.log(jwt);
        setUserF(response.data);
        console.log(userInfo);
      } catch {
        console.log('xxx');
      }
    }
  };
  useEffect(() => {
    getUser();
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
