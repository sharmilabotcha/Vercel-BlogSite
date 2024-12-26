import React, { useState } from 'react';
import { 
    Form, 
    Input, 
    Button, 
    Typography, 
    message, 
    Upload
} from 'antd';
import { 
    UserOutlined, 
    LockOutlined, 
    MailOutlined,
    InboxOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './SignupModal.css'; // We'll create this CSS file
const { Title, Paragraph } = Typography;
const { Dragger } = Upload;

const SignupModal = () => {
    const colors = {
        primary: '#6A5ACD',      // Slate Blue
        secondary: '#87CEFA',    // Light Sky Blue
        background: '#F0F4FF',   // Very Light Blue
        text: '#333333'
    };
    const [username, setUsername]=useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPassword, setConfirmPassword]=useState('');

    const [imageFile, setImageFile] = useState(null);
    const navigate = useNavigate();

    const handleImageUpload = (file)=>{
        if(file.type!== 'image/png' && file.type!== 'image/jpg' && file.type!== 'image/jpeg'){
            message.error('Please upload an image of type png, jpg or jpeg');
            return false;
        }
        if(file.size > 5*1024*1024){
            message.error('Please upload an image less than 5MB');
            return false;
        }
        setImageFile(file);
        return false;
    }

    const handleSubmit = async () =>{
        if(!username || !email || !password || !confirmPassword){
            message.error("Please fill in all fields");
            return;
        }
        //password validation
        if(password !== confirmPassword){
            message.error("Passwords do not match");
            return;
        }

        const formData = new FormData();
        formData.append('username',username);
        formData.append('email',email);
        formData.append('password', password);

        if(imageFile){
            formData.append('profileImage',imageFile);
        }

        try{
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/upload`,formData,
                {
                    headers:{
                        'Content-Type':'multipart/form-data'
                    }
                }
            );
            message.success("Sign up successfull");
            navigate('/dashboard');
        }catch(error){
            console.error("Error signing up:",error);
            console.log(error.response?.data?.message);
            message.error(error.response?.data?.message || "Error signing up");
        }
    };
    

    return(
        <div className="signup-modal">
            <h2
            style={{color:colors.primary,textAlign:'center'}}>
                Sign Up
            </h2>
            <Form layout="vertical">
                <Form.Item>
                    <Input
                    value={username}
                    onChange={(e)=>{setUsername(e.target.value)}}
                    placeholder='Username'
                    style={{borderColor:colors.primary,boxShadow:'0 0 5px rgba(106, 90, 205, 0.2)'}}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    placeholder='Email'
                    style={{borderColor:colors.primary,boxShadow:'0 0 5px rgba(106, 90, 205, 0.2)'}}
                    />
                </Form.Item>
                <Form.Item>
                    <Input type='password'
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    placeholder='Password'
                    style={{borderColor:colors.primary,boxShadow:'0 0 5px rgba(106, 90, 205, 0.2)'}}
                    />
                </Form.Item>
                <Form.Item>
                    <Input type='password'
                    value={confirmPassword}
                    onChange={(e)=>{setConfirmPassword(e.target.value)}}
                    placeholder='Confirm Password'
                    style={{borderColor:colors.primary,boxShadow:'0 0 5px rgba(106, 90, 205, 0.2)'}}
                    />
                </Form.Item>
                <Form.Item>
                    <Dragger 
                    name="profileImage"
                    multiple={false}
                    maxCount={1}
                    beforeUpload={handleImageUpload}
                    showUploadList={imageFile ? true : false}
                    >
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                            Click or drag file to this area to upload
                        </p>
                        <p className="ant-upload-hint">
                            Support for a single file upload.
                        </p>
                    </Dragger>
                </Form.Item>
                <Form.Item>
                    <Button
                    type='primary'
                    onClick={handleSubmit}
                    className='submit-button'
                    style={{backgroundColor:colors.primary,borderColor:colors.primary,boxShadow:'0 0 5px rgba(106, 90, 205, 0.2)'}}
                    >
                        Sign Up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};
export default SignupModal;