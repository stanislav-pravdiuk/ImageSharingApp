import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import LoginScrin from './src/Screens/LoginScreen';

export default function App() {

  const [fontsLoaded] = useFonts({
    'RobotoMedium': require('./assets/fonts/Roboto-Medium.ttf'),
    'RobotoRegular': require('./assets/fonts/Roboto-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <RegistrationScreen /> */}
      <LoginScrin />
        
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
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});
