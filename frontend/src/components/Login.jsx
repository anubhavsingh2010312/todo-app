import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://localhost:3000/users/login', { username, password })
      .then((res) => {
        const { token, user } = res.data;
        setToken(token, user); // Save the token in the parent component or localStorage
        alert('Login successful!');
        navigate('/'); // Redirect to the landing page after successful login
      })
      .catch((error) => {
        console.error('Error during login:', error);
        alert(error.response?.data?.error || 'Login failed');
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};