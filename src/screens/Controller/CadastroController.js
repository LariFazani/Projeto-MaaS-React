import { useState } from 'react';

const LoginController = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return {
    nome,
    SetNome,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
  };
};