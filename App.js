import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen';
import PostsScreen from './src/Screens/PostsScreen.jsx'
import CreatePostsScreen from './src/Screens/CreatePostsScreen';
import CommentsScreen from './src/Screens/CommentsScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import Home from './src/Screens/Home.jsx'
import MapScreen from './src/Screens/MapScreen';

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
          name="LoginScreen"
          options={{
            headerShown: false,
          }}
        >{() => <LoginScreen />}
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
            // headerLeft: null,
            title: "Коментарі",
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontWeight: '500',
                fontSize: 17,
                color: '#212121',
            },
            headerRightContainerStyle: {
                marginRight: 10,
            },
            headerStyle: {
                borderBottomColor: '#E5E5E5',
                borderBottomWidth: 0.5,
            },
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

        <MainStack.Screen
          name="MapScreen"
          options={{
            title: "Розташування",
            headerTitleAlign: 'center',
            tabBarStyle: { display: 'none'},
            headerTitleStyle: {
              fontWeight: '500',
              fontSize: 17,
              color: '#212121',
            },
            headerLeftContainerStyle: {
              marginLeft: 10,
            },
            headerStyle: {
              borderBottomColor: '#E5E5E5',
              borderBottomWidth: 0.5,
            },
          }}
        >{() => <MapScreen />}
        </MainStack.Screen>

      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;