import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './components/head';
import Footer from './components/footer';
import Image from './components/img';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Image/>
      <Text style={styles.textOne} > Hello there </Text>
      <Footer/>
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
  textOne: {
    fontSize: 25,
    fontFamily: 'Verdana',
    margin: 1,
    borderWidth: 10,
    borderColor: 'olive'
  }
});
