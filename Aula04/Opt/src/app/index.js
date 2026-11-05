import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  TextInput, TouchableOpacity } from 'react-native';
import { Link, router } from 'expo-router';

export default function Index() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sistema IFCE</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={() => 
          //backend ver usuario e senha, se tiver sucesso, vai para a tela logado, se nao mostro Alert.
          router.push('/Logado/Home')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#5427F5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
