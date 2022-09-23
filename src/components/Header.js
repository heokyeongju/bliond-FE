import './Header.css';
import { Layout } from 'antd';

import React from 'react';
const { Header } = Layout;

function CustomHeader(){
    return(
        <Layout><Header id="header">
            <div className="home">Home</div>
            <div className="logo">
                사용자 정보, events_id for admin, events_name for user ...
            </div>
            <div className="user">User</div>
        </Header></Layout>);
} export default CustomHeader;
