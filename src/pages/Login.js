import React, { useState } from 'react';
import { 
  Button, 
  Typography, 
  ConfigProvider, 
  Card, 
  Form, 
  Input, 
  message 
} from 'antd';
import { useNavigate } from 'react-router-dom';
import SignupModal from './SignupModal';

const { Title } = Typography;

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log('Login values:', values);
    setLoading(true);
    console.log('Processing login...'); 
    // setTimeout(() => {
    //   setLoading(false);
    //   message.success('Login Successful!');
    //   console.log('Redirecting to dashboard...'); 
    //   console.log("login success");
    
    // )};
    navigate('/dashboard'); // Redirect to Dashboard
};

  const handleForgotPassword = () => {
    console.log('Forgot Password functionality to be implemented.');
    // Implement password recovery logic here
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#000000',
          colorBgBase: '#FFFFFF',
          colorText: '#000000',
          colorBorder: '#000000',
        },
      }}
    >
      <div style={{ backgroundImage: 'url(/path/to/your/background.jpg)', backgroundSize: 'cover', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card style={{ width: 400, padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <Typography.Title level={2} style={{ textAlign: 'center' }}>Login</Typography.Title>
          <Form onFinish={onFinish} layout="vertical">
            <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}> 
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}> 
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} style={{ width: '100%' }}>Login</Button>
            </Form.Item>
          </Form>
          <Button type="link" onClick={handleForgotPassword} style={{ display: 'block', margin: '10px auto' }}>Forgot Password?</Button>
          <Button type="link" onClick={showModal} style={{ display: 'block', margin: '10px auto' }}>Don't have an account? <span style={{ color: '#000' }}>Sign Up</span></Button>
          <SignupModal visible={isModalVisible} onClose={handleCancel} />
        </Card>
      </div>
    </ConfigProvider>
  );
};

export default Login;