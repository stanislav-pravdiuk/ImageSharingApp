import {
    TextInput,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import MapPin from '../components/icons/IconMapPin';
import Camera from '../components/icons/IconCamera';
import ButtonTrash from '../components/buttons/ButtonTrash';

    function CreatePostsScreen() {

        function onCamera() { 
            console.log('клик будет открывать камеру');
        };

        function onPublik() { 
            console.log('клик будет делать пост запрос, скорее всего)))')
        };

        return (
            <View style={styles.createPosts}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}
                    keyboardVerticalOffset={200}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: '#fff',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}> 
                            <View style={styles.createPosts__form}>
                                <View style={styles.createPosts__download}>
                                    <TouchableOpacity
                                        onPress={onCamera}
                                        style={styles.createPosts__containerImg}>
                                        <Image style={styles.createPosts__img} />
                                            <Camera/>
                                    </TouchableOpacity>
                                    <Text style={styles.createPosts__downloadText}>Завантажте фото</Text>
                                </View>
                                <View style={styles.createPosts__titlePost}>
                                    <TextInput
                                    // value={title}
                                    // onChangeText={setPassword}
                                    style={styles.createPosts__titleInput}
                                    placeholder='Назва...'
                                    placeholderTextColor='#BDBDBD'
                                    />
                                </View>
                                <View style={styles.createPosts__naviPost}>
                                    <MapPin />
                                    <TextInput
                                    // value={title}
                                    // onChangeText={setPassword}
                                    style={styles.createPosts__naviInput}
                                    placeholder='Місцевість'
                                    placeholderTextColor='#BDBDBD'
                                    />
                                </View>
                                <TouchableOpacity
                                    onPress={onPublik}
                                    style={styles.createPosts__btnPublic}>
                                    <Text
                                        // onPress={onLogin}
                                        style={styles.createPosts__btnText}>Опублікувати</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.createPosts__tabBar}>
                                <ButtonTrash/>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </View>
        );
    };

    const styles = StyleSheet.create({
        createPosts: {
            height: '100%',
            width: '100%',
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        },
        createPosts__container: {
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
        createPosts__titleContainer: {
            flex: 1,
            alignItems: 'center',
            marginRight: 30,
        },
        createPosts__title: {
            fontWeight: '500',
            fontSize: 17,
            lineHeight: 22,
            color: '#212121',
        },
        createPosts__imageContainer: {
            marginLeft: 16,
        },
        createPosts__btn: {
            width: 24,
            height: 24,
        },
        createPosts__form: {
            top: -105,
            alignItems: 'center',
        },
        createPosts__download: {
            height: 267,
        },
        createPosts__containerImg: {
            height: 240,
            borderRadius: 8,
            backgroundColor: '#E8E8E8',
            justifyContent: 'center',
            alignItems: 'center',
        },
        createPosts__img: {
            width: 343,
        },
        createPosts__downloadText: {
            marginTop: 8,
            fontSize: 16,
            color: '#BDBDBD',
        },
        createPosts__titlePost: {
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 0.5,
            marginTop: 32,
        },
        createPosts__titleInput: {
            width: 343,
            height: 50,
            fontSize: 16,
        },
            createPosts__naviPost: {
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 0.5,
            marginTop: 16,
            alignItems: 'center',
                flexDirection: 'row',
            width: 343,
        },
        createPosts__naviInput: {
            height: 50,
            fontSize: 16,
            paddingLeft: 6,
        },
        createPosts__btnPublic: {
            height: 51,
            backgroundColor: '#F6F6F6',
            borderRadius: 100,
            marginTop: 32,
            width: 343,
            paddingTop: 16,
            paddingBottom: 16,
        },
        createPosts__btnText: {
            textAlign: 'center',
            fontSize: 16,
            color: '#BDBDBD',
        },
        createPosts__tabBar: {
            width: '100%',
            alignItems: 'center',
            paddingBottom: 34,
            position: 'absolute',
            bottom: 0,
        },
    });

    export default CreatePostsScreen;