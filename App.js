import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import LoginScrin from './src/Screens/LoginScreen';
import PostsScreen from './src/Screens/PostsScreen.jsx'
import CreatePostsScreen from './src/Screens/CreatePostsScreen';
import CommentsScreen from './src/Screens/CommentsScreen';
import ProfileScreen from './src/Screens/ProfileScreen';

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
      {/* <LoginScrin /> */}
      <PostsScreen /> 
      {/* <CreatePostsScreen /> */}
      {/* <CommentsScreen /> */}
      {/* <ProfileScreen /> */}
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
