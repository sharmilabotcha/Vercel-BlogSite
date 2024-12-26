import React, { useState } from 'react';
import { 
  Layout, 
  Menu, 
  Typography, 
  Button, 
  Carousel, 
  Row, 
  Col, 
  Card,
  message 
} from 'antd';
import { 
  HomeOutlined, 
  InfoCircleOutlined, 
  BookOutlined, 
  ContactsOutlined,
  FacebookOutlined, 
  TwitterOutlined, 
  InstagramOutlined, 
  YoutubeOutlined 
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import './Homepage.css';
import SignupModal from './SignupModal';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Homepage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      message.error('Please fill in all fields');
      return;
    }

    // Here you would typically make an API call to authenticate
    console.log('Signing in with:', { email, password });
    
    // For now, just navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <Layout className="homepage-layout">
      {/* Navigation Bar */}
      <Header className="header">
        <div className="logo">BlogSite</div>
        <Menu mode="horizontal" theme="dark">
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="Signup" icon={<InfoCircleOutlined />}>
            <Link to="/signup">Signup</Link>
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
      <Content>
        <div className="hero-section">
          <Row gutter={[48, 48]} align="middle" className="hero-content">
            {/* Left Side - Welcome Text */}
            <Col xs={24} md={12} className="welcome-content">
              <Title level={1}>Welcome Back</Title>
              <Paragraph>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using
              </Paragraph>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FacebookOutlined />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <TwitterOutlined />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramOutlined />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <YoutubeOutlined />
                </a>
              </div>
            </Col>

            {/* Right Side - Login Form */}
            
          </Row>
        </div>
      </Content>

      {/* Footer */}
      <Footer className="footer">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <Title level={4}>Quick Links</Title>
            <ul className="footer-links">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </Col>
          <Col xs={24} md={8}>
            <Title level={4}>Contact</Title>
            <p>Email: support@blogsite.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </Col>
          <Col xs={24} md={8}>
            <Title level={4}>Follow Us</Title>
            <div className="footer-social-icons">
              <FacebookOutlined />
              <TwitterOutlined />
              <InstagramOutlined />
              <YoutubeOutlined />
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          {new Date().getFullYear()} BlogSite. All Rights Reserved.
        </div>
      </Footer>
    </Layout>
  );
};

export default Homepage;