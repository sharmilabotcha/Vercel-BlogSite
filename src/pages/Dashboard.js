import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Avatar, Space, message, Spin } from 'antd';
import {
  EyeOutlined,
  LikeOutlined,
  MessageOutlined
} from '@ant-design/icons';
import moment from 'moment';
import DashboardLayout from '../layouts/DashboardLayout';
import './Dashboard.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  moment.locale('en');
  const [blogPosts,setBlogPosts] = useState([]);
  const[loading,setLoading] = useState(true);
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(()=>{
    const fetchBlogs = async () =>{
      try{
        const token = localStorage.getItem('token');
        if(!token){
          message.error('Please log in to view your profile');
          navigate('/login');
          return;
        }

        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/blogs/allblogs`,{
          headers:{
            'Authorization':`Bearer ${token}`
          }
        });

        //transform blog data to match existing structure
        const transformedBlogs = response.data.map(blog=>({
          id:blog._id,
          title:blog.title,
          category:blog.category,
          info:blog.description,
          image:blog.image || 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
          author:blog.author,
          date:blog.date || new Date(blog.createdAt).toLocaleDateString('en-GB',{
            day:'2-digit',
            month:'2-digit',
            year:'numeric'
        }),
        // date : moment(blog.createdAt).format('DD-MM-YYYY'),
          views:blog.views || 0,
          likes:blog.likes || 0,
          comments:blog.comments || 0,
          avatar:blog.avatar || 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg'
        }));

        setBlogPosts(transformedBlogs);
        setLoading(false);
      }catch(error){
        console.log(error);
        message.error('Failed to fetch blog posts');
      }
    };

    fetchBlogs();
  },[]);

  //filter blogs based on active filter
  const filteredBlogs = blogPosts.filter(post=>{
    if(activeFilter === 'all'){
      return true;
    }
    if(activeFilter === 'popular'){
      return post.views >= 0;
    }
    if(activeFilter === 'featured'){
      return post.likes >= 0;
    }
    return true;
  }
);

  if(loading){
    return(
      <DashboardLayout>
        <div className="loading-container">
          <Spin size="large" />
        </div>
      </DashboardLayout>
    )
  }
  

  return (
    <DashboardLayout>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div className="left-section">
            <h1>Dashboard</h1>
            <div className="filter-buttons">
              <button 
                className={activeFilter === 'all' ? 'active' : ''} 
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button 
                className={activeFilter === 'popular' ? 'active' : ''} 
                onClick={() => setActiveFilter('popular')}
              >
                Popular
              </button>
              <button 
                className={activeFilter === 'featured' ? 'active' : ''} 
                onClick={() => setActiveFilter('featured')}
              >
                Featured
              </button>
            </div>
          </div>
        </div>
        
        {filteredBlogs.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '50px', 
            color: '#666' 
          }}>
            No blogs found
          </div>
        ) : (
          <Row gutter={[16, 16]} style={{ margin: '0 -8px' }}>
            {filteredBlogs.map((post, index) => (
              <Col xs={24} sm={12} md={8} lg={6} xl={6} key={index} style={{ padding: '8px' }}>
                <div className="blog-card">
                  <Card
                    cover={
                      <div className="card-image-container">
                        <img 
                          alt={post.title} 
                          src={post.image} 
                          className="blog-card-image"
                          style={{ 
                            height: '250px', 
                            objectFit: 'cover' 
                          }} 
                        />
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
        )}
      </div>
    </DashboardLayout>
  )
};

export default Dashboard;
