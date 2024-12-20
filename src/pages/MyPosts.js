import React from 'react';
import { Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import DashboardLayout from '../layouts/DashboardLayout';
import './Dashboard.css';

const MyPosts = () => {
  const myPosts = [
    {
      id: 1,
      title: "A Beautiful Blog With No Images Required",
      description: "Typography is a WordPress theme created for bloggers that just want to write, without the hassle of looking for the right featured image. It has a unique design based on beautiful typography and a modern, clean layout. Simply write your content and publish; we'll handle the rest.",
      date: "24 FEB 2024",
      category: "Featured",
      comments: 0,
      author: "Rita Chowdhury"
    },
    {
      id: 2,
      title: "Getting Started with Modern Web Development",
      description: "Learn the fundamentals of modern web development including HTML5, CSS3, and JavaScript. This comprehensive guide will take you from beginner to proficient developer.",
      date: "20 FEB 2024",
      category: "Technology",
      comments: 5,
      author: "Rita Chowdhury"
    },
    // Add more posts as needed
  ];

  return (
    <DashboardLayout>
      <div className="latest-posts">
        <h2 style={{ color: '#7b2abf', marginBottom: '40px', textAlign: 'center' }}>LATEST POSTS</h2>
        {myPosts.map((post, index) => (
          <div key={index} className="post-container" style={{ marginBottom: '40px' }}>
            <div className="date-circle" style={{
              float: 'left',
              width: '80px',
              marginRight: '30px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#7b2abf',
                lineHeight: '1'
              }}>
                {post.date.split(' ')[0]}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#7b2abf',
                textTransform: 'uppercase'
              }}>
                {post.date.split(' ')[1]}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#7b2abf'
              }}>
                {post.date.split(' ')[2]}
              </div>
            </div>
            
            <div className="post-content" style={{
              marginLeft: '110px',
              borderBottom: '1px solid #eee',
              paddingBottom: '30px'
            }}>
              <h3 style={{
                color: '#7b2abf',
                fontSize: '24px',
                marginBottom: '15px'
              }}>
                {post.title}
              </h3>
              
              <div className="post-meta" style={{
                color: '#666',
                fontSize: '14px',
                marginBottom: '15px'
              }}>
                By {post.author} / {post.category} / {post.comments} Comments
              </div>
              
              <p style={{
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                {post.description}
              </p>
              
              <div className="post-actions">
                <Button 
                  type="primary"
                  style={{
                    backgroundColor: '#7b2abf',
                    borderColor: '#7b2abf',
                    marginRight: '10px'
                  }}
                >
                  READ MORE
                </Button>
                <Button
                  icon={<EditOutlined />}
                  style={{
                    color: '#7b2abf',
                    marginRight: '10px'
                  }}
                />
                <Button
                  icon={<DeleteOutlined />}
                  style={{
                    color: '#7b2abf'
                  }}
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
