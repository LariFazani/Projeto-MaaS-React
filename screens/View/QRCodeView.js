import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import QRCodeStyle from './Styles/QRCodeStyle';

const QRCodeView = () => {
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => (prevCountdown > 0 ? prevCountdown - 1 : 60));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={QRCodeStyle.container}>
      <Text style={QRCodeStyle.title}>Acesse o transporte através do QR Code abaixo:</Text>

      {/* Exibindo o contador */}
      <Text style={QRCodeStyle.countdown}>{countdown.toString().padStart(2, '0')}</Text>

      {/* Exibindo o QR Code */}
      <Image 
        source={require('../../assets/images/qr-code-plus.jpg')} 
        style={QRCodeStyle.qrCode} 
      />

      {/* Botões de navegação */}
      <View style={QRCodeStyle.navigationButton}>
        <TouchableOpacity style={QRCodeStyle.button}>
          <Text style={QRCodeStyle.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QRCodeView;
