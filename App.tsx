import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/pages/Home';
import { theme } from './src/global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigation/tabs';
import Routes from './src/routes/routes';

export default function App() {
  return (
    // <View style={styles.container}>
      <NavigationContainer>
        <Routes />
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

