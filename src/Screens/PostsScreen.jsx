import { TextInput, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import logOut from '../images/logOut.jpg';
import user from '../images/user.jpg';
import grid from '../images/grid.jpg';
import btnUser from '../images/btnUser.jpg';

function PostScreen() {
    return (
        <View style={styles.posts}>
            <View style={styles.posts__container}>
                <View style={styles.posts__titleContainer}>
                    <Text style={styles.posts__title}>Публікації</Text>
                </View>
                <View style={styles.posts__imageContainer}>
                    <Image
                        source={logOut}
                        style={styles.posts__logOut}
                    />
                </View >
            </View>
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
            <View style={styles.posts__tabBar}>
                <TouchableOpacity style={styles.posts__btnGrid}>
                    <Image
                        source={grid}
                        style={styles.posts__btnGridImg} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.posts__btnNew}>
                    <Text style={styles.posts__btnNewText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.posts__btnUser}>
                    <Image
                        source={btnUser}
                        style={styles.posts__btnUserImg} />
                </TouchableOpacity>
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
    posts__container: {
        flexDirection: 'row',
        width: '100%',
        height: 88,
        alignItems: 'center',
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 0.5,
        justifyContent: 'space-between',
        paddingBottom: 11,
        paddingTop: 55,
    },
    posts__titleContainer: {
        flex: 1,
        alignItems: 'center',
        marginLeft: 30,
    },
    posts__title: {
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 22,
        color: '#212121',
    },
    posts__imageContainer: {
        marginRight: 16,
        width: 24,
        height: 24,
    },
    posts__logOut: {
    },
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
    posts__tabBar: {
        borderColor: '#E5E5E5',
        borderTopWidth: 0.5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 9,
        paddingBottom: 22,
        borderWidth: 1,
        position: 'absolute',
        bottom: 0,
    },
    posts__btnGrid: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    posts__btnGridImg: {
        width: 24,
        height:24,
    },
    posts__btnNew: {
        width: 70,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF6C00',
        borderRadius: 20,
        marginLeft: 31,
        marginRight: 31,
    },
    posts__btnNewText: {
        fontSize: 40,
        lineHeight: 45,
        color: '#FFFFFF',
        fontWeight: 200,
    },
    posts__btnUser: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    posts__btnUserImg: {
        width: 24,
        height:24,
    },
});

export default PostScreen;
