import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Todo App</h1>
      <p>Please login or signup to continue.</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/login">
          <button style={{ marginRight: '10px', padding: '10px 20px' }}>Login</button>
        </Link>
        <Link to="/signup">
          <button style={{ padding: '10px 20px' }}>Signup</button>
        </Link>
      </div>
    </div>
  );
};