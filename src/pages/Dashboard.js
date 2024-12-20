import React, { useState } from 'react';
import { Card, Row, Col, Avatar, Space } from 'antd';
import {
  EyeOutlined,
  LikeOutlined,
  MessageOutlined
} from '@ant-design/icons';
import DashboardLayout from '../layouts/DashboardLayout';
import './Dashboard.css';

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const blogPosts = [
    {
      title: "What's New In 2022 Tech",
      category: "Technology",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!",
      image: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
      author: "Jane Doe",
      date: "2h ago",
      views: 1200,
      likes: 89,
      comments: 34,
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
    },
    {
      title: "Delicious Food",
      category: "Food",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2781&q=80",
      author: "Jony Doe",
      date: "Yesterday",
      views: 980,
      likes: 76,
      comments: 28,
      avatar: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg"
    },
    {
      title: "Race To Your Heart Content",
      category: "Automobile",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!",
      image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      author: "John Doe",
      date: "2d ago",
      views: 1500,
      likes: 120,
      comments: 45,
      avatar: "https://api.uifaces.co/our-content/donated/AW-Gkv8j.jpg"
    },
    {
      title: "Race To Your Heart Content",
      category: "Automobile",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!",
      image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      author: "John Doe",
      date: "2d ago",
      views: 1500,
      likes: 120,
      comments: 45,
      avatar: "https://api.uifaces.co/our-content/donated/AW-Gkv8j.jpg"
    },
    {
      title: "What's New In 2022 Tech",
      category: "Technology",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!",
      image: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
      author: "Jane Doe",
      date: "2h ago",
      views: 1200,
      likes: 89,
      comments: 34,
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
    },
    {
      title: "Delicious Food",
      category: "Food",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2781&q=80",
      author: "Jony Doe",
      date: "Yesterday",
      views: 980,
      likes: 76,
      comments: 28,
      avatar: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg"
    },
  ];

  return (
    <DashboardLayout>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div className="left-section">
            <h1>Dashboard</h1>
            <div className="filter-buttons">
              <button className={activeFilter === 'all' ? 'active' : ''} onClick={() => setActiveFilter('all')}>
                All
              </button>
              <button className={activeFilter === 'popular' ? 'active' : ''} onClick={() => setActiveFilter('popular')}>
                Popular
              </button>
              <button className={activeFilter === 'featured' ? 'active' : ''} onClick={() => setActiveFilter('featured')}>
                Featured
              </button>
            </div>
          </div>
        </div>
        <Row gutter={[16, 16]} style={{ margin: '0 -8px' }}>
          {blogPosts.map((post, index) => (
            <Col xs={24} sm={12} md={8} lg={6} xl={6} key={index} style={{ padding: '8px' }}>
              <div className="blog-card">
                <Card
                  cover={
                    <div className="card-image-container">
                      <img alt={post.title} src={post.image} />
                    </div>
                  }
                  bordered={false}
                  bodyStyle={{ padding: 0 }}
                >
                  <div style={{ padding: '12px' }}>
                    <div className={`category-tag ${post.category.toLowerCase()}`}>
                      {post.category}
                    </div>
                    <h3 className="card-title">{post.title}</h3>
                    <p className="card-description">{post.info}</p>
                    <div className="author-info">
                      <Avatar src={post.avatar} className="author-avatar" />
                      <div className="author-details">
                        <span className="author-name">{post.author}</span>
                        <span className="post-date">{post.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-stats">
                    <Space size="middle">
                      <span className="stat-item">
                        <EyeOutlined /> {post.views}
                      </span>
                      <span className="stat-item">
                        <LikeOutlined /> {post.likes}
                      </span>
                      <span className="stat-item">
                        <MessageOutlined /> {post.comments}
                      </span>
                    </Space>
                  </div>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
