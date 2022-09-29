import './Header.css';
import { Layout,Switch } from 'antd';
import { useParams } from 'react-router-dom';

import React from 'react';
import { useRecoilState } from 'recoil';
import { UserAtom } from '../recoil/UserAtom';
const { Header } = Layout;

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
function CustomHeader() {
  const [userInfo, setUserInfo] = useRecoilState(UserAtom);
  const { id } = useParams();

  console.log('param id : ' + id);
  console.log(userInfo);
  return (
    <Layout>
      <Header id="header">
        <div className="home">Home
          <Switch className="switch" defaultChecked onChange={onChange} />
        </div>
        <div className="logo">event id : {id}</div>
        <div className="user">{userInfo.nickname}</div>
      </Header>
    </Layout>
  );
}
export default CustomHeader;
