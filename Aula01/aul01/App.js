import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>Valendo turma show</Text>
      <TextInput  style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, margin: 10 }} placeholder="Digite o Nome ..."  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c44a4a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
