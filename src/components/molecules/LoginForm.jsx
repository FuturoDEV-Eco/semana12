// src/components/molecules/LoginForm/LoginForm.js
import React from 'react';
import Button from '../../atoms/Button/Button';

const LoginForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <Button text="Login" />
    </form>
  );
};

export default LoginForm;
