import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/pages/Home';
import { theme } from './src/global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/authContexts';

import { encode } from 'base-64' // Foi necessário instalar esse pacote, pois estava dando erro 'cant find variable btoa 
if (!global.btoa) {
  global.btoa = encode;
} // entoão foi setado o btoa como o encode do base-64

export default function App() {
  return (
    // <View style={styles.container}>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
        <StatusBar style="auto" backgroundColor={theme.colors.primaryDarker} />
      </NavigationContainer>
    // </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.background
  }
})

