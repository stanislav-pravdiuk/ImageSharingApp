import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import user from '../images/user.jpg';
import forest from '../images/forest.png';
import sunset from '../images/sunset.jpg';
import house from '../images/house.jpg';
import IconChat from '../components/icons/IconChat';
import IconMapPin from '../components/icons/IconMapPin';

function PostsScreen() {

    const [posts, setPosts] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const getAllPost = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'posts'));
                const postsData = snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
                setPosts(postsData);
            } catch (error) {
                console.log(error);
                throw error;
            }
        };

        getAllPost();
    }, []);

    console.log("proverka poluch", posts);

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
                {posts.map((post) => (
                    <View key={post.id} style={styles.profile__postBox}>
                        <View style={styles.profile__image}>
                            <Image source={{ uri: post.data.downloadURL }}
                            style={{width: '100%', height: 400}}/>
                        </View>
                        <Text style={styles.profile__text}>{post.data.picTitle}</Text>
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
                                <Text style={styles.profile__textNavi}>{post.data.locationTitle}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
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
