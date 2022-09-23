import './Events.css';

import { Button, Input, Modal, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import CustomHeader from '../components/Header';
import { useCookies } from 'react-cookie';
import { useRecoilState } from 'recoil';

const { TextArea } = Input;

function Events(match, loacation) {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <CustomHeader />
      <div
        id="Container" /* 전체 */
        style={{
          // backgroundColor: '#f8f9fa',
          height: '725px',
          marginTop: '80px',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
        <div id="EventList">
          <div className="pollHeader">
            <Button
              icon={<PlusOutlined />}
              className="pollButton"
              onClick={showModal}>
              Create
            </Button>
          </div>
          <div id="PollBox"> evnets </div>
        </div>
      </div>
      <Modal
        width={500}
        style={{ top: 180 }}
        bodyStyle={{ height: 300 }}
        open={open}
        title={
          <TextArea
            className="eventTitleText"
            placeholder="Title"
            autoSize
            maxLength={50}
          />
        }
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}>
            create
          </Button>,
        ]}>
        <TextArea
          rows={4}
          className="eventFormText"
          placeholder="Option"
          maxLength={500}
          showCount
        />
      </Modal>
    </div>
  );
}

export default Events;
