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

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#000000',
          colorBgBase: '#f0f2f5',
        }
      }}
    >
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#f0f2f5'
        }}
      >
        <Card
          style={{
            width: 400,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px'
          }}
        >
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
        </Card>
      </div>
    </ConfigProvider>
  );
};

export default Login;