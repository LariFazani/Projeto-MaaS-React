import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import LoginStyle from './Styles/LoginStyle';

const LoginController = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login attempt', { email, password });
  };

  return { email, setEmail, password, setPassword, handleLogin };
};

const LoginView = ({ navigation }) => {
  const { email, setEmail, password, setPassword, handleLogin } = LoginController();

  return (
    <View style={LoginStyle.container}>
      <Text style={LoginStyle.title}>Login</Text>

      <TextInput
        style={LoginStyle.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={LoginStyle.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        secureTextEntry
      />

      {/* Botão "Esqueci minha senha" */}
      <TouchableOpacity
        style={LoginStyle.button}
        onPress={() => navigation.navigate('QRCode')}
      >
        <Text style={LoginStyle.buttonText}>Esqueci minha senha</Text>
      </TouchableOpacity>

      {/* Botão "Prosseguir" */}
      <TouchableOpacity
        style={LoginStyle.button}
        onPress={() => navigation.navigate('Financeiro')}
      >
        <Text style={LoginStyle.buttonText}>Prosseguir</Text>
      </TouchableOpacity>

      {/* Botão "Quero me cadastrar" */}
      <TouchableOpacity
        style={LoginStyle.button}
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={LoginStyle.buttonText}>Quero me cadastrar!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginView;
