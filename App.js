import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import LoginScrin from './src/Screens/LoginScreen';
import PostsScreen from './src/Screens/PostsScreen.jsx'
import CreatePostsScreen from './src/Screens/CreatePostsScreen';
import CommentsScreen from './src/Screens/CommentsScreen';
import ProfileScreen from './src/Screens/ProfileScreen';

const MainStack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'RobotoMedium': require('./assets/fonts/Roboto-Medium.ttf'),
    'RobotoRegular': require('./assets/fonts/Roboto-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen
          name="RegistrationScreen"
          component={() => <RegistrationScreen />} />
        <MainStack.Screen
          name="LoginScrin"
          component={() => <LoginScrin />} />
        <MainStack.Screen
          name="Home"
          component={() => <PostsScreen/>}
          options={{ title: "Публікації" }}
        />
        <MainStack.Screen
          name="CreatePostsScreen"
          component={() => <CreatePostsScreen />} />
        <MainStack.Screen
          name="CommentsScreen"
          component={() => <CommentsScreen />} />
        <MainStack.Screen
          name="ProfileScreen"
          component={() => <ProfileScreen />} />
      </MainStack.Navigator>
    </NavigationContainer>  
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
