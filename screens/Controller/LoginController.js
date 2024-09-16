import { useState } from 'react';

const LoginController = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
  };
};