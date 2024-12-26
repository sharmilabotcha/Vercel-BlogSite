import React, { useState, useEffect } from 'react';
import { Card, Avatar, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import DashboardLayout from '../layouts/DashboardLayout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [avatarError, setAvatarError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          message.error('Please log in to view your profile');
          navigate('/login');
          return;
        }

        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        setUserProfile(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user profile", error);
        message.error('Failed to fetch user profile');
        navigate('/login');
      }
    };

    fetchUserProfile();
  }, [navigate]);

  const handleAvatarError = () => {
    setAvatarError(true);
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh' 
        }}>
          Loading profile...
        </div>
      </DashboardLayout>
    );
  }

  if (!userProfile) {
    return null;
  }

  return (
    <DashboardLayout>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: '#f0f2f5'
      }}>
        <Card
          style={{ 
            width: 300,
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          <Avatar 
            size={120} 
            icon={<UserOutlined />} 
            src={!avatarError && userProfile.avatar ? userProfile.avatar : undefined}
            onError={handleAvatarError}
            style={{ 
              marginBottom: 16,
              border: '3px solid #7b2abf',
              backgroundColor: avatarError ? '#7b2abf' : 'inherit'
            }}
          />
          <h2 style={{ 
            color: '#7b2abf', 
            marginBottom: 8 
          }}>
            {userProfile.name || 'User Profile'}
          </h2>
          <p style={{ 
            color: '#666', 
            fontSize: 16 
          }}>
            {userProfile.email}
          </p>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Profile;