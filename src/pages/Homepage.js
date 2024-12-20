import React from 'react';
import { Layout, Menu, Typography, Button, Row, Col, Carousel } from 'antd';
import { HomeOutlined, InfoCircleOutlined, BookOutlined, ContactsOutlined } from '@ant-design/icons';
import Login from './Login';
import image1 from '../asserts/images/image1.jpg';
import image2 from '../asserts/images/image2.jpg';
import image3 from '../asserts/images/image3.jpg';
import image4 from '../asserts/images/image4.jpg';
import image5 from '../asserts/images/image5.jpg';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Homepage = () => {
  // Sample blog images (you'll want to replace these with actual images)
  const blogImages = [
    'https://via.placeholder.com/800x400?text=Blog+Image+1',
    'https://via.placeholder.com/800x400?text=Blog+Image+2',
    'https://via.placeholder.com/800x400?text=Blog+Image+3'
  ];

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0 }}>
        <Menu mode="horizontal" theme="dark" items={navItems} />
      </Header>
      <Content>
        <div
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            padding: '64px 0',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '2rem',
              borderRadius: '8px',
              maxWidth: '1200px',
              margin: '0 auto',
              width: '100%',
            }}
          >
            <Row gutter={[32, 32]} align="middle">
              <Col xs={24} md={16}>
                <Title level={1} style={{ color: '#000', marginBottom: '1rem' }}>
                  Welcome to BlogSite
                </Title>
                <Paragraph style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                  Discover a world of captivating stories, insightful articles, and engaging content. Join our community of passionate writers and readers today!
                </Paragraph>
                <Button type="primary" size="large" style={{ backgroundColor: '#000', borderColor: '#000' }}>
                  Start Your Blog
                </Button>
              </Col>
              <Col xs={24} md={8}>
                <div style={{ backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '8px' }}>
                  <Login/>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
          <Carousel autoplay autoplaySpeed={1000} effect="fade">
            {images.map((image, index) => (
              <div key={index}>
                <img 
                  src={image} 
                  alt={`Blog ${index + 1}`} 
                  style={{ 
                    width: '100%', 
                    height: '400px', 
                    objectFit: 'cover' 
                  }} 
                />
              </div>
            ))}
          </Carousel>
        </div>
      </Content>
      <Footer style={{ backgroundColor: '#f0f0f0', padding: '2rem 0' }}>
        <Row gutter={[32, 32]} justify="center">
          <Col xs={24} md={12}>
            <Title level={3} style={{ color: '#000' }}>About Us</Title>
            <Paragraph>
              BlogSite is a platform dedicated to empowering writers and readers alike. We believe in the power of words to inspire, educate, and connect people from all walks of life.
            </Paragraph>
          </Col>
          <Col xs={24} md={12}>
            <Title level={3} style={{ color: '#000' }}>Contact Us</Title>
            <Paragraph>
              Email: info@blogsite.com<br />
              Phone: +1 (123) 456-7890<br />
              Address: 123 Blog Street, Writer's City, 12345
            </Paragraph>
          </Col>
        </Row>
        <div style={{ marginTop: '20px' }}>
          © {new Date().getFullYear()} BlogSite. All Rights Reserved.
        </div>
      </Footer>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

        body {
          font-family: 'Poppins', sans-serif;
        }

        h1, h2, h3, h4, h5, h6 {
          font-weight: 600;
        }

        .ant-carousel .slick-slide {
          text-align: center;
          height: 400px;
          line-height: 400px;
          background: #364d79;
          overflow: hidden;
        }

        .ant-carousel .slick-slide:hover {
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        @media (max-width: 768px) {
          .ant-carousel .slick-slide {
            height: 200px;
            line-height: 200px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default HomePage;