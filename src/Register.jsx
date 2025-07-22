import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { image } from './assets/assets';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/users?Email=${email}`);
      if (res.data.length > 0) {
        alert('User already exists');
      } else {
        await axios.post('http://localhost:5000/users', {
          Name: name,
          Email: email,
          Password: password
        });
        alert('Registration successful!');
        navigate('/login');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

 return (
  <div className="register-page" style={{backgroundImage:`url(${image.Back})`}}>
    <div className="register-container">
      <h2 className="register-title" style={{color:'white', fontWeight: 'bold'}}>Sign Up</h2>
      <Form >
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Button className="register-button" onClick={handleRegister}>Sign Up</Button>
      </Form>

      <div className="register-link">
        Already have an account?{' '}
        <Button type="button" variant="link"  onClick={() => navigate('/login')}>Login</Button>
      </div>
    </div>
  </div>
);

};

export default Register;
