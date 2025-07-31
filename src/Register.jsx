import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { image } from './assets/assets';

const API_URL = import.meta.env.VITE_API_URL;

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.get(`${API_URL}/users?Email=${email}`);
      if (res.data.length > 0) {
        alert('User already exists');
      } else {
        await axios.post(`${API_URL}/users`, {
          Name: name,
          Email: email,
          Password: password
        });
        alert('Registration successful!');
        setName('');
        setEmail('');
        setPassword('');
        navigate('/');
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
      <div className="register-container">
        <h2 className="register-title" style={{ color: 'white', fontWeight: 'bold' }}>Sign Up</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control  className='transparent' type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control className='transparent' type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control className='transparent' type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          </Form.Group>
          <Button className="register-button" onClick={handleRegister}>Sign Up</Button>
        </Form>

        <div className="register-link text-white">
          Already have an account?{' '}
          <Button type="button" variant="link" onClick={() => navigate('/')}>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
