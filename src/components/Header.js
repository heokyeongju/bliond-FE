import './Header.css';
import { Layout } from 'antd';

import React from 'react';
import {useRecoilState} from "recoil";
import {UserAtom} from "../recoil/UserAtom";
const { Header } = Layout;

function CustomHeader() {
    const [userInfo, setUserInfo] = useRecoilState(UserAtom);
    console.log(userInfo)
    return (
        <Layout>
            <Header id="header">
                <div className="home">Home</div>
                <div className="logo">
                    사용자 정보, events_id for admin, events_name for user ...
                </div>
                <div className="user">{userInfo.nickname}</div>
            </Header>
        </Layout>
    );
}
export default CustomHeader;
