import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from '../screens/View/LoginView';
import CadastroView from '../screens/View/CadastroView';
import FinanceiroView from '../screens/View/FinanceiroView';
import QRCodeView from '../screens/View/QRCodeView';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginView} />
      <Stack.Screen name="Cadastro" component={CadastroView} />
      <Stack.Screen name="Financeiro" component={FinanceiroView} />
      <Stack.Screen name="QRCode" component={QRCodeView} />
    </Stack.Navigator>
  );
};

export default App;
