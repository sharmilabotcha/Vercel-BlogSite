import React, { useState } from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import './WriteBlog.css';

const { Option } = Select;

const WriteBlog = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!title || !category || !content) {
            message.error('Please fill in all fields.');
            return;
        }
        // Here you would typically save the blog post to a database or state
        console.log('Blog Post:', { title, category, content });
        message.success('Blog post saved successfully!');
        navigate('/dashboard'); // Redirect to Dashboard after saving
    };

    const categories = ['Travel', 'Food', 'Lifestyle', 'Automobiles', 'Tech', 'Agriculture', 'Story', 'Films', 'Money'];

    return (
        <DashboardLayout>
            <div className="write-blog-container">
                <h2 className="blog-title">Write a New Blog</h2>
                <Form layout="vertical">
                    <Form.Item 
                        label={<span className="form-label">Title</span>}
                        required
                    >
                        <Input 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter your blog title"
                            className="title-input"
                        />
                    </Form.Item>
                    <Form.Item 
                        label={<span className="form-label">Category</span>}
                        required
                    >
                        <Select 
                            showSearch
                            placeholder="Select a category"
                            onChange={setCategory}
                            className="category-select"
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
                        label={<span className="form-label">Content</span>}
                        required
                    >
                        <Input.TextArea 
                            value={content} 
                            onChange={(e) => setContent(e.target.value)} 
                            rows={10}
                            placeholder="Write your blog content here"
                            className="content-textarea"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button 
                            type="primary" 
                            onClick={handleSubmit}
                            className="submit-button"
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
