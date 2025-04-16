import React, { useState, useEffect } from 'react';
import { Avatar, message, Modal } from 'antd';
import { UserOutlined, CloseOutlined } from '@ant-design/icons';
import axios from 'axios';
import './Profile.css';

const Profile = ({ isVisible, onClose }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!isVisible) return;

      try {
        const token = localStorage.getItem('token');

        if (!token) {
          message.error('Please log in to view your profile');
          onClose();
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
        onClose();
      }
    };

    fetchUserProfile();
  }, [isVisible, onClose]);

  const handleAvatarError = () => {
    setAvatarError(true);
  };

  if (loading) {
    return (
      <Modal
        open={isVisible}
        onCancel={onClose}
        footer={null}
        className="profile-modal"
        centered
      >
        <div className="profile-loading">Loading profile...</div>
      </Modal>
    );
  }

  if (!userProfile) {
    return null;
  }

  return (
    <Modal
      open={isVisible}
      onCancel={onClose}
      footer={null}
      className="profile-modal"
      centered
      closeIcon={<CloseOutlined className="profile-close-icon" />}
    >
      <div className="profile-modal-content">
        <div className="profile-avatar-container">
          <Avatar 
            size={150} 
            icon={<UserOutlined />} 
            src={!avatarError && userProfile.avatar ? userProfile.avatar : undefined}
            onError={handleAvatarError}
            className={`profile-avatar ${avatarError ? 'profile-avatar-error' : ''}`}
          />
        </div>
        <h2 className="profile-name">{userProfile.name || 'User Profile'}</h2>
        <p className="profile-email">{userProfile.email}</p>
        
        <div className="profile-details">
          <div className="profile-detail-item">
            <span className="profile-detail-label">Username</span>
            <span className="profile-detail-value">{userProfile.name || 'N/A'}</span>
          </div>
          
        </div>
      </div>
    </Modal>
  );
};

export default Profile;