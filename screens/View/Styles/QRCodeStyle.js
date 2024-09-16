import { StyleSheet } from 'react-native';

const QRCodeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5', // Fundo sutilmente cinza
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Adicionando espaçamento interno
  },
  title: {
    fontSize: 24, // Aumentando o tamanho do texto
    marginBottom: 30,
    textAlign: 'center',
    color: '#4A148C', // Cor mais vibrante para o título
    fontWeight: 'bold',
  },
  countdown: {
    fontSize: 36, 
    fontWeight: 'bold',
    color: '#D32F2F', 
    marginBottom: 20,
  },
  qrCode: {
    width: 220, 
    height: 220,
    marginBottom: 30,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, 
  },
  navigationButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#4A148C', 
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3, 
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default QRCodeStyle;
