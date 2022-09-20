import { Button, Checkbox, Col, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
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
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
      <div id="PollList">
        <span>Poll list</span>
        <Button icon={<PlusOutlined />} className="button">
          Create New
        </Button>
        <div className="PollBox"> poll </div>
      </div>
    </div>
  );
}

export default Poll;
