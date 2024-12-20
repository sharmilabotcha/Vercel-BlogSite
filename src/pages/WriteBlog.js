import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const WriteBlog = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!title || !description || !content) {
            message.error('Please fill in all fields.');
            return;
        }
        // Here you would typically save the blog post to a database or state
        console.log('Blog Post:', { title, description, content });
        message.success('Blog post saved successfully!');
        navigate('/dashboard'); // Redirect to Dashboard after saving
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Write a New Blog</h2>
            <Form layout="vertical">
                <Form.Item label="Title">
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Item>
                <Form.Item label="Description">
                    <Input value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Item>
                <Form.Item label="Content">
                    <Input.TextArea value={content} onChange={(e) => setContent(e.target.value)} rows={4} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={handleSubmit}>Add Blog</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default WriteBlog;
