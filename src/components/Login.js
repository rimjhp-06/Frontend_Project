import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import  "./Login.css";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      navigate('/dashboard');
    }
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });
      localStorage.setItem('authToken', response.data.token);
      navigate.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      
      <form >
        
        <input type="email" id="email" value={email} onChange={handleEmailChange} placeholder="Email" />
      
        <input type="password" id="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
        <button type="submit" onClick={handleLoginFormSubmit}>Submit</button>
        <span>Don't have an account? <a>Signup </a> instead</span>
        <p>OR</p>
        <button class="google" type="submit">Login with Google</button>
      </form>
    </div>
  );
}

export default Login;
