import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import user from '../images/user.jpg';
import forest from '../images/forest.png';
import sunset from '../images/sunset.jpg';
import house from '../images/house.jpg';
import { useNavigation, useRoute } from '@react-navigation/native';
import IconChat from '../components/icons/IconChat';
import IconMapPin from '../components/icons/IconMapPin';

function PostsScreen() {

    const navigation = useNavigation();

    function onComment() { 
        navigation.navigate('CommentsScreen')
    };

        function onLike() { 
        console.log('добавит лайк')
    };

    function onMap() { 
        navigation.navigate('MapScreen',{latitude: 50.110132, longitude: 30.626496})
    };

    return (
        <View style={styles.posts}>
            <View style={styles.posts__user}>
                <View style={styles.posts__userAvatarContainer}>
                    <Image
                        source={user}
                        style={styles.posts__userAvatarImg}
                    />
                </View>
                <View style={styles.posts__UserData}>
                    <Text style={styles.posts__UserName}>Natali Romanova</Text>
                    <Text style={styles.posts__UserEmail}>email@example.com</Text>
                </View>
            </View>    
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.profile__postsContainer}>
                <View style={styles.profile__postBox}>
                    <View style={styles.profile__image}>
                        <Image source={forest}/>
                    </View>
                    <Text style={styles.profile__text}>Ліс</Text>
                    <View style={styles.profile__stat}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                            onPress={onComment}>
                            <IconChat/>
                        </TouchableOpacity>                            
                        <Text style={styles.profile__Qty}>8</Text></View>
                        <TouchableOpacity
                            onPress={onMap}
                            style={styles.profile__navi}>
                            <IconMapPin/>
                            <Text style={styles.profile__textNavi}>Ukraine</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.profile__postBox}>
                    <View style={styles.profile__image}>
                        <Image source={sunset}/>
                    </View>
                    <Text style={styles.profile__text}>Захід на чорному морі</Text>
                    <View style={styles.profile__stat}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                            onPress={onComment}>
                            <IconChat/>
                        </TouchableOpacity>                            
                        <Text style={styles.profile__Qty}>3</Text></View>
                        <TouchableOpacity
                            onPress={onMap}
                            style={styles.profile__navi}>
                            <IconMapPin/>
                            <Text style={styles.profile__textNavi}>Ukraine</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.profile__postBox}>
                    <View style={styles.profile__image}>
                        <Image source={house}/>
                    </View>
                    <Text style={styles.profile__text}>Старий будиночок у Венеції</Text>
                    <View style={styles.profile__stat}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                            onPress={onComment}>
                            <IconChat/>
                        </TouchableOpacity>                            
                        <Text style={styles.profile__Qty}>50</Text></View>
                        <TouchableOpacity
                            onPress={onMap}
                            style={styles.profile__navi}>
                            <IconMapPin/>
                            <Text style={styles.profile__textNavi}>Italy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    posts: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    posts__user: {
        marginTop: 32,
        width: 343,
        alignItems: 'center',
        flexDirection: 'row',
    },
    posts__userAvatarContainer: {
        borderRadius: 16,
        
    },
    posts__userAvatarImg: {
        width: 60,
        height: 60,
    },
    posts__UserData: {
        marginLeft: 8,
        width: 171,
    },
    posts__UserName: {
        fontWeight: 700,
        fontSize: 13,
        color: '#212121'
    },
    posts__UserEmail: {
        fontSize: 11,
        color: '#212121CC',
    },
    profile__postsContainer: {
        marginTop: 32,
        height: 579,
    },
    profile__postBox: {
        width: 343,
        marginBottom: 32,        
    },
    profile__image: {
        borderRadius: 8,
    },
    profile__text: {
        fontWeight: 500,
        fontSize: 16,
    },
    profile__stat: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        justifyContent:'space-between'
    },
    profile__Qty: {
        fontSize: 16,
        color: '#212121',
        marginLeft: 6,
        // borderWidth:1
    },
    profile__navi: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth:1
    },
    profile__textNavi: {
        textDecorationLine: 'underline',
        fontSize: 16,
        color: '#212121',
        marginLeft: 6,
    },
});

export default PostsScreen;
