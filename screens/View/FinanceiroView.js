import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import FinanceiroStyle from './Styles/FinanceiroStyle';

const FinanceiroView = () => {
  const [isSubscribed, setIsSubscribed] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubscription = (value) => {
    setIsSubscribed(value);
  };

  const handleSubmit = () => {
    console.log('Formulário enviado', { isSubscribed, name, email });
  };

  return (
    <View style={FinanceiroStyle.container}>
      <Text style={FinanceiroStyle.title}>Financeiro</Text>
      <Text style={FinanceiroStyle.subtitle}>
        Tenha um pagamento único mensal para vários meios de transporte com aceitação de PIX, boletos bancários e cartões.
      </Text>
      <Text style={FinanceiroStyle.subtitle}>Deseja assinar?</Text>

      <View style={FinanceiroStyle.checkBoxContainer}>
        {/* Botão de rádio "Sim" */}
        <CheckBox
          title="Sim"
          checked={isSubscribed === true}
          onPress={() => handleSubscription(true)}
          containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }} // Remove bordas padrão
        />

        {/* Botão de rádio "Não" */}
        <CheckBox
          title="Não"
          checked={isSubscribed === false}
          onPress={() => handleSubscription(false)}
          containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }} // Remove bordas padrão
        />
      </View>

      {}
      <TextInput
        style={FinanceiroStyle.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />

      {}
      <TextInput
        style={FinanceiroStyle.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Botão "Confirmar" */}
      <TouchableOpacity
        style={FinanceiroStyle.button}
        onPress={handleSubmit}
        disabled={isSubscribed === null || !name || !email}
      >
        <Text style={FinanceiroStyle.buttonText}>Confirmar</Text>
      </TouchableOpacity>

      {/* Botão "Cancelar" */}
      <TouchableOpacity
        style={FinanceiroStyle.button}
        onPress={() => {

        }}
      >
        <Text style={FinanceiroStyle.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FinanceiroView;
