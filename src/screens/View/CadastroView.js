import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import CadastroStyle from './CadastroStyle';

const CadastroView = () => {
      return (
        <View style={CadastroStyle.container}>
          <Text style={CadastroStyle.title}>Cadastro</Text>
          <TextInput style={CadastroStyle.input} placeholder="Nome" />
          <TextInput style={CadastroStyle.input} placeholder="E-mail" />
          <TextInput style={CadastroStyle.input} placeholder="Senha" secureTextEntry />
          <TextInput style={CadastroStyle.input} placeholder="Confirme sua senha" secureTextEntry />
          <Button style={CadastroStyle.button} title="Salvar" />
          <Button style={CadastroStyle.button} title="Cancelar" />
        </View>
      );
    };

export default CadastroView;

