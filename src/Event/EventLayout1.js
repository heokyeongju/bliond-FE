import './EventLayout.css';
import { Layout, Menu } from 'antd';

import React from 'react';
const { Header } = Layout;

const EventLayout = () => {
  return (
    <div>
      <Layout>
        {/** Header 안쪽으로 사용자 정보 */}
        <Header className="header">
          사용자 정보, events_id for admin, events_name for user ...
        </Header>
        {/** Menu items와 관련하여, 코드를 변경해야할 수 있음. navigation 적용*/}
        <Menu
          className="menu"
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}>
          <Menu.Item>Polls</Menu.Item>

          <Menu.Item>Questions</Menu.Item>
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
