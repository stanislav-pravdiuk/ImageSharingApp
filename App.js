import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import LoginScrin from './src/Screens/LoginScreen';
import PostsScreen from './src/Screens/PostsScreen.jsx'
import CreatePostsScreen from './src/Screens/CreatePostsScreen';
import CommentsScreen from './src/Screens/CommentsScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import Home from './src/Screens/Home.jsx'

const MainStack = createStackNavigator();

function App() {

  const [fontsLoaded] = useFonts({
    'RobotoMedium': require('./assets/fonts/Roboto-Medium.ttf'),
    'RobotoRegular': require('./assets/fonts/Roboto-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen
          name="RegistrationScreen"
          options={{
            headerShown: false,
          }}
        >{() => <RegistrationScreen />}
        </MainStack.Screen>

        <MainStack.Screen
          name="LoginScrin"
          options={{
            headerShown: false,
          }}
        >{() => <LoginScrin />}
        </MainStack.Screen>

        <MainStack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
        >{() => <Home />}
        </MainStack.Screen>

        <MainStack.Screen
          name="PostsScreen"
          options={{
            headerShown: false,
          }}
          >{() => <PostsScreen/>}
        </MainStack.Screen>

        <MainStack.Screen
          name="CreatePostsScreen"
          options={{
            headerShown: false,
          }}
        >{() => <CreatePostsScreen />}
        </MainStack.Screen>

        <MainStack.Screen
          name="CommentsScreen"
          options={{
            headerShown: false,
          }}
        >{() => <CommentsScreen />}
        </MainStack.Screen>

        <MainStack.Screen
          name="ProfileScreen"
          options={{
            headerShown: false,
          }}
        >{() => <ProfileScreen />}
        </MainStack.Screen>

      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;