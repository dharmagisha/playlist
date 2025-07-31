import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css'
import {image} from './assets/assets'

const API_URL = import.meta.env.VITE_API_URL;


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
  try {
const res = await axios.get(`${API_URL}/users?Email=${email}&Password=${password}`);
    if (res.data.length > 0) {
await axios.post(`${API_URL}/logins`, {
        Email: email,
      
        loginTime: new Date().toISOString()
      });
      navigate('/home');
    } else {
      alert('Invalid email or password');
    }
  } catch (err) {
    console.error(err);
    alert('Something went wrong');
  }
};


  return (
 <div className="login-page" style={{ position: 'relative', fontWeight: 'bold' }}>
  <video
    autoPlay
    muted
    loop
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      top: 0,
      left: 0,
      zIndex: -1
    }}
  >
    <source src={image.Video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
    <div className="login-container">
      <h2 className="login-title" style={{color:'white', fontWeight: 'bold'}}>Login</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control  className='transparent' type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        </Form.Group>
   
        <Form.Group className="mb-3">
          <Form.Control   className='transparent' type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Button className="login-button" onClick={handleLogin}>Login</Button>
      </Form>

      <div className="login-link">
        Don’t have an account?{' '}
          <Button type="button" variant="link" onClick={() => navigate('/Register')}>Sign Up</Button>
      </div>
    </div>
  </div>
);

};

export default Login;

