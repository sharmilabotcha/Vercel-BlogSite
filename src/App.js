import React from 'react';
import { BrowserRouter as Router, Routes, Route , Link, Navigate } from 'react-router-dom';
import { Button, Typography, Space, ConfigProvider } from 'antd';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import WriteBlog from './pages/WriteBlog'; // Assuming WriteBlog is in the same directory as other pages
import Profile from './pages/Profile';
import SignupModal from './pages/SignupModal';
import MyPosts from './pages/MyPosts';
const { Title, Paragraph } = Typography;

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#000000', // Black primary color
          colorBgBase: '#FFFFFF',  // White background
          colorText: '#000000',    // Black text
          colorBorder: '#000000',  // Black borders
        },
        components: {
          Button: {
            colorPrimary: '#000000', // Black primary button
            colorPrimaryHover: '#333333', // Slightly lighter black on hover
            colorPrimaryActive: '#000000', // Black when active
            primaryColor: '#FFFFFF', // White text on black button
          }
        }
      }}
    >
    
      
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/write-blog" element={<WriteBlog />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<SignupModal />} />
            <Route path="/my-posts" element={<MyPosts />} />
          </Routes>
        </Router>  
      
    </ConfigProvider>
  );
}

export default App;