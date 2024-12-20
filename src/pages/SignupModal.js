import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const SignupModal = ({ visible, onClose }) => {
    const [form] = Form.useForm();

    const handleSignup = (values) => {
        console.log('Signup Info:', values);
        // Handle signup logic here
        onClose(); // Close modal after signup
    };

    return (
        <Modal
            title="Sign Up"
            visible={visible}
            onCancel={onClose}
            footer={null}
            style={{ color: '#000' }}
        >
            <Form form={form} onFinish={handleSignup} layout="vertical">
                <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}> 
                    <Input placeholder="Username" style={{ borderColor: '#000' }} />
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'The input is not valid E-mail!' }]}> 
                    <Input placeholder="Email" style={{ borderColor: '#000' }} />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}> 
                    <Input.Password placeholder="Password" style={{ borderColor: '#000' }} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Sign Up</Button>
                </Form.Item>
                <p style={{ textAlign: 'center', fontSize: '18px', color: '#000', marginBottom: '20px' }}>Already have an account? <Button type="link" onClick={onClose} style={{ color: '#000', fontSize: '18px' }}>Login</Button></p>
            </Form>
        </Modal>
    );
};

export default SignupModal;
