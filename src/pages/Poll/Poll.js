import { Button, Modal, Input, Space, Radio, Switch } from 'antd';

import React, { useState, useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import './Poll.css';
import EventLayout from '../../components/EventLayout';
import {useParams} from "react-router-dom";
import axios from 'axios';


const { TextArea } = Input;


const Poll = () => {
  const { eventId } = useParams();

  const [polls, setPolls] = useState([]);
  useEffect(() => {
    const jwt = localStorage.getItem('accessToken');
    (async () => {
      const { data } = await axios({
        headers: {
          authorization: `Bearer ${jwt}`,
        },
        method : "get",
        baseURL : 'http://localhost:3000/api/v1/event/',
        url : `${eventId}/polls`
      });
      setPolls(data.data);
    })();
  } , []);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setPolls(e.target.value);
  };

  const onChange1 = (checked) => {
    console.log(`switch to ${checked}`);
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
  const [serviceList, setServiceList] = useState([{ service: "" }]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };

  return (
      <>
        <EventLayout/>
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
          <div id="PollList">
            <div className="pollHeader">
              <Button
                  icon={<PlusOutlined/>}
                  className="pollButton"
                  onClick={showModal}>
                Create
              </Button>
            </div>
            <div id="PollBox1">
              {polls.map((eventId) => (
                  <div id="PollBox">
                    <div id="PollTitle">
                      <h3>{eventId.name}</h3>
                    </div>
                    <div id="PollContent">
                      <p>{eventId.description}</p>
                    </div>
                    <div id="PollChoice">
                      {eventId.pollChoices.map((pollId) => (
                          <div id="PollChoiceBox">
                            <Radio.Group onChange={onChange} value={polls}>
                              <Radio value={pollId.name}>{pollId.name}</Radio>
                            </Radio.Group>
                          </div>
                      ))}
                    </div>
                  </div>
              ))}
            </div>

            <Modal
                width={800}
                style={{top: 180}}
                bodyStyle={{height: 350}}
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
              {/* input 추가 및 제거 코드 */}
              <Space direction="vertical">
                <div className="App" autoComplete="off">
                  <div className="form-field">
                    {serviceList.map((singleService, index) => (
                        <div key={index} className="services">
                          <div className="first-division">
                            <input
                                name="service"
                                type="text"
                                id="service"
                                value={singleService.service}
                                onChange={(e) => handleServiceChange(e, index)}
                                required/>
                            {serviceList.length - 1 === index
                                && serviceList.length < 4 && (
                                    <button
                                        type="button"
                                        onClick={handleServiceAdd}
                                        className="add-btn">
                                      <span> + </span>
                                    </button>
                                )}
                          </div>
                          <div className="second-division">
                            {serviceList.length !== 2 && (
                                <button
                                    type="button"
                                    onClick={() => handleServiceRemove(index)}
                                    className="remove-btn">
                                  <span>X</span>
                                </button>
                            )}
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
              </Space>
            </Modal>
          </div>
        </div>
      </>
  );
};

export default Poll;
