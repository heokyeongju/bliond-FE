import './Question.css';
import '../../components/ToastEditor.js';
import { Button, Input, Modal, DatePicker, Space } from 'antd';
import React, { useState, useRef,useEffect } from 'react';
import EventLayout from '../../components/EventLayout';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { LikeOutlined } from '@ant-design/icons';
import { SendOutlined } from '@ant-design/icons';
import axios from 'axios';
import {useParams} from "react-router-dom";
import 'moment/locale/ko';
import { Viewer } from '@toast-ui/react-editor';

const Question = () => {
  const { id }= useParams();
  console.log("id:"+id);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const jwt = localStorage.getItem('accessToken');
    (async () => {
      const { data } = await axios({
        headers: {
          authorization: `Bearer ${jwt}`,
        },
        method : "get",
        baseURL : 'http://localhost:3000/api/v1/event/',
        url : `${id}/questions`
      });
      setQuestions(data.data);
      console.log(data.data);
      console.log(questions);
    })();
  }, []);


  const [content, setContent] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const editorRef = useRef();
  const dateParse = ( time ) => {
    const today = new Date();
    const timeValue = new Date(time);

    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
  }

  const handleClick = async () => {
    setContent(editorRef.current.getInstance().getMarkdown());
    console.log(content);
    const jwt = localStorage.getItem('accessToken');
    if (content === '') {
      alert('내용을 입력해주세요');
      return;
    }
    await axios.post('/api/v1/event/{id}/question', {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
      content: {
        content,
      },
    });
  };

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
            <Editor
              placeholder={"질문을 작성해주세요."}
              previewStyle="tab"
              height="450px"
              initialEditType="markdown"
              hideModeSwitch="true"
              language="ko-KR"
              useCommandShortcut={true}
              ref={editorRef}
            />
          </div>
          <Button
            className="questionButton"
            onClick={handleClick}
            type="submit">
            질문 작성
          </Button>
        </div>

        <div id="questionList">
          <h4>Question list</h4>
          <div className="listBox">
            {questions.map((id) => (
                <div className="questionBox">
                  <div className="questionHeader">
                    <div className="questionDate"> {dateParse(id.createdDate)} </div>
                    <div className="questionLike">
                      <LikeOutlined style={{ fontSize: '23px', color: '#08c' }} />
                    </div>
                  </div>
                  <Viewer className="questionListContent" initialValue={id.content.substring(0,400)} />
                  {/*<div className="questionListContent"> {id.content}</div>*/}
                  <div>
                    <Button className="questionShowButton" onClick={showModal}>
                      자세히 보기
                    </Button>
                  </div>
                </div>
                  ))}


              <Modal
                className="questionModal"
                width={800}
                style={{ top: 180 }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}>
                <div id="questionModalButton">
                  <Button className="modify">수정</Button>
                  <Button className="delete">삭제</Button>
                </div>

                <div className="questionModalContent">content</div>
                <div className="questionModalReply">
                  <div className="reply">reply</div>
                  <div className="replySend">
                    <div className="replyIcon">
                      <SendOutlined
                        style={{ fontSize: '30px', color: '#08c' }}
                      />
                    </div>
                  </div>
                </div>
              </Modal>

          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
