import React, { useState } from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import './WriteBlog.css';
import { InboxOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Upload } from 'antd';
const { Dragger } = Upload;

const { Option } = Select;

const WriteBlog = () => {
    // Color Palette
    const colors = {
        primary: '#6A5ACD',      // Slate Blue
        secondary: '#87CEFA',    // Light Sky Blue
        background: '#F0F4FF',   // Very Light Blue
        text: '#333333'
    };

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [author,setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!title || !category || !description ||!author) {
            message.error('Please fill in all fields.');
            return;
        }

        const formData = new FormData();
        formData.append('title',title);
        formData.append('category',category);
        formData.append('description',description);
        formData.append('author',author);

        //append imagae if exists
        if(imageFile){
            formData.append('blogimage',imageFile);
        }

        try{
            const token = localStorage.getItem('token');
            if(!token){
                message.error('Please login to create a blog,token expired');
                navigate('/login'); 
            }
            //send to backend
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/blogs/upload`,formData,
                {
                    headers:{
                        'Content-Type':'multipart/form-data',
                        'Authorization':`Bearer ${token}`
                    }
                }
            );
            message.success('Blog post created successfully!');
            navigate('/dashboard'); // Redirect to Dashboard after saving

        }catch(error){
            console.error('Error creating blog post:', error);
            message.error(error.response?.data?.message || 'Error creating blog post. Please try again.');
        }
        
    };

    const handleImageUpload = (file)=>{
        if(file.type !== 'image/png' && file.type !== 'image/jpg' && file.type !== 'image/jpeg'){
            message.error('Please upload an image of type png, jpg or jpeg');
            return;
        }
        if(file.size > 5*1024*1024){
            message.error('Please upload an image less than 5MB');
            return;
        }
        setImageFile(file);
        return true;
    }


    const categories = ['Travel', 'Food', 'Lifestyle', 'Automobiles', 'Tech', 'Agriculture', 'Story', 'Films', 'Money'];

    return (
        <DashboardLayout>
            <div 
                className="write-blog-container" 
                style={{ 
                    backgroundColor: colors.background, 
                    color: colors.text 
                }}
            >
                <h2 
                    className="blog-title" 
                    style={{ 
                        color: colors.primary, 
                        textAlign: 'center' 
                    }}
                >
                    Write a New Blog
                </h2>
                <Form layout="vertical">
                    <Form.Item 
                        // label={<span style={{ color: colors.primary }}>Title</span>}
                        // required
                    >
                        <Input 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter your blog title"
                            className="title-input"
                            style={{ 
                                borderColor: colors.secondary,
                                boxShadow: 'none'
                            }}
                        />
                    </Form.Item>
                    <Form.Item 
                        // label={<span style={{ color: colors.primary }}>Category</span>}
                        // required
                    >
                        <Select 
                            showSearch
                            placeholder="Select a category"
                            onChange={setCategory}
                            className="category-select"
                            style={{ 
                                borderColor: colors.secondary 
                            }}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {categories.map((cat) => (
                                <Option key={cat} value={cat}>
                                    {cat}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                    // label={<span style ={{color: colors.primary }}>Author </span>}
                    //required
                    >
                        <Input
                            value={author}
                            onChange={(e)=>setAuthor(e.target.value)}
                            placeholder='Enter the author name'
                            className="author-input"
                            style={{
                                borderColor: colors.secondary,
                                boxShadow: 'none'
                            }}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Dragger 
                            name="blogimage"
                            multiple={false}
                            maxCount={1}
                            beforeUpload={handleImageUpload}
                            showUploadList={imageFile ? true : false}>
                                <p className='ant-upload-drag-icon'>
                                    <InboxOutlined/>
                                </p>
                                <p className='ant-upload-text'>
                                    Click or drag file to this area to upload
                                </p>
                                <p className='ant-upload-hint'>
                                    Support for a single file image file(Max 5MB).
                                </p>
                            </Dragger>
                        </Form.Item>
                    <Form.Item 
                        // label={<span style={{ color: colors.primary }}>Content</span>}
                        // required
                    >
                        <Input.TextArea 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            rows={10}
                            placeholder="Write your blog content here"
                            className="content-textarea"
                            style={{ 
                                borderColor: colors.secondary 
                            }}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button 
                            type="primary" 
                            onClick={handleSubmit}
                            className="submit-button"
                            style={{ 
                                backgroundColor: colors.primary, 
                                borderColor: colors.primary 
                            }}

                        >
                            Add Blog
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </DashboardLayout>
    );
};

export default WriteBlog;