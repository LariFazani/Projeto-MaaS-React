
import { StyleSheet } from 'react-native';

const QRCodeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#551A8B',
  },
  qrCode: {
    width: 200,
    height: 200,
  },
  // Estilos para os botões de navegação 
  navigationButton: {
  },
});

export default QRCodeStyle;