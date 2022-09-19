import { Checkbox, Col, Row } from 'antd';
import './Poll.css';

const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues);
};

function Poll() {
  return (
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
      <div id="PollList">
        <h4>Poll list</h4>
        <div className="box">
          <div className="pollCreate">
            <p>Create new poll</p>
          </div>
        </div>
      </div>

      <div id="PollResult">
        <h4>Poll result</h4>
        <div className="box"></div>
      </div>
    </div>
  );
}

export default Poll;
