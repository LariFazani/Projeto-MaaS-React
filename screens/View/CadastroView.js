import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import CadastroStyle from './Styles/CadastroStyle';

const CadastroView = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSave = () => {
    console.log('Cadastro salvo', { name, email, password, confirmPassword });
  };

  return (
    <View style={CadastroStyle.container}>
      <Text style={CadastroStyle.title}>Cadastro</Text>

      <TextInput
        style={CadastroStyle.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={CadastroStyle.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={CadastroStyle.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={CadastroStyle.input}
        placeholder="Confirme sua senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      {/* Botão "Salvar" */}
      <TouchableOpacity style={CadastroStyle.button} onPress={handleSave}>
        <Text style={CadastroStyle.buttonText}>Salvar</Text>
      </TouchableOpacity>

      {/* Botão "Cancelar" que navega para LoginView */}
      <TouchableOpacity
        style={CadastroStyle.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={CadastroStyle.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CadastroView;
