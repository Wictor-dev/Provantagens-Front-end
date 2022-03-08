import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/pages/Home';
import { theme } from './src/global/styles/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" backgroundColor={theme.colors.primaryDarker} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.background
  }
})

