import {
    TextInput,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import left from '../images/arrow-left.jpg';
import avatar from '../images/avatar.jpg';
import user from '../images/user.jpg'


function CommentsScreen() {

    function onBack() {
        console.log('клик будет возвращать назад');
    };

    return (
        <View style={styles.commentsScreen}>
            <View style={styles.commentsScreen__container}>
                <TouchableOpacity
                    onPress={onBack}
                    style={styles.commentsScreen__imageContainer}
                >
                    <Image
                        source={left}
                        style={styles.commentsScreen__btn}
                    />
                </TouchableOpacity>
                <View style={styles.commentsScreen__titleContainer}>
                    <Text style={styles.commentsScreen__title}>Коментарі</Text>
                </View>
            </View>
            <View style={styles.commentsScreen__form}>
                <View style={styles.commentsScreen__comments}>
                    <View
                        style={styles.commentsScreen__containerImg}>
                        <Image style={styles.commentsScreen__img} />
                    </View>
                </View>
            </View>
            <View style={styles.commentsScreen__commentsBox}>
                <View style={styles.commentsScreen__comment}>
                    <View style={styles.commentsScreen__avatarBox}>
                        <Image
                            style={styles.commentsScreen__avatar}
                            source={avatar} />
                    </View>
                    
                    <View style={styles.commentsScreen__textBox}>
                        <Text style={styles.commentsScreen__commentText}>Really love your most recent photo.
                            I’ve been trying to capture the same thing
                            for a few months and would love some tips!
                        </Text>
                        <Text style={styles.commentsScreen__commenDate}
                        >09 червня, 2020 | 08:40
                        </Text>
                    </View>
                </View>
                <View style={styles.commentsScreen__commentEven}>
                    <View style={styles.commentsScreen__avatarBox}>
                        <Image
                        style={styles.commentsScreen__avatar}
                        source={user} />
                    </View>
                    <View style={styles.commentsScreen__textBoxEven}>
                        <Text style={styles.commentsScreen__commentText}>A fast 50mm like f1.8 would help
                            with the bokeh. I’ve been using primes as they tend to get a bit sharper images.
                        </Text>
                        <Text style={styles.commentsScreen__commenDateEven}
                        >09 червня, 2020 | 09:14
                        </Text>
                    </View>
                </View>
                <View style={styles.commentsScreen__comment}>
                    <View style={styles.commentsScreen__avatarBox}>
                        <Image
                        style={styles.commentsScreen__avatar}
                        source={avatar} />
                    </View>
                    <View style={styles.commentsScreen__textBox}>
                        <Text style={styles.commentsScreen__commentText}>Thank you! That was very helpful!
                        </Text>
                        <Text style={styles.commentsScreen__commenDate}
                        >09 червня, 2020 | 09:20
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.commentsScreen__tabBar}>
                <TextInput
                    // value={login}
                    // onChangeText={setLogin}
                    style={styles.commentsScreen__input}
                    placeholder='Коментувати...'
                    placeholderTextColor='#BDBDBD'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    commentsScreen: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    commentsScreen__container: {
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
    commentsScreen__titleContainer: {
        flex: 1,
        alignItems: 'center',
        marginRight: 30,
    },
    commentsScreen__title: {
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 22,
        color: '#212121',
    },
    commentsScreen__imageContainer: {
        marginLeft: 16,
    },
    commentsScreen__btn: {
        width: 24,
        height: 24,
    },
    commentsScreen__form: {
        marginTop: 32,
        alignItems: 'center',
        // borderWidth:1
    },
    commentsScreen__comments: {
        height: 240,
        // borderWidth:1
    },
    commentsScreen__containerImg: {
        height: 240,
        borderRadius: 8,
        backgroundColor: '#E8E8E8',
    },
    commentsScreen__img: {
        width: 343,
    },
    commentsScreen__commentsBox: {
        // borderWidth: 1,
        marginTop: 32,
        width: 343,
        maxHeighteight: 323,
        
    },
        commentsScreen__comment: {
        // borderWidth: 1,
        flexDirection: 'row',
        marginBottom: 24,
    },
    commentsScreen__commentEven: {
        // borderWidth: 1,
        marginBottom: 24,
        flexDirection: 'row-reverse',
    },
    commentsScreen__avatarBox: {
        borderRadius: 100,
        height: 28,
        width: 28,
        overflow: 'hidden',
    },
    commentsScreen__avatar: {
        width: 28,
        height: 28,
    },
    commentsScreen__textBox: {
        width: 299,
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 16,
        paddingLeft: 16,
        marginLeft: 16,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        borderTopRightRadius: 6,
        // borderWidth: 1,
        backgroundColor: '#00000008',
    },
        commentsScreen__textBoxEven: {
        width: 299,
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 16,
        paddingLeft: 16,
        marginRight: 16,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        borderTopLeftRadius: 6,
        // borderWidth: 1,
        backgroundColor: '#00000008',
    },
    commentsScreen__commentText: {
        fontSize: 13,
        color: '#212121',
        // borderWidth:1
    },
    commentsScreen__commenDate: {
        fontSize: 10,
        color: '#BDBDBD',
        marginTop: 8,
        marginLeft: 'auto',
        // borderWidth:1
    },
        commentsScreen__commenDateEven: {
        fontSize: 10,
        color: '#BDBDBD',
        marginTop: 8,
        marginRight: 'auto',
        // borderWidth:1
    },
    commentsScreen__tabBar: {
        // borderColor: '#E5E5E5',
        // borderTopWidth: 0.5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 9,
        paddingBottom: 22,
        // borderWidth: 1,
        position: 'absolute',
        bottom: 0,
    },
    commentsScreen__input: {
        backgroundColor: '#E8E8E8',
        fontSize: 16,
        width: 343,
        height: 50,
        borderRadius: 25,
        padding: 16,
    },
});

export default CommentsScreen