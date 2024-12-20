import React, { useState } from 'react';
import { Layout, Menu, Typography, Card, Statistic, List, Avatar, Row, Col } from 'antd';
import {
  DashboardOutlined,
  FileTextOutlined,
  EditOutlined,
  UserOutlined,
  EyeOutlined,
  LikeOutlined,
  MessageOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import WriteBlog from './WriteBlog';

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const blogPosts = [
    { title: "The Future of AI in Web Development", views: 1200, likes: 89, comments: 34 },
    { title: "10 Tips for Effective Content Writing", views: 980, likes: 76, comments: 28 },
    { title: "How to Optimize Your Website for Speed", views: 1500, likes: 120, comments: 45 },
    { title: "The Rise of Progressive Web Apps", views: 850, likes: 67, comments: 23 }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} theme="light">
        <div style={{ height: 32, margin: 16, background: 'rgba(0, 0, 0, 0.2)' }} />
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<FileTextOutlined />}>
            My Posts
          </Menu.Item>
          <Menu.Item key="3" icon={<EditOutlined />}>
            <Link to="/write-blog">Write New Post</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: '#fff' }}>
          <Title level={3} style={{ margin: '16px 24px' }}>Dashboard</Title>
        </Header>
        <Content style={{ margin: '24px 16px' }}>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Card>
                <Statistic
                  title="Total Posts"
                  value={42}
                  prefix={<FileTextOutlined />}
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <Statistic
                  title="Total Views"
                  value={15600}
                  prefix={<EyeOutlined />}
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <Statistic
                  title="Total Likes"
                  value={2800}
                  prefix={<LikeOutlined />}
                />
              </Card>
            </Col>
          </Row>
          <Card style={{ marginTop: 16 }}>
            <Title level={4}>Recent Blog Posts</Title>
            <List
              itemLayout="horizontal"
              dataSource={blogPosts}
              renderItem={item => (
                <List.Item
                  actions={[
                    <Text key="views"><EyeOutlined /> {item.views}</Text>,
                    <Text key="likes"><LikeOutlined /> {item.likes}</Text>,
                    <Text key="comments"><MessageOutlined /> {item.comments}</Text>
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${item.title}`} />}
                    title={<a href="/">{item.title}</a>}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
                  />
                </List.Item>
              )}
            />
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
