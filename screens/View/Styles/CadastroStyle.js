import { StyleSheet } from 'react-native';

const CadastroStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7', 
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4A148C', 
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10, 
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, 
  },
  button: {
    backgroundColor: '#4A148C', 
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25, 
    marginBottom: 20,
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
    textAlign: 'center',
  },
});

export default CadastroStyle;
