import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css'
import {image} from './assets/assets'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name,setName] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/users?Email=${email}&Password=${password}&name=${name}`);
      if (res.data.length > 0) {
        await axios.post('http://localhost:5000/logins', {
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
  <div className="login-page" style={{backgroundImage:`url(${image.Back})`}}>
    <div className="login-container">
      <h2 className="login-title" style={{color:'white', fontWeight: 'bold'}}>Login</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="name" onChange={e => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Button className="login-button" onClick={handleLogin}>Login</Button>
      </Form>

      <div className="login-link">
        Don’t have an account?{' '}
          <Button type="button" variant="link" onClick={() => navigate('/')}>Sign Up</Button>
      </div>
    </div>
  </div>
);

};

export default Login;

