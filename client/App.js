import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ErrMsg, Title } from './components';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
