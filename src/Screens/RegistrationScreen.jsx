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
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux';
import { authSignUpUser } from '../redux/auth/authOperations';
import Background from '../components/background/Background';
import ButtonAddAvatar from '../components/buttons/ButtonAddAvatar';

const initialState = {
    email: "",
    password: "",
    nickname: "",
};

function RegistrationScreen() {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [state, setstate] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);

    function onRegistration() {

        // console.log(state)
        dispatch(authSignUpUser(state));
        setstate(initialState);


        // dispatch(registerUser({ email, password }))
        //     .then(() => {
        //         navigation.navigate("Home");
        //         setEmail('');
        //         setLogin('');
        //         setPassword('');
        //         setShowPassword('');
        //     })
        //     .catch((error) => {
        //         alert('Registration failed:', error);
        //     });
    };

    function onView() {
        setShowPassword(!showPassword);
        console.log(`этот клик прячет или показывает пароль`)
    };

    function onRedirectToLogin() {
        navigation.navigate("LoginScreen")
    };
    
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Background />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
                keyboardVerticalOffset={-240}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.reg}>
                        <Image
                            style={styles.reg__avatar}
                        />
                        <View style={styles.reg__add}>
                            <ButtonAddAvatar />
                        </View>
                        <Text style={styles.reg__title}>Реєстрація</Text>
                        <TextInput
                            value={state.nickname}
                            onChangeText={(value) =>
                                setstate((prevState) => ({ ...prevState, nickname: value }))
                            }
                            style={styles.reg__inputLog}
                            placeholder='Логін'
                            placeholderTextColor='#BDBDBD'
                        />
                        <TextInput
                            value={state.email}
                            onChangeText={(value) =>
                                setstate((prevState) => ({ ...prevState, email: value }))
                            }
                            style={styles.reg__inputMail}
                            placeholder='Адреса електронної пошти'
                            placeholderTextColor='#BDBDBD'
                        />
                        <TextInput
                            value={state.password}
                            onChangeText={(value) =>
                                setstate((prevState) => ({ ...prevState, password: value }))
                            }
                            secureTextEntry={!showPassword}
                            style={styles.reg__inputPass}
                            placeholder='Пароль'
                            placeholderTextColor='#BDBDBD'
                        />
                        <TouchableOpacity style={styles.reg__viewLink}>
                            <Text
                                onPress={onView}
                                style={styles.reg__viewLinkText}
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
                        <TouchableOpacity
                            onPress={onRedirectToLogin}
                            style={styles.reg__loginlink}>
                            <Text style={styles.reg__linkText}
                            >Вже є акаунт? Увійти
                            </Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View>
    );
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