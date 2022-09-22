import './Question.css';
import '../../components/ToastEditor.js';
import { Button } from 'antd';
import React from 'react';
import EditorBox from '../../components/ToastEditor';
import EventLayout from '../../components/EventLayout';

function Question() {
  return (
    <>
      <EventLayout />
      <div
        id="Container" /* 전체 */
        style={{
          backgroundColor: '#f8f9fa',
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
          <Button className="button">질문 작성</Button>
        </div>

        <div id="questionList">
          <h4>Question list</h4>
          <div className="listBox"></div>
        </div>
      </div>
    </>
  );
}

export default Question;
