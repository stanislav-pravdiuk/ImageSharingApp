import { TextInput, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import left from '../images/arrow-left.jpg';
import cameraIcon from '../images/camera.jpg';
import mapIcon from '../images/map-pin.jpg';
import trashIcon from '../images/trash.jpg';

function CreatePostsScreen() {

    function onBack() {
        console.log('клик будет возвращать назад');
    };

    function onCamera() { 
        console.log('клик будет открывать камеру');
    };

    function onPublik() { 
        console.log('клик будет делать пост запрос, скорее всего)))')
    };

    function onDelete() { 
        console.log('клик будет отменять публикацию')
    };

    return (
        <View style={styles.createPosts}>
            <View style={styles.createPosts__container}>
                <TouchableOpacity
                    onPress={onBack}
                    style={styles.createPosts__imageContainer}
                >
                    <Image
                        source={left}
                        style={styles.createPosts__btn}
                    />
                </TouchableOpacity>
                <View style={styles.createPosts__titleContainer}>
                    <Text style={styles.createPosts__title}>Створити публікацію</Text>
                </View>
            </View>
            <View style={styles.createPosts__form}>
                <View style={styles.createPosts__download}>
                    <TouchableOpacity
                        onPress={onCamera}
                        style={styles.createPosts__containerImg}>
                        <Image style={styles.createPosts__img} />
                            <Image
                                source={cameraIcon}
                                style={styles.createPosts__imgBtn} />
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
                    <Image
                        source={mapIcon}
                        style={styles.createPosts__mapIcon}
                    />
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
                <TouchableOpacity onPress={onDelete}
                    style={styles.createPosts__btnTrash}>
                    <Image source={trashIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    createPosts: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
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
        marginTop: 32,
        alignItems: 'center',
    },
    createPosts__download: {
        height: 267,
    },
    createPosts__containerImg: {
        height: 240,
        borderRadius: 8,
        backgroundColor: '#E8E8E8',
    },
    createPosts__imgBtn: {
        borderRadius: 100,
        marginLeft: 142,
        marginTop: 90,

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
    },
    createPosts__mapIcon: {
        width: 24,
        height: 24,
    },
    createPosts__btnPublic: {
        height: 51,
        backgroundColor: '#F6F6F6',
        // backgroundColor: '#FF6C00',
        borderRadius: 100,
        marginTop: 32,
        width: 343,
        paddingTop: 16,
        paddingBottom: 16,
    },
    createPosts__btnText: {
        textAlign: 'center',
        fontSize: 16,
        // color: '#FFFFFF',
        color: '#BDBDBD',
    },
    createPosts__tabBar: {
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
    createPosts__btnTrash: {
        width: 70,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: 20,
        marginLeft: 31,
        marginRight: 31,
    },
        createPosts__btnTrashText: {

    },
});

export default CreatePostsScreen;