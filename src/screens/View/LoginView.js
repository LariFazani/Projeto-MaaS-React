import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import LoginStyle from './Styles/LoginStyle' //Importando o Style


class LoginView extends React.Component {
  constructor() {
    super();
  }
  render() {
    const LoginView = () => {
      const { email, setEmail, password, setPassword, handleLogin } = LoginController();
      return (
        <View style={LoginStyle.container}>
          <Text style={LoginStyle.title}>Login</Text>
          <TextInput style={LoginStyle.input} value={email} onChangeText={setEmail} placeholder="E-mail" />
          <TextInput style={LoginStyle.input} placeholder="Senha" secureTextEntry />
          <Button style={LoginStyle.button} title="Esqueci minha senha" onPress={() => {}} />
          <Button style={LoginStyle.button} title="Prosseguir" onPress={handleLogin} />
          <Button style={LoginStyle.button} title="Quero me cadastrar!" onPress={() => {}} />
        </View>
      );
    };
  }
}
export default LoginView;