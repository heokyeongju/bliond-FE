import { Checkbox, Col, Row } from 'antd';
import './Poll.css';

const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues);
};

function Poll() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
      }}>
      <div
        style={{
          width: '30%',
          height: '400px',
          backgroundColor: 'pink',
        }}>
        <h1>poll</h1>

        <Checkbox.Group onChange={onChange}>
          <Col>
            <Checkbox value="A">A</Checkbox>
          </Col>
          <Col>
            <Checkbox value="B">B</Checkbox>
          </Col>
          <Col>
            <Checkbox value="C">C</Checkbox>
          </Col>
        </Checkbox.Group>
      </div>
      <div
        style={{
          width: '30%',
          height: '400px',
          backgroundColor: 'pink',
        }}>
        <h1>poll result</h1>
      </div>
    </div>
  );
}

export default Poll;
