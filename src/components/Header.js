import './Header.css';
import {
  HomeOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Layout,Switch } from 'antd';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
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
        <Switch className="switch" defaultChecked onChange={onChange} />
        <NavLink to="/events">
        <div className="home"> Bliond </div>
        </NavLink>



        <div className="user"> <UserOutlined /> {userInfo.nickname}</div>
      </Header>
    </Layout>
  );
}
export default CustomHeader;
