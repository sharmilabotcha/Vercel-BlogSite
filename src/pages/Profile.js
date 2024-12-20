import React from 'react';
import { Card, Avatar, Row, Col, Statistic } from 'antd';
import { UserOutlined, FileTextOutlined, EyeOutlined, LikeOutlined } from '@ant-design/icons';
import DashboardLayout from '../layouts/DashboardLayout';
import './Dashboard.css';

const Profile = () => {
  return (
    <DashboardLayout>
      <div style={{ padding: '20px' }}>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={8}>
            <Card
              style={{ 
                background: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                textAlign: 'center',
                padding: '24px'
              }}
            >
              <Avatar 
                size={120} 
                icon={<UserOutlined />} 
                style={{ 
                  backgroundColor: 'rgb(216, 55, 203)',
                  marginBottom: '16px'
                }}
              />
              <h2 style={{ color: 'rgb(216, 55, 203)', marginBottom: '8px' }}>John Doe</h2>
              <p style={{ color: '#666' }}>Tech Blogger & Developer</p>
            </Card>
          </Col>
          <Col xs={24} md={16}>
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={8}>
                <Card>
                  <Statistic 
                    title={<span style={{ color: 'rgb(216, 55, 203)' }}>Total Posts</span>}
                    value={42}
                    prefix={<FileTextOutlined style={{ color: 'rgb(216, 55, 203)' }} />}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card>
                  <Statistic 
                    title={<span style={{ color: 'rgb(216, 55, 203)' }}>Total Views</span>}
                    value={15600}
                    prefix={<EyeOutlined style={{ color: 'rgb(216, 55, 203)' }} />}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card>
                  <Statistic 
                    title={<span style={{ color: 'rgb(216, 55, 203)' }}>Total Likes</span>}
                    value={2800}
                    prefix={<LikeOutlined style={{ color: 'rgb(216, 55, 203)' }} />}
                  />
                </Card>
              </Col>
            </Row>
            <Card style={{ marginTop: '24px' }}>
              <h3 style={{ color: 'rgb(216, 55, 203)', marginBottom: '16px' }}>About Me</h3>
              <p style={{ color: '#666' }}>
                Passionate tech blogger with expertise in web development and emerging technologies.
                Sharing insights and experiences through detailed articles and tutorials.
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
