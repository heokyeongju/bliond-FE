import './Question.css';
import '../../components/ToastEditor.js';
import {Button, Input, Modal, DatePicker, Space} from 'antd';
import React from 'react';
import EditorBox from '../../components/ToastEditor';
import EventLayout from '../../components/EventLayout';
// import {useState} from "@types/react";
import {useState} from "react";
import { LikeOutlined } from '@ant-design/icons';
import { SendOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;


const Question = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
    <>
      <EventLayout />
      <div
        id="Container" /* 전체 */
        style={{
          // backgroundColor: '#f8f9fa',
          height: '725px',
          marginTop: '100px',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}>
        <div id="questionForm">
          <h4>Question form</h4>
          <div id="editor">
            <EditorBox></EditorBox>
          </div>
          <Button className="questionButton">질문 작성</Button>
        </div>

        <div id="questionList">
          <h4>Question list</h4>
          <div className="listBox">
              <div className="questionBox">
                  <div className="questionHeader">
                      <div className="questionDate">
                          생성 날짜
                      </div>
                      <div className="questionLike">
                          <LikeOutlined style={{ fontSize: '23px', color: '#08c' }} />
                      </div>
                  </div>


                  <div className="questionListContent">

                  </div>
                  <div>
                      <Button className="questionShowButton"
                              onClick={showModal}>
                          자세히 보기
                      </Button>
                  </div>
                  {/*<Modal*/}
                  {/*    width={800}*/}
                  {/*    style={{ top: 180 }}*/}
                  {/*    bodyStyle={{ height: 400 }}*/}
                  {/*    open={open}*/}

                  {/*    onOk={handleOk}*/}
                  {/*    onCancel={handleCancel}*/}
                  {/*    footer={[*/}
                  {/*        <Button key="back" onClick={handleCancel}>*/}
                  {/*            Return*/}
                  {/*        </Button>,*/}
                  {/*        <Button*/}
                  {/*            key="submit"*/}
                  {/*            type="primary"*/}
                  {/*            loading={loading}*/}
                  {/*            onClick={handleOk}>*/}
                  {/*            Send*/}
                  {/*        </Button>,*/}
                  {/*    ]}>*/}

                  {/*</Modal>*/}
                  <Modal className="questionModal"
                      width={800}
                      style={{ top: 180 }}
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}>
                      <div id="questionModalButton">
                          <Button className="modify">수정</Button>
                          <Button className="delete">삭제</Button>
                      </div>

                      <div className="questionModalContent">
                          content
                      </div>
                      <div className="questionModalReply">
                          <div className="reply">
                              reply
                          </div>
                          <div className="replySend">
                              <div className="replyIcon">
                                  <SendOutlined style={{ fontSize: '30px', color: '#08c' }}/>
                              </div>
                          </div>
                      </div>
                  </Modal>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
