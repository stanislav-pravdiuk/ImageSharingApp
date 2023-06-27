import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import grid from '../../images/grid.jpg';
import btnUser from '../../images/btnUser.jpg';

function TabBar() {

    function onPostsScreen() { 
        console.log('Клік по іконці веде на екран PostsScreen')
    };

    function onCreatePostsScreen() { 
        console.log('Клік по іконці веде на екран CreatePostsScreen')
    };

    function onProfileScreen() { 
        console.log('Клік по іконці веде на екран ProfileScreen')
    };

    return (
        <View style={styles.posts__tabBar}>
            <TouchableOpacity
                onPress={onPostsScreen}
                style={styles.posts__btnGrid}>
                <Image
                    source={grid}
                    style={styles.posts__btnGridImg} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onCreatePostsScreen}
                style={styles.posts__btnNew}>
                <Text style={styles.posts__btnNewText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onProfileScreen}
                style={styles.posts__btnUser}>
                <Image
                    source={btnUser}
                    style={styles.posts__btnUserImg} />
            </TouchableOpacity>
            </View>
    );
};

const styles = StyleSheet.create({
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
export default TabBar;