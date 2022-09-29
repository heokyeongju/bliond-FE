import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Main, Login, Events, Question, Poll, Oauth2 } from './pages';
import { UserAtom } from './recoil/UserAtom';
// import SocketTest from "./socket/Socket";
import SocketTest from "./socket/SocketTest";

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
      setUserInfo(data.data[0]);
    })();
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/member/login" element={<Login />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:id/questions" element={<Question />} />
        <Route path="/event/:id/polls" element={<Poll />} />
        <Route path="/oauth2/redirect" element={<Oauth2 />} />
        <Route path="/socket/socket-test" element={<SocketTest />} />
      </Routes>
    </div>
  );
};
export default App;
