import { Button, Checkbox, Col, Row, Modal, Input} from 'antd';

import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import './Poll.css';

const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

const { TextArea } = Input;

function Poll() {

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

                    <Button icon={<PlusOutlined />} className="button"onClick={showModal}>
                        Create
                    </Button>

                </div>
                <div id="PollBox"> poll </div>

            </div>

            <Modal
                open={open}
                title={
                    <TextArea
                        className="text"
                        placeholder="Title" autoSize/>}

                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                        Send
                    </Button>,
                ]}>

                <div className="pollContent">
                    <Checkbox onChange={onChange}>
                        <TextArea
                            className="text"
                        placeholder="Title" autoSize maxLength={20} />
                    </Checkbox>
                </div>
                <div className="pollContent">
                    <Checkbox onChange={onChange}>
                        <TextArea
                            className="text"
                            placeholder="Title" autoSize maxLength={20} />
                    </Checkbox>
                </div>
                <div className="pollContent">
                    <Checkbox onChange={onChange}>
                        <TextArea
                            className="text"
                            placeholder="Title" autoSize maxLength={20} />
                    </Checkbox>
                </div>
            </Modal>

        </div>
    );
}

export default Poll;