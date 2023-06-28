import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ButtonBack from '../components/buttons/ButtonBack';
import ButtonLogOut from "../components/buttons/ButtonLogOut";
import IconAddPost from "../components/icons/IconAddPost";
import IconUser from "../components/icons/IconUser";
import IconGrid from '../components/icons/IconGrid';


const Tabs = createBottomTabNavigator();

function Home() {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'PostsScreen') {
                        return <IconGrid/>
                    } else if (route.name === 'CreatePostsScreen') {
                        return <IconAddPost/>
                    } else if (route.name === 'ProfileScreen') {
                        return <IconUser/>
                    }

                    // return <Ionicons name={iconName} size={24} color={'#212121CC'} />;
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