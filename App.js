import { StyleSheet, Text, View } from 'react-native';
import Cronometro from './componentes/Cronometro';

export default function App() {
  return (
    <View style={styles.container}>
      <Cronometro></Cronometro>
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
