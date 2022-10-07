import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { SearchProvider } from './App/Context';
import TabNavigation from './App/routes/TabNavigation';
export default function App() {

  return(
    <SearchProvider>
<TabNavigation />
</SearchProvider>

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
