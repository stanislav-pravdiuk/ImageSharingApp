import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Background from '../components/background/Background';
import userBig from '../images/userBig.jpg'
import ButtonLogOut from '../components/buttons/ButtonLogOut';
import { doc, updateDoc, addDoc, collection, getDocs, increment, query, where } from "firebase/firestore";
import { db } from '../firebase/config';
import ButtonDelAvatar from '../components/buttons/ButtonDelAvatar';
import IconChatFill from '../components/icons/IconChatFill';
import IconChat from '../components/icons/IconChat';
import IconLike from '../components/icons/IconLike';
import IconMapPin from '../components/icons/IconMapPin';

function ProfileScreen() {

    const [posts, setPosts] = useState([]);
    const { nickname, userId, avatar } = useSelector((state) => state.auth);

    const navigation = useNavigation();

    useEffect(() => {
const getAllPost = async () => {
    try {
        const q = query(collection(db, 'posts'), where('userId', '==', userId));
        const snapshot = await getDocs(q);
        const postsData = snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
        setPosts(postsData);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

        getAllPost();
    }, []);

    function onComment(id, url) { 
        navigation.navigate('CommentsScreen', { postId: id, uri: url })
    };

    const onLike = async (postId) => {
        const postRef = doc(db, 'posts', postId);
        await updateDoc(postRef, {
            likesCount: increment(1),
        });
        console.log("документ создан");
    };

    function onMap(location) { 
        if (!location) {
            alert('not coords')
            return
        }
        navigation.navigate('MapScreen',{latitude: location.latitude, longitude: location.longitude})
    };

    return (
        <View style={{alignItems: "center",}}>
            <Background/>
            <View style={styles.profile}>
                <Image
                    source={{ uri: avatar }}
                    // style={{width:50, height:50}}
                    style={styles.profile__avatar}
                />
                <View style={styles.profile__btnDel}>
                    <ButtonDelAvatar />
                </View>
                <View style={styles.profile__btnLogOut}>
                    <ButtonLogOut />
                </View>
                    <Text style={styles.profile__title}>{nickname}</Text>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.profile__postsContainer}>
                {posts.map((post) => (
                    <View
                        key={post.id}
                        style={styles.profile__postBox}
                    >
                    <View style={styles.profile__image}>
                            <Image source={{ uri: post.data.downloadURL }}
                            style={{width: '100%', height: 450, resizeMode: 'contain', borderRadius: 8}}
                            />
                    </View>
                    <Text style={styles.profile__text}>{post.data.picTitle}</Text>
                        <View style={styles.profile__stat}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity
                                onPress={() => onComment(post.id, post.data.downloadURL)}>
                                    {post.data.commentsCount !== 0
                                        ? <IconChatFill />
                                        : <IconChat/>}
                        </TouchableOpacity>                            
                        <Text style={styles.profile__Qty}>{post.data.commentsCount}</Text>
                        <TouchableOpacity onPress={() => onLike(post.id)}>
                            <IconLike/>
                        </TouchableOpacity>
                                <Text style={styles.profile__Qty}>{post.data.likesCount}</Text>
                                </View>
                        <TouchableOpacity
                            onPress={()=>onMap(post.data.location)}
                            style={styles.profile__navi}>
                            <IconMapPin/>
                            <Text style={styles.profile__textNavi}>{post.data.locationTitle}</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    ))}
            </ScrollView>
        </View>   
    )
};

const styles = StyleSheet.create({
    profile: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: "#FFFFFF",
        top: 147,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    profile__avatar: {
        position: 'absolute',
        width: 120,
        height: 120,
        top: -60,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },
    profile__btnDel: {
        top: 21,
        left: 60,
    },
    profile__title: {
        fontFamily: 'RobotoMedium',
        fontSize: 30,
        height: 35,
        marginTop: 32,
        textAlign: 'center',
    },
    profile__btnLogOut: {
        bottom: 3,
        left: 184,
        width: 24,
        height: 24,
    },
    profile__postsContainer: {
        position: 'absolute',
        top: 286,
        height: 579,
        marginLeft: 10
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
        // marginRight: 24,
        justifyContent:'space-between'
    },
    profile__Qty: {
        fontSize: 16,
        color: '#212121',
        marginRight: 24,
        marginLeft: 6,
    },
    profile__navi: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginLeft: 117,
        
    },
    profile__textNavi: {
        textDecorationLine: 'underline',
        fontSize: 16,
        color: '#212121',
        marginLeft: 6,
    },
});

export default ProfileScreen;