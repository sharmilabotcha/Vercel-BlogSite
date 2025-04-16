import React from 'react';
import { Button, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import DashboardLayout from '../layouts/DashboardLayout';
import './MyPosts.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyPosts = () => {
  const navigate = useNavigate();
  const [myPosts, setMyPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) {
          message.error('Please log in to view your blogs');
          setLoading(false);
          navigate('/login');
          return;
        }

        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/blogs/my-blogs`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        // Transform and sort the blog data
        const transformedPosts = response.data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort in descending order
          .map(blog => ({
            id: blog._id,
            title: blog.title,
            description: blog.description,
            date: new Date(blog.createdAt).toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'short',
              year: 'numeric'
            }),
            category: blog.category,
            comments: blog.comments || 0,
            author: blog.author,
            image: blog.blogimage?.data || null
          }));

        setMyPosts(transformedPosts);
        setLoading(false);
      } catch (error) {
        console.error(error);
        message.error('Failed to fetch your blogs');
        setLoading(false);
      }
    };
    fetchMyBlogs();
  }, [navigate]);

  const handleDeleteBlog = async (blogId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        message.error('Please log in to view your blogs');
        navigate('/login');
        return;
      }

      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/blogs/${blogId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      // Remove the deleted blog from the state
      setMyPosts(myPosts.filter(post => post.id !== blogId));
      message.success('Blog deleted successfully');
    } catch (error) {
      console.error(error);
      message.error('Failed to delete the blog');
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="latest-posts">
          <h2 className="section-title">Loading your blogs</h2>
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="latest-posts">
        <h2 className="section-title">
          {myPosts.length > 0 ? 'Your Blogs' : 'No Blogs Yet'}
        </h2>
        {myPosts.map((post, index) => (
          <div key={index} className="post-container">
            <div className="date-circle">
              <div className="date-day">{post.date.split(' ')[0]}</div>
              <div className="date-month">{post.date.split(' ')[1]}</div>
              <div className="date-year">{post.date.split(' ')[2]}</div>
            </div>
            
            <div className="post-content">
              <h3 className="post-title">{post.title}</h3>
              
              <div className="post-meta">
                By {post.author} / {post.category} / {post.comments} Comments
              </div>
              
              {post.image && (
                <div className="post-image-container">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="post-image"
                  />
                </div>
              )}
              
              <p className="post-description">{post.description}</p>
              
              <div className="post-actions">
                <Button 
                  type="primary"
                  className="read-more-btn"
                >
                  READ MORE
                </Button>
                
                <Button
                  icon={<DeleteOutlined />}
                  className="delete-btn"
                  onClick={() => handleDeleteBlog(post.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default MyPosts;