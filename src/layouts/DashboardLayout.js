import React, { useState } from 'react';
import { Layout, Menu, Typography } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  DashboardOutlined,
  FileTextOutlined,
  EditOutlined,
  UserOutlined,
} from '@ant-design/icons';
import '../pages/Dashboard.css';
import Logout from './Logout';

const { Sider, Content } = Layout;
const DashboardLayout = ({ children }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  }
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined style={{ color: '#4A90E2' }} />,
      label: 'Dashboard',
    },
    {
      key: '/my-posts',
      icon: <FileTextOutlined style={{ color: '#4A90E2' }} />,
      label: 'My Posts',
    },
    {
      key: '/write-blog',
      icon: <EditOutlined style={{ color: '#4A90E2' }} />,
      label: 'Write New Post',
    },
    {
      key: '/profile',
      icon: <UserOutlined style={{ color: '#4A90E2' }} />,
      label: 'Profile',
    },
    {
        key: '/login',
        icon: <UserOutlined style={{ color: '#4A90E2' }} />,
        label: 'Logout',
        onClick: () => {
          //call the logout component
          handleLogout();
        },
    }
  ];

  const handleMenuClick = (item) => {
    navigate(item.key);
  };

  return (
    <Layout className="dashboard-layout">
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={setCollapsed}
        style={{
          position: 'fixed',
          height: '100vh',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        
        <div className="logo" style={{padding: '16px', textAlign: 'center'}}>
          <Typography.Title level={4} style={{ margin: 0, color: '#4A90E2' }}>
            BlogSite
          </Typography.Title>
        </div>

        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={handleMenuClick}
          style={{ borderRight: 'none', color: '#4A90E2' }}
        />
      </Sider>
      <Layout className={`main-content ${collapsed ? 'collapsed' : ''}`}>
        <Content style={{ 
          margin: '24px 16px', 
          padding: 20,
          minHeight: '100vh',
          marginLeft: collapsed ? '20px' : '100px',
          transition: 'all 0.2s',
          width: collapsed ? 'calc(100% - 40px)' : 'calc(100% - 120px)',
          background: 'transparent'
        }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
