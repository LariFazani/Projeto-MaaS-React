import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import QRCodeStyle from './Styles/QRCodeStyle';

const QRCodeView = () => {
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        setCountdown(60);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <View style={QRCodeStyle.container}>
      <Text style={QRCodeStyle.title}>Acesse o transporte através do QR Code abaixo:</Text>
      <Text style={QRCodeStyle.countdown}>{countdown.toString().padStart(2, '0')}</Text>
      <Image source={require('assets/images/qr-code-plus.jpg')} style={QRCodeStyle.qrCode} />
      <View style={QRCodeStyle.navigationButton}>
        {/* Botões de navegação */}
      </View>
    </View>
  );
};

export default QRCodeView;