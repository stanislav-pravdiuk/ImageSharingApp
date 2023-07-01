import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from 'expo-font';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import PostsScreen from './Screens/PostsScreen.jsx'
import CreatePostsScreen from './Screens/CreatePostsScreen';
import CommentsScreen from './Screens/CommentsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import Home from './Screens/Home.jsx'
import MapScreen from './Screens/MapScreen';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { persistor } from './redux/store';

const MainStack = createStackNavigator();

function App() {

  const [fontsLoaded] = useFonts({
    'RobotoMedium': require('../assets/fonts/Roboto-Medium.ttf'),
    'RobotoRegular': require('../assets/fonts/Roboto-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
<Provider store={store}>
  <PersistGate persistor={persistor}>
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
</PersistGate>
</Provider>      
  );
};

export default App;