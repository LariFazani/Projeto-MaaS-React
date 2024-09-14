import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { RadioButton } from 'react-native-elements';
import FinanceiroStyle from './Styles/FinanceiroStyle';

const FinanceiroView = () => {
    return (
        <View style={FinanceiroStyle.container}>
            <Text style={FinanceiroStyle.title}>Financeiro</Text>
            <Text style={FinanceiroStyle.subtitle}>Tenha um pagamento único mensal para vários meios de transporte com aceitação de PIX, boletos bancários e cartões.</Text>
            <Text style={FinanceiroStyle.subtitle}>Deseja assinar?</Text>
            <View style={QRCodeStyle.navigationButton}>
            {/* Botões de navegação */}
            </View>

            <RadioButton
                value={true}
                status={isSubscribed ? 'checked' : 'unchecked'}
                onPress={() => handleSubscription(true)}
            />
            <Text>Sim</Text>

            <RadioButton
                value={false}
                status={isSubscribed ? 'unchecked' : 'checked'}
                onPress={() => handleSubscription(false)}
            />
            <Text>Não</Text>

            <Button
                style={FinanceiroStyle.button}
                title="Confirmar"
                onPress={handleSubmit}
                disabled={!isSubscribed || !name || !email}
            />
            <Button
                style={FinanceiroStyle.button}
                title="Cancelar"
                onPress={() => {
        
                }}

            />
        </View>
    );
};

export default FinanceiroView;