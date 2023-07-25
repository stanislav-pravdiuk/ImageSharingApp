import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RegistrationScreen from '../Screens/RegistrationScreen';
import LoginScreen from '../Screens/LoginScreen';
import PostsScreen from '../Screens/PostsScreen'
import CreatePostsScreen from '../Screens/CreatePostsScreen';
import CommentsScreen from '../Screens/CommentsScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import Home from '../Screens/Home.jsx'
import MapScreen from '../Screens/MapScreen';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authStateChangeUser } from "../redux/auth/authOperations";

const MainStack = createStackNavigator();

function Main() { 
    const dispatch = useDispatch();
    // const [user, setUser] = useState(null);
    const {stateChange} = useSelector((state) => state.auth);
    console.log(stateChange);
    useEffect(() => {
        dispatch(authStateChangeUser())
    }, []);

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
                >{() => <PostsScreen />}
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
                        tabBarStyle: { display: 'none' },
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

export default Main;