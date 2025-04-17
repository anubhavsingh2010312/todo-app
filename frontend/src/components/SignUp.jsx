import React, { useState } from 'react';
import axios from 'axios';

export const Signup = (setToken) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    axios.post('http://localhost:3000/users/signup', { username, password })
      .then((res) => {
        const { token, user } = res.data;
        setToken(token, user); // Save the token in the parent component or localStorage
        alert('Signup successful!');
      })
      .catch((error) => {
        console.error('Error during signup:', error);
        alert(error.response?.data?.error || 'Signup failed');
      });
  };

  return (
    <div>
      <h2>Signup</h2>
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
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};