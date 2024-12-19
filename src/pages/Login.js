import React, { useState } from 'react';
import { 
  Form, 
  Input, 
  Button, 
  Typography, 
  Card, 
  ConfigProvider, 
  message 
} from 'antd';
import { 
  UserOutlined, 
  LockOutlined, 
  LoginOutlined 
} from '@ant-design/icons';
import ColumnGroup from 'antd/es/table/ColumnGroup';

const { Title } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onFinish = (values) => {
    console.log('Form values:', values);
    setLoading(true);
    // Simulate login process
    setTimeout(() => {
      setLoading(false);
      // Here you would typically handle actual authentication
      message.success('Login Successful!');
    }, 1500);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#000000',
          colorBgBase: '#FFFFFF',
          colorText: '#000000',
          colorBorder: '#000000',
        }
      }}
    >
      <div style={{ color: '#000', padding: '20px', maxWidth: '400px', margin: 'auto' }}>
        <Typography.Title level={2} style={{ textAlign: 'center' }}>Login</Typography.Title>
        <Card style={{ padding: '20px' }}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <Title level={3} style={{ margin: 0, color: '#000' }}>
              Blog Site Login
            </Title>
          </div>
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ 
                required: true, 
                message: 'Please input your Username!' 
              }]}
            >
              <Input 
                prefix={<UserOutlined />} 
                placeholder="Username" 
                size="large" 
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ 
                required: true, 
                message: 'Please input your Password!' 
              }]}
            >
              <Input.Password 
                prefix={<LockOutlined />} 
                placeholder="Password" 
                size="large" 
              />
            </Form.Item>

            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                block 
                size="large" 
                icon={<LoginOutlined />}
                loading={loading}
              >
                Log In
              </Button>
            </Form.Item>
          </Form>
          <Button type="link" onClick={showModal} style={{ fontSize: '16px' }}>Don't have an account? <span style={{ color: '#000' }}>Sign Up</span></Button>
          <SignupModal visible={isModalVisible} onClose={handleCancel} />
        </Card>
      </div>
    </ConfigProvider>
  );
};

export default Login;