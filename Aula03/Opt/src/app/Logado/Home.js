import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Link} from 'expo-router'
export default function Home() {
  return (
    <View style={styles.container}>
     
      <Link href="/"> Voltar </Link>
      <Link href="/Logado/Profile"> Profile </Link>
       <Link href="/Logado/Produto"> Produto </Link>
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
});
