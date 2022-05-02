import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { AuthProvider } from './App/context/AuthContext';
import Rod from './App/routes/WelcomeStack';
export default function App() {

  return(
    <AuthProvider>
<Rod></Rod>
</AuthProvider>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
