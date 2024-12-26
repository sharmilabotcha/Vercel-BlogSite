import react from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Form, Input, Button, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const { Title } = Typography;

const Login= ()=>{
  const colors = {
    primary: '#6A5ACD',      // Slate Blue
    secondary: '#87CEFA',    // Light Sky Blue
    background: '#F0F4FF',   // Very Light Blue
    text: '#333333'
  };
  const [email,setEmail]=useState('');
  const [password,setPassword]= useState('');
  const navigate = useNavigate();
  const handleSubmit = async ()=>{
    if(!email || !password){
      message.error("Please fill in all fields");
      return;
    }
    try{
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/login`,{email,password},
        {
          headers:{
            'Content-Type':'application/json'
          }
        }
      )
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user',JSON.stringify(response.data.user));
      message.success("Login successfull");
      navigate('/dashboard');
    }catch(error){
      console.log(error);
      message.error( error.response.data.message || "Login failed");
    }
  }

  return(
    <div className="login-container">
      <h2 className="login-title"
      style={{color:colors.primary}} >Login</h2>
      <Form layout='vertical'>
        <Form.Item>
          <Input
          type='email'
          value={email}
          placeholder='Email'
          onChange={(e)=>{setEmail(e.target.value)}}
          style={{borderColor:colors.primary,boxShadow:'0 0 5px rgba(106, 90, 205, 0.2)'}}
          />
        </Form.Item>
        <Form.Item>
          <Input
          type='password'
          value={password}
          placeholder='Password'
          onChange={(e)=>{setPassword(e.target.value)}}
          style={{borderColor:colors.primary,boxShadow:'0 0 5px rgba(106, 90, 205, 0.2)'}}
          />
        </Form.Item>
        <Form.Item>
          <Button
          type='primary'
          onClick={handleSubmit}
          className='submit-button'
          style={{backgroundColor:colors.primary,borderColor:colors.primary,boxShadow:'0 0 5px rgba(106, 90, 205, 0.2)'}}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )

}
export default Login;