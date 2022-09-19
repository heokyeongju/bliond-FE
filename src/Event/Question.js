import './Question.css';
import { Input, Button } from 'antd';
import React from 'react';
const { TextArea } = Input;


function Question() {
  return (
    <div id="Container" /* 전체 */
      style={{
          backgroundColor: '#f8f9fa',
          height: '800px',
          marginTop : '100px',
          paddingTop: '30px',
          display: 'flex',
          justifyContent : 'space-evenly', // 좀 더 가까이 가능?
          alignItems: 'center',
          flexWrap : 'wrap'

      }}>

      <div id="questionForm">
          <h4>Question form</h4>
          <div className="formBox">
              <TextArea
                        placeholder="익명으로 편하게 질문해주세요~"  bordered={false}
                        autoSize={{
                            minRows: 4,
                            maxRows: 8,
                        }}
              />
              <Button type="primary" shape="round">
                  Send
              </Button>
          </div>


      </div>

      <div id="questionList">
          <h4>Question list</h4>
          <div className="listBox"></div>
      </div>
    </div>
  );
}

export default Question;
