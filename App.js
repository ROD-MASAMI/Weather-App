import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import HomeScreen from './App/screens/HomeScreen';
import Rod from './App/routes/WelcomeStack';
export default function App() {
  return <HomeScreen></HomeScreen>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
