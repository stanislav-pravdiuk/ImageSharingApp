import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import user from '../images/user.jpg';

function PostsScreen() {
    
    return (
        <View style={styles.posts}>
            {/* <View style={styles.posts__container}>
                <View style={styles.posts__titleContainer}>
                    <Text style={styles.posts__title}>Публікації</Text>
                </View>
                <View style={styles.posts__btnLogout}>
                    <ButtonLogOut />
                </View>
                
            </View> */}
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
        </View>
    );
};

const styles = StyleSheet.create({
    posts: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    // posts__container: {
    //     flexDirection: 'row',
    //     width: '100%',
    //     height: 88,
    //     alignItems: 'center',
        // borderBottomColor: '#E5E5E5',
        // borderBottomWidth: 0.5,
    //     justifyContent: 'space-between',
    //     paddingBottom: 11,
    //     paddingTop: 55,
    // },
    // posts__titleContainer: {
    //     flex: 1,
    //     alignItems: 'center',
    //     marginLeft: 30,
    // },
    // posts__title: {
        // fontWeight: '500',
        // fontSize: 17,
        // lineHeight: 22,
        // color: '#212121',
    // },
        // posts__btnLogout: {
    //     marginRight: 16,
    //     width: 24,
    //     height: 24,
    // },
    posts__user: {
        marginTop: 32,
        width: '100%',
        paddingLeft: 16,
        alignItems: 'center',
        flexDirection: 'row'
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
});

export default PostsScreen;
