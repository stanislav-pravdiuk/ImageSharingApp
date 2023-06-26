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
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import addImg from '../images/add.jpg';
import Background from '../components/background/Background';
import { useState } from 'react';


function RegistrationScreen() {

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [avatar, setAvatar] = useState(null);

    function onRegistration() {
        console.log(`this is state:
        Login => ${login},
        Email => ${email},
        Password => ${password}`)
    };

    function onView() {
        setShowPassword(!showPassword);
        console.log(`этот клик прячет или показывает пароль`)
    };

    function onRedirectToLogin() {
        console.log(`этот клик должен перенаправить на скрин логина`)
    };

    function onAddAvatar() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        })
        .then((image) => {
            console.log('Выбрано изображение: ', image.path);
            setAvatar(image.path);
        })
        .catch((error) => {
        console.log('Ошибка при выборе изображения: ', error);
        });
    };
    
    return (
    <>
        <Background/>    
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            keyboardVerticalOffset={-240}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.reg}>
                        <Image
                            source={avatar
                                ? { uri: avatar }
                                : null}
                            style={styles.reg__avatar} />
                        <TouchableOpacity
                            onPress={onAddAvatar}
                        >
                            <Image source={addImg} style={styles.reg__add} />
                        </TouchableOpacity>
                    
                    <Text style={styles.reg__title}>Реєстрація</Text>
                    <TextInput
                        value={login}
                        onChangeText={setLogin}
                        style={styles.reg__inputLog}
                        placeholder='Логін'
                        placeholderTextColor='#BDBDBD'
                    />
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={styles.reg__inputMail}
                        placeholder='Адреса електронної пошти'
                        placeholderTextColor='#BDBDBD'
                    />
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                        style={styles.reg__inputPass}
                        placeholder='Пароль'
                        placeholderTextColor='#BDBDBD'
                    />
                    <TouchableOpacity style={styles.reg__viewLink}>
                            <Text
                                onPress={onView}
                                style={styles.log__viewLinkText}
                            >{showPassword
                                    ? 'Приховати'
                                    : 'Показати'}
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reg__btn}>
                            <Text
                                style={styles.reg__btnText}
                                onPress={onRegistration}
                            >Реєстрація
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reg__loginlink}>
                            <Text
                                onPress={onRedirectToLogin}
                                style={styles.reg__linkText}
                            >Вже є акаунт? Увійти
                            </Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    </>   
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    reg: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: "#FFFFFF",
        marginTop: 263,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    reg__avatar: {
        position: 'absolute',
        width: 120,
        height: 120,
        top: -60,
        backgroundColor: "#F6F6F6",
        borderRadius: 25,
    },
    reg__add: {
        width: 25,
        height: 25,
        top: 21,
        left: 60,
        borderRadius: 100,
    },
    reg__title: {
        fontFamily: 'RobotoMedium',
        fontSize: 30,
        width: 160,
        height: 35,
        marginTop: 92,
        marginBottom: 33,
        textAlign: 'center',
    },
    reg__inputLog: {
        width: 343,
        height: 50,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        marginBottom: 16,
        paddingLeft: 16,
        paddingTop: 16,
        paddingBottom: 16,
    },
    reg__inputMail: {
        width: 343,
        height: 50,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        marginBottom: 16,
        paddingLeft: 16,
        paddingTop: 16,
        paddingBottom: 16,
    },
    reg__inputPass: {
        width: 343,
        height: 50,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        marginBottom: 16,
        paddingLeft: 16,
        paddingTop: 16,
        paddingBottom: 16,
    },
    reg__viewLink: {
        marginTop: -50,
        marginLeft: 250,
    },
    reg__viewLinkText: {
        fontSize: 16,
        textAlign: 'right',
        color: '#1B4371',
    },
    reg__btn: {
        height: 51,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        marginTop: 43,
        width: 343,
        paddingTop: 16,
        paddingBottom: 16,
    },
    reg__btnText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#FFFFFF',
    },
    reg__loginlink: {
        marginTop: 16,

    },
    reg__linkText: {
        fontSize: 16,
        color: '#1B4371',
    }
});

export default RegistrationScreen;