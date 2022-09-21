import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Main from '../Main';
import Login from '../Login';

function MainRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default MainRouter;
