import {
    TextInput,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    ScrollView,
} from 'react-native';
import avatar from '../images/avatar.jpg';
import user from '../images/user.jpg';
import ButtonSend from '../components/buttons/ButtonSend';
import sunset from '../images/sunset.jpg';


function CommentsScreen() {

    function onBack() {
        console.log('клик будет возвращать назад');
    };

    function onPost() { 
        console.log('клик постит публикацию и какойто пост запрос наверное делает)))))')
    };

    return (
<View style={styles.commentsScreen}>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            keyboardVerticalOffset={176}
        >                
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
        style={{
            flex: 1,
            // alignItems: 'center',
            width: '100%',
            // height: 400,
            // justifyContent: 'center',
            // borderWidth:1
        }}>
            <View style={styles.commentsScreen__form}>
                <View style={styles.commentsScreen__comments}>
                    <View
                        style={styles.commentsScreen__containerImg}>
                        <Image
                            source={sunset}
                            style={styles.commentsScreen__img} />
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
        </ScrollView>            
    </TouchableWithoutFeedback>
</KeyboardAvoidingView>
    <View style={styles.commentsScreen__tabBar}>
        <TextInput
            // value={login}
            // onChangeText={setLogin}
            style={styles.commentsScreen__input}
                placeholder='Коментувати...'
            placeholderTextColor='#BDBDBD'
            />
        <TouchableOpacity
            onPress={onPost}
            style={styles.commentsScreen__btnSendContainer}
        >
            <ButtonSend/>
        </TouchableOpacity>
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
    commentsScreen__form: {
        marginTop: 32,
        alignItems: 'center',
    },
    commentsScreen__comments: {
        height: 240,
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
        marginTop: 32,
        width: '100%',
        height: '100%',
        // borderWidth:1
    },
        commentsScreen__comment: {
        flexDirection: 'row',
        marginBottom: 24,
    },
    commentsScreen__commentEven: {
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
        backgroundColor: '#00000008',
    },
    commentsScreen__commentText: {
        fontSize: 13,
        color: '#212121',
    },
    commentsScreen__commenDate: {
        fontSize: 10,
        color: '#BDBDBD',
        marginTop: 8,
        marginLeft: 'auto',
    },
        commentsScreen__commenDateEven: {
        fontSize: 10,
        color: '#BDBDBD',
        marginTop: 8,
        marginRight: 'auto',
    },
    commentsScreen__tabBar: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -16,
    },
    commentsScreen__input: {
        backgroundColor: '#E8E8E8',
        fontSize: 16,
        width: 343,
        height: 50,
        borderRadius: 25,
        padding: 16,
    },
    commentsScreen__btnSendContainer: {
        top: -42,
        left: 145,
    },
});

export default CommentsScreen