import { Button, Modal, Input, Space } from 'antd';

import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import './Poll.css';
import EventLayout from '../../components/EventLayout';

const { TextArea } = Input;

const Poll = () => {
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
    <>
      <EventLayout />
      <div
        id="Container" /* 전체 */
        style={{
          backgroundColor: '#f8f9fa',
          height: '725px',
          marginTop: '80px',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
        <div id="PollList">
          <div className="pollHeader">
            <Button
              icon={<PlusOutlined />}
              className="pollButton"
              onClick={showModal}>
              Create
            </Button>
          </div>
          <div id="PollBox"> poll </div>
        </div>

        <Modal
          width={800}
          style={{ top: 180 }}
          bodyStyle={{ height: 400 }}
          open={open}
          title={
            <TextArea
              className="titleText"
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
              Send
            </Button>,
          ]}>
          <Space direction="vertical">
            <TextArea
              className="optionText"
              placeholder="Option"
              autoSize
              maxLength={25}
            />

            <TextArea
              className="optionText"
              placeholder="Option"
              autoSize
              maxLength={25}
            />

            <TextArea
              className="optionText"
              placeholder="Option"
              autoSize
              maxLength={25}
            />
          </Space>
        </Modal>
      </div>
    </>
  );
};

export default Poll;
