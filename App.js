import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import MainNavigator from './src/Navigator/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator/>

    </NavigationContainer>
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
