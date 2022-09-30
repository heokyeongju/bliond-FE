import './EventLayout.css';
import { Layout, Menu } from 'antd';
import CustomHeader from './Header';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const EventLayout = () => {
  const { eventId } = useParams();

  return (
    <div>
      <Layout>
        {/** Header 안쪽으로 사용자 정보 */}
        <CustomHeader />
        <Menu
          className="menu"
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}>
          <NavLink to={'/event/' + eventId + '/polls'}>
            <Menu.Item>Polls</Menu.Item>
          </NavLink>

          <NavLink to={'/event/' + eventId + '/questions'}>
            <Menu.Item>Questions</Menu.Item>
          </NavLink>
        </Menu>

        {/** content 안에 tab(menu)에 따른 내용 넣으면 됨. 물론 아직은 tab에 따른 nav or route 설정 안됨 */}

        {/* <Content className="site-layout">
        <div className="site-layout-background">Content</div>
      </Content> */}
      </Layout>
    </div>
  );
};
export default EventLayout;
