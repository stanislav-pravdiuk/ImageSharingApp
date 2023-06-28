import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ButtonLogOut from "../components/buttons/ButtonLogOut";
import ButtonBack from "../components/buttons/ButtonBack";

const Tabs = createBottomTabNavigator();

function Home() {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'PostsScreen') {
                        iconName = 'grid-outline';
                    } else if (route.name === 'CreatePostsScreen') {
                        iconName = 'add';
                    } else if (route.name === 'ProfileScreen') {
                        iconName = 'person-outline';
                    }

                    return <Ionicons name={iconName} size={24} color={'#212121CC'} />;
                },
            })}
                tabBarOptions={{
                    showLabel: false,
                    tabBarStyle: [{
                        display: 'flex',
                    },null,],
            }}
        >
            <Tabs.Screen
                name="PostsScreen"
                component={PostsScreen} 
                options={{
                    headerRight: () => <ButtonLogOut />,
                    headerLeft: null,
                    title: "Публікації",
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
                }} />
            <Tabs.Screen
                name="CreatePostsScreen"
                component={CreatePostsScreen}
                options={{
                    headerLeft: () => <ButtonBack />,
                    title: "Створити публікацію",
                    headerTitleAlign: 'center',
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
                }}/>
            <Tabs.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    headerShown: false,
            }}
            />
        </Tabs.Navigator>
    );
};

export default Home;