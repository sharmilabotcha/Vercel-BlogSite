import React from 'react';
import { 
  Layout, 
  Menu, 
  Typography, 
  Button, 
  Carousel, 
  Row, 
  Col, 
  Card 
} from 'antd';
import { 
  HomeOutlined, 
  InfoCircleOutlined, 
  BookOutlined, 
  ContactsOutlined 
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Login from './Login';
import image1 from '../asserts/images/image1.jpg';
import image2 from '../asserts/images/image2.jpg';
import image3 from '../asserts/images/image3.jpg';
import image4 from '../asserts/images/image4.jpg';
import image5 from '../asserts/images/image5.jpg';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const Homepage = () => {
  // Sample blog images (you'll want to replace these with actual images)
  const blogImages = [
    image1,
    image2,
    image3,
    image4,
    image5
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Navigation Bar */}
      <Header 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          backgroundColor: '#000',
          color: '#fff'
        }}
      >
        <div className="logo" style={{ color: '#fff', fontSize: '20px' }}>
          BlogSite
        </div>
        <Menu 
          theme="dark" 
          mode="horizontal" 
          style={{ backgroundColor: '#000', color: '#fff' }}
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="about" icon={<InfoCircleOutlined />}>
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="blogs" icon={<BookOutlined />}>
            <Link to="/blogs">Blogs</Link>
          </Menu.Item>
          <Menu.Item key="contact" icon={<ContactsOutlined />}>
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </Header>

      {/* Main Content */}
      <Content style={{ padding: '50px' }}>
        <Row gutter={[16, 16]} align="middle">
          {/* Left Side - Heading and Quote */}
          <Col xs={24} md={12}>
            <Title level={1} style={{ color: '#000' }}>
              Welcome to BlogSite
            </Title>
            <Paragraph style={{ fontSize: '18px', color: '#333' }}>
              "Unleash your thoughts, share your stories, and connect with the world through words."
            </Paragraph>
            <Button 
              type="primary" 
              size="large" 
              style={{ 
                backgroundColor: '#000', 
                borderColor: '#000' 
              }}
            >
              Start Your Blog
            </Button>
          </Col>

          {/* Right Side - Login Component */}
          <Col xs={24} md={12}>
            <Login />
          </Col>
        </Row>

        {/* Blog Image Carousel */}
        <div style={{ marginTop: '50px' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
            Featured Blogs
          </Title>
          <Carousel autoplay autoplaySpeed={1000}>
            {blogImages.map((image, index) => (
              <div key={index}>
                <img 
                  src={image} 
                  alt={`Blog Image ${index + 1}`} 
                  style={{ width: '100%', height: '600px', objectFit: 'cover', borderRadius: '8px' }} 
                />
              </div>
            ))}
          </Carousel>
        </div>
      </Content>

      {/* Footer */}
      <Footer 
        style={{ 
          textAlign: 'center', 
          backgroundColor: '#000', 
          color: '#fff' 
        }}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Title level={4} style={{ color: '#fff' }}>Quick Links</Title>
            <Menu 
              theme="dark" 
              style={{ backgroundColor: '#000', color: '#fff' }}
            >
              <Menu.Item key="privacy">Privacy Policy</Menu.Item>
              <Menu.Item key="terms">Terms of Service</Menu.Item>
              <Menu.Item key="faq">FAQ</Menu.Item>
            </Menu>
          </Col>
          <Col xs={24} md={8}>
            <Title level={4} style={{ color: '#fff' }}>Contact</Title>
            <Paragraph style={{ color: '#fff' }}>
              Email: support@blogsite.com<br />
              Phone: +1 (555) 123-4567
            </Paragraph>
          </Col>
          <Col xs={24} md={8}>
            <Title level={4} style={{ color: '#fff' }}>Follow Us</Title>
            {/* Add social media icons here */}
          </Col>
        </Row>
        <div style={{ marginTop: '20px' }}>
          {new Date().getFullYear()} BlogSite. All Rights Reserved.
        </div>
      </Footer>
    </Layout>
  );
};

export default Homepage;